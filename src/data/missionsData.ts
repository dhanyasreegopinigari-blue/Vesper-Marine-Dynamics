import { MissionCaseStudy } from '../types';

export const missionCaseStudies: MissionCaseStudy[] = [
  {
    id: 'dogger-bank-cable-campaign',
    title: 'Dogger Bank Inter-Array Cable Depth of Lowering (DoL) Survey',
    client: 'Dogger Bank Wind Farm Consortium',
    sector: 'Offshore Wind',
    location: 'North Sea (130km off Yorkshire Coast)',
    depthMeters: 42,
    durationDays: 18,
    year: 2025,
    thumbnail: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1400&q=80',
    overview: 'Autonomous post-trenching survey across 180 kilometers of 66kV inter-array power cables connecting 95 offshore wind turbine generators.',
    challenge: 'Strong 2.4-knot tidal currents and heavy seabed sand wave mobility created significant risk of cable exposure and micro-abrasions. Traditional DP2 support vessels and tethered ROVs incurred extreme charter costs (\$110k/day) and suffered frequent weather stand-downs.',
    solutionProvided: 'Deployed a dual-swarmed Vesper Apex-6000 AUV coupled with a Vesper Sentinel USV surface communication gateway. Operating uncrewed from shore, the swarm utilized synthetic aperture sonar (SAS) and sub-bottom chirp profilers to track cable burial depth 2.5m under sediment.',
    impactMetrics: [
      { metric: '180 km', value: '180 km', label: 'Cables Inspected' },
      { metric: '\$1.4M', value: '\$1.4M', label: 'Vessel Charter Cost Saved' },
      { metric: '99.9%', value: '99.9%', label: 'Cable Tracking Lock Rate' },
      { metric: '-82%', value: '-82%', label: 'Scope 1 Carbon Emissions' }
    ],
    vehicleDeployments: ['Vesper Apex-6000 (Lead AUV)', 'Vesper Sentinel USV (Gateway)'],
    sensorsUsed: ['Dual-Frequency SAS', '3D Chirp Sub-Bottom Profiler', 'Magnetic Gradiometer'],
    telemetryHighlights: [
      'Zero support vessel required within 20 nautical miles',
      'Continuous 100% telemetry link via encrypted LEO satellite',
      'Automated identification of 3 free-spanning segments before scour failure'
    ]
  },
  {
    id: 'gulf-of-mexico-abyssal-pipeline',
    title: 'Gulf of Mexico Ultra-Deepwater Flowline & Mooring Inspection',
    client: 'Deepwater Energy Operators Alliance',
    sector: 'Deepwater Infrastructure',
    location: 'Mississippi Canyon, Gulf of Mexico',
    depthMeters: 2850,
    durationDays: 24,
    year: 2025,
    thumbnail: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1400&q=80',
    overview: 'Autonomous structural integrity assessment of deepwater export flowlines, suction piles, and tension leg platform (TLP) tendons at depths exceeding 2,800 meters.',
    challenge: 'Subsea terrain exhibited extreme escarpments and steep benthic slopes. Traditional ROV umbilical drag caused positioning instability near delicate subsea manifolds, risking asset collision.',
    solutionProvided: 'Vesper Manta-3000 hybrid AUV conducted close-range non-contact photogrammetric reconstruction and cathodic protection field mapping using onboard edge acoustic SLAM, eliminating reliance on surface acoustic beacons.',
    impactMetrics: [
      { metric: '2,850 m', value: '2,850 m', label: 'Maximum Operating Depth' },
      { metric: '0.4 mm', value: '0.4 mm', label: 'Laser Twinning Precision' },
      { metric: '340 km', value: '340 km', label: 'Pipeline Assessed' },
      { metric: '0', value: '0', label: 'Personnel HSE Exposure Hours' }
    ],
    vehicleDeployments: ['Vesper Manta-3000 (Inspection)', 'Vesper Apex-6000 (Wide-swath)'],
    sensorsUsed: ['Subsea Laser Scanner', 'CP Electric Field Probe', 'Ultra-HD Stereo Cameras'],
    telemetryHighlights: [
      'Sub-millimeter point clouds delivered within 2 hours of surface ascent',
      'Automated cathodic anode depletion forecast generated with 99.1% statistical confidence'
    ]
  },
  {
    id: 'atlantic-mariana-trench-baseline',
    title: 'Abyssal Carbon Flux & Benthic Biodiversity Census',
    client: 'Ocean Frontier Science Consortium & NOAA Collaborators',
    sector: 'Ocean Science',
    location: 'Mid-Atlantic Ridge & Puerto Rico Trench',
    depthMeters: 5900,
    durationDays: 45,
    year: 2024,
    thumbnail: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1400&q=80',
    overview: 'Autonomous biological pump quantification and abyssal baseline survey collecting continuous in-situ environmental DNA samples and deep benthic photography.',
    challenge: 'Sampling hadal depths without disturbing delicate deepwater hydrothermal vent communities or introducing mechanical turbulence that destroys fragile gelatinous organisms.',
    solutionProvided: 'A swarm of three Vesper Glider-X systems and one Vesper Apex-6000 executed stepped undulating dives over 45 days, capturing 120 eDNA filtration samples and 400,000 deepwater images.',
    impactMetrics: [
      { metric: '5,900 m', value: '5,900 m', label: 'Deepest Sample Acquired' },
      { metric: '142', value: '142', label: 'Novel Genetic Sequences Catalogued' },
      { metric: '45 Days', value: '45 Days', label: 'Uncrewed Persistent Operation' },
      { metric: '100%', value: '100%', label: 'Zero Ecological Disturbance' }
    ],
    vehicleDeployments: ['Vesper Glider-X (Swarm of 3)', 'Vesper Apex-6000'],
    sensorsUsed: ['Micro-eDNA Automated Filter', 'Deepwater CTD', 'Acoustic Zooplankton Profiler'],
    telemetryHighlights: [
      'Continuous satellite telemetry relay during periodic 15-minute surface respirations',
      'High-resolution thermal vent plume chemical signature mapping'
    ]
  },
  {
    id: 'transatlantic-fiber-security',
    title: 'Trans-Atlantic Subsea Fiber-Optic Security & Trench Verification',
    client: 'Global Telecommunications Infrastructure Group',
    sector: 'Subsea Telemetry',
    location: 'North Atlantic (Bude, UK to Halifax, Canada Corridor)',
    depthMeters: 4100,
    durationDays: 30,
    year: 2025,
    thumbnail: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=1400&q=80',
    overview: 'Deepwater patrol along high-capacity intercontinental internet cables to audit seabed geohazards, commercial fishing gear entanglement, and seismic fault line crossing integrity.',
    challenge: 'Rapid inspection required across 1,200 nautical miles of complex continental shelf and abyssal plains prone to underwater turbidity currents and anchor strikes.',
    solutionProvided: 'Continuous long-range autonomous flight using Vesper Apex-6000 utilizing acoustic SLAM and automated anomaly detection to flag foreign cables, debris, and unburied spans.',
    impactMetrics: [
      { metric: '2,100 km', value: '2,100 km', label: 'Cable Route Mapped' },
      { metric: '7', value: '7', label: 'Vulnerable Free Spans Mitigated' },
      { metric: '3.8x', value: '3.8x', label: 'Faster Than Legacy ROV Vessels' },
      { metric: '\$2.8M', value: '\$2.8M', label: 'Preventative Outage Avoidance' }
    ],
    vehicleDeployments: ['Vesper Apex-6000 (Long-Range)', 'Vesper Sentinel USV'],
    sensorsUsed: ['High-Speed Synthetic Aperture Sonar', 'Obstacle Avoidance 3D Sonar'],
    telemetryHighlights: [
      'End-to-end cloud pipeline delivered bathymetric tiles directly to GIS analysts in real time',
      'Zero downtime for transoceanic data traffic throughout the survey'
    ]
  }
];
