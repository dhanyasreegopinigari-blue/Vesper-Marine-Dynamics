import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, CheckCircle2, Globe, Radio, Mail, 
  ArrowRight, Award, Compass, Cpu, ExternalLink 
} from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [times, setTimes] = useState({
    boston: '',
    aberdeen: '',
    singapore: ''
  });

  // Live clocks for international marine operational hubs
  useEffect(() => {
    const updateHubClocks = () => {
      const now = new Date();
      setTimes({
        boston: now.toLocaleTimeString('en-US', { timeZone: 'America/New_York', hour: '2-digit', minute: '2-digit', hour12: false }),
        aberdeen: now.toLocaleTimeString('en-GB', { timeZone: 'Europe/London', hour: '2-digit', minute: '2-digit', hour12: false }),
        singapore: now.toLocaleTimeString('en-SG', { timeZone: 'Asia/Singapore', hour: '2-digit', minute: '2-digit', hour12: false }),
      });
    };
    updateHubClocks();
    const interval = setInterval(updateHubClocks, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#040810] border-t border-slate-800/80 text-slate-300 relative overflow-hidden">
      {/* Background bathymetric grid lines */}
      <div className="absolute inset-0 bg-bathy-mesh opacity-20 pointer-events-none"></div>

      {/* Global Marine Operations Hub Clocks Bar */}
      <div className="border-b border-slate-800/60 bg-[#060c18]/80 py-3 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between text-xs font-mono text-slate-400 gap-4">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              <span className="text-slate-300 font-semibold tracking-wider uppercase">Global Mission Stations</span>
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-1.5">
                <span className="text-slate-500">BOS (HQ):</span>
                <span className="text-cyan-300 font-medium">{times.boston || '--:--'} UTC-4</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <span className="text-slate-500">ABZ (Ops):</span>
                <span className="text-cyan-300 font-medium">{times.aberdeen || '--:--'} UTC+1</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <span className="text-slate-500">SIN (Lab):</span>
                <span className="text-cyan-300 font-medium">{times.singapore || '--:--'} UTC+8</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Info & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-9 h-9 rounded-lg bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center">
                <svg className="w-5 h-5 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" strokeOpacity="0.4" />
                  <circle cx="12" cy="12" r="6" strokeOpacity="0.7" />
                  <circle cx="12" cy="12" r="2" fill="#38bdf8" />
                  <path d="M12 2a10 10 0 0 1 10 10" stroke="#38bdf8" strokeWidth="2.5" />
                </svg>
              </div>
              <span className="text-xl font-bold tracking-tight text-white font-display">
                VESPER <span className="text-cyan-400 font-light">MARINE</span>
              </span>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Pioneering autonomous subsea robotic swarms, high-resolution synthetic aperture acoustic imaging, and persistent ocean infrastructure intelligence down to 6,000 meters.
            </p>

            {/* Certifications & Compliance Badges */}
            <div className="pt-2">
              <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mb-2">
                Certified Operational Standards
              </div>
              <div className="flex flex-wrap gap-2 text-xs font-mono">
                <span className="inline-flex items-center px-2.5 py-1 rounded bg-slate-900 border border-slate-700/60 text-slate-300">
                  <Award className="w-3.5 h-3.5 mr-1 text-cyan-400" /> DNV-GL Subsea
                </span>
                <span className="inline-flex items-center px-2.5 py-1 rounded bg-slate-900 border border-slate-700/60 text-slate-300">
                  <Shield className="w-3.5 h-3.5 mr-1 text-emerald-400" /> ISO 9001 / 14001
                </span>
                <span className="inline-flex items-center px-2.5 py-1 rounded bg-slate-900 border border-slate-700/60 text-slate-300">
                  <Radio className="w-3.5 h-3.5 mr-1 text-blue-400" /> IMO COLREGs L4
                </span>
              </div>
            </div>
          </div>

          {/* Solutions Column */}
          <div className="space-y-3">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400">
              Solutions
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/solutions#offshore-wind" className="text-slate-400 hover:text-white transition-colors">
                  Offshore Wind & Cables
                </Link>
              </li>
              <li>
                <Link to="/solutions#subsea-infrastructure" className="text-slate-400 hover:text-white transition-colors">
                  Deepwater Flowlines & Telecom
                </Link>
              </li>
              <li>
                <Link to="/solutions#ocean-science" className="text-slate-400 hover:text-white transition-colors">
                  eDNA & Ocean Carbon Flux
                </Link>
              </li>
              <li>
                <Link to="/solutions#defense-harbor" className="text-slate-400 hover:text-white transition-colors">
                  Port & Harbor Subsea Security
                </Link>
              </li>
              <li>
                <Link to="/fleet" className="text-slate-400 hover:text-white transition-colors">
                  Robotic Fleet Catalogue
                </Link>
              </li>
            </ul>
          </div>

          {/* Operations & Company Column */}
          <div className="space-y-3">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400">
              Operations & Org
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/missions" className="text-slate-400 hover:text-white transition-colors">
                  Mission Case Studies
                </Link>
              </li>
              <li>
                <Link to="/mission-control" className="text-slate-400 hover:text-white transition-colors">
                  Live Operations Center
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-white transition-colors">
                  Scientific Heritage & Team
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-slate-400 hover:text-white transition-colors flex items-center justify-between">
                  <span>Careers & Field Roles</span>
                  <span className="px-1.5 py-0.5 rounded text-[10px] bg-cyan-950 text-cyan-300 border border-cyan-500/30">Hiring</span>
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-slate-400 hover:text-white transition-colors">
                  Technical Specifications FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Subsea Intel Brief Newsletter */}
          <div className="space-y-3">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400">
              Subsea Intel Brief
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Quarterly research briefing on autonomous subsea acoustic navigation, cable burial analytics, and ocean sensor tech.
            </p>

            {subscribed ? (
              <div className="p-3 bg-emerald-950/40 border border-emerald-500/30 rounded-lg text-xs text-emerald-300 flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
                <span>Subscribed to Vesper Technical Briefings.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="marine.engineer@energy.com"
                    required
                    className="w-full px-3 py-2 bg-slate-900/90 border border-slate-700/80 rounded-lg text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2 px-3 text-xs font-medium text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors flex items-center justify-center space-x-1"
                >
                  <span>Subscribe to Intel</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}

            <div className="pt-2 text-[11px] text-slate-500 font-mono">
              Emergency 24/7 Subsea Ops: <span className="text-slate-300">+1 (617) 555-0198</span>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Attribution Bar */}
        <div className="mt-14 pt-8 border-t border-slate-800/70 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center space-x-2">
            <span>© {new Date().getFullYear()} Vesper Marine Dynamics Inc. All rights reserved.</span>
            <span>•</span>
            <span className="text-slate-400">SOC 2 Type II Certified</span>
          </div>

          {/* REQUIRED ATTRIBUTION */}
          <div className="text-center md:text-right">
            <span className="inline-block px-3 py-1 rounded-md bg-slate-900/80 border border-cyan-500/30 text-cyan-300 font-medium">
              Designed &amp; Developed by Dhanyasree
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
