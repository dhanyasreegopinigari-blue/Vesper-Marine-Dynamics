import React, { useState, useEffect } from 'react';
import { 
  Activity, Radio, Shield, Battery, 
  Compass, AlertTriangle, Check, RefreshCw, 
  MapPin, Eye, Play, Pause, Terminal, Wifi
} from 'lucide-react';

interface ActiveSwarmNode {
  id: string;
  name: string;
  hull: string;
  location: string;
  coordinates: string;
  depthM: number;
  batteryPct: number;
  headingDeg: number;
  acousticLatencyMs: number;
  status: 'Surveying Nominal' | 'Executing SAS Pass' | 'Profiling Thermocline' | 'Gateway Uplink Active';
  lastPingSecAgo: number;
}

export const LiveTelemetryCenter: React.FC = () => {
  const [selectedNodeId, setSelectedNodeId] = useState('swarm-alpha');
  const [isLiveStreaming, setIsLiveStreaming] = useState(true);
  const [acknowledgedAlerts, setAcknowledgedAlerts] = useState<string[]>([]);

  // Simulated live swarms
  const [nodes, setNodes] = useState<ActiveSwarmNode[]>([
    {
      id: 'swarm-alpha',
      name: 'Swarm Alpha (Lead AUV)',
      hull: 'Vesper Apex-6000 #04',
      location: 'Dogger Bank Offshore Wind',
      coordinates: '54°43\'N 01°55\'E',
      depthM: 42.4,
      batteryPct: 86,
      headingDeg: 134,
      acousticLatencyMs: 58,
      status: 'Executing SAS Pass',
      lastPingSecAgo: 1,
    },
    {
      id: 'swarm-bravo',
      name: 'Swarm Bravo (Deep ROV)',
      hull: 'Vesper Manta-3000 #02',
      location: 'Mississippi Canyon, GoM',
      coordinates: '28°12\'N 89°45\'W',
      depthM: 2842.1,
      batteryPct: 73,
      headingDeg: 288,
      acousticLatencyMs: 3820,
      status: 'Surveying Nominal',
      lastPingSecAgo: 3,
    },
    {
      id: 'swarm-charlie',
      name: 'Swarm Charlie (Glider)',
      hull: 'Vesper Glider-X #07',
      location: 'Azores Biosphere Baseline',
      coordinates: '38°32\'N 28°37\'W',
      depthM: 1180.6,
      batteryPct: 91,
      headingDeg: 45,
      acousticLatencyMs: 1640,
      status: 'Profiling Thermocline',
      lastPingSecAgo: 2,
    },
    {
      id: 'swarm-delta',
      name: 'Swarm Delta (USV Gateway)',
      hull: 'Vesper Sentinel USV #01',
      location: 'Dogger Bank Surface Mesh',
      coordinates: '54°44\'N 01°56\'E',
      depthM: 0.0,
      batteryPct: 98,
      headingDeg: 120,
      acousticLatencyMs: 14,
      status: 'Gateway Uplink Active',
      lastPingSecAgo: 1,
    }
  ]);

  const [terminalLogs, setTerminalLogs] = useState<string[]>([
    '[08:42:19 UTC] USBL Acoustic Lock acquired with Sentinel USV gateway (SNR: 34dB)',
    '[08:42:22 UTC] Synthetic Aperture Sonar swath beam calibrated. Resolution: 1.2cm / pixel',
    '[08:42:25 UTC] Edge SLAM point-cloud alignment delta: 0.024m (Nominal)',
    '[08:42:28 UTC] 66kV Inter-array cable detected at depth-of-lowering 1.84m below seabed',
    '[08:42:31 UTC] Telemetry heartbeat packet forwarded to cloud via Starlink Maritime (42ms)'
  ]);

  // Live jitter and simulated streaming updates
  useEffect(() => {
    if (!isLiveStreaming) return;

    const interval = setInterval(() => {
      setNodes(prev => prev.map(node => ({
        ...node,
        depthM: node.depthM > 0 ? parseFloat((node.depthM + (Math.random() * 0.4 - 0.2)).toFixed(1)) : 0,
        batteryPct: Math.max(10, parseFloat((node.batteryPct - 0.01).toFixed(2))),
        headingDeg: Math.round((node.headingDeg + (Math.random() * 2 - 1) + 360) % 360),
        lastPingSecAgo: 1,
      })));

      // Add occasional log
      const now = new Date().toISOString().substring(11, 19);
      const sampleLogs = [
        `[${now} UTC] Acoustic packet mesh checksum verified: Node #${Math.floor(Math.random() * 4 + 1)}`,
        `[${now} UTC] Doppler Velocity Log 4-beam lock solid: bottom-track speed 3.42 knots`,
        `[${now} UTC] Turbidity de-scattering filter active: water clarity index 89.2%`,
        `[${now} UTC] Anode cathodic voltage gradient sampled: 1.042V (No corrosion alert)`
      ];
      const randomLog = sampleLogs[Math.floor(Math.random() * sampleLogs.length)];
      setTerminalLogs(prev => [...prev.slice(-6), randomLog]);
    }, 2500);

    return () => clearInterval(interval);
  }, [isLiveStreaming]);

  const activeNode = nodes.find(n => n.id === selectedNodeId) || nodes[0];

  const alerts = [
    { id: 'alt-1', level: 'INFO', time: '2m ago', text: 'Swarm Alpha completed 100% of Sector 4 transect. Initiating turn.' },
    { id: 'alt-2', level: 'NOTICE', time: '7m ago', text: 'Swarm Bravo detected 1.2m free-span anomaly at Flowline 04-B. High-res LiDAR triggered.' },
  ];

  return (
    <div className="bg-[#050a14] rounded-2xl border border-cyan-500/25 p-6 md:p-8 shadow-2xl relative">
      
      {/* Top Operations Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-cyan-950 border border-cyan-400 flex items-center justify-center">
            <Radio className="w-5 h-5 text-cyan-300 animate-pulse" />
          </div>
          <div>
            <div className="text-xs font-mono uppercase text-cyan-400 tracking-wider flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>Subsea Mission Control Hub</span>
            </div>
            <h2 className="text-xl font-bold text-white font-display">
              Live Swarm Operations &amp; Acoustic Telemetry
            </h2>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <button
            onClick={() => setIsLiveStreaming(!isLiveStreaming)}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono flex items-center space-x-1.5 border transition-colors ${
              isLiveStreaming 
                ? 'bg-emerald-950/60 border-emerald-500/50 text-emerald-300' 
                : 'bg-amber-950/60 border-amber-500/50 text-amber-300'
            }`}
          >
            {isLiveStreaming ? <Play className="w-3.5 h-3.5 fill-current" /> : <Pause className="w-3.5 h-3.5" />}
            <span>{isLiveStreaming ? 'LIVE TELEMETRY ACTIVE' : 'STREAM PAUSED'}</span>
          </button>
        </div>
      </div>

      {/* Main Mission Control Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
        
        {/* Left Column: Active Swarm Selectors (4 Cols) */}
        <div className="lg:col-span-4 space-y-3">
          <div className="text-xs font-mono uppercase text-slate-400 tracking-wider">
            Deployed Oceanic Nodes ({nodes.length})
          </div>

          {nodes.map((node) => {
            const isSelected = selectedNodeId === node.id;
            return (
              <div
                key={node.id}
                onClick={() => setSelectedNodeId(node.id)}
                className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                  isSelected
                    ? 'bg-cyan-950/50 border-cyan-400 shadow-lg shadow-cyan-950/50'
                    : 'bg-slate-900/40 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-white">{node.name}</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                </div>
                <div className="text-xs text-slate-400 font-mono mt-0.5">{node.hull}</div>

                <div className="flex items-center justify-between text-xs font-mono text-slate-400 mt-2 pt-2 border-t border-slate-800/80">
                  <span className="text-cyan-300 font-bold">{node.depthM > 0 ? `${node.depthM}m Depth` : 'Surface USV'}</span>
                  <span>Bat: {Math.round(node.batteryPct)}%</span>
                  <span className="text-slate-500">{node.acousticLatencyMs}ms ping</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Center/Right Column: Live Telemetry Gauges & Console (8 Cols) */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Selected Node Status Header */}
          <div className="bg-[#070e1c] p-4 rounded-xl border border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="text-xs font-mono text-cyan-400 flex items-center space-x-1.5">
                <MapPin className="w-3.5 h-3.5" />
                <span>{activeNode.location} ({activeNode.coordinates})</span>
              </div>
              <div className="text-lg font-bold text-white mt-0.5">{activeNode.name}</div>
            </div>

            <div className="px-3 py-1 rounded bg-slate-900 border border-slate-700 text-xs font-mono text-slate-300">
              Mode: <span className="text-cyan-400 font-bold">{activeNode.status}</span>
            </div>
          </div>

          {/* Real-time Gauges Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800">
              <div className="text-[10px] font-mono text-slate-400">Current Depth</div>
              <div className="text-xl font-bold text-cyan-400 font-mono mt-1">
                {activeNode.depthM} <span className="text-xs font-normal text-slate-400">m</span>
              </div>
            </div>

            <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800">
              <div className="text-[10px] font-mono text-slate-400">Battery Reserve</div>
              <div className="text-xl font-bold text-emerald-400 font-mono mt-1">
                {activeNode.batteryPct}%
              </div>
            </div>

            <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800">
              <div className="text-[10px] font-mono text-slate-400">Compass Heading</div>
              <div className="text-xl font-bold text-white font-mono mt-1">
                {activeNode.headingDeg}° <span className="text-xs font-normal text-slate-400">MAG</span>
              </div>
            </div>

            <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800">
              <div className="text-[10px] font-mono text-slate-400">Acoustic SNR / Ping</div>
              <div className="text-xl font-bold text-cyan-300 font-mono mt-1">
                {activeNode.acousticLatencyMs} <span className="text-xs font-normal text-slate-400">ms</span>
              </div>
            </div>
          </div>

          {/* Terminal Console Feed */}
          <div className="bg-[#03060c] rounded-xl border border-slate-800 p-4 font-mono text-xs">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-slate-500 text-[11px]">
              <div className="flex items-center space-x-1.5">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                <span>ENCRYPTED ACOUSTIC MESH TELEMETRY STREAM</span>
              </div>
              <span className="text-emerald-400">AES-256 GCM</span>
            </div>

            <div className="space-y-1.5 mt-3 text-slate-300">
              {terminalLogs.map((log, index) => (
                <div key={index} className="leading-relaxed">
                  <span className="text-cyan-500">❯</span> {log}
                </div>
              ))}
            </div>
          </div>

          {/* Anomaly Alerts Section */}
          <div className="space-y-2">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
              Automated AI Anomaly Classification Stream
            </div>
            {alerts.map((alert) => {
              const isAcked = acknowledgedAlerts.includes(alert.id);
              return (
                <div
                  key={alert.id}
                  className="p-3 bg-slate-900/60 rounded-xl border border-slate-800 flex items-center justify-between gap-3 text-xs"
                >
                  <div className="flex items-start space-x-2.5">
                    <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-amber-950 text-amber-300 mr-2">
                        {alert.level}
                      </span>
                      <span className="text-slate-200">{alert.text}</span>
                      <span className="text-slate-500 ml-2 font-mono text-[10px]">({alert.time})</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setAcknowledgedAlerts([...acknowledgedAlerts, alert.id])}
                    disabled={isAcked}
                    className={`px-2.5 py-1 rounded text-[11px] font-mono shrink-0 transition-colors ${
                      isAcked
                        ? 'bg-slate-800 text-slate-500 cursor-default'
                        : 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 hover:bg-cyan-500/30'
                    }`}
                  >
                    {isAcked ? 'Acknowledged' : 'Acknowledge'}
                  </button>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </div>
  );
};
