import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import {
  Code2,
  Award,
  Activity,
  CheckCircle2,
  Cpu,
  Zap,
  TrendingUp,
  Terminal,
  Flame,
  ShieldCheck,
  BarChart3,
  GitBranch,
  Sparkles
} from 'lucide-react';

export default function EngineeringMetricsHub() {
  const { engineeringProof } = portfolioData;
  const [activeTab, setActiveTab] = useState('dsa'); // 'dsa' | 'benchmarks' | 'activity'

  if (!engineeringProof) return null;

  const { dsaMetrics, codeDistribution, verifiedSystemsBenchmarks, liveActivityFeed } = engineeringProof;

  return (
    <div className="w-full rounded-3xl bg-theme-card/90 border border-theme-border/90 backdrop-blur-xl p-6 sm:p-8 shadow-2xl relative overflow-hidden space-y-8">
      {/* Background Cyber Ambient Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-portfolio-rose/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header with Live Verified Badge */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-theme-border/70 pb-6 relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="uppercase tracking-wider font-semibold">Live Systems & DSA Credibility Proof</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-display font-bold text-theme-text flex items-center gap-2.5">
            <BarChart3 className="w-6 h-6 text-portfolio-rose" />
            <span>Algorithmic Rigor & Systems Benchmarks</span>
          </h3>
          <p className="text-xs sm:text-sm text-theme-muted mt-1">
            Quantifiable engineering proof: algorithmic problem solving, language allocation, and verified latency benchmarks.
          </p>
        </div>

        {/* High-Level Credibility Badges */}
        <div className="flex items-center gap-3 flex-wrap">
          <div className="px-3.5 py-2 rounded-2xl bg-theme-surface border border-theme-border flex items-center gap-2.5 shadow-sm">
            <Flame className="w-4 h-4 text-amber-400" />
            <div>
              <div className="text-xs font-mono font-bold text-theme-text">{dsaMetrics.totalSolved} Solved</div>
              <div className="text-[10px] font-mono text-theme-muted">Competitive DSA</div>
            </div>
          </div>

          <div className="px-3.5 py-2 rounded-2xl bg-theme-surface border border-theme-border flex items-center gap-2.5 shadow-sm">
            <Award className="w-4 h-4 text-portfolio-rose" />
            <div>
              <div className="text-xs font-mono font-bold text-theme-text">{dsaMetrics.globalPercentile}</div>
              <div className="text-[10px] font-mono text-theme-muted">Contest Percentile</div>
            </div>
          </div>

          <div className="px-3.5 py-2 rounded-2xl bg-theme-surface border border-theme-border flex items-center gap-2.5 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <div>
              <div className="text-xs font-mono font-bold text-theme-text">100% Quorum</div>
              <div className="text-[10px] font-mono text-theme-muted">Raft Fault-Tolerance</div>
            </div>
          </div>
        </div>
      </div>

      {/* Language / Stack Distribution Bar */}
      <div className="space-y-3 relative z-10">
        <div className="flex items-center justify-between text-xs font-mono">
          <span className="text-theme-muted uppercase tracking-wider font-semibold flex items-center gap-1.5">
            <Code2 className="w-3.5 h-3.5 text-portfolio-rose" />
            <span>Core Codebase & Systems Distribution</span>
          </span>
          <span className="text-theme-muted text-[11px]">Real-World Commit Distribution</span>
        </div>

        {/* Stacked Percentage Bar */}
        <div className="w-full h-3.5 rounded-full overflow-hidden flex bg-theme-surface border border-theme-border/80 shadow-inner">
          {codeDistribution.map((item, idx) => (
            <div
              key={idx}
              style={{
                width: `${item.share}%`,
                backgroundColor: item.color,
              }}
              className="h-full transition-all duration-500 relative group cursor-pointer hover:opacity-90"
              title={`${item.name}: ${item.share}% (${item.role})`}
            />
          ))}
        </div>

        {/* Distribution Legend */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
          {codeDistribution.map((item, idx) => (
            <div
              key={idx}
              className="p-3 rounded-2xl bg-theme-surface/70 border border-theme-border/60 flex items-start gap-3 hover:border-theme-border transition-colors"
            >
              <span
                className="w-3 h-3 rounded-full mt-1 flex-shrink-0 shadow-sm"
                style={{ backgroundColor: item.color }}
              />
              <div className="min-w-0">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-theme-text">{item.name}</span>
                  <span className="text-xs font-mono font-semibold text-portfolio-rose">{item.share}%</span>
                </div>
                <p className="text-[11px] text-theme-muted truncate mt-0.5">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sub-Tab Navigation */}
      <div className="flex items-center gap-2 border-b border-theme-border/60 pb-2 relative z-10">
        <button
          onClick={() => setActiveTab('dsa')}
          className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all ${
            activeTab === 'dsa'
              ? 'bg-portfolio-rose/20 text-portfolio-rose border border-portfolio-rose/40 shadow-sm'
              : 'bg-theme-surface/60 text-theme-muted hover:text-theme-text hover:bg-theme-surface border border-transparent'
          }`}
        >
          <Award className="w-3.5 h-3.5 text-portfolio-rose" />
          <span>DSA Topic Mastery ({dsaMetrics.totalSolved})</span>
        </button>

        <button
          onClick={() => setActiveTab('benchmarks')}
          className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all ${
            activeTab === 'benchmarks'
              ? 'bg-portfolio-rose/20 text-portfolio-rose border border-portfolio-rose/40 shadow-sm'
              : 'bg-theme-surface/60 text-theme-muted hover:text-theme-text hover:bg-theme-surface border border-transparent'
          }`}
        >
          <Zap className="w-3.5 h-3.5 text-amber-400" />
          <span>Systems Verification & Telemetry</span>
        </button>

        <button
          onClick={() => setActiveTab('activity')}
          className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all ${
            activeTab === 'activity'
              ? 'bg-portfolio-rose/20 text-portfolio-rose border border-portfolio-rose/40 shadow-sm'
              : 'bg-theme-surface/60 text-theme-muted hover:text-theme-text hover:bg-theme-surface border border-transparent'
          }`}
        >
          <Terminal className="w-3.5 h-3.5 text-emerald-400" />
          <span>Optimization Log</span>
        </button>
      </div>

      {/* TAB 1: DSA TOPIC MASTERY */}
      {activeTab === 'dsa' && (
        <div className="space-y-4 animate-fade-in relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {dsaMetrics.categories.map((cat, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-theme-surface/80 border border-theme-border hover:border-portfolio-rose/40 transition-all flex flex-col justify-between space-y-2.5 group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-theme-text group-hover:text-portfolio-rose transition-colors">
                      {cat.name}
                    </span>
                  </div>
                  <span className="text-xs font-mono font-bold text-portfolio-rose">
                    {cat.count} <span className="text-[10px] text-theme-muted">/ {cat.target}</span>
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-2 rounded-full bg-theme-card overflow-hidden border border-theme-border/60">
                  <div
                    className="h-full bg-gradient-to-r from-portfolio-rose to-emerald-400 rounded-full transition-all duration-700"
                    style={{ width: `${cat.pct}%` }}
                  />
                </div>

                <div className="flex items-center justify-between text-[11px] font-mono text-theme-muted">
                  <span>Difficulty: {cat.difficulty}</span>
                  <span className="text-emerald-400 font-semibold">{cat.pct}% Target Met</span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom DSA Credibility Summary */}
          <div className="p-4 rounded-2xl bg-theme-surface/50 border border-theme-border/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono">
            <div className="flex items-center gap-2 text-theme-text">
              <Sparkles className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <span>Contest Peak: <strong>{dsaMetrics.contestRating}</strong> • Active Consistency: <strong>{dsaMetrics.activeDays}</strong></span>
            </div>
            <span className="text-portfolio-rose">Continuous Algorithmic Optimization</span>
          </div>
        </div>
      )}

      {/* TAB 2: SYSTEMS VERIFICATION & BENCHMARKS */}
      {activeTab === 'benchmarks' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 animate-fade-in relative z-10">
          {verifiedSystemsBenchmarks.map((bench, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-theme-surface/80 border border-theme-border hover:border-portfolio-rose/50 transition-all flex flex-col justify-between space-y-3 group"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-portfolio-rose font-semibold px-2 py-0.5 rounded bg-portfolio-rose/10 border border-portfolio-rose/20">
                    {bench.context}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                </div>
                <div className="text-2xl sm:text-3xl font-display font-bold text-theme-text group-hover:text-portfolio-rose transition-colors">
                  {bench.value}
                </div>
                <div className="text-xs font-semibold text-theme-text mt-1">{bench.metric}</div>
              </div>
              <p className="text-[11px] text-theme-muted leading-relaxed border-t border-theme-border/60 pt-2.5">
                {bench.detail}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* TAB 3: LIVE OPTIMIZATION LOG */}
      {activeTab === 'activity' && (
        <div className="space-y-3 animate-fade-in relative z-10">
          {liveActivityFeed.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-theme-surface/80 border border-theme-border flex items-center justify-between gap-4 hover:border-theme-border/90 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-portfolio-rose/10 text-portfolio-rose border border-portfolio-rose/20 flex-shrink-0">
                  <Terminal className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10">
                      {item.type}
                    </span>
                    <span className="text-xs font-mono text-theme-muted">{item.platform}</span>
                    <span className="text-xs text-theme-muted">•</span>
                    <span className="text-xs font-mono text-theme-muted">{item.time}</span>
                  </div>
                  <h4 className="text-xs sm:text-sm font-semibold text-theme-text mt-1">
                    {item.title}
                  </h4>
                </div>
              </div>

              <div className="px-3 py-1 rounded-full bg-theme-card border border-theme-border text-xs font-mono text-portfolio-rose font-semibold flex-shrink-0 hidden sm:block">
                {item.tag}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
