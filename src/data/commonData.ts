import { TeamMember, JobOpening, FAQItem } from '../types';

export const teamMembers: TeamMember[] = [
  {
    id: 'dr-elena-vance',
    name: 'Dr. Elena Vance, Ph.D.',
    role: 'Chief Executive Officer & Co-Founder',
    credentials: 'Ph.D. Marine Robotics (MIT / Woods Hole Oceanographic Institution)',
    bio: 'Former Lead Ocean Systems Scientist at Woods Hole. Elena pioneered acoustic SLAM algorithms for deep hadal submersibles and has logged over 4,500 hours commanding robotic expeditions.',
    priorAffiliation: 'MIT & WHOI Joint Program',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    publicationsCount: 38
  },
  {
    id: 'marcus-lindqvist',
    name: 'Marcus Lindqvist, M.Sc.',
    role: 'Chief Technology Officer & Co-Founder',
    credentials: 'M.Sc. Autonomous Systems (NTNU Trondheim)',
    bio: 'Architect of Vesper’s Swarm-Mesh acoustic telemetry protocol. Previously led deepwater autonomous vehicle engineering at Kongsberg Maritime and Equinor Subsea Labs.',
    priorAffiliation: 'Kongsberg Maritime / NTNU',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80',
    publicationsCount: 22
  },
  {
    id: 'dr-aravind-nair',
    name: 'Dr. Aravind Nair',
    role: 'VP of Autonomy & Edge Perception',
    credentials: 'Ph.D. Computer Vision & Robotics (Carnegie Mellon University)',
    bio: 'Specialist in real-time underwater optical de-scattering and sonar-inertial state estimation in severe turbidity and GPS-denied environments.',
    priorAffiliation: 'Carnegie Mellon Robotics Institute',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    publicationsCount: 44
  },
  {
    id: 'sarah-holloway',
    name: 'Sarah Holloway, CEng',
    role: 'VP of Marine Operations & Fleet Safety',
    credentials: 'Chartered Marine Engineer, Former Subsea Operations Director',
    bio: '20+ years commanding North Sea offshore operations, DP2 vessels, and subsea cable trenching spreads with zero lost-time incidents across 80+ commercial campaigns.',
    priorAffiliation: 'TechnipFMC / Subsea 7',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
    publicationsCount: 12
  }
];

