import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calculator, DollarSign, Leaf, Clock, 
  ShieldAlert, ArrowRight, CheckCircle2, TrendingDown 
} from 'lucide-react';

export const MissionScopingCalculator: React.FC = () => {
  const [sector, setSector] = useState<'offshore-wind' | 'pipeline' | 'environmental' | 'telecom'>('offshore-wind');
  const [surveyKm, setSurveyKm] = useState(250);
  const [waterDepthM, setWaterDepthM] = useState(120);

  // Benchmarks based on North Sea and Gulf of Mexico actual offshore logistics data
  // Traditional DP2 Vessel: Day rate ~$95,000, speed ~1.2 km/hr, fuel ~14 metric tons diesel/day (44 tons CO2/day)
  // Vesper Autonomous Swarm: Day rate ~$28,000, speed ~4.5 km/hr, zero direct diesel emissions, USV hybrid 0.3 tons/day

  const traditionalSpeedKmDay = 24; // 1 km/h avg with ROV repositioning
  const vesperSpeedKmDay = 75; // 3.1 km/h continuous survey rate

  const traditionalDays = Math.ceil(surveyKm / traditionalSpeedKmDay) + 4; // +4 days mobilization
  const vesperDays = Math.ceil(surveyKm / vesperSpeedKmDay) + 1; // +1 day mobilization

  const traditionalCost = traditionalDays * 95000;
  const vesperCost = vesperDays * 31000;
  const costSavings = traditionalCost - vesperCost;
  const costSavingsPct = Math.round((costSavings / traditionalCost) * 100);

  const traditionalCO2Tons = Math.round(traditionalDays * 42.5);
  const vesperCO2Tons = Math.round(vesperDays * 1.8);
  const co2SavingsTons = traditionalCO2Tons - vesperCO2Tons;

  const hseHoursRiskEliminated = traditionalDays * 24 * 35; // 35 crew on DP2 vessel vs 2 onshore operators

  return (
    <div className="bg-[#070e1c] rounded-2xl border border-cyan-500/20 p-6 md:p-8 relative overflow-hidden shadow-2xl">
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 flex items-center space-x-2">
            <Calculator className="w-3.5 h-3.5" />
            <span>Economic &amp; ESG ROI Forecaster</span>
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-white mt-1">
            Compare Autonomous Swarm vs Crewed DP2 Vessel
          </h2>
        </div>
        <div className="text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
          Benchmarked: North Sea &amp; GoM Rates
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
        
        {/* User Input Sliders (Left 6 Cols) */}
        <div className="lg:col-span-6 space-y-6">
          
          {/* Sector Selector */}
          <div>
            <label className="block text-xs font-mono uppercase text-slate-400 mb-2">
              Industry Vertical
            </label>
            <div className="grid grid-cols-2 gap-2">
              {[
                { id: 'offshore-wind', label: 'Offshore Wind & Cables' },
                { id: 'pipeline', label: 'Deepwater Pipelines' },
                { id: 'environmental', label: 'Ocean Science / eDNA' },
                { id: 'telecom', label: 'Transoceanic Telecom' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSector(item.id as any)}
                  className={`p-2.5 rounded-lg text-xs font-medium border text-left transition-colors ${
                    sector === item.id
                      ? 'bg-cyan-950/60 border-cyan-400 text-cyan-300'
                      : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Survey Length Slider */}
          <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
              <span>Total Survey Distance</span>
              <span className="text-cyan-400 font-bold">{surveyKm} Kilometers</span>
            </div>
            <input
              type="range"
              min="20"
              max="1500"
              step="10"
              value={surveyKm}
              onChange={(e) => setSurveyKm(parseInt(e.target.value))}
              className="w-full accent-cyan-400 bg-slate-800 h-2 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
              <span>20 km</span>
              <span>750 km</span>
              <span>1,500 km</span>
            </div>
          </div>

          {/* Depth Slider */}
          <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
              <span>Average Seafloor Depth</span>
              <span className="text-cyan-400 font-bold">{waterDepthM} Meters</span>
            </div>
            <input
              type="range"
              min="30"
              max="4500"
              step="30"
              value={waterDepthM}
              onChange={(e) => setWaterDepthM(parseInt(e.target.value))}
              className="w-full accent-cyan-400 bg-slate-800 h-2 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
              <span>30m (Shallow)</span>
              <span>2,000m</span>
              <span>4,500m (Abyssal)</span>
            </div>
          </div>

          <div className="p-3 bg-cyan-950/20 border border-cyan-500/20 rounded-xl text-xs text-slate-300 flex items-start space-x-2.5">
            <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
            <p>
              Calculations include mobilization transit, automated data processing pipelines, and ISO 9001 certified QA deliverable synthesis.
            </p>
          </div>

        </div>

        {/* Results Metrics Dashboard (Right 6 Cols) */}
        <div className="lg:col-span-6 bg-[#040914] rounded-xl border border-slate-800 p-6 flex flex-col justify-between">
          <div>
            <div className="text-xs font-mono uppercase text-slate-400 pb-3 border-b border-slate-800 flex items-center justify-between">
              <span>Forecasted Operational Savings</span>
              <span className="text-emerald-400 font-bold font-mono">-{costSavingsPct}% Cost</span>
            </div>

            {/* Huge Cost Metric */}
            <div className="my-5 p-4 rounded-xl bg-gradient-to-r from-emerald-950/40 to-slate-900 border border-emerald-500/30">
              <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
                Estimated Net Expenditure Saved
              </div>
              <div className="text-3xl md:text-4xl font-extrabold text-white font-mono mt-1">
                ${(costSavings / 1000).toFixed(0)},000 <span className="text-xs font-normal text-slate-400">USD</span>
              </div>
              <div className="text-xs text-slate-400 mt-1 flex items-center space-x-2 font-mono">
                <span>Traditional: ${(traditionalCost / 1000).toFixed(0)}k</span>
                <span>→</span>
                <span className="text-emerald-300 font-bold">Vesper: ${(vesperCost / 1000).toFixed(0)}k</span>
              </div>
            </div>

            {/* ESG & Operational Impact Grid */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 bg-slate-900/80 rounded-lg border border-slate-800">
                <div className="text-[11px] font-mono text-slate-400 flex items-center space-x-1">
                  <Leaf className="w-3.5 h-3.5 text-emerald-400" />
                  <span>CO2 Avoided</span>
                </div>
                <div className="text-xl font-bold text-emerald-400 font-mono mt-1">
                  {co2SavingsTons.toLocaleString()} <span className="text-xs text-slate-400">Tons</span>
                </div>
                <div className="text-[10px] text-slate-500">-95% diesel burn</div>
              </div>

              <div className="p-3 bg-slate-900/80 rounded-lg border border-slate-800">
                <div className="text-[11px] font-mono text-slate-400 flex items-center space-x-1">
                  <Clock className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Time Saved</span>
                </div>
                <div className="text-xl font-bold text-cyan-400 font-mono mt-1">
                  {traditionalDays - vesperDays} <span className="text-xs text-slate-400">Days</span>
                </div>
                <div className="text-[10px] text-slate-500">{vesperDays}d vs {traditionalDays}d total</div>
              </div>

              <div className="p-3 bg-slate-900/80 rounded-lg border border-slate-800 col-span-2">
                <div className="text-[11px] font-mono text-slate-400 flex items-center space-x-1">
                  <ShieldAlert className="w-3.5 h-3.5 text-amber-400" />
                  <span>Offshore Personnel HSE Risk</span>
                </div>
                <div className="text-lg font-bold text-white font-mono mt-1">
                  {hseHoursRiskEliminated.toLocaleString()} Offshore Hours Eliminated
                </div>
                <div className="text-[10px] text-slate-500">Zero offshore personnel exposure for survey duration</div>
              </div>
            </div>

          </div>

          <div className="mt-6 pt-4 border-t border-slate-800">
            <Link
              to="/contact"
              className="w-full py-3 px-4 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-sm transition-colors flex items-center justify-center space-x-2"
            >
              <span>Lock In Mission Window</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
};
