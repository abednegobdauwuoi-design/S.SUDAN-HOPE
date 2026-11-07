import { ProgramPillar, SkillCourse, CommunityStory, StateHub, SupportPledgeOption } from '../types/initiative';

export const INITIATIVE_PILLARS: ProgramPillar[] = [
  {
    id: 'education-literacy',
    category: 'education',
    number: '01',
    title: 'Education & Community Literacy',
    tagline: 'Unlocking foundational learning for children, youth, and adults',
    challengeAddressed: 'Limited access to quality schooling, acute teacher shortages, and adult literacy gaps.',
    description: 'We establish community-anchored study rooms, provide essential learning materials, sponsor vulnerable children, and host evening literacy circles for adults who missed formal schooling.',
    keyInitiatives: [
      'Community Learning Hubs with solar-powered study desks',
      'Early Grade Literacy & Mother-Tongue / English reading toolkits',
      'Solar Study Lamps & School Attendance support packages',
      'Adult Basic Functional Literacy & Numeracy evening circles'
    ],
    metricsTarget: '4,500+',
    metricLabel: 'Students & Adult Learners Reached',
    image: '/src/assets/images/education_community_classroom_1794059433519.jpg'
  },
  {
    id: 'vocational-skills',
    category: 'vocational',
    number: '02',
    title: 'Professional & Vocational Trades',
    tagline: 'Practical technical mastery directly linked to self-employment and industry',
    challengeAddressed: 'Youth unemployment reaching over 70%, lack of certified vocational training facilities.',
    description: 'Hands-on practical training in high-demand trades: off-grid solar installation, tailoring & textile design, construction carpentry, electrical wiring, and mobile device repair with toolkits provided upon completion.',
    keyInitiatives: [
      'Solar Technician & Renewable Energy Installation Track',
      'Garment Construction, Tailoring & Pattern Making Academy',
      'Building Carpentry, Joinery & Metal Fabrication Workshops',
      'Complete Graduate Starter Toolkits so trainees launch immediately'
    ],
    metricsTarget: '1,200+',
    metricLabel: 'Certified Artisans & Solar Techs Trained',
    image: '/src/assets/images/vocational_skills_training_1794059433905.jpg'
  },
  {
    id: 'sustainable-agriculture',
    category: 'agriculture',
    number: '03',
    title: 'Cooperative Agriculture & Livelihoods',
    tagline: 'Fostering food sovereignty, market gardens, and rural economic resilience',
    challengeAddressed: 'Food insecurity, reliance on expensive food imports, and underutilized arable riverine land.',
    description: 'Empowering women-led farming collectives and young agro-entrepreneurs with drought-resilient seeds, low-cost drip irrigation from the Nile basin, post-harvest storage, and direct access to local markets.',
    keyInitiatives: [
      'Community Market Vegetable Gardens along the Nile & tributaries',
      'Seed Banks & Organic Soil Fertilization workshops',
      'Solar Water Pumping & Drip Irrigation infrastructure',
      'Farmer Producer Cooperatives with shared transport to Juba & state markets'
    ],
    metricsTarget: '650+',
    metricLabel: 'Smallholder Families with Year-Round Income',
    image: '/src/assets/images/community_agriculture_empowerment_1794059433994.jpg'
  },
  {
    id: 'family-support',
    category: 'family-support',
    number: '04',
    title: 'Vulnerable Family Safety Net',
    tagline: 'Emergency relief, nutrition, and dignity for households in crisis',
    challengeAddressed: 'Extreme poverty, child-headed households, widows, and families displaced by seasonal floods.',
    description: 'A compassionate dignity program providing critical nutritional sustenance, emergency medical assistance stipends, water sanitation kits, and modest home weatherproofing before rainy seasons.',
    keyInitiatives: [
      'Child-headed household food baskets and educational guardianship',
      'Clean water filters and mosquito nets for malaria prevention',
      'Safe shelter re-roofing and flood barrier community efforts',
      'Maternal and newborn care hampers with healthcare referrals'
    ],
    metricsTarget: '850+',
    metricLabel: 'Vulnerable Households Supported',
    image: '/src/assets/images/hero_south_sudan_hope_1794059432118.jpg'
  },
  {
    id: 'youth-leadership',
    category: 'youth-leadership',
    number: '05',
    title: 'Youth Leadership & Digital Skills',
    tagline: 'Cultivating the next generation of South Sudanese civic and tech pioneers',
    challengeAddressed: 'Youth alienation, digital divide, lack of constructive mentorship, and limited civic platforms.',
    description: 'Bridging the digital divide with computer literacy, coding, digital freelance skills, debate clubs, peacebuilding dialogues, and sports tournaments uniting diverse communities in hope.',
    keyInitiatives: [
      'Digital Literacy & Basic Computing mobile computer labs',
      'Peacebuilding & Community Dialogue Youth Assemblies',
      'Sports for Unity tournaments and leadership coaching',
      'Mentorship network connecting youth with South Sudanese professionals'
    ],
    metricsTarget: '2,800+',
    metricLabel: 'Youth Engaged in Leadership & Tech',
    image: '/src/assets/images/hero_south_sudan_hope_1794059432118.jpg'
  }
];

