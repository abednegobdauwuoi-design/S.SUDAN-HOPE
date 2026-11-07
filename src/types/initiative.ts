export type ProgramCategory = 'education' | 'vocational' | 'family-support' | 'agriculture' | 'youth-leadership';

export interface ProgramPillar {
  id: string;
  category: ProgramCategory;
  number: string;
  title: string;
  tagline: string;
  challengeAddressed: string;
  description: string;
  keyInitiatives: string[];
  metricsTarget: string;
  metricLabel: string;
  image: string;
}

export type SkillTrack = 'all' | 'vocational' | 'digital' | 'agriculture' | 'business' | 'literacy';

export interface SkillCourse {
  id: string;
  track: SkillTrack;
  title: string;
  duration: string;
  level: string;
  kitProvided: string;
  targetAudience: string;
  description: string;
  curriculum: string[];
  certification: string;
  availableHubs: string[];
}

export interface CommunityStory {
  id: string;
  name: string;
  role: string;
  location: string;
  state: string;
  quote: string;
  narrative: string;
  transformationOutcome: string;
  year: string;
  pillarRef: string;
}

export interface StateHub {
  id: string;
  stateName: string;
  capital: string;
  status: 'active' | 'expanding' | 'planned';
  focusPillars: string[];
  activeLearnersCount: number;
  communityLead: string;
  hubLocation: string;
  priorityNeeds: string;
}

export interface SupportPledgeOption {
  id: string;
  title: string;
  usdAmount: number;
  sspAmount: number;
  description: string;
  tangibleImpact: string;
  iconName: string;
}

export interface ApplicationSubmission {
  id: string;
  applicantType: 'learner' | 'volunteer' | 'partner' | 'story';
  fullName: string;
  email: string;
  phone: string;
  locationState: string;
  interestArea: string;
  notes: string;
  submittedAt: string;
}
