import React from 'react';
import { Radio, Activity, Compass, ShieldCheck, ArrowRight } from 'lucide-react';
import { LiveTelemetryCenter } from '../components/interactive/LiveTelemetryCenter';
import { Link } from 'react-router-dom';

export const MissionControlPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-950 border border-emerald-500/40 text-xs font-mono text-emerald-300">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          <span>Global Telemetry Uplink Online</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
          Subsea Mission Control Center.
        </h1>
        <p className="text-lg text-slate-300 leading-relaxed">
          Monitor real-time acoustic telemetry, autonomous AUV swarm coordinates, and automated AI anomaly classifications streamed via encrypted LEO satellite gateways from active offshore deployments.
        </p>
      </div>

      {/* Main Interactive Live Console */}
      <LiveTelemetryCenter />

      {/* Operations Protocol Notice */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
        <div className="p-6 rounded-2xl bg-[#081020] border border-slate-800 space-y-2">
          <div className="text-xs font-mono text-cyan-400 font-bold uppercase">Starlink Maritime Uplink</div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Surface USVs convert high-frequency underwater acoustic packets into high-throughput LEO satellite data streams with 400ms latency.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[#081020] border border-slate-800 space-y-2">
          <div className="text-xs font-mono text-emerald-400 font-bold uppercase">SOC 2 Type II Encrypted</div>
          <p className="text-xs text-slate-300 leading-relaxed">
            All subsea telemetry, bathymetric point-clouds, and infrastructure coordinate models are secured with hardware-level AES-256 GCM encryption.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[#081020] border border-slate-800 space-y-2">
          <div className="text-xs font-mono text-cyan-300 font-bold uppercase">24/7 Watchstander Crew</div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Certified marine engineers and oceanographers monitor fleet health continuously across Boston, Aberdeen, and Singapore control desks.
          </p>
        </div>
      </div>

      {/* Dispatch CTA */}
      <div className="p-8 rounded-2xl bg-gradient-to-r from-cyan-950/40 to-slate-900 border border-cyan-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="text-xl font-bold text-white">Need a Dedicated Subsea Operations Portal?</h2>
          <p className="text-xs text-slate-300 mt-1">
            Enterprise clients receive custom air-gapped web portals and real-time GIS API feeds during active campaigns.
          </p>
        </div>
        <Link
          to="/contact"
          className="px-6 py-3 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold rounded-xl text-xs whitespace-nowrap transition-colors flex items-center space-x-2 shrink-0"
        >
          <span>Request Mission Access</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

    </div>
  );
};