export const SKILL_COURSES: SkillCourse[] = [
  {
    id: 'solar-energy-tech',
    track: 'vocational',
    title: 'Solar Energy & Photovoltaic Installation',
    duration: '12 Weeks (Full Time)',
    level: 'Beginner to Intermediate',
    kitProvided: 'Digital multimeter, wire strippers, safety harness, and basic toolkit',
    targetAudience: 'Youth aged 18-35 seeking technical electrical careers',
    description: 'Comprehensive training in off-grid solar systems, inverter configuration, battery storage maintenance, and residential solar panel installation across South Sudan.',
    curriculum: [
      'Fundamentals of DC/AC Electricity & Electrical Safety',
      'Solar PV System Sizing for Homes, Clinics & Schools',
      'Battery Chemistry, Charge Controllers & Inverters',
      'Field Installation, Troubleshooting & Routine Maintenance',
      'Entrepreneurship: Setting up a local solar servicing micro-enterprise'
    ],
    certification: 'S.SUDAN HOPE Certified Solar Systems Technician',
    availableHubs: ['Juba Hub', 'Wau Technical Center', 'Malakal Center', 'Rumbek Hub']
  },
  {
    id: 'tailoring-garment-design',
    track: 'vocational',
    title: 'Garment Construction & Tailoring Masterclass',
    duration: '16 Weeks',
    level: 'Foundational to Professional',
    kitProvided: 'Heavy-duty manual sewing machine, cutting shears, measuring kits & fabric rolls',
    targetAudience: 'Women, young mothers, and youth interested in apparel and tailoring business',
    description: 'Practical apparel construction covering school uniforms, traditional South Sudanese attire, modern workwear, pattern making, and machine maintenance.',
    curriculum: [
      'Sewing Machine Mechanics, Threading & Basic Maintenance',
      'Body Measurements & Pattern Drafting',
      'Cutting, Stitching, Hemming & Finishing Techniques',
      'Specialization: School Uniforms & Everyday Commercial Apparel',
      'Costing, Pricing, Fabric Sourcing & Client Management'
    ],
    certification: 'Professional Tailoring & Garment Construction Certificate',
    availableHubs: ['Juba Hub', 'Wau Technical Center', 'Yei Center', 'Aweil Hub', 'Bor Hub']
  },
  {
    id: 'digital-literacy-office',
    track: 'digital',
    title: 'Digital Literacy & Computer Office Skills',
    duration: '8 Weeks',
    level: 'Beginner Friendly',
    kitProvided: 'Study workbook, USB storage drive & typing reference card',
    targetAudience: 'High school graduates, job seekers, and community clerks',
    description: 'Essential computer skills to empower individuals for office employment, NGO administrative roles, data entry, and internet-based research.',
    curriculum: [
      'Computer Hardware Basics, Operating Systems & File Management',
      'Typing Speed & Accuracy Mastery',
      'Word Processing (Formatting CVs, Official Letters & Reports)',
      'Spreadsheets & Basic Financial Bookkeeping (Excel / Sheets)',
      'Email Etiquette, Web Research & Digital Security Awareness'
    ],
    certification: 'Certificate of Digital Productivity & Office Proficiency',
    availableHubs: ['Juba Hub', 'Wau Technical Center', 'Malakal Center']
  },
  {
    id: 'cooperative-agri-enterprise',
    track: 'agriculture',
    title: 'Horticulture & Climate-Smart Agriculture',
    duration: '10 Weeks (Field & Classroom)',
    level: 'Practical',
    kitProvided: 'Drip irrigation kit, high-yield vegetable seed pack, hand farming tools',
    targetAudience: 'Smallholder farmers, women cooperatives, and rural youth',
    description: 'Practical modern farming techniques for riverine and rainfed environments, nursery management, pest management with natural remedies, and harvest preservation.',
    curriculum: [
      'Soil Health, Composting & Natural Soil Enrichment',
      'Nursery Bed Preparation & Seedling Transplantation',
      'Water Harvesting, Drip Irrigation & Water Conservation',
      'Crop Rotation & Natural Pest Management (Organic neem extracts)',
      'Post-Harvest Storage, Drying & Collective Market Bargaining'
    ],
    certification: 'Climate-Smart Community Agri-Practitioner Badge',
    availableHubs: ['Central Equatoria (Juba/Yei)', 'Aweil Hub', 'Bor Hub', 'Torit Center']
  },
  {
    id: 'small-business-launchpad',
    track: 'business',
    title: 'Community Micro-Enterprise Launchpad',
    duration: '6 Weeks',
    level: 'All Levels',
    kitProvided: 'Business ledger book, calculation tool, business plan template',
    targetAudience: 'Aspiring market vendors, trade graduates, and small shop owners',
    description: 'Demystifying small business finance, record-keeping, customer service, inventory tracking, and accessing community revolving credit pools.',
    curriculum: [
      'Validating a Viable Business Idea in Your Neighborhood',
      'Cash Flow Management & Separating Personal from Business Money',
      'Inventory Control & Dealing with Credit in Community Settings',
      'Negotiation, Supplier Relations & Fair Margin Calculation',
      'Pitching for Community Seed Micro-Grants'
    ],
    certification: 'Certificate in Grassroots Business Operations',
    availableHubs: ['All Active Hubs across South Sudan']
  },
  {
    id: 'foundational-adult-literacy',
    track: 'literacy',
    title: 'Adult Functional Literacy & Numeracy',
    duration: '24 Weeks (Flexible Evening Sessions)',
    level: 'Beginner',
    kitProvided: 'Illustrated literacy primers, slate, notebooks & reading glasses voucher if needed',
    targetAudience: 'Adults, market traders, parents, and community elders',
    description: 'Dignified, patient literacy sessions focused on practical daily life: reading market receipts, signing documents, mobile money usage, and supporting children with homework.',
    curriculum: [
      'Phonics, Alphabet & Everyday South Sudanese English Vocabulary',
      'Reading Signs, Medicine Labels & Official Forms',
      'Basic Everyday Arithmetic: Addition, Subtraction & Currency Math',
      'Navigating Mobile Money (m-Gurush) & Digital SMS safely',
      'Reading Storybooks with Children at Home'
    ],
    certification: 'Certificate of Foundational Literacy & Numeracy',
    availableHubs: ['Juba Hub', 'Wau Technical Center', 'Malakal Center', 'Rumbek Hub', 'Aweil Hub']
  }
];

