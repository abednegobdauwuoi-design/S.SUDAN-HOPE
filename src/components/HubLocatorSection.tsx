import React, { useState } from 'react';
import { SOUTH_SUDAN_HUBS } from '../data/initiativeData';
import { StateHub } from '../types/initiative';
import { MapPin, Users, CheckCircle2, AlertCircle, Compass, PhoneCall } from 'lucide-react';

interface HubLocatorSectionProps {
  onOpenGetInvolved: (tab?: 'learner' | 'volunteer' | 'partner') => void;
}

export const HubLocatorSection: React.FC<HubLocatorSectionProps> = ({ onOpenGetInvolved }) => {
  const [selectedHub, setSelectedHub] = useState<StateHub>(SOUTH_SUDAN_HUBS[0]);

  return (
    <section id="state-hubs" className="py-16 sm:py-24 bg-stone-100/50 dark:bg-stone-900/40 border-b border-stone-200 dark:border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-stone-200 dark:border-stone-800">
          <div className="max-w-2xl space-y-2">
            <div className="text-xs font-semibold tracking-wider uppercase text-amber-700 dark:text-amber-400">
              Grassroots Presence
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 dark:text-stone-100 tracking-tight">
              State Hubs & Community Footprint
            </h2>
            <p className="text-sm sm:text-base text-stone-600 dark:text-stone-300">
              Building local resilience state by state. Explore active learning centers, vocational grounds, and expansion targets.
            </p>
          </div>

          <button
            onClick={() => onOpenGetInvolved('partner')}
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 transition-colors whitespace-nowrap self-start md:self-auto"
          >
            <Compass className="w-4 h-4" />
            <span>Propose a Hub in Your County</span>
          </button>
        </div>

        {/* State Hub Interactive Selector + Detail Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* State List Navigation */}
          <div className="lg:col-span-5 space-y-2">
            <div className="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-2">
              Select State / Region
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2">
              {SOUTH_SUDAN_HUBS.map((hub) => {
                const isSelected = selectedHub.id === hub.id;
                return (
                  <button
                    key={hub.id}
                    onClick={() => setSelectedHub(hub)}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-center justify-between ${
                      isSelected
                        ? 'bg-white dark:bg-stone-800 border-amber-500 shadow-xs ring-1 ring-amber-500/30'
                        : 'bg-white/60 dark:bg-stone-800/50 border-stone-200 dark:border-stone-700/60 hover:bg-white dark:hover:bg-stone-800'
                    }`}
                  >
                    <div>
                      <div className="text-sm font-bold text-stone-900 dark:text-stone-100">
                        {hub.stateName}
                      </div>
                      <div className="text-xs text-stone-500 dark:text-stone-400">
                        Capital: {hub.capital}
                      </div>
                    </div>

                    <div className="text-right">
                      <span className={`text-[11px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded ${
                        hub.status === 'active'
                          ? 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300'
                          : hub.status === 'expanding'
                          ? 'bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300'
                          : 'bg-stone-200 dark:bg-stone-700 text-stone-700 dark:text-stone-300'
                      }`}>
                        {hub.status}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Detailed State View Card */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700/80 shadow-xs space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-stone-100 dark:border-stone-700/60">
              <div>
                <span className="text-xs font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wider">
                  State Hub Profile
                </span>
                <h3 className="text-2xl font-bold text-stone-900 dark:text-stone-100">
                  {selectedHub.stateName}
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-stone-500 dark:text-stone-400 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                  <span>{selectedHub.hubLocation}</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-stone-50 dark:bg-stone-900/70 border border-stone-200/60 dark:border-stone-700/60 text-right sm:text-left">
                <div className="text-xl font-extrabold text-stone-900 dark:text-stone-100 font-display tabular-nums">
                  {selectedHub.activeLearnersCount}
                </div>
                <div className="text-xs text-stone-500 dark:text-stone-400">
                  Active / Enrolled Learners
                </div>
              </div>
            </div>

            {/* Community Leadership */}
            <div className="space-y-1">
              <div className="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400">
                Community Leadership & Oversight
              </div>
              <div className="text-sm font-medium text-stone-800 dark:text-stone-200">
                {selectedHub.communityLead}
              </div>
            </div>

            {/* Focus Pillars */}
            <div className="space-y-2">
              <div className="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400">
                Current Operational Priorities
              </div>
              <div className="flex flex-wrap gap-2">
                {selectedHub.focusPillars.map((p, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-medium px-2.5 py-1 rounded-md bg-stone-100 dark:bg-stone-700/60 text-stone-800 dark:text-stone-200"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>

            {/* Priority Hub Needs */}
            <div className="p-4 rounded-xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-800/40 space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-bold text-amber-800 dark:text-amber-300">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>Immediate Field Requirement:</span>
              </div>
              <p className="text-xs text-stone-700 dark:text-stone-300">
                {selectedHub.priorityNeeds}
              </p>
            </div>

            {/* Actions for this Hub */}
            <div className="pt-4 border-t border-stone-100 dark:border-stone-700/60 flex flex-wrap items-center justify-between gap-3">
              <button
                onClick={() => onOpenGetInvolved('learner')}
                className="px-4 py-2 text-xs font-semibold text-stone-950 bg-amber-500 hover:bg-amber-400 rounded-lg shadow-sm"
              >
                Enroll at {selectedHub.capital} Center
              </button>

              <button
                onClick={() => onOpenGetInvolved('volunteer')}
                className="px-4 py-2 text-xs font-medium text-stone-700 dark:text-stone-300 hover:text-stone-950 dark:hover:text-white border border-stone-200 dark:border-stone-700 rounded-lg"
              >
                Volunteer at This Hub
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
