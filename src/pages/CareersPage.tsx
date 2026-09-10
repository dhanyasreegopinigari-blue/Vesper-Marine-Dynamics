import React, { useState } from 'react';
import { 
  Briefcase, MapPin, CheckCircle2, ArrowRight, 
  Upload, X, RefreshCw, Compass, Shield, Waves, Award 
} from 'lucide-react';
import { jobOpenings } from '../data/commonData';
import { JobOpening } from '../types';

export const CareersPage: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantLinkedin, setApplicantLinkedin] = useState('');
  const [fileName, setFileName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  const closeApplicationModal = () => {
    setSelectedJob(null);
    setIsSubmitted(false);
    setApplicantName('');
    setApplicantEmail('');
    setApplicantLinkedin('');
    setFileName('');
  };

  return (
    <div className="pt-32 pb-24 space-y-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950 border border-cyan-500/40 text-xs font-mono text-cyan-300">
          <Briefcase className="w-3.5 h-3.5" />
          <span>Talent &amp; Oceanic Engineering</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
          Build the Robotics That Explore 70% of the Earth.
        </h1>
        <p className="text-lg text-slate-300 leading-relaxed">
          Join our multidisciplinary team of roboticists, hydrodynamicists, embedded firmware architects, and marine biologists building the future of autonomous subsea intelligence.
        </p>
      </div>

      {/* Perks & Culture Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-[#081020] border border-slate-800 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-cyan-950 border border-cyan-400 flex items-center justify-center text-cyan-300">
            <Waves className="w-5 h-5" />
          </div>
          <h2 className="text-lg font-bold text-white">Open-Water Trials &amp; Expeditions</h2>
          <p className="text-xs text-slate-300 leading-relaxed">
            Test your code and hardware in the Gulf of Maine, the North Sea fjords of Trondheim, and the Singapore Strait with full expedition stipends.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[#081020] border border-slate-800 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-cyan-950 border border-emerald-400 flex items-center justify-center text-emerald-300">
            <Award className="w-5 h-5" />
          </div>
          <h2 className="text-lg font-bold text-white">Meaningful Equity &amp; Ownership</h2>
          <p className="text-xs text-slate-300 leading-relaxed">
            Every permanent team member receives meaningful equity options in Vesper Marine Dynamics, aligning long-term impact with shared success.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[#081020] border border-slate-800 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-cyan-950 border border-blue-400 flex items-center justify-center text-blue-300">
            <Compass className="w-5 h-5" />
          </div>
          <h2 className="text-lg font-bold text-white">Cutting-Edge Prototyping Labs</h2>
          <p className="text-xs text-slate-300 leading-relaxed">
            Direct access to hyperbaric collapse chambers, 5-axis CNC titanium machining, and high-performance GPU neural training clusters.
          </p>
        </div>
      </div>

      {/* Open Roles Section */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs font-mono uppercase text-cyan-400 tracking-wider">Available Openings</div>
            <h2 className="text-2xl font-bold text-white mt-1 font-display">Active Engineering Positions</h2>
          </div>
          <span className="text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
            {jobOpenings.length} Positions Available
          </span>
        </div>

        <div className="space-y-4">
          {jobOpenings.map((job) => (
            <div
              key={job.id}
              className="p-6 rounded-2xl bg-[#081020] border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-500/30 text-xs font-mono">
                    {job.department}
                  </span>
                  <span className="px-2.5 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800 text-xs font-mono">
                    {job.experienceLevel}
                  </span>
                  <span className="px-2.5 py-0.5 rounded bg-slate-900 text-emerald-400 border border-slate-800 text-xs font-mono">
                    {job.type}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white">{job.title}</h3>
                <p className="text-xs text-slate-400 max-w-2xl leading-relaxed">
                  {job.description}
                </p>

                <div className="flex items-center space-x-4 text-xs font-mono text-slate-400 pt-1">
                  <span className="flex items-center space-x-1">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{job.location}</span>
                  </span>
                </div>
              </div>

              <button
                onClick={() => setSelectedJob(job)}
                className="px-5 py-2.5 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold rounded-xl text-xs transition-colors flex items-center justify-center space-x-1.5 whitespace-nowrap self-start md:self-center shrink-0"
              >
                <span>Apply for Role</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Application Modal */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#080f1e] border border-cyan-500/30 rounded-3xl p-6 md:p-8 max-w-xl w-full relative shadow-2xl max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={closeApplicationModal}
              className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>

            {!isSubmitted ? (
              <form onSubmit={handleApplySubmit} className="space-y-5">
                <div>
                  <div className="text-xs font-mono text-cyan-400 uppercase">Apply for Position</div>
                  <h3 className="text-xl font-bold text-white mt-0.5">{selectedJob.title}</h3>
                  <div className="text-xs text-slate-400 font-mono">{selectedJob.location} • {selectedJob.department}</div>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={applicantName}
                      onChange={(e) => setApplicantName(e.target.value)}
                      placeholder="Dr. Jordan Mitchell"
                      className="w-full px-3.5 py-2 bg-slate-900 border border-slate-700 rounded-lg text-xs text-slate-100 focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={applicantEmail}
                      onChange={(e) => setApplicantEmail(e.target.value)}
                      placeholder="jordan.mitchell@robotics.org"
                      className="w-full px-3.5 py-2 bg-slate-900 border border-slate-700 rounded-lg text-xs text-slate-100 focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1">LinkedIn / Portfolio / GitHub URL</label>
                    <input
                      type="url"
                      value={applicantLinkedin}
                      onChange={(e) => setApplicantLinkedin(e.target.value)}
                      placeholder="https://linkedin.com/in/jordan-mitchell"
                      className="w-full px-3.5 py-2 bg-slate-900 border border-slate-700 rounded-lg text-xs text-slate-100 focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1">Resume / CV (PDF or DOCX)</label>
                    <div className="border border-dashed border-slate-700 hover:border-cyan-400 rounded-lg p-4 text-center cursor-pointer bg-slate-900/50 transition-colors">
                      <input
                        type="file"
                        onChange={handleFileChange}
                        className="hidden"
                        id="resume-upload"
                        accept=".pdf,.docx,.doc"
                      />
                      <label htmlFor="resume-upload" className="cursor-pointer flex flex-col items-center space-y-1">
                        <Upload className="w-5 h-5 text-cyan-400" />
                        <span className="text-xs text-slate-300 font-mono">
                          {fileName ? fileName : 'Click to attach Resume / CV'}
                        </span>
                        <span className="text-[10px] text-slate-500">Max file size: 15MB</span>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-end space-x-3">
                  <button
                    type="button"
                    onClick={closeApplicationModal}
                    className="px-4 py-2 rounded-lg text-xs text-slate-400 hover:text-white"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-2.5 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold rounded-lg text-xs flex items-center space-x-1.5"
                  >
                    {isSubmitting ? (
                      <>
                        <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                        <span>Submitting Application...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Application</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center py-6 space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-950 border border-emerald-400 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Application Received</h3>
                  <p className="text-xs text-slate-300 mt-1">
                    Thank you {applicantName}. Our engineering recruitment team for {selectedJob.department} will review your credentials within 3 business days.
                  </p>
                </div>
                <button
                  onClick={closeApplicationModal}
                  className="px-6 py-2 bg-cyan-400 text-slate-950 font-semibold rounded-lg text-xs"
                >
                  Done
                </button>
              </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
};