export const COMMUNITY_STORIES: CommunityStory[] = [
  {
    id: 'story-nyibol',
    name: 'Nyibol Deng',
    role: 'Solar Technician Apprentice',
    location: 'Munuki, Juba',
    state: 'Central Equatoria',
    quote: 'People in my community never thought a young woman could climb a roof and wire a solar electrical inverter. S.SUDAN HOPE believed in me first.',
    narrative: 'After leaving secondary school with few job prospects, Nyibol joined the Solar Technician workshop. With hands-on practice, she mastered wiring, inverter load testing, and circuit safety. Today, she has installed solar kits for over 18 households and two health clinics in Juba.',
    transformationOutcome: 'Earning an independent living and mentoring 6 other young women in solar technology.',
    year: '2026',
    pillarRef: 'vocational-skills'
  },
  {
    id: 'story-emmanuel',
    name: 'Emmanuel Lado',
    role: 'Adult Literacy Learner & Shop Owner',
    location: 'Kator, Juba',
    state: 'Central Equatoria',
    quote: 'For 15 years I ran my small carpentry shop relying on others to calculate bills and write down invoices. Now, I write my own contracts and sign with pride.',
    narrative: 'Emmanuel spent his youth without schooling due to conflict. Enrolling in the evening adult literacy circle, he committed two evenings every week after work. Within five months, he was reading product specifications and managing customer accounting.',
    transformationOutcome: 'Quadrupled his workshop revenue by bidding on formal contracts with local NGOs and schools.',
    year: '2026',
    pillarRef: 'education-literacy'
  },
  {
    id: 'story-grace',
    name: 'Grace Achol & The Nile Mothers Cooperative',
    role: 'Women Agri-Cooperative Chairperson',
    location: 'Gondokoro, Central Equatoria',
    state: 'Central Equatoria',
    quote: 'Our children used to go to bed hungry when flood season washed out our crops. With raised beds and shared irrigation pumps, we feed our families and sell the surplus.',
    narrative: 'Leading a group of 28 widows and vulnerable mothers along the Nile riverbank, Grace mobilized her community. S.SUDAN HOPE supplied drought-resilient tomato, kale, and okra seeds along with a solar water pump. The harvest was the largest in their area.',
    transformationOutcome: 'Sent 42 children to school with income earned from cooperative vegetable sales.',
    year: '2026',
    pillarRef: 'sustainable-agriculture'
  },
  {
    id: 'story-deng',
    name: 'Deng Garang',
    role: 'Youth Peace Ambassador & Carpentry Trainee',
    location: 'Hai Nazareth, Wau',
    state: 'Western Bahr el Ghazal',
    quote: 'Idleness and lack of hope push youth into despair. Learning a craft gave my hands a purpose and gave my heart peace.',
    narrative: 'Deng was out of work and struggling to support his younger siblings. Joining the Wau Technical carpentry track, he learned roof truss assembly and modern furniture joinery. His graduation project—school desks for a local primary school—was bought directly by a community church.',
    transformationOutcome: 'Employs 3 apprentices and trains younger youths in carpentry craftsmanship.',
    year: '2026',
    pillarRef: 'vocational-skills'
  }
];

