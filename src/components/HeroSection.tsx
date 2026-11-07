import React, { useState } from 'react';
import { ArrowRight, Sparkles, GraduationCap, Users, ShieldCheck, MapPin } from 'lucide-react';

interface HeroSectionProps {
  onOpenGetInvolved: (tab?: 'learner' | 'volunteer' | 'partner') => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenGetInvolved }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-stone-200 dark:border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Kicker */}
        <div className="flex items-center gap-2 mb-4 text-xs font-semibold tracking-wider uppercase text-amber-700 dark:text-amber-400">
          <span>Grassroots Community Initiative</span>
          <span aria-hidden="true">·</span>
          <span>Republic of South Sudan</span>
          <span aria-hidden="true">·</span>
          <span>Transforming Lives</span>
        </div>

        {/* 2-Column Split: Editorial Value Proposition & Real Community Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 dark:text-stone-50 tracking-tight leading-[1.15] [text-wrap:balance]">
              Empowering Communities, Restoring Hope & Transforming Lives
            </h1>

            <p className="text-base sm:text-lg text-stone-600 dark:text-stone-300 leading-relaxed font-normal">
              <strong className="font-semibold text-stone-900 dark:text-stone-100">S.SUDAN HOPE</strong> is an emerging,
              community-centered movement established with a deep vision of creating hope, promoting education,
              developing vocational skills, and improving the living conditions of people across South Sudan.
            </p>

            <div className="p-4 rounded-xl bg-stone-100 dark:bg-stone-800/70 border border-stone-200/80 dark:border-stone-700/60 text-stone-700 dark:text-stone-300 text-sm leading-relaxed">
              <p className="italic">
                &ldquo;Every individual, regardless of background, financial status, age, or circumstance, deserves the
                opportunity to learn, grow, develop their talents, and contribute positively to society.&rdquo;
              </p>
            </div>

            {/* Interactive CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onOpenGetInvolved('learner')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-stone-950 bg-amber-500 hover:bg-amber-400 active:bg-amber-600 rounded-lg shadow-sm transition-all whitespace-nowrap"
              >
                <span>Register for Skills & Education</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#programs"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium text-stone-800 dark:text-stone-200 bg-white dark:bg-stone-800 hover:bg-stone-50 dark:hover:bg-stone-750 border border-stone-300 dark:border-stone-700 rounded-lg transition-colors whitespace-nowrap"
              >
                <span>Explore 5 Pillars</span>
              </a>

              <a
                href="#support"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-amber-700 dark:text-amber-400 hover:underline transition-all whitespace-nowrap"
              >
                <span>Solidarity Pledge</span>
              </a>
            </div>

            {/* Operational transparency note */}
            <div className="flex items-center gap-2 text-xs text-stone-500 dark:text-stone-400 pt-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>Independent community initiative · 100% locally anchored in South Sudan</span>
            </div>
          </div>

          {/* Marquee Visual Hero Card */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-stone-200 dark:border-stone-800 bg-stone-100 dark:bg-stone-800 shadow-sm aspect-[16/10] sm:aspect-[16/9]">
              {/* Fallback container */}
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-900/20 via-stone-800 to-stone-900 flex items-center justify-center text-stone-400">
                {!imageLoaded && (
                  <div className="text-center p-6 space-y-2">
                    <Sparkles className="w-8 h-8 text-amber-500 mx-auto animate-pulse" />
                    <p className="text-xs uppercase tracking-widest text-stone-400">S.SUDAN HOPE Community</p>
                  </div>
                )}
              </div>

              <img
                src="/src/assets/images/hero_south_sudan_hope_1794059432118.jpg"
                alt="South Sudanese community members, youth, and educators gathered with blueprints and notebooks in Juba"
                referrerPolicy="no-referrer"
                onLoad={() => setImageLoaded(true)}
                className={`relative w-full h-full object-cover transition-opacity duration-500 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
              />

              {/* Curatorial Scrim & Attribution */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-stone-950/90 via-stone-950/40 to-transparent p-4 sm:p-5 text-white">
                <div className="flex items-center justify-between text-xs text-stone-300">
                  <span className="flex items-center gap-1.5 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" /> Juba Community Hub & Field Planning Cohort
                  </span>
                  <span className="text-stone-400">Equatoria Region</span>
                </div>
                <p className="text-xs text-stone-200 mt-1 line-clamp-1">
                  Youth leaders, vocational apprentices, and community elders uniting to lead local solutions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Quantitative Impact Metric Strip placed in a full-width row below hero split */}
        <div className="mt-14 pt-10 border-t border-stone-200 dark:border-stone-800">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-stone-900 dark:text-stone-100 font-display tabular-nums">
                10 States
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-amber-700 dark:text-amber-400">
                National Vision
              </div>
              <p className="text-xs text-stone-500 dark:text-stone-400 leading-snug">
                Equatoria, Bahr el Ghazal, Upper Nile, and administrative areas.
              </p>
            </div>

            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-stone-900 dark:text-stone-100 font-display tabular-nums">
                5 Pillars
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-amber-700 dark:text-amber-400">
                Action Pathways
              </div>
              <p className="text-xs text-stone-500 dark:text-stone-400 leading-snug">
                Education, vocational trades, agriculture, vulnerable families & youth.
              </p>
            </div>

            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-stone-900 dark:text-stone-100 font-display tabular-nums">
                1,200+
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-amber-700 dark:text-amber-400">
                Target Trainees
              </div>
              <p className="text-xs text-stone-500 dark:text-stone-400 leading-snug">
                Receiving certified technical mastery and practical start-up kits.
              </p>
            </div>

            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-stone-900 dark:text-stone-100 font-display tabular-nums">
                100%
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-amber-700 dark:text-amber-400">
                Community Driven
              </div>
              <p className="text-xs text-stone-500 dark:text-stone-400 leading-snug">
                Locally identified needs, accountable governance & direct delivery.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
