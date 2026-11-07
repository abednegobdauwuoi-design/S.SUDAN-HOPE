import React, { useState } from 'react';
import { INITIATIVE_PILLARS } from '../data/initiativeData';
import { ProgramPillar } from '../types/initiative';
import { ArrowUpRight, Check, X, BookOpen, Layers, Users, Sprout, Wrench } from 'lucide-react';

interface PillarsSectionProps {
  onOpenGetInvolved: (tab?: 'learner' | 'volunteer' | 'partner') => void;
}

export const PillarsSection: React.FC<PillarsSectionProps> = ({ onOpenGetInvolved }) => {
  const [activeModalPillar, setActiveModalPillar] = useState<ProgramPillar | null>(null);

  return (
    <section id="programs" className="py-16 sm:py-24 border-b border-stone-200 dark:border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-stone-200 dark:border-stone-800">
          <div className="max-w-2xl space-y-2">
            <div className="text-xs font-semibold tracking-wider uppercase text-amber-700 dark:text-amber-400">
              Transformative Action Plan
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 dark:text-stone-100 tracking-tight">
              Five Pillars of Community Transformation
            </h2>
            <p className="text-sm sm:text-base text-stone-600 dark:text-stone-300">
              Each pillar tackles a structural bottleneck in South Sudan with concrete training, tools, and community-managed resources.
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={() => onOpenGetInvolved('volunteer')}
              className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-lg border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-800 dark:text-stone-200 hover:border-amber-500 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
            >
              <span>Lead or Sponsor a Pillar</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bento Grid: 2 Marquee Cards + 3 Balanced Complementary Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Card 1: Education & Community Literacy (Spans 7 cols) */}
          {INITIATIVE_PILLARS[0] && (
            <div className="lg:col-span-7 rounded-2xl bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700/80 overflow-hidden flex flex-col justify-between group hover:border-amber-400/50 dark:hover:border-amber-500/50 transition-all shadow-xs">
              <div className="relative aspect-[16/9] overflow-hidden bg-stone-900">
                <img
                  src={INITIATIVE_PILLARS[0].image}
                  alt={INITIATIVE_PILLARS[0].title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-xs text-amber-400 text-xs font-bold px-2.5 py-1 rounded">
                  Pillar {INITIATIVE_PILLARS[0].number}
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-xl font-bold font-display">{INITIATIVE_PILLARS[0].title}</div>
                  <div className="text-xs text-stone-300">{INITIATIVE_PILLARS[0].tagline}</div>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                  {INITIATIVE_PILLARS[0].description}
                </p>

                <div className="space-y-2 pt-2 border-t border-stone-100 dark:border-stone-700/50">
                  <div className="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400">
                    Key Activities
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700 dark:text-stone-300">
                    {INITIATIVE_PILLARS[0].keyInitiatives.slice(0, 4).map((item, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 flex items-center justify-between border-t border-stone-100 dark:border-stone-700/50">
                  <div>
                    <span className="text-xl font-extrabold text-stone-900 dark:text-stone-100 font-display tabular-nums">
                      {INITIATIVE_PILLARS[0].metricsTarget}
                    </span>
                    <span className="text-xs text-stone-500 dark:text-stone-400 ml-2">
                      {INITIATIVE_PILLARS[0].metricLabel}
                    </span>
                  </div>
                  <button
                    onClick={() => setActiveModalPillar(INITIATIVE_PILLARS[0])}
                    className="text-xs font-semibold text-amber-700 dark:text-amber-400 hover:underline flex items-center gap-1"
                  >
                    <span>Detailed Plan</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Card 2: Professional & Vocational Trades (Spans 5 cols) */}
          {INITIATIVE_PILLARS[1] && (
            <div className="lg:col-span-5 rounded-2xl bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700/80 overflow-hidden flex flex-col justify-between group hover:border-amber-400/50 dark:hover:border-amber-500/50 transition-all shadow-xs">
              <div className="relative aspect-[16/10] overflow-hidden bg-stone-900">
                <img
                  src={INITIATIVE_PILLARS[1].image}
                  alt={INITIATIVE_PILLARS[1].title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-xs text-amber-400 text-xs font-bold px-2.5 py-1 rounded">
                  Pillar {INITIATIVE_PILLARS[1].number}
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-xl font-bold font-display">{INITIATIVE_PILLARS[1].title}</div>
                  <div className="text-xs text-stone-300">{INITIATIVE_PILLARS[1].tagline}</div>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                  {INITIATIVE_PILLARS[1].description}
                </p>

                <div className="space-y-2 pt-2 border-t border-stone-100 dark:border-stone-700/50">
                  <div className="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400">
                    Starter Toolkits Included
                  </div>
                  <ul className="space-y-1.5 text-xs text-stone-700 dark:text-stone-300">
                    {INITIATIVE_PILLARS[1].keyInitiatives.slice(0, 3).map((item, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 flex items-center justify-between border-t border-stone-100 dark:border-stone-700/50">
                  <div>
                    <span className="text-xl font-extrabold text-stone-900 dark:text-stone-100 font-display tabular-nums">
                      {INITIATIVE_PILLARS[1].metricsTarget}
                    </span>
                    <span className="text-xs text-stone-500 dark:text-stone-400 ml-2">
                      {INITIATIVE_PILLARS[1].metricLabel}
                    </span>
                  </div>
                  <button
                    onClick={() => setActiveModalPillar(INITIATIVE_PILLARS[1])}
                    className="text-xs font-semibold text-amber-700 dark:text-amber-400 hover:underline flex items-center gap-1"
                  >
                    <span>Detailed Plan</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Card 3: Cooperative Agriculture & Livelihoods (Spans 4 cols) */}
          {INITIATIVE_PILLARS[2] && (
            <div className="lg:col-span-4 rounded-2xl bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700/80 overflow-hidden flex flex-col justify-between group hover:border-amber-400/50 dark:hover:border-amber-500/50 transition-all shadow-xs">
              <div className="relative aspect-[16/10] overflow-hidden bg-stone-900">
                <img
                  src={INITIATIVE_PILLARS[2].image}
                  alt={INITIATIVE_PILLARS[2].title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
                <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur-xs text-amber-400 text-xs font-bold px-2 py-0.5 rounded">
                  Pillar {INITIATIVE_PILLARS[2].number}
                </div>
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <div className="text-lg font-bold font-display">{INITIATIVE_PILLARS[2].title}</div>
                  <div className="text-xs text-stone-300 line-clamp-1">{INITIATIVE_PILLARS[2].tagline}</div>
                </div>
              </div>

              <div className="p-5 space-y-3">
                <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                  {INITIATIVE_PILLARS[2].description}
                </p>

                <div className="pt-3 border-t border-stone-100 dark:border-stone-700/50 flex items-center justify-between">
                  <div className="text-xs font-bold text-stone-900 dark:text-stone-100 tabular-nums">
                    {INITIATIVE_PILLARS[2].metricsTarget} Families
                  </div>
                  <button
                    onClick={() => setActiveModalPillar(INITIATIVE_PILLARS[2])}
                    className="text-xs font-semibold text-amber-700 dark:text-amber-400 hover:underline flex items-center gap-1"
                  >
                    <span>Overview</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Card 4: Vulnerable Family Safety Net (Spans 4 cols) */}
          {INITIATIVE_PILLARS[3] && (
            <div className="lg:col-span-4 rounded-2xl bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700/80 p-6 flex flex-col justify-between hover:border-amber-400/50 dark:hover:border-amber-500/50 transition-all shadow-xs">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 px-2 py-0.5 rounded">
                    Pillar {INITIATIVE_PILLARS[3].number}
                  </span>
                  <span className="text-xs text-stone-400">Emergency & Social Support</span>
                </div>
                <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100">
                  {INITIATIVE_PILLARS[3].title}
                </h3>
                <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                  {INITIATIVE_PILLARS[3].description}
                </p>

                <div className="space-y-1.5 pt-2">
                  {INITIATIVE_PILLARS[3].keyInitiatives.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-1.5 text-xs text-stone-700 dark:text-stone-300">
                      <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-stone-100 dark:border-stone-700/50 flex items-center justify-between">
                <div className="text-xs font-bold text-stone-900 dark:text-stone-100 tabular-nums">
                  {INITIATIVE_PILLARS[3].metricsTarget} Households
                </div>
                <button
                  onClick={() => setActiveModalPillar(INITIATIVE_PILLARS[3])}
                  className="text-xs font-semibold text-amber-700 dark:text-amber-400 hover:underline flex items-center gap-1"
                >
                  <span>Overview</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* Card 5: Youth Leadership & Digital Skills (Spans 4 cols) */}
          {INITIATIVE_PILLARS[4] && (
            <div className="lg:col-span-4 rounded-2xl bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700/80 p-6 flex flex-col justify-between hover:border-amber-400/50 dark:hover:border-amber-500/50 transition-all shadow-xs">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 px-2 py-0.5 rounded">
                    Pillar {INITIATIVE_PILLARS[4].number}
                  </span>
                  <span className="text-xs text-stone-400">Talent & Digital Future</span>
                </div>
                <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100">
                  {INITIATIVE_PILLARS[4].title}
                </h3>
                <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                  {INITIATIVE_PILLARS[4].description}
                </p>

                <div className="space-y-1.5 pt-2">
                  {INITIATIVE_PILLARS[4].keyInitiatives.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-1.5 text-xs text-stone-700 dark:text-stone-300">
                      <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-stone-100 dark:border-stone-700/50 flex items-center justify-between">
                <div className="text-xs font-bold text-stone-900 dark:text-stone-100 tabular-nums">
                  {INITIATIVE_PILLARS[4].metricsTarget} Youth Leaders
                </div>
                <button
                  onClick={() => setActiveModalPillar(INITIATIVE_PILLARS[4])}
                  className="text-xs font-semibold text-amber-700 dark:text-amber-400 hover:underline flex items-center gap-1"
                >
                  <span>Overview</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Deep-Dive Pillar Modal */}
      {activeModalPillar && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/60 backdrop-blur-xs">
          <div className="relative w-full max-w-2xl bg-white dark:bg-stone-900 rounded-2xl shadow-xl border border-stone-200 dark:border-stone-700 p-6 sm:p-8 max-h-[90vh] overflow-y-auto space-y-6">
            <button
              onClick={() => setActiveModalPillar(null)}
              className="absolute top-4 right-4 p-2 text-stone-400 hover:text-stone-600 dark:hover:text-stone-200"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1">
              <div className="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                Pillar {activeModalPillar.number} Operational Blueprint
              </div>
              <h3 className="text-2xl font-bold text-stone-900 dark:text-stone-100">
                {activeModalPillar.title}
              </h3>
              <p className="text-xs text-stone-500 dark:text-stone-400">
                {activeModalPillar.tagline}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200/50 dark:border-amber-800/40 text-xs text-amber-900 dark:text-amber-200 space-y-1">
              <div className="font-semibold uppercase tracking-wider">Root Problem Being Solved:</div>
              <p>{activeModalPillar.challengeAddressed}</p>
            </div>

            <div className="space-y-3">
              <h4 className="text-sm font-bold text-stone-900 dark:text-stone-100">
                Full Scope of Grassroots Activities
              </h4>
              <ul className="space-y-2 text-xs text-stone-600 dark:text-stone-300">
                {activeModalPillar.keyInitiatives.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 p-2.5 rounded-lg bg-stone-50 dark:bg-stone-800/60">
                    <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-stone-200 dark:border-stone-800">
              <div>
                <div className="text-xs text-stone-400">Impact Target</div>
                <div className="text-lg font-bold text-stone-900 dark:text-stone-100">
                  {activeModalPillar.metricsTarget} {activeModalPillar.metricLabel}
                </div>
              </div>

              <button
                onClick={() => {
                  setActiveModalPillar(null);
                  onOpenGetInvolved('learner');
                }}
                className="px-4 py-2 text-xs font-semibold text-stone-950 bg-amber-500 hover:bg-amber-400 rounded-lg shadow-sm"
              >
                Apply for this Pillar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
