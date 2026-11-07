import React, { useState } from 'react';
import { SKILL_COURSES } from '../data/initiativeData';
import { SkillTrack, SkillCourse } from '../types/initiative';
import { Clock, Award, Package, MapPin, CheckCircle, ArrowRight, BookOpen, Layers } from 'lucide-react';

interface SkillsAcademySectionProps {
  onSelectCourseForRegistration: (courseTitle: string) => void;
}

export const SkillsAcademySection: React.FC<SkillsAcademySectionProps> = ({
  onSelectCourseForRegistration,
}) => {
  const [activeTrack, setActiveTrack] = useState<SkillTrack>('all');
  const [expandedCourseId, setExpandedCourseId] = useState<string | null>(null);

  const tracks: { id: SkillTrack; label: string }[] = [
    { id: 'all', label: 'All Courses' },
    { id: 'vocational', label: 'Vocational Trades' },
    { id: 'digital', label: 'Digital Skills' },
    { id: 'agriculture', label: 'Agribusiness' },
    { id: 'business', label: 'Micro-Enterprise' },
    { id: 'literacy', label: 'Adult Literacy' },
  ];

  const filteredCourses = activeTrack === 'all'
    ? SKILL_COURSES
    : SKILL_COURSES.filter((c) => c.track === activeTrack);

  return (
    <section id="skills-academy" className="py-16 sm:py-24 bg-stone-100/50 dark:bg-stone-900/40 border-b border-stone-200 dark:border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-stone-200 dark:border-stone-800">
          <div className="max-w-2xl space-y-2">
            <div className="text-xs font-semibold tracking-wider uppercase text-amber-700 dark:text-amber-400">
              Grassroots Skills Registry
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 dark:text-stone-100 tracking-tight">
              S.SUDAN HOPE Vocational & Skills Academy
            </h2>
            <p className="text-sm sm:text-base text-stone-600 dark:text-stone-300">
              Practical, field-tested curriculums structured for direct self-employment. Every graduate receives starter tools.
            </p>
          </div>

          {/* Interactive filter tabs: Segmented controls (allowed per skill §1.A) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-stone-200/70 dark:bg-stone-800 rounded-xl">
            {tracks.map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTrack(t.id)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
                  activeTrack === t.id
                    ? 'bg-white dark:bg-stone-700 text-stone-900 dark:text-stone-100 shadow-xs'
                    : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Toolkit Promise Banner */}
        <div className="p-4 sm:p-5 rounded-xl bg-amber-500/10 border border-amber-500/30 dark:border-amber-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-amber-500 text-stone-950 flex items-center justify-center shrink-0">
              <Package className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-stone-900 dark:text-stone-100">
                The S.SUDAN HOPE Starter Toolkit Guarantee
              </h3>
              <p className="text-xs text-stone-600 dark:text-stone-300">
                Knowledge alone isn&apos;t enough. Trainees in technical trades receive their own commercial tools upon passing certification.
              </p>
            </div>
          </div>
          <span className="text-xs font-medium text-amber-700 dark:text-amber-400 whitespace-nowrap shrink-0">
            Zero Tuition Fees for Vulnerable Youths
          </span>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => {
            const isExpanded = expandedCourseId === course.id;

            return (
              <div
                key={course.id}
                className="rounded-xl bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700/80 p-6 flex flex-col justify-between hover:border-amber-400/60 dark:hover:border-amber-500/50 transition-all shadow-xs"
              >
                <div className="space-y-4">
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-xs text-stone-500 dark:text-stone-400">
                      <span className="capitalize font-semibold text-amber-600 dark:text-amber-400">
                        {course.track} Track
                      </span>
                      <span className="flex items-center gap-1 font-medium">
                        <Clock className="w-3.5 h-3.5" /> {course.duration}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100 leading-snug">
                      {course.title}
                    </h3>
                  </div>

                  <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                    {course.description}
                  </p>

                  {/* Starter Kit Included */}
                  <div className="p-2.5 rounded-lg bg-stone-50 dark:bg-stone-900/60 border border-stone-200/60 dark:border-stone-700/50 space-y-1">
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-amber-700 dark:text-amber-400 flex items-center gap-1">
                      <Package className="w-3 h-3" /> Graduate Toolkit
                    </div>
                    <div className="text-xs text-stone-700 dark:text-stone-200">
                      {course.kitProvided}
                    </div>
                  </div>

                  {/* Available Hubs */}
                  <div className="text-xs text-stone-500 dark:text-stone-400 flex items-center gap-1.5 flex-wrap">
                    <MapPin className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                    <span>Hubs: {course.availableHubs.join(' · ')}</span>
                  </div>

                  {/* Expandable Curriculum */}
                  {isExpanded && (
                    <div className="pt-3 border-t border-stone-100 dark:border-stone-700/50 space-y-2">
                      <div className="text-xs font-semibold text-stone-800 dark:text-stone-200">
                        Curriculum Highlights:
                      </div>
                      <ul className="space-y-1 text-xs text-stone-600 dark:text-stone-300">
                        {course.curriculum.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-1.5">
                            <CheckCircle className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="pt-1 text-[11px] text-stone-500 dark:text-stone-400 italic">
                        Award: {course.certification}
                      </div>
                    </div>
                  )}
                </div>

                {/* Bottom Actions */}
                <div className="pt-5 mt-4 border-t border-stone-100 dark:border-stone-700/50 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setExpandedCourseId(isExpanded ? null : course.id)}
                    className="text-xs text-stone-500 hover:text-stone-800 dark:text-stone-400 dark:hover:text-stone-200 underline underline-offset-2"
                  >
                    {isExpanded ? 'Hide Details' : 'View Syllabus'}
                  </button>

                  <button
                    onClick={() => onSelectCourseForRegistration(course.title)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-stone-950 bg-amber-500 hover:bg-amber-400 rounded-lg transition-colors whitespace-nowrap"
                  >
                    <span>Apply / Enroll</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
