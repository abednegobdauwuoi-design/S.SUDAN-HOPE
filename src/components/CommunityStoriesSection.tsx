import React, { useState } from 'react';
import { COMMUNITY_STORIES } from '../data/initiativeData';
import { Quote, MapPin, Sparkles, PlusCircle } from 'lucide-react';

interface CommunityStoriesSectionProps {
  onOpenStorySubmit: () => void;
}

export const CommunityStoriesSection: React.FC<CommunityStoriesSectionProps> = ({
  onOpenStorySubmit,
}) => {
  const [selectedStoryIndex, setSelectedStoryIndex] = useState(0);
  const story = COMMUNITY_STORIES[selectedStoryIndex] || COMMUNITY_STORIES[0];

  return (
    <section id="stories" className="py-16 sm:py-24 border-b border-stone-200 dark:border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-stone-200 dark:border-stone-800">
          <div className="max-w-2xl space-y-2">
            <div className="text-xs font-semibold tracking-wider uppercase text-amber-700 dark:text-amber-400">
              Grassroots Voices
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 dark:text-stone-100 tracking-tight">
              Stories of Resilience, Skill & Dignity
            </h2>
            <p className="text-sm sm:text-base text-stone-600 dark:text-stone-300">
              Direct evidence of lives transformed when South Sudanese communities receive the tools to teach, work, and thrive.
            </p>
          </div>

          <button
            onClick={onOpenStorySubmit}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-950 hover:bg-stone-800 dark:hover:bg-stone-200 transition-colors whitespace-nowrap self-start md:self-auto"
          >
            <PlusCircle className="w-4 h-4" />
            <span>Submit a Community Need / Story</span>
          </button>
        </div>

        {/* Featured Story Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Story Narrative */}
          <div className="lg:col-span-8 p-8 sm:p-10 rounded-2xl bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700/80 shadow-xs flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs text-stone-500 dark:text-stone-400">
                <span className="flex items-center gap-1.5 font-medium text-amber-600 dark:text-amber-400">
                  <MapPin className="w-3.5 h-3.5" />
                  {story.location} · {story.state}
                </span>
                <span>Cohort {story.year}</span>
              </div>

              <blockquote className="text-xl sm:text-2xl font-serif italic text-stone-900 dark:text-stone-100 leading-snug">
                &ldquo;{story.quote}&rdquo;
              </blockquote>

              <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed font-normal">
                {story.narrative}
              </p>
            </div>

            {/* Before / Change / Outcome quantitative block */}
            <div className="pt-4 border-t border-stone-100 dark:border-stone-700/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="text-base font-bold text-stone-900 dark:text-stone-100">
                  {story.name}
                </div>
                <div className="text-xs text-stone-500 dark:text-stone-400">
                  {story.role}
                </div>
              </div>

              <div className="p-3 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/50 dark:border-emerald-800/40 text-xs text-emerald-800 dark:text-emerald-300 max-w-sm">
                <span className="font-semibold">Direct Outcome: </span>
                <span>{story.transformationOutcome}</span>
              </div>
            </div>
          </div>

          {/* Story Selector List */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400 px-1">
              Select Community Narrative
            </div>

            {COMMUNITY_STORIES.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setSelectedStoryIndex(idx)}
                className={`w-full text-left p-4 rounded-xl border transition-all ${
                  selectedStoryIndex === idx
                    ? 'bg-amber-500/10 dark:bg-amber-500/15 border-amber-500/50 shadow-xs'
                    : 'bg-white dark:bg-stone-800/70 border-stone-200 dark:border-stone-700/60 hover:border-stone-300 dark:hover:border-stone-600'
                }`}
              >
                <div className="flex items-center justify-between text-xs text-stone-500 dark:text-stone-400 mb-1">
                  <span className="font-semibold text-stone-900 dark:text-stone-100">{s.name}</span>
                  <span className="text-[11px]">{s.state}</span>
                </div>
                <div className="text-xs text-amber-700 dark:text-amber-400 font-medium">
                  {s.role}
                </div>
                <div className="text-xs text-stone-600 dark:text-stone-300 line-clamp-1 mt-1 italic">
                  &ldquo;{s.quote}&rdquo;
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
