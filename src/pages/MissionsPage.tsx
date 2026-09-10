import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { 
  Compass, Filter, MapPin, Calendar, 
  ArrowRight, ShieldCheck, CheckCircle2, Waves, Search 
} from 'lucide-react';
import { missionCaseStudies } from '../data/missionsData';

export const MissionsPage: React.FC = () => {
  const [selectedSector, setSelectedSector] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  const sectors = ['All', 'Offshore Wind', 'Deepwater Infrastructure', 'Ocean Science', 'Subsea Telemetry'];

  const filteredMissions = missionCaseStudies.filter(mission => {
    const matchesSector = selectedSector === 'All' || mission.sector === selectedSector;
    const matchesSearch = searchQuery === '' || 
      mission.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mission.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mission.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSector && matchesSearch;
  });

  return (
    <div className="pt-32 pb-24 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950 border border-cyan-500/40 text-xs font-mono text-cyan-300">
          <Compass className="w-3.5 h-3.5" />
          <span>Empirical Field Campaigns</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
          Subsea Mission Archives &amp; Case Studies.
        </h1>
        <p className="text-lg text-slate-300 leading-relaxed">
          Explore documented deployments across the North Sea, Gulf of Mexico, Mid-Atlantic Ridge, and transoceanic fiber routes demonstrating verified cost savings and carbon avoidance.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="p-4 bg-[#081020] rounded-2xl border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Sector Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
          {sectors.map((sec) => (
            <button
              key={sec}
              onClick={() => setSelectedSector(sec)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                selectedSector === sec
                  ? 'bg-cyan-400 text-slate-950 font-bold shadow'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {sec}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search basin, client, or cable..."
            className="w-full pl-9 pr-4 py-2 bg-slate-900 border border-slate-800 rounded-lg text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-400"
          />
        </div>

      </div>

      {/* Case Studies Grid */}
      <div className="space-y-16">
        {filteredMissions.map((mission) => (
          <div
            key={mission.id}
            id={mission.id}
            className="scroll-mt-32 p-8 md:p-12 rounded-3xl bg-[#081020] border border-slate-800 space-y-8"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              
              {/* Media & Meta (5 Cols) */}
              <div className="lg:col-span-5 space-y-6">
                <div className="h-72 rounded-2xl overflow-hidden border border-slate-800 relative">
                  <img
                    src={mission.heroImage}
                    alt={mission.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded bg-slate-950/90 border border-slate-700 text-xs font-mono text-cyan-300">
                    {mission.sector}
                  </div>
                  <div className="absolute bottom-3 right-3 px-3 py-1 rounded bg-slate-950/90 border border-slate-700 text-xs font-mono text-slate-300">
                    {mission.year} Campaign
                  </div>
                </div>

                <div className="p-4 bg-[#050b16] rounded-2xl border border-slate-800 space-y-2 text-xs font-mono">
                  <div className="flex justify-between border-b border-slate-800/80 pb-2">
                    <span className="text-slate-500">Client / Operator:</span>
                    <span className="text-white font-semibold">{mission.client}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-800/80 pb-2">
                    <span className="text-slate-500">Basin Location:</span>
                    <span className="text-cyan-300">{mission.location}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-800/80 pb-2">
                    <span className="text-slate-500">Operational Depth:</span>
                    <span className="text-white font-bold">{mission.depthMeters} Meters</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Campaign Duration:</span>
                    <span className="text-emerald-400">{mission.durationDays} Days Uncrewed</span>
                  </div>
                </div>

                {/* Vehicles Deployed */}
                <div>
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                    Robotic Spread Deployed:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {mission.vehicleDeployments.map((v, i) => (
                      <span key={i} className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
                        {v}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Details & Telemetry Impact (7 Cols) */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">{mission.title}</h2>
                  <p className="text-sm text-slate-300 mt-2 leading-relaxed">{mission.overview}</p>
                </div>

                {/* Challenge & Autonomous Solution */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-900/70 rounded-xl border border-slate-800 space-y-1">
                    <div className="text-xs font-mono uppercase text-amber-400 font-bold">Operational Challenge</div>
                    <p className="text-xs text-slate-300 leading-relaxed">{mission.challenge}</p>
                  </div>

                  <div className="p-4 bg-slate-900/70 rounded-xl border border-slate-800 space-y-1">
                    <div className="text-xs font-mono uppercase text-cyan-400 font-bold">Autonomous Solution</div>
                    <p className="text-xs text-slate-300 leading-relaxed">{mission.solutionProvided}</p>
                  </div>
                </div>

                {/* Key Empirical Impact Metrics */}
                <div>
                  <div className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-2">
                    Verified Campaign Outcomes:
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {mission.impactMetrics.map((metric, i) => (
                      <div key={i} className="p-3 bg-slate-900/90 rounded-xl border border-slate-800 text-center">
                        <div className="text-xl font-bold text-cyan-300 font-mono">{metric.value}</div>
                        <div className="text-[10px] text-slate-400 mt-0.5">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Telemetry Highlights */}
                <div className="p-4 bg-cyan-950/20 rounded-xl border border-cyan-500/20 space-y-2">
                  <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                    Acoustic Telemetry &amp; SLAM Findings:
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {mission.telemetryHighlights.map((highlight, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2">
                  <Link
                    to="/contact"
                    className="inline-flex items-center space-x-2 px-5 py-2.5 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold rounded-lg text-xs transition-colors"
                  >
                    <span>Request Replicate Campaign Proposal</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

              </div>

            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
