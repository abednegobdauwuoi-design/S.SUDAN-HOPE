import React, { useState, useEffect } from 'react';
import { X, CheckCircle, GraduationCap, Users, Building, MessageSquare, Sparkles } from 'lucide-react';
import { SKILL_COURSES, SOUTH_SUDAN_HUBS } from '../data/initiativeData';

export type ModalTab = 'learner' | 'volunteer' | 'partner' | 'story';

interface GetInvolvedModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTab?: ModalTab;
  preselectedCourse?: string;
}

export const GetInvolvedModal: React.FC<GetInvolvedModalProps> = ({
  isOpen,
  onClose,
  defaultTab = 'learner',
  preselectedCourse = '',
}) => {
  const [activeTab, setActiveTab] = useState<ModalTab>(defaultTab);

  // Form states
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [stateRegion, setStateRegion] = useState('Central Equatoria');
  const [county, setCounty] = useState('');
  const [selectedCourse, setSelectedCourse] = useState(preselectedCourse || SKILL_COURSES[0].title);
  const [skillOrRole, setSkillOrRole] = useState('Solar Tech Instructor');
  const [partnerType, setPartnerType] = useState('Diaspora Association');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionId, setSubmissionId] = useState('');

  useEffect(() => {
    setActiveTab(defaultTab);
  }, [defaultTab]);

  useEffect(() => {
    if (preselectedCourse) {
      setSelectedCourse(preselectedCourse);
      setActiveTab('learner');
    }
  }, [preselectedCourse]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const id = `SSH-${activeTab.toUpperCase()}-${Math.floor(100000 + Math.random() * 900000)}`;
    setSubmissionId(id);

    // Save submission to localStorage
    const saved = JSON.parse(localStorage.getItem('ssh_submissions') || '[]');
    saved.push({
      id,
      tab: activeTab,
      fullName,
      email,
      phone,
      stateRegion,
      county,
      detail: activeTab === 'learner' ? selectedCourse : activeTab === 'volunteer' ? skillOrRole : partnerType,
      notes,
      timestamp: new Date().toISOString(),
    });
    localStorage.setItem('ssh_submissions', JSON.stringify(saved));

    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFullName('');
    setEmail('');
    setPhone('');
    setCounty('');
    setNotes('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-xs">
      <div className="relative w-full max-w-2xl bg-white dark:bg-stone-900 rounded-2xl shadow-2xl border border-stone-200 dark:border-stone-700 max-h-[92vh] flex flex-col overflow-hidden">
        {/* Top Header */}
        <div className="p-6 border-b border-stone-100 dark:border-stone-800 flex items-center justify-between">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
              S.SUDAN HOPE Community Portal
            </div>
            <h3 className="text-xl font-bold text-stone-900 dark:text-stone-100">
              Get Involved & Register
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 rounded-lg"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selection */}
        {!isSubmitted && (
          <div className="flex border-b border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-950/40 p-1.5 gap-1 overflow-x-auto text-xs font-semibold">
            <button
              onClick={() => setActiveTab('learner')}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg transition-all whitespace-nowrap ${
                activeTab === 'learner'
                  ? 'bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 shadow-xs'
                  : 'text-stone-600 dark:text-stone-400'
              }`}
            >
              <GraduationCap className="w-4 h-4 text-amber-500" />
              <span>Learner / Trainee</span>
            </button>

            <button
              onClick={() => setActiveTab('volunteer')}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg transition-all whitespace-nowrap ${
                activeTab === 'volunteer'
                  ? 'bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 shadow-xs'
                  : 'text-stone-600 dark:text-stone-400'
              }`}
            >
              <Users className="w-4 h-4 text-amber-500" />
              <span>Volunteer / Trainer</span>
            </button>

            <button
              onClick={() => setActiveTab('partner')}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg transition-all whitespace-nowrap ${
                activeTab === 'partner'
                  ? 'bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 shadow-xs'
                  : 'text-stone-600 dark:text-stone-400'
              }`}
            >
              <Building className="w-4 h-4 text-amber-500" />
              <span>Partner / Diaspora</span>
            </button>

            <button
              onClick={() => setActiveTab('story')}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg transition-all whitespace-nowrap ${
                activeTab === 'story'
                  ? 'bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 shadow-xs'
                  : 'text-stone-600 dark:text-stone-400'
              }`}
            >
              <MessageSquare className="w-4 h-4 text-amber-500" />
              <span>Community Need</span>
            </button>
          </div>
        )}

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-stone-700 dark:text-stone-300">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. John Deng or Mary Kiden"
                    className="w-full px-3 py-2 text-xs rounded-lg border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-stone-700 dark:text-stone-300">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+211 92X XXX XXX"
                    className="w-full px-3 py-2 text-xs rounded-lg border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-stone-700 dark:text-stone-300">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com (optional)"
                    className="w-full px-3 py-2 text-xs rounded-lg border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-stone-700 dark:text-stone-300">
                    State / Region *
                  </label>
                  <select
                    value={stateRegion}
                    onChange={(e) => setStateRegion(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    {SOUTH_SUDAN_HUBS.map((h) => (
                      <option key={h.id} value={h.stateName}>
                        {h.stateName} ({h.capital})
                      </option>
                    ))}
                    <option value="Diaspora / Other">Diaspora / Outside South Sudan</option>
                  </select>
                </div>
              </div>

              {/* Dynamic Field according to tab */}
              {activeTab === 'learner' && (
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-stone-700 dark:text-stone-300">
                    Desired Training Track / Course *
                  </label>
                  <select
                    value={selectedCourse}
                    onChange={(e) => setSelectedCourse(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    {SKILL_COURSES.map((c) => (
                      <option key={c.id} value={c.title}>
                        {c.title} ({c.duration})
                      </option>
                    ))}
                  </select>
                  <p className="text-[11px] text-amber-700 dark:text-amber-400">
                    Notice: Certified trainees receive a starter toolset upon graduation.
                  </p>
                </div>
              )}

              {activeTab === 'volunteer' && (
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-stone-700 dark:text-stone-300">
                    How Would You Like to Contribute? *
                  </label>
                  <select
                    value={skillOrRole}
                    onChange={(e) => setSkillOrRole(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    <option value="Vocational Instructor">Vocational / Technical Skills Instructor</option>
                    <option value="Adult Literacy Teacher">Adult Literacy & English Educator</option>
                    <option value="Agri Field Advisor">Agricultural / Horticulture Field Advisor</option>
                    <option value="Youth Mentor">Youth Mentor & Peacebuilding Facilitator</option>
                    <option value="Digital Skills Trainer">Digital Skills & Computer Trainer</option>
                    <option value="Logistics & Hub Coordinator">Local Hub Logistics Coordinator</option>
                  </select>
                </div>
              )}

              {activeTab === 'partner' && (
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-stone-700 dark:text-stone-300">
                    Organization / Partnership Type *
                  </label>
                  <select
                    value={partnerType}
                    onChange={(e) => setPartnerType(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    <option value="Diaspora Association">South Sudanese Diaspora Association / Network</option>
                    <option value="Local Community Organization (CBO)">Local Community-Based Organization (CBO)</option>
                    <option value="Faith-Based / Civic Group">Faith-Based or Civic Institution</option>
                    <option value="Private Business / Employer">Private Employer / Apprenticeship Sponsor</option>
                    <option value="International Partner">International Educational Partner / NGO</option>
                  </select>
                </div>
              )}

              {/* County / Payam Details */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-stone-700 dark:text-stone-300">
                  County, Payam, or Neighborhood
                </label>
                <input
                  type="text"
                  value={county}
                  onChange={(e) => setCounty(e.target.value)}
                  placeholder="e.g. Juba Payam, Munuki, Hai Cinema, Wau North, etc."
                  className="w-full px-3 py-2 text-xs rounded-lg border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              {/* Notes / Motivation */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-stone-700 dark:text-stone-300">
                  {activeTab === 'learner'
                    ? 'Why do you want to learn this skill? (Brief motivation)'
                    : activeTab === 'volunteer'
                    ? 'Briefly describe your experience and availability'
                    : activeTab === 'partner'
                    ? 'What is your proposed area of partnership?'
                    : 'Describe the community need or story you want to submit'}
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Share a few sentences..."
                  className="w-full px-3 py-2 text-xs rounded-lg border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-4 text-xs font-semibold text-stone-950 bg-amber-500 hover:bg-amber-400 rounded-lg shadow-sm transition-colors text-center"
                >
                  Submit Registration to S.SUDAN HOPE
                </button>
              </div>
            </form>
          ) : (
            /* Success View */
            <div className="text-center py-6 space-y-5 animate-fade-in">
              <div className="w-14 h-14 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>

              <div className="space-y-1">
                <div className="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                  Registration Received
                </div>
                <h3 className="text-2xl font-bold font-display text-stone-900 dark:text-stone-100">
                  Welcome to the Movement, {fullName}!
                </h3>
                <p className="text-xs font-mono text-stone-500 dark:text-stone-400">
                  Tracking Code: {submissionId}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-stone-50 dark:bg-stone-800 text-left text-xs space-y-2 border border-stone-200 dark:border-stone-700">
                <div className="font-semibold text-stone-800 dark:text-stone-200">
                  Next Steps:
                </div>
                <ul className="space-y-1 text-stone-600 dark:text-stone-300 list-disc list-inside">
                  <li>Your application has been logged for the {stateRegion} Hub team.</li>
                  <li>A coordinator will contact you via phone/WhatsApp at {phone} for orientation.</li>
                  <li>No application fees are ever charged.</li>
                </ul>
              </div>

              <div className="flex justify-center gap-3 pt-2">
                <button
                  onClick={handleReset}
                  className="px-4 py-2 text-xs font-medium text-stone-700 dark:text-stone-300 border border-stone-300 dark:border-stone-700 rounded-lg hover:bg-stone-50 dark:hover:bg-stone-800"
                >
                  Submit Another Entry
                </button>
                <button
                  onClick={onClose}
                  className="px-5 py-2 text-xs font-semibold text-stone-950 bg-amber-500 hover:bg-amber-400 rounded-lg"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
