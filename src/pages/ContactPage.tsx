import React from 'react';
import { 
  MapPin, Phone, Mail, Clock, ShieldCheck, 
  Compass, Radio, Award, ArrowRight 
} from 'lucide-react';
import { ContactMissionForm } from '../components/interactive/ContactMissionForm';

export const ContactPage: React.FC = () => {
  const hubs = [
    {
      city: 'Boston, Massachusetts (HQ)',
      role: 'Global Headquarters & Autonomy Engineering',
      address: '400 Technology Square, Suite 800, Cambridge, MA 02139',
      phone: '+1 (617) 555-0198',
      email: 'boston.ops@vespermarine.io',
      timezone: 'UTC -4 (Eastern Daylight Time)'
    },
    {
      city: 'Aberdeen, Scotland (UK Hub)',
      role: 'North Sea Field Operations & Pressure Tank Facility',
      address: 'Harbour Point Operations Base, Regent Quay, Aberdeen AB11 5SS',
      phone: '+44 1224 550192',
      email: 'aberdeen.ops@vespermarine.io',
      timezone: 'UTC +1 (British Summer Time)'
    },
    {
      city: 'Singapore (Asia-Pacific Hub)',
      role: 'Tropical Shallow-Water Lab & APAC Service Center',
      address: '15 Marina Way, Level 18, Marina Bay, Singapore 018981',
      phone: '+65 6789 0122',
      email: 'singapore.ops@vespermarine.io',
      timezone: 'UTC +8 (Singapore Standard Time)'
    }
  ];

  return (
    <div className="pt-32 pb-24 space-y-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950 border border-cyan-500/40 text-xs font-mono text-cyan-300">
          <Compass className="w-3.5 h-3.5" />
          <span>Global Mission Stations</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
          Scope Your Autonomous Subsea Deployment.
        </h1>
        <p className="text-lg text-slate-300 leading-relaxed">
          Submit your project requirements directly to our on-duty mission commanders or contact our international operations desks in Boston, Aberdeen, and Singapore.
        </p>
      </div>

      {/* Main Scoping Form Section */}
      <section>
        <ContactMissionForm />
      </section>

      {/* Operational Hubs Grid */}
      <div className="space-y-8 pt-8">
        <div>
          <div className="text-xs font-mono uppercase text-cyan-400 tracking-wider">
            Station Network
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1 font-display">
            International Operating Desks
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {hubs.map((hub, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-[#081020] border border-slate-800 space-y-4 hover:border-cyan-500/40 transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-cyan-400">
                  <MapPin className="w-4 h-4 shrink-0" />
                  <span className="font-bold text-sm text-white">{hub.city}</span>
                </div>
                <p className="text-xs text-cyan-300 font-mono">{hub.role}</p>
                <p className="text-xs text-slate-400 leading-relaxed">{hub.address}</p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 space-y-2 text-xs font-mono text-slate-300">
                <div className="flex items-center space-x-2">
                  <Phone className="w-3.5 h-3.5 text-slate-500" />
                  <a href={`tel:${hub.phone}`} className="hover:text-cyan-300 transition-colors">
                    {hub.phone}
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-3.5 h-3.5 text-slate-500" />
                  <a href={`mailto:${hub.email}`} className="hover:text-cyan-300 transition-colors">
                    {hub.email}
                  </a>
                </div>
                <div className="flex items-center space-x-2 text-[11px] text-slate-500">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{hub.timezone}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Emergency Hotline & Compliance Strip */}
      <div className="p-6 rounded-2xl bg-[#070e1a] border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
        <div className="flex items-center space-x-3">
          <div className="w-3 h-3 rounded-full bg-rose-500 animate-ping"></div>
          <div>
            <span className="text-white font-bold">24/7 Subsea Emergency Incident Desk:</span>{' '}
            <span className="text-rose-400 font-bold">+1 (617) 555-0199</span>
          </div>
        </div>
        <div className="flex items-center space-x-2 text-emerald-400">
          <ShieldCheck className="w-4 h-4" />
          <span>SOC 2 Type II • ISO 27001 Marine Protocol Active</span>
        </div>
      </div>

    </div>
  );
};