export const SOUTH_SUDAN_HUBS: StateHub[] = [
  {
    id: 'central-equatoria',
    stateName: 'Central Equatoria',
    capital: 'Juba',
    status: 'active',
    focusPillars: ['Vocational Trades', 'Solar Energy', 'Digital Literacy', 'Market Farming'],
    activeLearnersCount: 620,
    communityLead: 'Abednego B. & Community Board',
    hubLocation: 'Main Hub: Gudele Block 8, Juba (Field Annex in Yei)',
    priorityNeeds: 'Additional solar test benches and sewing machines for expanding women cohorts.'
  },
  {
    id: 'western-bahr-el-ghazal',
    stateName: 'Western Bahr el Ghazal',
    capital: 'Wau',
    status: 'active',
    focusPillars: ['Carpentry & Joinery', 'Adult Literacy', 'Metal Craft'],
    activeLearnersCount: 380,
    communityLead: 'Marko Wol & Local Elders Council',
    hubLocation: 'Wau Technical Training Grounds, Hai Nazareth',
    priorityNeeds: 'Timber joinery tools, protective gear, and literacy primers.'
  },
  {
    id: 'upper-nile',
    stateName: 'Upper Nile',
    capital: 'Malakal',
    status: 'active',
    focusPillars: ['Community Learning Hub', 'Water Sanitation', 'Youth Dialogue'],
    activeLearnersCount: 290,
    communityLead: 'Rebecca Nyankor',
    hubLocation: 'Malakal Town Center Learning Hall',
    priorityNeeds: 'Solar study lamps, textbooks for primary schoolers, clean water filtration kits.'
  },
  {
    id: 'lakes',
    stateName: 'Lakes State',
    capital: 'Rumbek',
    status: 'expanding',
    focusPillars: ['Vocational Skills', 'Youth Peace Sports', 'Basic Numeracy'],
    activeLearnersCount: 210,
    communityLead: 'Daniel Mabor',
    hubLocation: 'Rumbek Community Center',
    priorityNeeds: 'Mechanic tool sets, football sports gear for peace league, solar batteries.'
  },
  {
    id: 'jonglei',
    stateName: 'Jonglei State',
    capital: 'Bor',
    status: 'expanding',
    focusPillars: ['Flood Resilience', 'Cooperative Fishing & Farming', 'Youth Mentorship'],
    activeLearnersCount: 240,
    communityLead: 'Mary Yar',
    hubLocation: 'Bor Riverfront Community Shed',
    priorityNeeds: 'Raised nursery beds, flood-resistant seed varieties, life jackets.'
  },
  {
    id: 'northern-bahr-el-ghazal',
    stateName: 'Northern Bahr el Ghazal',
    capital: 'Aweil',
    status: 'expanding',
    focusPillars: ['Agriculture', 'Tailoring', 'Small Business Credit Circles'],
    activeLearnersCount: 195,
    communityLead: 'Santino Kuol',
    hubLocation: 'Aweil Central Market Cooperative Space',
    priorityNeeds: 'Treadle sewing machines, ox-plough spare parts, business ledger books.'
  },
  {
    id: 'unity',
    stateName: 'Unity State',
    capital: 'Bentiu',
    status: 'planned',
    focusPillars: ['Mobile Digital Hub', 'Vulnerable Family Food Kits', 'Youth Training'],
    activeLearnersCount: 90,
    communityLead: 'Gabriel Gatluak',
    hubLocation: 'Bentiu Community Field Site',
    priorityNeeds: 'Emergency nutrition hampers, water purification tablets, solar radios.'
  },
  {
    id: 'eastern-equatoria',
    stateName: 'Eastern Equatoria',
    capital: 'Torit',
    status: 'planned',
    focusPillars: ['Agroforestry', 'Carpentry', 'Vocational Trades'],
    activeLearnersCount: 75,
    communityLead: 'Rose Ilona',
    hubLocation: 'Torit Civic Hall Annex',
    priorityNeeds: 'Tree nursery starter kits, carpentry workbenches.'
  }
];

