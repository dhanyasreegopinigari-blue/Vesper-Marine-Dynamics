import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { 
  ShieldCheck, Compass, BatteryCharging, 
  Activity, ArrowRight, HardDrive, Check, Radio, Gauge 
} from 'lucide-react';
import { fleetVehicles } from '../data/fleetData';

export const FleetPage: React.FC = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return (
    <div className="pt-32 pb-24 space-y-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950 border border-cyan-500/40 text-xs font-mono text-cyan-300">
          <Compass className="w-3.5 h-3.5" />
          <span>Deepwater Hardware Architecture</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
          The Vesper Autonomous Fleet Catalogue.
        </h1>
        <p className="text-lg text-slate-300 leading-relaxed">
          Engineered for extreme hydrostatic pressure, our carbon-composite submersibles, hover inspection ROVs, long-endurance gliders, and uncrewed surface gateways operate in seamless acoustic harmony.
        </p>
      </div>

      {/* Fleet Vehicles Detailed Sections */}
      <div className="space-y-20">
        {fleetVehicles.map((vehicle) => (
          <div
            key={vehicle.id}
            id={vehicle.id}
            className="scroll-mt-32 p-8 md:p-12 rounded-3xl bg-[#081020] border border-slate-800 space-y-8"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              
              {/* Left Image & Core Stats (5 Cols) */}
              <div className="lg:col-span-5 space-y-6">
                <div className="h-72 rounded-2xl overflow-hidden border border-slate-800 relative bg-slate-900">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded bg-slate-950/90 border border-slate-700 text-xs font-mono text-cyan-300">
                    {vehicle.class}
                  </div>
                  <div className="absolute bottom-3 right-3 px-3 py-1 rounded bg-slate-950/90 border border-slate-700 text-xs font-mono text-emerald-400">
                    {vehicle.autonomyLevel}
                  </div>
                </div>

                {/* Empirical Specs Matrix */}
                <div className="grid grid-cols-2 gap-3 p-4 bg-[#050b16] rounded-2xl border border-slate-800 text-xs font-mono">
                  <div>
                    <div className="text-slate-500 text-[10px]">Max Depth Rating</div>
                    <div className="text-cyan-300 font-bold text-base mt-0.5">{vehicle.depthRatingMeters.toLocaleString()} m</div>
                  </div>
                  <div>
                    <div className="text-slate-500 text-[10px]">Mission Endurance</div>
                    <div className="text-emerald-400 font-bold text-base mt-0.5">{vehicle.enduranceHours} Hours</div>
                  </div>
                  <div>
                    <div className="text-slate-500 text-[10px]">Cruise Velocity</div>
                    <div className="text-white font-bold text-base mt-0.5">{vehicle.speedKnots} Knots</div>
                  </div>
                  <div>
                    <div className="text-slate-500 text-[10px]">Battery Capacity</div>
                    <div className="text-cyan-400 font-bold text-base mt-0.5">{vehicle.batteryKWh} kWh</div>
                  </div>
                  <div>
                    <div className="text-slate-500 text-[10px]">Dry Weight</div>
                    <div className="text-slate-300 font-medium text-sm mt-0.5">{vehicle.weightKg} kg</div>
                  </div>
                  <div>
                    <div className="text-slate-500 text-[10px]">Overall Length</div>
                    <div className="text-slate-300 font-medium text-sm mt-0.5">{vehicle.lengthMeters} m</div>
                  </div>
                </div>
              </div>

              {/* Right Content & Engineering Features (7 Cols) */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h2 className="text-3xl font-bold text-white font-display">{vehicle.name}</h2>
                  <p className="text-cyan-400 text-sm font-mono mt-1">{vehicle.tagline}</p>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {vehicle.description}
                </p>

                {/* Primary Integrated Sensors */}
                <div>
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                    Integrated Sensor Arrays:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {vehicle.primarySensors.map((sensor, i) => (
                      <div key={i} className="p-2.5 bg-slate-900/80 rounded-lg border border-slate-800 text-xs text-slate-200 flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                        <span>{sensor}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Structural & Autonomy Features */}
                <div className="space-y-3 pt-2">
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                    Engineering Architecture:
                  </div>
                  <div className="space-y-2.5">
                    {vehicle.features.map((feat, i) => (
                      <div key={i} className="p-3.5 bg-slate-900/60 rounded-xl border border-slate-800/80">
                        <div className="text-sm font-semibold text-white">{feat.title}</div>
                        <p className="text-xs text-slate-400 mt-0.5">{feat.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTAs */}
                <div className="pt-4 flex flex-wrap gap-4">
                  <Link
                    to="/contact"
                    className="px-5 py-2.5 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold rounded-lg text-xs transition-colors flex items-center space-x-1.5"
                  >
                    <span>Request Technical Deployment Proposal</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

              </div>

            </div>
          </div>
        ))}
      </div>

      {/* Comparative Matrix Section */}
      <div className="bg-[#070e1c] rounded-3xl border border-slate-800 p-8 overflow-x-auto">
        <h2 className="text-2xl font-bold text-white mb-6 font-display">
          Robotic Platform Comparative Matrix
        </h2>
        <table className="w-full text-left text-xs font-mono">
          <thead>
            <tr className="border-b border-slate-800 text-slate-400 uppercase">
              <th className="pb-3 pr-4">Vehicle Hull</th>
              <th className="pb-3 px-4">Class</th>
              <th className="pb-3 px-4">Max Depth</th>
              <th className="pb-3 px-4">Endurance</th>
              <th className="pb-3 px-4">Speed</th>
              <th className="pb-3 px-4">Autonomy</th>
              <th className="pb-3 pl-4">LARS Requirement</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60 text-slate-300">
            {fleetVehicles.map((v) => (
              <tr key={v.id} className="hover:bg-slate-900/50 transition-colors">
                <td className="py-3.5 pr-4 font-bold text-white">{v.name}</td>
                <td className="py-3.5 px-4 text-cyan-300">{v.class}</td>
                <td className="py-3.5 px-4 font-bold text-white">{v.depthRatingMeters}m</td>
                <td className="py-3.5 px-4 text-emerald-400">{v.enduranceHours}h</td>
                <td className="py-3.5 px-4">{v.speedKnots} kts</td>
                <td className="py-3.5 px-4 text-slate-300">{v.autonomyLevel}</td>
                <td className="py-3.5 pl-4 text-slate-400">Lean Crane / USV Cradle</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};
