/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { MissionStatement } from './components/MissionStatement';
import { PillarsSection } from './components/PillarsSection';
import { SkillsAcademySection } from './components/SkillsAcademySection';
import { CommunityStoriesSection } from './components/CommunityStoriesSection';
import { HubLocatorSection } from './components/HubLocatorSection';
import { ImpactPledgeSection } from './components/ImpactPledgeSection';
import { Footer } from './components/Footer';
import { GetInvolvedModal, ModalTab } from './components/GetInvolvedModal';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('ssh_theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [modalTab, setModalTab] = useState<ModalTab>('learner');
  const [preselectedCourse, setPreselectedCourse] = useState<string>('');

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('ssh_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('ssh_theme', 'light');
    }
  }, [darkMode]);

  const handleToggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const handleOpenGetInvolved = (tab: ModalTab = 'learner') => {
    setModalTab(tab);
    setPreselectedCourse('');
    setModalOpen(true);
  };

  const handleSelectCourseForRegistration = (courseTitle: string) => {
    setPreselectedCourse(courseTitle);
    setModalTab('learner');
    setModalOpen(true);
  };

  const handleOpenStorySubmit = () => {
    setModalTab('story');
    setPreselectedCourse('');
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-100 transition-colors selection:bg-amber-100 dark:selection:bg-amber-900/60 selection:text-amber-900 dark:selection:text-amber-100 flex flex-col font-sans">
      <Navbar
        darkMode={darkMode}
        onToggleDarkMode={handleToggleDarkMode}
        onOpenGetInvolved={handleOpenGetInvolved}
      />

      <main className="flex-1">
        <HeroSection onOpenGetInvolved={handleOpenGetInvolved} />
        <MissionStatement />
        <PillarsSection onOpenGetInvolved={handleOpenGetInvolved} />
        <SkillsAcademySection onSelectCourseForRegistration={handleSelectCourseForRegistration} />
        <CommunityStoriesSection onOpenStorySubmit={handleOpenStorySubmit} />
        <HubLocatorSection onOpenGetInvolved={handleOpenGetInvolved} />
        <ImpactPledgeSection />
      </main>

      <Footer onOpenGetInvolved={handleOpenGetInvolved} />

      <GetInvolvedModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultTab={modalTab}
        preselectedCourse={preselectedCourse}
      />
    </div>
  );
}
