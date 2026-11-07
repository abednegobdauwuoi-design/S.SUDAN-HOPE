import React from 'react';
import { INITIATIVE_CORE_VALUES } from '../data/initiativeData';
import { ShieldCheck, Target, Heart, Sparkles, CheckCircle2 } from 'lucide-react';

export const MissionStatement: React.FC = () => {
  const challenges = [
    {
      title: 'Youth Unemployment',
      detail: 'Over 70% of young South Sudanese lack structured employment or formal career pathways.',
    },
    {
      title: 'Barriers to Education',
      detail: 'Shortage of learning materials, high dropout rates, and acute shortages of vocational training centers.',
    },
    {
      title: 'Poverty & Family Vulnerability',
      detail: 'Single-parent households, widows, and displaced families facing severe shocks without a social safety net.',
    },
    {
      title: 'Underutilized Agricultural Potential',
      detail: 'Vast fertile riverine soils in the Nile basin hindered by lack of seed capital, storage, and modern irrigation tools.',
    },
  ];

  return (
    <section id="mission" className="py-16 sm:py-20 bg-stone-100/60 dark:bg-stone-900/60 border-b border-stone-200 dark:border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Core Vision & Philosophy Callout */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-amber-700 dark:text-amber-400">
            <span>Our Foundation & Conviction</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 dark:text-stone-100 tracking-tight [text-wrap:balance]">
            Hope is Built Through Opportunity, Dignity & Skill
          </h2>
          <div className="pt-2 text-base sm:text-lg text-stone-600 dark:text-stone-300 leading-relaxed max-w-prose mx-auto">
            <p>
              We reject the idea that circumstance defines destiny. In every payam and boma across South Sudan,
              there is extraordinary resilience, creativity, and untapped potential waiting for the spark of education and opportunity.
            </p>
          </div>
        </div>

        {/* The 4 Core Challenges We Target Directly */}
        <div>
          <div className="flex items-center justify-between gap-4 mb-6 pb-2 border-b border-stone-200 dark:border-stone-800">
            <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100">
              Major Challenges Facing Our Communities
            </h3>
            <span className="text-xs text-stone-500 dark:text-stone-400">
              Targeted for grassroots intervention
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {challenges.map((c, idx) => (
              <div
                key={c.title}
                className="p-5 rounded-xl bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700/80 space-y-2 hover:border-amber-400/50 dark:hover:border-amber-500/50 transition-colors"
              >
                <div className="text-xs font-semibold text-amber-600 dark:text-amber-400">
                  0{idx + 1}. Challenge
                </div>
                <h4 className="text-base font-bold text-stone-900 dark:text-stone-100">
                  {c.title}
                </h4>
                <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                  {c.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Guiding Values */}
        <div className="pt-4">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h3 className="text-xl font-bold text-stone-900 dark:text-stone-100">
              Our Non-Negotiable Values
            </h3>
            <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">
              The ethical compass that guides every hub, class, and decision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {INITIATIVE_CORE_VALUES.map((val) => (
              <div
                key={val.title}
                className="p-6 rounded-xl bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700/80 space-y-3"
              >
                <div className="w-9 h-9 rounded-lg bg-amber-100 dark:bg-amber-950/70 text-amber-700 dark:text-amber-400 flex items-center justify-center font-bold text-sm">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-stone-900 dark:text-stone-100">
                  {val.title}
                </h4>
                <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
