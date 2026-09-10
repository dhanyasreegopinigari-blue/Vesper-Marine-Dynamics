import React, { useState, useEffect } from 'react';
import { 
  Compass, Activity, Gauge, Radio, 
  ChevronRight, Shield, RefreshCw, Zap, Volume2, Waves 
} from 'lucide-react';
import { fleetVehicles } from '../../data/fleetData';

export const SubseaMissionSimulator: React.FC = () => {
  const [selectedVehicleId, setSelectedVehicleId] = useState('vesper-apex-6000');
  const [targetDepth, setTargetDepth] = useState(1450);
  const [isPinging, setIsPinging] = useState(false);
  const [pingWave, setPingWave] = useState(0);

  const vehicle = fleetVehicles.find(v => v.id === selectedVehicleId) || fleetVehicles[0];

  // Dynamic calculations based on physical oceanography equations
  const pressureBar = (1 + targetDepth / 10).toFixed(1);
  const tempCelsius = targetDepth < 200 
    ? (18 - (targetDepth / 200) * 8).toFixed(1) 
    : (10 - Math.min(8.2, (targetDepth - 200) / 700)).toFixed(1);
  const soundVelocity = (1449.2 + 4.6 * parseFloat(tempCelsius) - 0.055 * Math.pow(parseFloat(tempCelsius), 2) + 0.016 * targetDepth).toFixed(0);
  const roundTripLatencyMs = ((targetDepth * 2) / (parseFloat(soundVelocity) / 1000)).toFixed(0);
  const lightPenetration = targetDepth > 200 ? '0.00% (Aphotic Zone)' : `${(100 - (targetDepth / 200) * 99.5).toFixed(1)}% (Photic)`;

  const handleSonarPing = () => {
    setIsPinging(true);
    setPingWave(1);
    setTimeout(() => setPingWave(2), 300);
    setTimeout(() => setPingWave(3), 600);
    setTimeout(() => {
      setIsPinging(false);
      setPingWave(0);
    }, 1200);
  };

  const depthPresets = [
    { label: 'Offshore Wind (45m)', depth: 45 },
    { label: 'Shelf Edge (450m)', depth: 450 },
    { label: 'Continental Slope (1,800m)', depth: 1800 },
    { label: 'Abyssal Plain (5,200m)', depth: 5200 },
  ];

  return (
    <div className="relative rounded-2xl bg-[#091220]/90 border border-cyan-500/25 p-5 md:p-7 backdrop-blur-xl shadow-2xl shadow-cyan-950/40">
      
      {/* Header telemetry strip */}
      <div className="flex flex-wrap items-center justify-between pb-5 border-b border-slate-800/80 gap-3">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <span className="w-3 h-3 rounded-full bg-cyan-400 inline-block animate-ping absolute"></span>
            <span className="w-3 h-3 rounded-full bg-cyan-400 inline-block"></span>
          </div>
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-cyan-400">
              Interactive Telemetry Sim
            </div>
            <div className="text-sm font-semibold text-white">
              Acoustic SLAM & Hydrostatic Profiler
            </div>
          </div>
        </div>

        {/* Vehicle Selector Tabs */}
        <div className="flex items-center bg-slate-900/90 p-1 rounded-lg border border-slate-800">
          {fleetVehicles.slice(0, 3).map((v) => (
            <button
              key={v.id}
              onClick={() => {
                setSelectedVehicleId(v.id);
                if (targetDepth > v.depthRatingMeters) {
                  setTargetDepth(v.depthRatingMeters);
                }
              }}
              className={`px-3 py-1 text-xs font-mono rounded-md transition-colors ${
                selectedVehicleId === v.id
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {v.name.replace('Vesper ', '')}
            </button>
          ))}
        </div>
      </div>

      {/* Main interactive grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
        
        {/* Left: Interactive Water Column Visualizer */}
        <div className="lg:col-span-7 bg-[#060b14] rounded-xl border border-slate-800 p-4 relative overflow-hidden flex flex-col justify-between min-h-[320px]">
          
          {/* Depth background gradient representation */}
          <div 
            className="absolute inset-0 pointer-events-none transition-all duration-700 opacity-60"
            style={{
              background: `linear-gradient(to bottom, #0ea5e915 0%, #030a17 ${Math.min(100, (targetDepth / 6000) * 100)}%, #010408 100%)`
            }}
          />

          {/* Depth meter lines */}
          <div className="absolute left-3 top-4 bottom-4 w-12 flex flex-col justify-between text-[10px] font-mono text-slate-600 select-none pointer-events-none border-r border-slate-800/80 pr-2">
            <span>0m (Surface)</span>
            <span>1,000m</span>
            <span>3,000m</span>
            <span>6,000m (Abyssal)</span>
          </div>

          {/* Live Vehicle Depth Indicator Node */}
          <div 
            className="relative ml-14 transition-all duration-500 flex items-center space-x-3 my-auto"
            style={{
              transform: `translateY(${Math.min(180, (targetDepth / 6000) * 180)}px)`
            }}
          >
            <div className="relative">
              {/* Sonar ping rings */}
              {isPinging && (
                <>
                  <div className="absolute -inset-4 rounded-full border border-cyan-400/80 animate-ping pointer-events-none" />
                  <div className="absolute -inset-8 rounded-full border border-cyan-400/40 animate-ping delay-150 pointer-events-none" />
                </>
              )}
              <div className="w-10 h-10 rounded-lg bg-cyan-950 border-2 border-cyan-400 flex items-center justify-center shadow-lg shadow-cyan-500/50">
                <Compass className="w-5 h-5 text-cyan-300 animate-spin-slow" />
              </div>
            </div>

            <div className="bg-[#0b1626]/90 border border-cyan-500/30 rounded-lg px-3 py-1.5 shadow-xl backdrop-blur-md">
              <div className="text-[11px] font-mono text-cyan-400 flex items-center space-x-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>{vehicle.name}</span>
              </div>
              <div className="text-sm font-bold text-white font-mono">
                {targetDepth.toLocaleString()} m Depth
              </div>
            </div>
          </div>

          {/* Bottom quick preset buttons */}
          <div className="relative z-10 pt-4 mt-auto flex flex-wrap items-center justify-between gap-2 border-t border-slate-800/60">
            <span className="text-[11px] font-mono text-slate-400">Ocean Zones:</span>
            <div className="flex flex-wrap gap-1.5">
              {depthPresets.map((preset) => (
                <button
                  key={preset.label}
                  onClick={() => setTargetDepth(Math.min(preset.depth, vehicle.depthRatingMeters))}
                  className={`px-2.5 py-1 text-[11px] font-mono rounded border transition-colors ${
                    targetDepth === preset.depth
                      ? 'bg-cyan-500/20 text-cyan-300 border-cyan-400'
                      : 'bg-slate-900/80 text-slate-400 border-slate-700/60 hover:text-white hover:border-slate-500'
                  }`}
                >
                  {preset.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Telemetry Gauges & Controls */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
          
          {/* Depth Slider Control */}
          <div className="bg-[#070e1c] p-4 rounded-xl border border-slate-800">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
              <span>Adjust Target Depth</span>
              <span className="text-cyan-400 font-bold">{targetDepth} / {vehicle.depthRatingMeters}m</span>
            </div>
            <input
              type="range"
              min="0"
              max={vehicle.depthRatingMeters}
              step="25"
              value={targetDepth}
              onChange={(e) => setTargetDepth(parseInt(e.target.value))}
              className="w-full accent-cyan-400 bg-slate-800 h-2 rounded-lg cursor-pointer"
            />
          </div>

          {/* Hydrodynamic Telemetry Matrix */}
          <div className="grid grid-cols-2 gap-2.5">
            <div className="bg-[#070e1c] p-3 rounded-xl border border-slate-800/90">
              <div className="text-[10px] font-mono uppercase text-slate-400 flex items-center space-x-1">
                <Gauge className="w-3 h-3 text-cyan-400" />
                <span>Hydrostatic Pressure</span>
              </div>
              <div className="text-lg font-bold text-white font-mono mt-1">
                {pressureBar} <span className="text-xs font-normal text-slate-400">bar</span>
              </div>
              <div className="text-[10px] text-slate-500">{(parseFloat(pressureBar) * 14.5038).toFixed(0)} PSI</div>
            </div>

            <div className="bg-[#070e1c] p-3 rounded-xl border border-slate-800/90">
              <div className="text-[10px] font-mono uppercase text-slate-400 flex items-center space-x-1">
                <Waves className="w-3 h-3 text-blue-400" />
                <span>Water Temp</span>
              </div>
              <div className="text-lg font-bold text-white font-mono mt-1">
                {tempCelsius}° <span className="text-xs font-normal text-slate-400">C</span>
              </div>
              <div className="text-[10px] text-slate-500">Thermocline Layer</div>
            </div>

            <div className="bg-[#070e1c] p-3 rounded-xl border border-slate-800/90">
              <div className="text-[10px] font-mono uppercase text-slate-400 flex items-center space-x-1">
                <Radio className="w-3 h-3 text-emerald-400" />
                <span>Acoustic Latency</span>
              </div>
              <div className="text-lg font-bold text-emerald-400 font-mono mt-1">
                {roundTripLatencyMs} <span className="text-xs font-normal text-slate-400">ms</span>
              </div>
              <div className="text-[10px] text-slate-500">{soundVelocity} m/s sound vel.</div>
            </div>

            <div className="bg-[#070e1c] p-3 rounded-xl border border-slate-800/90">
              <div className="text-[10px] font-mono uppercase text-slate-400 flex items-center space-x-1">
                <Zap className="w-3 h-3 text-amber-400" />
                <span>Solar Irradiance</span>
              </div>
              <div className="text-xs font-bold text-amber-300 font-mono mt-1.5 leading-tight">
                {lightPenetration}
              </div>
              <div className="text-[10px] text-slate-500">Benthic optics mode</div>
            </div>
          </div>

          {/* Action Trigger Sonar Ping */}
          <button
            onClick={handleSonarPing}
            disabled={isPinging}
            className="w-full py-2.5 px-4 rounded-xl bg-cyan-500/15 border border-cyan-400/40 text-cyan-300 text-xs font-mono font-semibold hover:bg-cyan-500/25 hover:border-cyan-400 transition-all flex items-center justify-center space-x-2 active:scale-[0.98]"
          >
            <Volume2 className={`w-4 h-4 ${isPinging ? 'animate-bounce text-cyan-400' : ''}`} />
            <span>{isPinging ? 'TRANSMITTING ACOUSTIC WAVEFRONT...' : 'EMIT TEST ACOUSTIC SLAM PING'}</span>
          </button>

        </div>

      </div>

    </div>
  );
};