export const jobOpenings: JobOpening[] = [
  {
    id: 'lead-subsea-autonomy-engineer',
    title: 'Lead Subsea Autonomy & SLAM Engineer',
    department: 'Autonomy & AI',
    location: 'Boston, MA',
    type: 'Full-time',
    experienceLevel: 'Lead',
    description: 'Lead the development of our next-generation factor-graph acoustic SLAM and terrain-relative navigation pipelines running on low-power edge NVIDIA Orin units.',
    responsibilities: [
      'Design multi-sensor fusion algorithms (Doppler Velocity Log, IMU, Synthetic Aperture Sonar, Bathymetric LiDAR)',
      'Deploy and validate real-time C++ trajectory optimization on 6,000m rated pressure hardware',
      'Lead open-water trials off Woods Hole and Gulf of Maine'
    ],
    requirements: [
      'M.S. or Ph.D. in Robotics, Computer Science, or Marine Engineering',
      '5+ years writing production C++20 / ROS2 / GTSAM',
      'Demonstrated experience with underwater or GPS-denied mobile robotics'
    ],
    perks: ['Equity options', 'Ocean trial expedition allowances', 'Comprehensive health & dental', 'Flexible hybrid schedule']
  },
  {
    id: 'hydrodynamics-mechanical-architect',
    title: 'Staff Subsea Mechanical & Pressure Vessel Architect',
    department: 'Hardware & Hydrodynamics',
    location: 'Aberdeen, UK',
    type: 'Full-time',
    experienceLevel: 'Staff',
    description: 'Architect deepwater carbon-composite and grade-5 titanium pressure hulls, wet-mateable electro-optical connectors, and low-drag fairings rated for 600 bar hydrostatic pressure.',
    responsibilities: [
      'Perform FEA structural collapse simulation and CFD hydrodynamic drag optimization',
      'Manage hyperbaric chamber validation up to 900 bar collapse limits',
      'Oversee precision CNC machining and composite resin infusion fabrication'
    ],
    requirements: [
      'B.S. or M.S. in Mechanical, Aerospace, or Ocean Engineering',
      '7+ years designing subsea housings or aerospace pressure structures',
      'Deep mastery of SolidWorks / ANSYS Mechanical / DNV-GL subsea code compliance'
    ],
    perks: ['Relocation support to Aberdeen hub', 'Private healthcare', 'Annual offshore field testing stipend']
  },
  {
    id: 'senior-acoustic-systems-engineer',
    title: 'Senior Acoustic Signal Processing & Modem Engineer',
    department: 'Acoustic Systems',
    location: 'Singapore',
    type: 'Full-time',
    experienceLevel: 'Senior',
    description: 'Design robust multi-node acoustic communication protocols that overcome severe Doppler shifts, multipath reflection, and thermocline refraction in tropical shallow waters.',
    responsibilities: [
      'Implement OFDM and spread-spectrum acoustic modulation algorithms on custom DSP/FPGA hardware',
      'Optimize swarm mesh communication routing between AUVs, USVs, and seabed seafloor nodes',
      'Run acoustic field trials in the Singapore Strait and South China Sea'
    ],
    requirements: [
      'Degree in Electrical Engineering, Signal Processing, or Underwater Acoustics',
      'Proficiency in MATLAB/Simulink and embedded C/C++',
      'Understanding of underwater sound propagation and acoustic channel modeling'
    ],
    perks: ['Competitive Asian tech hub compensation', 'Relocation package', 'Continuing education budget']
  },
  {
    id: 'marine-data-platform-lead',
    title: 'Principal Cloud & Geospatial Data Architect',
    department: 'Operations & Field Robotics',
    location: 'Hybrid / Remote',
    type: 'Full-time',
    experienceLevel: 'Principal',
    description: 'Build the high-throughput cloud ingestion engine that processes terabytes of bathymetric point-clouds, 4K subsea imagery, and eDNA sequencing results streamed via Starlink satellite gateways.',
    responsibilities: [
      'Architect automated Cloud-Optimized Point Cloud (COPC) and Bathymetric Attributed Grid (BAG) processing pipelines',
      'Build real-time WebGL/ThreeJS digital twin interfaces for enterprise clients',
      'Implement ISO 27001 and SOC 2 Type II data sovereignty controls for critical infrastructure data'
    ],
    requirements: [
      '8+ years in distributed systems (Go/Rust/TypeScript) and cloud infrastructure (AWS/GCP)',
      'Expertise in geospatial GIS tools (GDAL, PDAL, GeoTIFF, Cesium/MapLibre)',
      'Experience handling multi-terabyte uncrewed vehicle data feeds'
    ],
    perks: ['100% remote flexibility', 'Top-tier home lab equipment grant', 'Generous paid parental leave']
  }
];

