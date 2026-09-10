import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Shield, Award, Activity, 
  Cpu, Compass, Waves, CheckCircle2, ChevronRight,
  HardDrive, ExternalLink, Battery, Anchor
} from 'lucide-react';
import { SubseaMissionSimulator } from '../components/interactive/SubseaMissionSimulator';
import { MissionScopingCalculator } from '../components/interactive/MissionScopingCalculator';
import { PayloadConfigurator } from '../components/interactive/PayloadConfigurator';
import { fleetVehicles } from '../data/fleetData';
import { missionCaseStudies } from '../data/missionsData';
import { solutionVerticals } from '../data/solutionsData';

export const HomePage: React.FC = () => {
  return (
    <div className="space-y-24 md:space-y-32 pb-16">
      
      {/* HERO SECTION */}
      <section className="relative pt-32 md:pt-40 lg:pt-44 overflow-hidden">
        {/* Hydrodynamic Grid Background */}
        <div className="absolute inset-0 bg-bathy-mesh opacity-30 pointer-events-none"></div>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Left Content (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Operational Status Badge */}
              <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-xs font-mono text-cyan-300">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
                <span>Deepwater Level 4 Autonomy • 6,000m Certified</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] font-display">
                Autonomous Subsea Robotics &amp; Ocean Intelligence.
              </h1>

              <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
                Vesper Marine Dynamics deploys uncrewed AUV swarms and edge-neural acoustic SLAM to inspect offshore wind power grids, deepwater energy corridors, and marine carbon baselines with zero offshore personnel risk.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/contact"
                  className="px-6 py-3.5 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold rounded-xl text-sm transition-all shadow-lg shadow-cyan-500/25 flex items-center space-x-2"
                >
                  <span>Scope Mission Deployment</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/fleet"
                  className="px-6 py-3.5 bg-slate-900/80 hover:bg-slate-800 border border-slate-700 text-white font-medium rounded-xl text-sm transition-colors flex items-center space-x-2"
                >
                  <span>Explore 6,000m Fleet</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </Link>
              </div>

              {/* Key Trust Metrics */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-800/80">
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
                    6,000<span className="text-cyan-400 text-lg">m</span>
                  </div>
                  <div className="text-xs text-slate-400 font-mono mt-0.5">Hadal Depth Rating</div>
                </div>

                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
                    14,200<span className="text-cyan-400 text-lg">+</span>
                  </div>
                  <div className="text-xs text-slate-400 font-mono mt-0.5">Autonomous Dive Hrs</div>
                </div>

                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
                    -88<span className="text-cyan-400 text-lg">%</span>
                  </div>
                  <div className="text-xs text-slate-400 font-mono mt-0.5">Vessel Carbon Burn</div>
                </div>
              </div>

            </div>

            {/* Hero Right: Interactive Subsea Simulator (5 Cols) */}
            <div className="lg:col-span-5">
              <SubseaMissionSimulator />
            </div>

          </div>
        </div>
      </section>

      {/* CLIENT LOGOS & MARITIME STANDARDS BAR */}
      <section className="border-y border-slate-800/60 bg-[#060c18]/60 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
              Trusted by Offshore Operators &amp; Oceanographic Institutes
            </div>
            <div className="flex flex-wrap items-center justify-center gap-8 text-slate-400 text-xs font-mono font-medium">
              <span className="hover:text-cyan-300 transition-colors">Equinor Subsea Alliance</span>
              <span className="text-slate-700">•</span>
              <span className="hover:text-cyan-300 transition-colors">Dogger Bank Offshore</span>
              <span className="text-slate-700">•</span>
              <span className="hover:text-cyan-300 transition-colors">NOAA Ocean Exploration</span>
              <span className="text-slate-700">•</span>
              <span className="hover:text-cyan-300 transition-colors">Ørsted Power Grid</span>
              <span className="text-slate-700">•</span>
              <span className="hover:text-cyan-300 transition-colors">Subsea 7 Operations</span>
            </div>
          </div>
        </div>
      </section>

      {/* CORE SOLUTIONS VERTICALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono uppercase text-cyan-400 tracking-wider">
            Sector Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 font-display">
            Precision Autonomy Engineered for Severe Marine Environments.
          </h2>
          <p className="text-slate-300 mt-3 text-base leading-relaxed">
            From high-current tidal zones around offshore wind monopiles to 600-bar abyssal pipeline corridors, Vesper replaces risky crewed vessels with persistent autonomous swarms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutionVerticals.map((sol) => (
            <div 
              key={sol.id}
              className="group bg-[#08101e] rounded-2xl border border-slate-800 hover:border-cyan-500/40 p-7 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-950/40 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Visual Banner */}
                <div className="h-48 rounded-xl overflow-hidden relative">
                  <img 
                    src={sol.heroImage} 
                    alt={sol.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08101e] via-[#08101e]/40 to-transparent"></div>
                  
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-slate-900/90 border border-slate-700 text-[11px] font-mono text-cyan-300">
                    {sol.telemetryMetrics[0].label}: {sol.telemetryMetrics[0].value}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {sol.title}
                </h3>
                
                <p className="text-sm text-slate-300 leading-relaxed">
                  {sol.summary}
                </p>

                {/* Capability Highlights */}
                <div className="space-y-2 pt-2">
                  {sol.autonomousCapabilities.slice(0, 2).map((cap, i) => (
                    <div key={i} className="flex items-start space-x-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span><strong className="text-white">{cap.title}:</strong> {cap.metric}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">
                  {sol.caseStudyHighlight.client}
                </span>
                <Link
                  to={`/solutions#${sol.id}`}
                  className="text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center space-x-1"
                >
                  <span>Technical Specs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FLEET SYSTEMS PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="text-xs font-mono uppercase text-cyan-400 tracking-wider">
              Autonomous Hardware Architecture
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 font-display">
              Subsea Fleet &amp; Surface Gateways.
            </h2>
          </div>
          <Link
            to="/fleet"
            className="text-sm font-mono text-cyan-400 hover:text-cyan-300 flex items-center space-x-1.5 self-start"
          >
            <span>View Complete Vehicle Matrix</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {fleetVehicles.map((vehicle) => (
            <div 
              key={vehicle.id}
              className="bg-[#070e1c] rounded-2xl border border-slate-800 p-5 flex flex-col justify-between hover:border-cyan-500/40 transition-all card-glow-hover"
            >
              <div>
                <div className="h-40 rounded-xl overflow-hidden mb-4 relative bg-slate-900">
                  <img 
                    src={vehicle.image} 
                    alt={vehicle.name}
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-slate-950/80 border border-slate-700 text-[10px] font-mono text-cyan-300">
                    {vehicle.class}
                  </div>
                </div>

                <div className="text-lg font-bold text-white">{vehicle.name}</div>
                <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                  {vehicle.description}
                </p>

                <div className="grid grid-cols-2 gap-2 my-4 p-3 bg-slate-900/60 rounded-xl border border-slate-800/80 text-xs font-mono">
                  <div>
                    <div className="text-[10px] text-slate-500">Depth</div>
                    <div className="text-cyan-300 font-bold">{vehicle.depthRatingMeters}m</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500">Endurance</div>
                    <div className="text-emerald-400 font-bold">{vehicle.enduranceHours}h</div>
                  </div>
                </div>
              </div>

              <Link
                to={`/fleet#${vehicle.id}`}
                className="w-full py-2 px-3 rounded-lg bg-slate-800 hover:bg-cyan-950 hover:text-cyan-300 border border-slate-700 text-xs font-mono text-center text-slate-300 transition-colors"
              >
                Inspect Technical Blueprint
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* INTERACTIVE PAYLOAD & ENDURANCE CONFIGURATOR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PayloadConfigurator />
      </section>

      {/* ROI & ESG ESTIMATOR SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MissionScopingCalculator />
      </section>

      {/* FEATURED CASE STUDIES / MISSIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="text-xs font-mono uppercase text-cyan-400 tracking-wider">
              Empirical Deployment Records
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 font-display">
              Proven Across Global Basins.
            </h2>
          </div>
          <Link
            to="/missions"
            className="text-sm font-mono text-cyan-400 hover:text-cyan-300 flex items-center space-x-1.5 self-start"
          >
            <span>View All Mission Logs</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {missionCaseStudies.slice(0, 2).map((mission) => (
            <div
              key={mission.id}
              className="bg-[#081020] rounded-2xl border border-slate-800 overflow-hidden hover:border-cyan-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="h-56 relative overflow-hidden">
                  <img
                    src={mission.heroImage}
                    alt={mission.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#081020] via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4 px-3 py-1 rounded bg-slate-900/90 border border-slate-700 text-xs font-mono text-cyan-300">
                    {mission.sector}
                  </div>
                  <div className="absolute top-4 right-4 px-3 py-1 rounded bg-slate-900/90 border border-slate-700 text-xs font-mono text-slate-300">
                    {mission.depthMeters}m Depth
                  </div>
                </div>

                <div className="p-7 space-y-4">
                  <div className="text-xs font-mono text-slate-400">{mission.client} • {mission.location}</div>
                  <h3 className="text-xl font-bold text-white">{mission.title}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">{mission.overview}</p>

                  <div className="grid grid-cols-3 gap-3 pt-2">
                    {mission.impactMetrics.slice(0, 3).map((metric, i) => (
                      <div key={i} className="p-3 bg-slate-900/70 rounded-xl border border-slate-800 text-center">
                        <div className="text-base font-bold text-cyan-300 font-mono">{metric.value}</div>
                        <div className="text-[10px] text-slate-400 mt-0.5">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-7 pb-7 pt-2">
                <Link
                  to={`/missions#${mission.id}`}
                  className="inline-flex items-center text-xs font-mono text-cyan-400 hover:text-cyan-300 space-x-1"
                >
                  <span>Read Detailed Telemetry &amp; Findings</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-b from-[#09152a] to-[#040810] rounded-3xl border border-cyan-500/30 p-8 md:p-14 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-bathy-mesh opacity-20 pointer-events-none"></div>
          
          <div className="max-w-3xl mx-auto relative z-10 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950 border border-cyan-500/40 text-xs font-mono text-cyan-300">
              <Compass className="w-3.5 h-3.5 animate-spin-slow" />
              <span>Rapid Deployment Capability</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-display tracking-tight">
              Ready to Eliminate Vessel Drag and Decarbonize Your Subsea Operations?
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Our engineering commanders are available 24/7 across Boston, Aberdeen, and Singapore to scope your autonomous survey requirements.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold rounded-xl text-sm transition-all shadow-lg shadow-cyan-500/25 flex items-center space-x-2"
              >
                <span>Request Project Scope Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/mission-control"
                className="px-8 py-4 bg-slate-900 border border-slate-700 text-white font-medium rounded-xl text-sm hover:bg-slate-800 transition-colors"
              >
                <span>View Live Operations Center</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
