import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Cpu, BatteryCharging, HardDrive, Check, Plus, 
  ArrowRight, ShieldCheck, Download, Sliders, AlertCircle 
} from 'lucide-react';
import { fleetVehicles, sensorPayloads } from '../../data/fleetData';

export const PayloadConfigurator: React.FC = () => {
  const [selectedHullId, setSelectedHullId] = useState('vesper-apex-6000');
  const [selectedPayloadIds, setSelectedPayloadIds] = useState<string[]>([
    'sas-kraken-ultra',
    'lidar-bathy-scan'
  ]);
  const [surveySpeedKnots, setSurveySpeedKnots] = useState(3.5);
  const [copied, setCopied] = useState(false);

  const hull = fleetVehicles.find(h => h.id === selectedHullId) || fleetVehicles[0];

  // Toggle payload
  const togglePayload = (id: string) => {
    if (selectedPayloadIds.includes(id)) {
      setSelectedPayloadIds(selectedPayloadIds.filter(item => item !== id));
    } else {
      setSelectedPayloadIds([...selectedPayloadIds, id]);
    }
  };

  // Calculations
  const selectedPayloadObjects = sensorPayloads.filter(p => selectedPayloadIds.includes(p.id));
  const totalPayloadWeight = selectedPayloadObjects.reduce((sum, p) => sum + p.weightKg, 0);
  const totalSensorPower = selectedPayloadObjects.reduce((sum, p) => sum + p.powerWatts, 0);
  
  // Base propulsion power based on hull & speed (cubic relation ~ P proportional to v^3)
  const basePropulsionWatts = Math.round(180 * Math.pow(surveySpeedKnots / 3.0, 3));
  const totalPowerDrawWatts = basePropulsionWatts + totalSensorPower + 85; // +85W base avionics & INS
  
  // Usable battery (assuming 85% depth of discharge)
  const usableBatteryWattHours = hull.batteryKWh * 1000 * 0.85;
  const calculatedEnduranceHours = (usableBatteryWattHours / totalPowerDrawWatts).toFixed(1);
  const calculatedSurveyRangeKm = (parseFloat(calculatedEnduranceHours) * surveySpeedKnots * 1.852).toFixed(0);

  const maxPayloadWeightCapacity = 140; // kg max
  const weightSafe = totalPayloadWeight <= maxPayloadWeightCapacity;

  const handleExportSummary = () => {
    const text = `VESPER MARINE DYNAMICS - MISSION CONFIGURATION SPECIFICATION\n` +
      `Vehicle Hull: ${hull.name} (${hull.class})\n` +
      `Max Depth Rating: ${hull.depthRatingMeters}m\n` +
      `Configured Sensors:\n` +
      selectedPayloadObjects.map(p => ` - ${p.name} (${p.category}) [${p.weightKg}kg / ${p.powerWatts}W]`).join('\n') +
      `\n\nComputed Mission Metrics:\n` +
      `Total Payload Weight: ${totalPayloadWeight} kg\n` +
      `Total System Power Draw: ${totalPowerDrawWatts} Watts\n` +
      `Survey Speed: ${surveySpeedKnots} knots\n` +
      `Operational Endurance: ${calculatedEnduranceHours} hours\n` +
      `Autonomous Survey Range: ${calculatedSurveyRangeKm} km\n` +
      `ISO 9001 / DNV-GL Subsea Specification Verified\n`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="bg-[#070e1a] rounded-2xl border border-slate-800 p-6 md:p-8 shadow-2xl relative">
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 flex items-center space-x-2">
            <Sliders className="w-3.5 h-3.5" />
            <span>Interactive Engineering Configurator</span>
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-white mt-1">
            Build Your Autonomous Mission Loadout
          </h2>
        </div>

        <button
          onClick={handleExportSummary}
          className="px-3.5 py-2 rounded-lg bg-slate-900 border border-cyan-500/40 text-cyan-300 text-xs font-mono hover:bg-cyan-950 transition-colors flex items-center space-x-2"
        >
          <Download className="w-3.5 h-3.5" />
          <span>{copied ? 'Copied to Clipboard!' : 'Export Spec Sheet'}</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
        
        {/* Step 1 & 2 Controls (Left 7 Cols) */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Hull Selection */}
          <div>
            <label className="block text-xs font-mono uppercase text-slate-400 mb-2.5">
              1. Select Robotic Hull Platform
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {fleetVehicles.map((v) => (
                <button
                  key={v.id}
                  onClick={() => setSelectedHullId(v.id)}
                  className={`p-3.5 rounded-xl text-left border transition-all ${
                    selectedHullId === v.id
                      ? 'bg-cyan-950/40 border-cyan-400 ring-1 ring-cyan-400/50 shadow-md'
                      : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-800 text-cyan-300">
                      {v.depthRatingMeters}m Depth
                    </span>
                    {selectedHullId === v.id && <Check className="w-4 h-4 text-cyan-400" />}
                  </div>
                  <div className="font-semibold text-white text-sm mt-2">{v.name}</div>
                  <div className="text-xs text-slate-400 mt-0.5">{v.class}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Sensor Payloads Checkboxes */}
          <div>
            <label className="block text-xs font-mono uppercase text-slate-400 mb-2.5">
              2. Mount Modular Sensor Payloads
            </label>
            <div className="space-y-2.5">
              {sensorPayloads.map((sensor) => {
                const isSelected = selectedPayloadIds.includes(sensor.id);
                return (
                  <div
                    key={sensor.id}
                    onClick={() => togglePayload(sensor.id)}
                    className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                      isSelected
                        ? 'bg-cyan-950/30 border-cyan-500/50 text-white'
                        : 'bg-slate-900/40 border-slate-800/80 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <div className={`w-5 h-5 rounded mt-0.5 flex items-center justify-center border transition-colors ${
                        isSelected ? 'bg-cyan-500 border-cyan-400 text-slate-950' : 'border-slate-700 bg-slate-800'
                      }`}>
                        {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                      <div>
                        <div className="text-sm font-medium text-white flex items-center space-x-2">
                          <span>{sensor.name}</span>
                          <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-slate-800 text-slate-300">
                            {sensor.category}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 mt-0.5">{sensor.description}</p>
                      </div>
                    </div>

                    <div className="text-right shrink-0 font-mono text-xs text-slate-400 pl-3">
                      <div>{sensor.weightKg} kg</div>
                      <div className="text-cyan-400">{sensor.powerWatts} W</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Speed Adjustment */}
          <div>
            <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
              <span>3. Survey Cruise Velocity</span>
              <span className="text-cyan-400 font-bold">{surveySpeedKnots} Knots ({ (surveySpeedKnots * 1.852).toFixed(1) } km/h)</span>
            </div>
            <input
              type="range"
              min="1.5"
              max="5.5"
              step="0.5"
              value={surveySpeedKnots}
              onChange={(e) => setSurveySpeedKnots(parseFloat(e.target.value))}
              className="w-full accent-cyan-400 bg-slate-800 h-2 rounded-lg cursor-pointer"
            />
          </div>

        </div>

        {/* Live Calculated Output Telemetry Card (Right 5 Cols) */}
        <div className="lg:col-span-5 bg-[#050b14] border border-cyan-500/30 rounded-xl p-5 flex flex-col justify-between shadow-xl">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <span className="text-xs font-mono uppercase text-cyan-400">Telemetry Forecast</span>
              <span className="text-xs font-mono text-emerald-400 flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse mr-1.5"></span>
                Nominal
              </span>
            </div>

            {/* Hull Summary */}
            <div className="mt-4 p-3 bg-slate-900/80 rounded-lg border border-slate-800 flex items-center justify-between">
              <div>
                <div className="text-xs text-slate-400 font-mono">Platform</div>
                <div className="text-sm font-semibold text-white">{hull.name}</div>
              </div>
              <div className="text-right font-mono text-xs">
                <div className="text-slate-400">Battery</div>
                <div className="text-cyan-300 font-bold">{hull.batteryKWh} kWh</div>
              </div>
            </div>

            {/* Calculations Metrics Grid */}
            <div className="grid grid-cols-2 gap-3 mt-4">
              <div className="p-3 bg-slate-900/60 rounded-lg border border-slate-800/80">
                <div className="text-[11px] font-mono text-slate-400 flex items-center space-x-1">
                  <BatteryCharging className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Dive Endurance</span>
                </div>
                <div className="text-xl font-bold text-white font-mono mt-1">
                  {calculatedEnduranceHours} <span className="text-xs text-slate-400">hrs</span>
                </div>
              </div>

              <div className="p-3 bg-slate-900/60 rounded-lg border border-slate-800/80">
                <div className="text-[11px] font-mono text-slate-400 flex items-center space-x-1">
                  <HardDrive className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Survey Range</span>
                </div>
                <div className="text-xl font-bold text-cyan-400 font-mono mt-1">
                  {calculatedSurveyRangeKm} <span className="text-xs text-slate-400">km</span>
                </div>
              </div>

              <div className="p-3 bg-slate-900/60 rounded-lg border border-slate-800/80">
                <div className="text-[11px] font-mono text-slate-400">Total System Power</div>
                <div className="text-lg font-bold text-white font-mono mt-1">
                  {totalPowerDrawWatts} <span className="text-xs text-slate-400">Watts</span>
                </div>
              </div>

              <div className="p-3 bg-slate-900/60 rounded-lg border border-slate-800/80">
                <div className="text-[11px] font-mono text-slate-400">Payload Mass</div>
                <div className={`text-lg font-bold font-mono mt-1 ${weightSafe ? 'text-white' : 'text-rose-400'}`}>
                  {totalPayloadWeight} / {maxPayloadWeightCapacity} <span className="text-xs text-slate-400">kg</span>
                </div>
              </div>
            </div>

            {!weightSafe && (
              <div className="mt-3 p-2 bg-rose-950/40 border border-rose-500/40 rounded text-xs text-rose-300 flex items-center space-x-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>Exceeds maximum buoyancy payload rating.</span>
              </div>
            )}
          </div>

          <div className="mt-6 pt-4 border-t border-slate-800">
            <Link
              to="/contact"
              className="w-full py-3 px-4 rounded-xl bg-cyan-400 text-slate-950 font-bold text-sm hover:bg-cyan-300 transition-colors flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/20"
            >
              <span>Request Quote for this Loadout</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <div className="text-[10px] font-mono text-center text-slate-500 mt-2">
              Instant scoping response within 4 operational hours
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
