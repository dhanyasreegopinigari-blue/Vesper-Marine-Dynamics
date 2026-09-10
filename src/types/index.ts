export interface VehicleSpec {
  id: string;
  name: string;
  class: 'Deep-Survey AUV' | 'Inspection Hybrid-ROV' | 'Benthic Glider' | 'Long-Endurance USV';
  tagline: string;
  depthRatingMeters: number;
  enduranceHours: number;
  speedKnots: number;
  weightKg: number;
  lengthMeters: number;
  autonomyLevel: 'Level 4 Full Swarm' | 'Level 4 Supervised' | 'Level 3 Adaptive';
  primarySensors: string[];
  batteryKWh: number;
  communication: string[];
  image: string;
  description: string;
  applications: string[];
  features: {
    title: string;
    description: string;
  }[];
}

export interface SensorPayload {
  id: string;
  name: string;
  category: 'Acoustic' | 'Optical' | 'Environmental' | 'Structural';
  weightKg: number;
  powerWatts: number;
  dataYieldRate: string;
  description: string;
  compatibleHulls: string[];
}

export interface SolutionVertical {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  iconName: string;
  heroImage: string;
  summary: string;
  challenges: string[];
  autonomousCapabilities: {
    title: string;
    description: string;
    metric: string;
  }[];
  caseStudyHighlight: {
    client: string;
    location: string;
    result: string;
  };
  telemetryMetrics: {
    label: string;
    value: string;
  }[];
}

export interface MissionCaseStudy {
  id: string;
  title: string;
  client: string;
  sector: 'Offshore Wind' | 'Deepwater Infrastructure' | 'Ocean Science' | 'Subsea Telemetry';
  location: string;
  depthMeters: number;
  durationDays: number;
  year: number;
  thumbnail: string;
  heroImage: string;
  overview: string;
  challenge: string;
  solutionProvided: string;
  impactMetrics: {
    metric: string;
    value: string;
    label: string;
  }[];
  vehicleDeployments: string[];
  sensorsUsed: string[];
  telemetryHighlights: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  credentials: string;
  bio: string;
  priorAffiliation: string;
  image: string;
  linkedinUrl?: string;
  publicationsCount: number;
}

export interface JobOpening {
  id: string;
  title: string;
  department: 'Autonomy & AI' | 'Hardware & Hydrodynamics' | 'Acoustic Systems' | 'Operations & Field Robotics';
  location: 'Boston, MA' | 'Aberdeen, UK' | 'Singapore' | 'Hybrid / Remote';
  type: 'Full-time' | 'Contract';
  experienceLevel: 'Senior' | 'Principal' | 'Staff' | 'Lead';
  description: string;
  responsibilities: string[];
  requirements: string[];
  perks: string[];
}

export interface FAQItem {
  id: string;
  category: 'Autonomy & SLAM' | 'Deployment & Fleet' | 'Data Security & Cloud' | 'Environmental Compliance' | 'Procurement';
  question: string;
  answer: string;
}

export interface SubseaTelemetryState {
  diveDepth: number;
  maxDepth: number;
  waterSalinityPsu: number;
  temperatureCelsius: number;
  pressureBar: number;
  batteryPercentage: number;
  acousticPingMs: number;
  headingDegrees: number;
  turbidityNtu: number;
  activeVehicleId: string;
  meshNodesCount: number;
  anomaliesDetected: number;
}