export const PLEDGE_OPTIONS: SupportPledgeOption[] = [
  {
    id: 'pledge-student-kit',
    title: 'Learner Education Starter Kit',
    usdAmount: 25,
    sspAmount: 35000,
    description: 'Equips a child or adult learner with full notebook set, math instruments, pens, solar study lamp, and reading primer.',
    tangibleImpact: '1 Student equipped for a full academic year of studies',
    iconName: 'BookOpen'
  },
  {
    id: 'pledge-tailoring-kit',
    title: 'Artisan & Tailor Toolset',
    usdAmount: 75,
    sspAmount: 105000,
    description: 'Provides durable fabric shears, measuring tools, starter cloth, and basic maintenance toolkit for a vocational graduate.',
    tangibleImpact: 'Launches 1 female artisan into direct home-based self-employment',
    iconName: 'Scissors'
  },
  {
    id: 'pledge-solar-apprentice',
    title: 'Solar Technician Apprenticeship',
    usdAmount: 140,
    sspAmount: 196000,
    description: 'Covers practical workshop training, solar electrical components, safety multimeter, and certification assessment for 1 trainee.',
    tangibleImpact: '1 Youth certified to install clean solar energy across rural communities',
    iconName: 'Sun'
  },
  {
    id: 'pledge-farmer-coop',
    title: 'Cooperative Agri-Seed & Irrigation Unit',
    usdAmount: 280,
    sspAmount: 392000,
    description: 'Provides drought-tolerant vegetable seeds, organic fertilizer guidance, and shared low-pressure drip irrigation hose line.',
    tangibleImpact: 'Feeds 4 vulnerable families with continuous harvest and market income',
    iconName: 'Sprout'
  },
  {
    id: 'pledge-community-hub',
    title: 'Community Learning Hub Sponsor',
    usdAmount: 600,
    sspAmount: 840000,
    description: 'Sponsors solar lighting, reference textbooks, battery power, and local coordinator stipend for an entire community room for 6 months.',
    tangibleImpact: 'Provides a safe, illuminated haven for 150+ learners every single evening',
    iconName: 'Home'
  }
];

export const INITIATIVE_CORE_VALUES = [
  {
    title: 'Radical Inclusivity',
    desc: 'Every individual, regardless of ethnic background, age, gender, social status, or past adversity, has innate worth and deserves dignity.'
  },
  {
    title: 'Practical Self-Reliance',
    desc: 'We don’t believe in dependency. Our programs teach practical, marketable trades and agricultural skills that enable people to build their own futures.'
  },
  {
    title: 'Grassroots Community Ownership',
    desc: 'Initiatives are planned with and led by local community members, elders, women, and youth to ensure lasting stewardship.'
  },
  {
    title: 'Transparent Stewardship',
    desc: 'Every resource, pledge, and toolkit is tracked directly to its community recipient with absolute openness and public accountability.'
  }
];
