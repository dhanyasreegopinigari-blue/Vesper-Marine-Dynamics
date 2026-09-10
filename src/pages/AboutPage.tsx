import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, Award, Globe, Compass, 
  Waves, Cpu, CheckCircle2, ArrowRight, BookOpen, Anchor 
} from 'lucide-react';
import { teamMembers } from '../data/commonData';

export const AboutPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 space-y-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* HEADER HERO */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950 border border-cyan-500/40 text-xs font-mono text-cyan-300">
          <Compass className="w-3.5 h-3.5" />
          <span>Scientific Heritage &amp; Deep-Ocean Roots</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
          Pioneering the Next Era of Subsea Ocean Autonomy.
        </h1>
        <p className="text-lg text-slate-300 leading-relaxed">
          Founded by roboticists and oceanographers from MIT and the Woods Hole Oceanographic Institution, Vesper Marine Dynamics was established to solve the greatest challenge in ocean exploration: replacing multi-million dollar fossil-fuel vessel operations with persistent, zero-emission robotic intelligence.
        </p>
      </div>

      {/* THREE CORE PILLARS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-7 rounded-2xl bg-[#081020] border border-slate-800 space-y-4">
          <div className="w-12 h-12 rounded-xl bg-cyan-950 border border-cyan-400 flex items-center justify-center text-cyan-300">
            <Cpu className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold text-white">Edge Deterministic Autonomy</h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            In GPS-denied abyssal zones, communication is measured in acoustic bytes. Our proprietary onboard factor-graph SLAM enables our vehicles to make autonomous navigational decisions without human tethering.
          </p>
        </div>

        <div className="p-7 rounded-2xl bg-[#081020] border border-slate-800 space-y-4">
          <div className="w-12 h-12 rounded-xl bg-cyan-950 border border-emerald-400 flex items-center justify-center text-emerald-300">
            <Waves className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold text-white">Ecological Stewardship</h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Our acoustic frequencies are engineered strictly outside marine mammal auditory ranges. 100% electric propulsion prevents hydraulic hydrocarbon leaks in sensitive benthic sanctuaries.
          </p>
        </div>

        <div className="p-7 rounded-2xl bg-[#081020] border border-slate-800 space-y-4">
          <div className="w-12 h-12 rounded-xl bg-cyan-950 border border-blue-400 flex items-center justify-center text-blue-300">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold text-white">Zero Surface-Personnel HSE Risk</h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            By shifting high-risk subsea inspections to autonomous uncrewed swarms launched from shore, we eliminate over 40,000 offshore human-exposure hours every year.
          </p>
        </div>
      </div>

      {/* R&D TEST FACILITIES */}
      <div className="bg-[#070e1c] rounded-2xl border border-cyan-500/20 p-8 md:p-12 space-y-8">
        <div className="max-w-2xl">
          <div className="text-xs font-mono uppercase text-cyan-400 tracking-wider">
            Infrastructure &amp; Validation
          </div>
          <h2 className="text-3xl font-bold text-white mt-1 font-display">
            Global Hyperbaric &amp; Acoustic Testing Tanks
          </h2>
          <p className="text-slate-300 text-sm mt-2">
            Every pressure vessel, transducer array, and composite fairing undergoes rigorous physical validation before ocean deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-5 bg-slate-900/80 rounded-xl border border-slate-800 space-y-2">
            <div className="text-xs font-mono text-cyan-400 font-bold">BOSTON HQ (USA)</div>
            <div className="text-lg font-bold text-white">Marine Autonomy Lab</div>
            <p className="text-xs text-slate-400 leading-relaxed">
              100-meter acoustic calibration flume, hardware-in-the-loop (HIL) hydrodynamics simulator, and edge neural testing farm.
            </p>
          </div>

          <div className="p-5 bg-slate-900/80 rounded-xl border border-slate-800 space-y-2">
            <div className="text-xs font-mono text-cyan-400 font-bold">TRONDHEIM &amp; ABERDEEN</div>
            <div className="text-lg font-bold text-white">Hyperbaric Test Tanks</div>
            <p className="text-xs text-slate-400 leading-relaxed">
              900-bar hydrostatic pressure vessels rated to 9,000m collapse validation, simulating hadal trench conditions.
            </p>
          </div>

          <div className="p-5 bg-slate-900/80 rounded-xl border border-slate-800 space-y-2">
            <div className="text-xs font-mono text-cyan-400 font-bold">SINGAPORE STRAIT HUB</div>
            <div className="text-lg font-bold text-white">Tropical Shallow-Water Lab</div>
            <p className="text-xs text-slate-400 leading-relaxed">
              High-turbidity acoustic scattering testbed optimizing optical sensor penetration and acoustic mesh routing in high-traffic ports.
            </p>
          </div>
        </div>
      </div>

      {/* LEADERSHIP & SCIENTIFIC TEAM */}
      <div className="space-y-8">
        <div className="max-w-2xl">
          <div className="text-xs font-mono uppercase text-cyan-400 tracking-wider">
            Engineering &amp; Executive Council
          </div>
          <h2 className="text-3xl font-bold text-white mt-1 font-display">
            Led by World-Class Marine Roboticists.
          </h2>
          <p className="text-slate-300 text-sm mt-2">
            Our team blends academic research breakthroughs with decades of North Sea and deepwater commercial offshore command.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-[#081020] rounded-2xl border border-slate-800 p-5 space-y-4 hover:border-cyan-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="h-48 rounded-xl overflow-hidden mb-4 bg-slate-900">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-base font-bold text-white">{member.name}</div>
                <div className="text-xs text-cyan-400 font-mono mt-0.5">{member.role}</div>
                <div className="text-[11px] text-slate-400 font-mono mt-1">{member.credentials}</div>
                <p className="text-xs text-slate-300 mt-3 leading-relaxed">
                  {member.bio}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>{member.publicationsCount} Papers</span>
                <span className="text-slate-500">{member.priorAffiliation.split('/')[0]}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CAREERS BANNER */}
      <div className="p-8 rounded-2xl bg-gradient-to-r from-cyan-950/40 to-slate-900 border border-cyan-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="text-2xl font-bold text-white">Join Our Deepwater Exploration Missions</h2>
          <p className="text-sm text-slate-300 mt-1">
            We are actively hiring autonomy architects, acoustic signal engineers, and mechanical pressure vessel leads in Boston, Aberdeen, and Singapore.
          </p>
        </div>
        <Link
          to="/careers"
          className="px-6 py-3 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold rounded-xl text-sm whitespace-nowrap transition-colors flex items-center space-x-2 shrink-0"
        >
          <span>View Open Positions</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

    </div>
  );
};