export const faqItems: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Autonomy & SLAM',
    question: 'How do Vesper AUVs navigate with sub-meter accuracy in GPS-denied deepwater?',
    answer: 'Vesper vehicles utilize a tightly coupled multi-sensor navigation architecture combining high-grade Ring Laser Gyro (RLG) Inertial Navigation Systems (INS), Doppler Velocity Logs (DVL) measuring seabed velocity, and proprietary real-time Acoustic SLAM. By matching Synthetic Aperture Sonar bathymetry against onboard terrain models in real time, our vehicles achieve a position drift rate of under 0.05% of distance traveled without requiring surface acoustic transponder arrays.'
  },
  {
    id: 'faq-2',
    category: 'Autonomy & SLAM',
    question: 'What happens if acoustic communication with the surface is interrupted?',
    answer: 'All Vesper vehicles operate with Level 4 deterministic autonomy. If the acoustic link with the surface gateway or USV drops, the vehicle continues its programmed mission trajectory safely. Onboard obstacle avoidance sonars prevent collisions with unexpected subsea structures. If a critical safety threshold is reached (such as low battery or system fault), the vehicle executes an autonomous buoyant ascent to the surface, deploys its emergency Iridium satellite beacon, and broadcasts GPS coordinates to our 24/7 Operations Center.'
  },
  {
    id: 'faq-3',
    category: 'Deployment & Fleet',
    question: 'What Launch and Recovery Systems (LARS) are required to operate Vesper vehicles?',
    answer: 'Unlike traditional heavy work-class ROVs that require dedicated DP2 vessels and 50-ton cranes, Vesper vehicles are designed for lean deployment. The Vesper Glider-X and Manta-3000 can be deployed by a 2-person crew from a standard small craft or harbor vessel. The Vesper Apex-6000 utilizes a compact containerized Stern-A-Frame or our autonomous Sentinel USV mothercraft, saving up to 70% in mobilization logistics.'
  },
  {
    id: 'faq-4',
    category: 'Deployment & Fleet',
    question: 'Can Vesper vehicles operate in extreme sea states and strong currents?',
    answer: 'Yes. Our vehicles are hydrodynamically engineered for high-energy environments. Vesper Apex and Manta are rated to maintain precise survey lines in cross-currents up to 3.0 knots and can be launched and recovered in Sea State 5 (up to 4.0m wave heights) when using our automated wave-compensated launch cradles.'
  },
  {
    id: 'faq-5',
    category: 'Data Security & Cloud',
    question: 'How is confidential subsea infrastructure and defense data protected?',
    answer: 'All telemetry and sensor payloads are encrypted at rest on the vehicle using hardware-accelerated AES-256 with tamper-resistant self-destruct keys. When surfacing or relaying via satellite, data is transmitted over end-to-end zero-trust encrypted VPN tunnels. Vesper maintains SOC 2 Type II certification, ISO 27001 compliance, and supports on-premise air-gapped data extraction for defense and critical national infrastructure clients.'
  },
  {
    id: 'faq-6',
    category: 'Data Security & Cloud',
    question: 'What data formats and turnaround times can we expect for survey deliverables?',
    answer: 'Deliverables are processed through our automated edge cloud pipeline. Clients receive processed Bathymetric Attributed Grids (BAG), XYZ point clouds, GeoTIFF side-scan mosaics, and automated AI anomaly inspection logs in standard GIS formats (ESRI, QGIS, AutoCAD, COPC) within hours of mission completion, with summary telemetry available in real time.'
  },
  {
    id: 'faq-7',
    category: 'Environmental Compliance',
    question: 'How do Vesper systems protect marine mammals and comply with environmental acoustic standards?',
    answer: 'Our sonar and acoustic modem frequencies are calibrated strictly above the hearing sensitivities of cetaceans (whales, porpoises, dolphins) or operate at ultra-low-power spread-spectrum levels. Furthermore, our electric and buoyancy-glider propulsion systems eliminate engine exhaust, hydraulic oil spill risks, and produce zero direct Scope 1 greenhouse gas emissions during operations.'
  },
  {
    id: 'faq-8',
    category: 'Procurement',
    question: 'Do you offer Robotic-as-a-Service (RaaS) leasing or capital equipment purchase?',
    answer: 'We provide both models. Enterprise clients can contract Vesper for turnkey Robotic-as-a-Service (RaaS) campaigns where our certified marine engineers manage mission planning, deployment, and data delivery on a per-kilometer or day-rate basis. Qualified offshore operators and research institutions can also purchase vehicle systems with full maintenance, training, and software licensing packages.'
  }
];
