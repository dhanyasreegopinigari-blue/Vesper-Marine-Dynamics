import React, { useState } from 'react';
import { 
  Send, CheckCircle2, ShieldCheck, FileText, 
  Download, RefreshCw, AlertCircle, ArrowRight, 
  MapPin, Calendar, Compass, Layers 
} from 'lucide-react';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  organization: string;
  sector: string;
  waterDepth: string;
  surveyDistanceKm: string;
  operatingBasin: string;
  targetTimeline: string;
  sensorsRequired: string[];
  projectBrief: string;
}

export const ContactMissionForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    organization: '',
    sector: 'Offshore Wind & Renewables',
    waterDepth: '100m - 500m (Continental Shelf)',
    surveyDistanceKm: '150',
    operatingBasin: 'North Sea (Dogger / Viking Graben)',
    targetTimeline: 'Q1 / Q2 2026',
    sensorsRequired: ['Synthetic Aperture Sonar (SAS)', 'Subsea Laser LiDAR'],
    projectBrief: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [missionReferenceId, setMissionReferenceId] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const toggleSensor = (sensor: string) => {
    if (formData.sensorsRequired.includes(sensor)) {
      setFormData({
        ...formData,
        sensorsRequired: formData.sensorsRequired.filter(s => s !== sensor)
      });
    } else {
      setFormData({
        ...formData,
        sensorsRequired: [...formData.sensorsRequired, sensor]
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.organization) {
      setErrorMessage('Please fill in all required contact and organization details.');
      return;
    }
    setErrorMessage('');
    setIsSubmitting(true);

    // Simulate enterprise backend dispatch
    setTimeout(() => {
      const generatedId = `VMD-MSN-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
      setMissionReferenceId(generatedId);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const handleDownloadSummary = () => {
    const content = `=======================================================\n` +
      `VESPER MARINE DYNAMICS - MISSION SCOPING SUBMISSION\n` +
      `Reference ID: ${missionReferenceId}\n` +
      `Date: ${new Date().toISOString()}\n` +
      `=======================================================\n\n` +
      `PRIMARY CONTACT:\n` +
      `Name: ${formData.fullName}\n` +
      `Organization: ${formData.organization}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone || 'N/A'}\n\n` +
      `MISSION SCOPE:\n` +
      `Vertical Sector: ${formData.sector}\n` +
      `Operating Water Depth: ${formData.waterDepth}\n` +
      `Estimated Survey Scope: ${formData.surveyDistanceKm} km\n` +
      `Target Maritime Basin: ${formData.operatingBasin}\n` +
      `Execution Window: ${formData.targetTimeline}\n\n` +
      `REQUIRED SENSOR ARRAYS:\n` +
      formData.sensorsRequired.map(s => ` - ${s}`).join('\n') + `\n\n` +
      `PROJECT BRIEF:\n` +
      `${formData.projectBrief || 'Turnkey autonomous campaign scoping requested.'}\n\n` +
      `CONFIDENTIALITY & DATA SECURITY:\n` +
      `Protected under Vesper SOC-2 Type II and ISO 27001 Marine Protocol.\n` +
      `A dedicated Vesper Mission Commander will review and reply within 4 business hours.\n`;

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${missionReferenceId}-Mission-Scope.txt`;
    a.click();
  };

  return (
    <div className="bg-[#080f1e] rounded-2xl border border-cyan-500/25 p-6 md:p-10 shadow-2xl relative">
      
      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="space-y-8">
          
          {errorMessage && (
            <div className="p-4 bg-rose-950/50 border border-rose-500/40 rounded-xl text-rose-200 text-sm flex items-center space-x-2">
              <AlertCircle className="w-5 h-5 shrink-0 text-rose-400" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Section 1: Contact & Organization */}
          <div>
            <div className="text-xs font-mono uppercase text-cyan-400 tracking-wider mb-1 flex items-center space-x-2">
              <span className="w-5 h-5 rounded-full bg-cyan-950 border border-cyan-500/40 text-cyan-300 flex items-center justify-center text-[10px]">1</span>
              <span>Client &amp; Operational Leadership</span>
            </div>
            <h3 className="text-lg font-bold text-white mb-4">Point of Contact</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5">
                  Full Name <span className="text-cyan-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Captain Jonathan Hayes"
                  className="w-full px-4 py-2.5 bg-slate-900/80 border border-slate-700/80 rounded-lg text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5">
                  Enterprise / Organization <span className="text-cyan-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  placeholder="e.g. Equinor Offshore Wind / NOAA"
                  className="w-full px-4 py-2.5 bg-slate-900/80 border border-slate-700/80 rounded-lg text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5">
                  Corporate Email <span className="text-cyan-400">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="j.hayes@enterprise.com"
                  className="w-full px-4 py-2.5 bg-slate-900/80 border border-slate-700/80 rounded-lg text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5">
                  Direct Telephone
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+44 1224 550192"
                  className="w-full px-4 py-2.5 bg-slate-900/80 border border-slate-700/80 rounded-lg text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Section 2: Mission Parameters */}
          <div className="pt-6 border-t border-slate-800">
            <div className="text-xs font-mono uppercase text-cyan-400 tracking-wider mb-1 flex items-center space-x-2">
              <span className="w-5 h-5 rounded-full bg-cyan-950 border border-cyan-500/40 text-cyan-300 flex items-center justify-center text-[10px]">2</span>
              <span>Subsea Mission Parameters</span>
            </div>
            <h3 className="text-lg font-bold text-white mb-4">Deployment Scope</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5">Industry Sector</label>
                <select
                  value={formData.sector}
                  onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                  className="w-full px-4 py-2.5 bg-slate-900/80 border border-slate-700/80 rounded-lg text-sm text-slate-100 focus:outline-none focus:border-cyan-400"
                >
                  <option>Offshore Wind & Renewables</option>
                  <option>Deepwater Pipelines & Flowlines</option>
                  <option>Transoceanic Telecom & Power Cables</option>
                  <option>Marine Biosystems & eDNA Baseline</option>
                  <option>Harbor Security & Defense Reconnaissance</option>
                  <option>Custom Abyssal Research Expedition</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5">Operating Depth Tier</label>
                <select
                  value={formData.waterDepth}
                  onChange={(e) => setFormData({ ...formData, waterDepth: e.target.value })}
                  className="w-full px-4 py-2.5 bg-slate-900/80 border border-slate-700/80 rounded-lg text-sm text-slate-100 focus:outline-none focus:border-cyan-400"
                >
                  <option>0m - 100m (Coastal / Inter-Array)</option>
                  <option>100m - 500m (Continental Shelf)</option>
                  <option>500m - 3,000m (Deepwater Slope)</option>
                  <option>3,000m - 6,000m (Abyssal Plain)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5">Survey Scope (Kilometers)</label>
                <input
                  type="number"
                  value={formData.surveyDistanceKm}
                  onChange={(e) => setFormData({ ...formData, surveyDistanceKm: e.target.value })}
                  placeholder="150"
                  className="w-full px-4 py-2.5 bg-slate-900/80 border border-slate-700/80 rounded-lg text-sm text-slate-100 focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5">Target Geographic Basin</label>
                <input
                  type="text"
                  value={formData.operatingBasin}
                  onChange={(e) => setFormData({ ...formData, operatingBasin: e.target.value })}
                  placeholder="e.g. North Sea / Gulf of Mexico / Pacific"
                  className="w-full px-4 py-2.5 bg-slate-900/80 border border-slate-700/80 rounded-lg text-sm text-slate-100 focus:outline-none focus:border-cyan-400"
                />
              </div>
            </div>
          </div>

          {/* Section 3: Sensor Array & Brief */}
          <div className="pt-6 border-t border-slate-800">
            <div className="text-xs font-mono uppercase text-cyan-400 tracking-wider mb-1 flex items-center space-x-2">
              <span className="w-5 h-5 rounded-full bg-cyan-950 border border-cyan-500/40 text-cyan-300 flex items-center justify-center text-[10px]">3</span>
              <span>Payload Calibration &amp; Objectives</span>
            </div>
            <h3 className="text-lg font-bold text-white mb-4">Required Sensor Payloads</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
              {[
                'Synthetic Aperture Sonar (SAS)',
                'Subsea Laser LiDAR',
                'Sub-Bottom Chirp Profiler',
                'Cathodic Protection (CP) Sensor',
                'In-Situ eDNA Filtration System',
                'Optical 4K Stereo Photogrammetry',
              ].map((sensor) => {
                const isSelected = formData.sensorsRequired.includes(sensor);
                return (
                  <button
                    type="button"
                    key={sensor}
                    onClick={() => toggleSensor(sensor)}
                    className={`p-3 rounded-lg text-left text-xs font-mono flex items-center justify-between border transition-all ${
                      isSelected
                        ? 'bg-cyan-950/60 border-cyan-400 text-cyan-200'
                        : 'bg-slate-900/50 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    <span>{sensor}</span>
                    <span className={`w-4 h-4 rounded flex items-center justify-center text-[10px] ${
                      isSelected ? 'bg-cyan-500 text-slate-950 font-bold' : 'border border-slate-700'
                    }`}>
                      {isSelected ? '✓' : '+'}
                    </span>
                  </button>
                );
              })}
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-300 mb-1.5">
                Detailed Mission Objectives &amp; Special Requirements
              </label>
              <textarea
                rows={3}
                value={formData.projectBrief}
                onChange={(e) => setFormData({ ...formData, projectBrief: e.target.value })}
                placeholder="Describe your asset geometry, cable burial depth targets, geotechnical constraints, or specific data format deliverables (BAG, XYZ, CAD)..."
                className="w-full px-4 py-2.5 bg-slate-900/80 border border-slate-700/80 rounded-lg text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-400"
              />
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-2 text-xs font-mono text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>SOC-2 Type II NDA &amp; Export Compliance Protected</span>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto px-8 py-3.5 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold rounded-xl text-sm transition-all shadow-lg shadow-cyan-500/20 flex items-center justify-center space-x-2"
            >
              {isSubmitting ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Processing Telemetry Dispatch...</span>
                </>
              ) : (
                <>
                  <span>Dispatch Mission Scope</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </div>

        </form>
      ) : (
        /* Submission Success Receipt */
        <div className="text-center py-8 space-y-6">
          <div className="w-16 h-16 rounded-full bg-emerald-950 border-2 border-emerald-400 text-emerald-400 flex items-center justify-center mx-auto shadow-xl shadow-emerald-950/50">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div>
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
              Mission Scope Confirmed &amp; Logged
            </div>
            <h3 className="text-2xl font-bold text-white mt-1">
              Reference #{missionReferenceId}
            </h3>
            <p className="text-sm text-slate-300 max-w-lg mx-auto mt-2">
              Your autonomous mission scoping package has been encrypted and assigned to the Vesper Operations Commander on duty for the {formData.operatingBasin} zone.
            </p>
          </div>

          {/* Quick Details Card */}
          <div className="max-w-md mx-auto p-4 bg-slate-900/80 rounded-xl border border-slate-800 text-left text-xs font-mono space-y-2 text-slate-300">
            <div className="flex justify-between border-b border-slate-800 pb-1.5">
              <span className="text-slate-500">Client:</span>
              <span className="text-white font-bold">{formData.fullName} ({formData.organization})</span>
            </div>
            <div className="flex justify-between border-b border-slate-800 pb-1.5">
              <span className="text-slate-500">Sector:</span>
              <span className="text-cyan-300">{formData.sector}</span>
            </div>
            <div className="flex justify-between border-b border-slate-800 pb-1.5">
              <span className="text-slate-500">Scope:</span>
              <span>{formData.surveyDistanceKm} km ({formData.waterDepth})</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Service Level SLA:</span>
              <span className="text-emerald-400 font-bold">&lt; 4 Hours Engineering Review</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={handleDownloadSummary}
              className="px-5 py-2.5 rounded-xl bg-cyan-400 text-slate-950 font-semibold text-xs flex items-center space-x-2 hover:bg-cyan-300 transition-colors shadow"
            >
              <Download className="w-4 h-4" />
              <span>Download Mission Summary (.txt)</span>
            </button>

            <button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  ...formData,
                  projectBrief: '',
                });
              }}
              className="px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-300 text-xs font-mono hover:bg-slate-800 transition-colors"
            >
              Submit Another Scope
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
