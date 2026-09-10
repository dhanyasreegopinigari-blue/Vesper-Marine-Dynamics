import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  HelpCircle, ChevronDown, Search, 
  ArrowRight, ShieldCheck, Mail, Compass 
} from 'lucide-react';
import { faqItems } from '../data/commonData';

export const FAQPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openFaqIds, setOpenFaqIds] = useState<string[]>(['faq-1', 'faq-3']);

  const categories = ['All', 'Autonomy & SLAM', 'Deployment & Fleet', 'Data Security & Cloud', 'Environmental Compliance', 'Procurement'];

  const toggleFaq = (id: string) => {
    if (openFaqIds.includes(id)) {
      setOpenFaqIds(openFaqIds.filter(item => item !== id));
    } else {
      setOpenFaqIds([...openFaqIds, id]);
    }
  };

  const filteredFaqs = faqItems.filter(item => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-32 pb-24 space-y-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950 border border-cyan-500/40 text-xs font-mono text-cyan-300">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Technical Knowledge Base</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
          Frequently Asked Questions.
        </h1>
        <p className="text-base text-slate-300 leading-relaxed">
          Detailed technical specifications, acoustic communication protocols, deployment requirements, and procurement guidelines for Vesper subsea systems.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="space-y-4">
        <div className="relative max-w-xl mx-auto">
          <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions (e.g. SLAM, encryption, LARS, currents)..."
            className="w-full pl-10 pr-4 py-3 bg-[#081020] border border-slate-800 rounded-xl text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-400 shadow-lg"
          />
        </div>

        {/* Categories Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                selectedCategory === cat
                  ? 'bg-cyan-400 text-slate-950 font-bold'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Accordion List */}
      <div className="space-y-3">
        {filteredFaqs.map((faq) => {
          const isOpen = openFaqIds.includes(faq.id);
          return (
            <div
              key={faq.id}
              className="bg-[#081020] rounded-2xl border border-slate-800/80 overflow-hidden transition-all"
            >
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-slate-900/40 transition-colors"
                aria-expanded={isOpen}
              >
                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase text-cyan-400 tracking-wider">
                    {faq.category}
                  </span>
                  <div className="text-base sm:text-lg font-bold text-white">
                    {faq.question}
                  </div>
                </div>

                <div className={`w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-cyan-400 border-cyan-500/40' : ''}`}>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              {isOpen && (
                <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 bg-[#060c18]/50">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}

        {filteredFaqs.length === 0 && (
          <div className="text-center py-12 text-slate-400 text-sm font-mono">
            No matching questions found for "{searchQuery}".
          </div>
        )}
      </div>

      {/* Direct Contact Prompt */}
      <div className="p-8 rounded-2xl bg-[#070e1c] border border-cyan-500/30 text-center space-y-4">
        <h3 className="text-xl font-bold text-white">Have a Unique Technical or Procurement Query?</h3>
        <p className="text-xs text-slate-300 max-w-lg mx-auto">
          Our subsea systems engineering commanders are ready to answer specialized hydrodynamic, sensor payload, or custom charter inquiries.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center space-x-2 px-6 py-3 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold rounded-xl text-xs transition-colors"
        >
          <span>Contact Engineering Desk</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

    </div>
  );
};
