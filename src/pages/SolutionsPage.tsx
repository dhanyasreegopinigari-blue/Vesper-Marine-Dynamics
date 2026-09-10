import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { 
  Wind, Cpu, Waves, Shield, CheckCircle2, 
  ArrowRight, Activity, HardDrive, Compass, Layers 
} from 'lucide-react';
import { solutionVerticals } from '../data/solutionsData';
import { PayloadConfigurator } from '../components/interactive/PayloadConfigurator';

export const SolutionsPage: React.FC = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Wind': return <Wind className="w-6 h-6 text-cyan-400" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-blue-400" />;
      case 'Waves': return <Waves className="w-6 h-6 text-emerald-400" />;
      case 'Shield': return <Shield className="w-6 h-6 text-cyan-300" />;
      default: return <Compass className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <div className="pt-32 pb-24 space-y-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950 border border-cyan-500/40 text-xs font-mono text-cyan-300">
          <Layers className="w-3.5 h-3.5" />
          <span>Industrial &amp; Scientific Capabilities</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
          Sector-Tailored Subsea Autonomy &amp; Sensor Solutions.
        </h1>
        <p className="text-lg text-slate-300 leading-relaxed">
          From multi-gigawatt offshore wind farms to transoceanic fiber and deep benthic carbon sanctuaries, explore how Vesper delivers millimeter-level diagnostic data without heavy support vessels.
        </p>
      </div>

      {/* Solutions Detailed List */}
      <div className="space-y-20">
        {solutionVerticals.map((sol, index) => (
          <div
            key={sol.id}
            id={sol.id}
            className="scroll-mt-32 p-8 md:p-12 rounded-3xl bg-[#081020] border border-slate-800 space-y-8 relative overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              
              {/* Left Details (7 Cols) */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-xl bg-cyan-950 border border-cyan-500/30 flex items-center justify-center">
                    {getIcon(sol.iconName)}
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase text-cyan-400 tracking-wider">
                      Vertical #{index + 1}
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
                      {sol.title}
                    </h2>
                  </div>
                </div>

                <p className="text-base text-slate-200 leading-relaxed">
                  {sol.summary}
                </p>

                {/* Challenges Addressed */}
                <div className="bg-[#050b16] p-5 rounded-xl border border-slate-800 space-y-2.5">
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                    Core Operational Challenges Mitigated:
                  </div>
                  <ul className="space-y-2 text-xs text-slate-300">
                    {sol.challenges.map((c, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <span className="text-cyan-400 font-mono font-bold">❯</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Autonomous Capabilities */}
                <div className="space-y-3 pt-2">
                  <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                    Autonomous Robotic Capabilities:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {sol.autonomousCapabilities.map((cap, i) => (
                      <div key={i} className="p-4 bg-slate-900/80 rounded-xl border border-slate-800 space-y-1">
                        <div className="text-sm font-bold text-white">{cap.title}</div>
                        <p className="text-xs text-slate-400">{cap.description}</p>
                        <div className="text-[11px] font-mono text-cyan-300 font-semibold pt-1">
                          Benchmark: {cap.metric}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center space-x-4 pt-4">
                  <Link
                    to="/contact"
                    className="px-5 py-2.5 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold rounded-lg text-xs transition-colors flex items-center space-x-1.5 shadow"
                  >
                    <span>Scope {sol.title.split('&')[0]} Mission</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Right Media & Metrics (5 Cols) */}
              <div className="lg:col-span-5 space-y-6">
                <div className="h-64 rounded-2xl overflow-hidden border border-slate-800 relative">
                  <img
                    src={sol.heroImage}
                    alt={sol.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#081020] via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 p-3 bg-slate-950/80 backdrop-blur-md rounded-xl border border-slate-800 text-xs">
                    <div className="font-mono text-[10px] text-cyan-400 uppercase">Case Highlight</div>
                    <div className="font-bold text-white mt-0.5">{sol.caseStudyHighlight.client}</div>
                    <div className="text-slate-300 text-[11px] mt-1">{sol.caseStudyHighlight.result}</div>
                  </div>
                </div>

                {/* Telemetry Metrics Grid */}
                <div className="grid grid-cols-3 gap-3">
                  {sol.telemetryMetrics.map((metric, i) => (
                    <div key={i} className="p-3.5 bg-slate-900/90 rounded-xl border border-slate-800 text-center">
                      <div className="text-lg font-bold text-cyan-300 font-mono">{metric.value}</div>
                      <div className="text-[10px] text-slate-400 mt-0.5">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* Interactive Payload Configurator */}
      <section className="pt-8">
        <PayloadConfigurator />
      </section>

    </div>
  );
};
