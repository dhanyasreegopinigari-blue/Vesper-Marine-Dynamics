import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, X, ChevronDown, Activity, 
  ArrowRight, ShieldCheck, Waves, Compass, 
  Cpu, FileText, Globe
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [solutionsDropdown, setSolutionsDropdown] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setSolutionsDropdown(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Solutions', path: '/solutions', hasDropdown: true },
    { name: 'Fleet', path: '/fleet' },
    { name: 'Missions & Work', path: '/missions' },
    { name: 'Live Ops', path: '/mission-control' },
    { name: 'About', path: '/about' },
    { name: 'Careers', path: '/careers' },
    { name: 'FAQ', path: '/faq' },
  ];

  const solutionsList = [
    { name: 'Offshore Wind & Renewables', path: '/solutions#offshore-wind', desc: 'Cable tracking & scour monitoring' },
    { name: 'Deepwater Pipelines & Telecom', path: '/solutions#subsea-infrastructure', desc: '6,000m abyssal asset inspection' },
    { name: 'Ocean Science & Blue Carbon', path: '/solutions#ocean-science', desc: 'eDNA sampling & biogeochemistry' },
    { name: 'Harbor Security & Critical Nodes', path: '/solutions#defense-harbor', desc: 'Zero-visibility acoustic sweeps' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#060b14]/90 backdrop-blur-md border-b border-cyan-500/15 py-3 shadow-lg shadow-black/40' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 group focus:outline-none"
            aria-label="Vesper Marine Dynamics Home"
          >
            <div className="relative w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-600/30 border border-cyan-500/40 flex items-center justify-center overflow-hidden group-hover:border-cyan-400 transition-colors">
              <span className="absolute inset-0 bg-cyan-400/10 animate-pulse-subtle"></span>
              {/* Sonar Icon */}
              <svg className="w-5 h-5 text-cyan-400 transition-transform duration-500 group-hover:rotate-45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" strokeOpacity="0.4" />
                <circle cx="12" cy="12" r="6" strokeOpacity="0.7" />
                <circle cx="12" cy="12" r="2" fill="#38bdf8" />
                <path d="M12 2a10 10 0 0 1 10 10" stroke="#38bdf8" strokeWidth="2.5" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-white font-display leading-tight group-hover:text-cyan-300 transition-colors">
                VESPER <span className="text-cyan-400 font-light">MARINE</span>
              </span>
              <span className="text-[10px] tracking-widest text-slate-400 uppercase font-mono">
                Subsea Dynamics
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setSolutionsDropdown(true)}
                    onMouseLeave={() => setSolutionsDropdown(false)}
                  >
                    <Link
                      to={link.path}
                      className={`px-3.5 py-2 text-sm font-medium rounded-md transition-colors inline-flex items-center space-x-1 ${
                        isActive(link.path)
                          ? 'text-cyan-400 bg-cyan-950/40 border border-cyan-500/20'
                          : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown className="w-3.5 h-3.5 opacity-60 group-hover:rotate-180 transition-transform duration-200" />
                    </Link>

                    {/* Solutions Dropdown Menu */}
                    {solutionsDropdown && (
                      <div className="absolute top-full left-0 w-80 mt-1 py-2 bg-[#091220] border border-cyan-500/20 rounded-xl shadow-2xl shadow-black/80 backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-150">
                        <div className="px-3 py-1.5 border-b border-slate-800 text-[11px] font-mono uppercase tracking-wider text-cyan-400/80">
                          Sector Capabilities
                        </div>
                        {solutionsList.map((sol) => (
                          <Link
                            key={sol.name}
                            to={sol.path}
                            className="block px-4 py-2.5 hover:bg-slate-800/60 transition-colors group/item"
                          >
                            <div className="text-sm font-medium text-slate-200 group-hover/item:text-cyan-300">
                              {sol.name}
                            </div>
                            <div className="text-xs text-slate-400">
                              {sol.desc}
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    className={`px-3.5 py-2 text-sm font-medium rounded-md transition-colors ${
                      isActive(link.path)
                        ? 'text-cyan-400 bg-cyan-950/40 border border-cyan-500/20'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Right Header Status & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Live Swarm Pill */}
            <Link
              to="/mission-control"
              className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-emerald-500/30 text-xs font-mono text-emerald-400 hover:border-emerald-400 transition-colors"
              title="View live active subsea swarms"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>4 Swarms Active</span>
            </Link>

            {/* Scope Mission Button */}
            <Link
              to="/contact"
              className="relative inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-slate-950 bg-cyan-400 rounded-lg hover:bg-cyan-300 transition-all duration-200 shadow-sm shadow-cyan-500/20 hover:shadow-cyan-400/30 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Scope Mission</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 lg:hidden">
            <Link
              to="/mission-control"
              className="p-2 text-emerald-400 bg-slate-900/80 border border-emerald-500/30 rounded-lg text-xs"
              aria-label="Live Telemetry"
            >
              <Activity className="w-4 h-4" />
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/60 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              aria-expanded={isOpen}
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-[#070e1a]/95 backdrop-blur-2xl border-b border-cyan-500/20 px-6 py-6 shadow-2xl transition-all max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col space-y-3">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">Navigation</span>
              <span className="text-xs font-mono text-slate-400">Status: Operations Normal</span>
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center justify-between py-2.5 px-3 rounded-lg text-base font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-cyan-400 bg-cyan-950/50 border border-cyan-500/30'
                    : 'text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                <span>{link.name}</span>
                <ArrowRight className="w-4 h-4 opacity-50" />
              </Link>
            ))}

            <div className="pt-4 mt-2 border-t border-slate-800 flex flex-col space-y-3">
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center px-5 py-3 text-sm font-semibold text-slate-950 bg-cyan-400 rounded-lg hover:bg-cyan-300 transition-colors shadow-lg shadow-cyan-500/20"
              >
                <span>Request Mission Scope</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <div className="text-center text-xs font-mono text-slate-500 pt-2">
                VESPER MARINE DYNAMICS • ISO 9001 / DNV CERTIFIED
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
