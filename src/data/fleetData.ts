import { VehicleSpec, SensorPayload } from '../types';

export const fleetVehicles: VehicleSpec[] = [
  {
    id: 'vesper-apex-6000',
    name: 'Vesper Apex-6000',
    class: 'Deep-Survey AUV',
    tagline: 'Abyssal-Class Autonomous Survey Vehicle for 6,000m Ultra-Deepwater Operations',
    depthRatingMeters: 6000,
    enduranceHours: 48,
    speedKnots: 4.8,
    weightKg: 850,
    lengthMeters: 4.6,
    autonomyLevel: 'Level 4 Full Swarm',
    primarySensors: [
      'Dual-Frequency Synthetic Aperture Sonar (SAS)',
      'Subsea Structured-Light Laser Scanner',
      '4K Deep-Water Stereo Photogrammetry Rig',
      'Sub-Bottom Profiler (2-16 kHz Chirp)'
    ],
    batteryKWh: 32.4,
    communication: ['Acoustic Ultra-Short Baseline (USBL)', 'Optical Modem (10 Mbps / 50m)', 'Iridium Satellite Link (Surfaced)'],
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
    description: 'The flagship deep-ocean autonomous survey vehicle engineered for high-resolution bathymetric mapping, pipeline burial assessment, and abyssal geophysical surveys without tether drag or support vessel proximity.',
    applications: [
      'Transoceanic telecom cable route pre-lay surveys',
      'Deepwater carbon capture reservoir containment verification',
      'Abyssal benthic ecology & mineral baseline studies',
      'Unexploded ordnance (UXO) classification'
    ],
    features: [
      {
        title: 'Carbon-Composite Pressure Hull',
        description: 'Iso-grid composite pressure vessel tested to 900 bar collapse resistance with redundant titanium end-bells.'
      },
      {
        title: 'Edge-Neural Acoustic SLAM',
        description: 'Local GPU-accelerated terrain relative navigation achieves <0.05% distance drift in GPS-denied benthic zones.'
      },
      {
        title: 'Hot-Swappable Payload Bay',
        description: '120kg modular payload architecture allows 20-minute turnarounds between acoustic, optical, and chemical sensor suites.'
      }
    ]
  },
  {
    id: 'vesper-manta-3000',
    name: 'Vesper Manta-3000',
    class: 'Inspection Hybrid-ROV',
    tagline: 'High-Maneuverability Vector-Thrust Robotic System for Offshore Wind & Turbine Jackets',
    depthRatingMeters: 3000,
    enduranceHours: 24,
    speedKnots: 3.5,
    weightKg: 340,
    lengthMeters: 2.1,
    autonomyLevel: 'Level 4 Supervised',
    primarySensors: [
      '3D Multibeam Imaging Sonar (900 kHz / 2.25 MHz)',
      'Cathodic Protection (CP) Contact Probe',
      'Non-Destructive Testing (NDT) Ultrasonic Gauge',
      'High-Definition Micro-Crack Camera Suite'
    ],
    batteryKWh: 18.2,
    communication: ['Thin-Fiber Micro-Tether / Wireless Acoustic', 'Mesh Acoustic Array'],
    image: 'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?auto=format&fit=crop&w=1200&q=80',
    description: 'A revolutionary six-degree-of-freedom hover-capable autonomous system designed to navigate turbulent splash zones, inspect offshore wind inter-array cables, and clean biofouling autonomously.',
    applications: [
      'Floating offshore wind dynamic cable dynamic strain inspection',
      'Subsea substation foundation non-destructive testing',
      'Jacket node weld autonomous photogrammetric 3D digital twinning',
      'Harbor & naval hull tactical security sweeps'
    ],
    features: [
      {
        title: 'Omnidirectional Vectoring',
        description: 'Eight brushless DC magnetic-coupling thrusters provide true 6-DoF station-keeping in 2.8 knot cross-currents.'
      },
      {
        title: 'Automated Weld Tracking',
        description: 'Computer-vision pipeline follows subsea tubular joints with millimeter precision, recording weld degradation rates.'
      },
      {
        title: 'Hybrid Tether / Free Flight',
        description: 'Operates untethered on battery or tethered via ultra-thin 1mm fiber optic line for real-time human intervention.'
      }
    ]
  },
  {
    id: 'vesper-glider-x',
    name: 'Vesper Glider-X',
    nameShort: 'Glider-X',
    class: 'Benthic Glider',
    tagline: 'Buoyancy-Driven Multi-Month Oceanographic & Environmental Baseline Intelligence Platform',
    depthRatingMeters: 1500,
    enduranceHours: 2880, // 120 days
    speedKnots: 1.2,
    weightKg: 78,
    lengthMeters: 1.9,
    autonomyLevel: 'Level 4 Full Swarm',
    primarySensors: [
      'Micro-eDNA Filtration and In-Situ Preserver',
      'High-Precision CTD (Conductivity, Temperature, Depth)',
      'Acoustic Zooplankton & Fish Profiler (AZFP)',
      'Dissolved Oxygen & Hydrocarbon Fluorometer'
    ],
    batteryKWh: 8.6,
    communication: ['Iridium SBD / Satellite Argos-4', 'Near-Surface Wi-Fi / Acoustic Ping'],
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
    description: 'An ultra-low-power autonomous ocean glider that harvests buoyancy differential for continuous 4-month deployments, collecting continuous water column chemistry, bioacoustics, and environmental DNA.',
    applications: [
      'Marine protected area biodiversity baselines',
      'Offshore wind pre-construction cetacean sound monitoring',
      'Ocean carbon sequestration flux quantification',
      'MetOcean climate modeling & hurricane intensity forecasting'
    ],
    features: [
      {
        title: '120-Day Persistent Patrol',
        description: 'Variable buoyancy engine uses minimal energy, gliding along oceanic thermoclines without moving propellers.'
      },
      {
        title: 'In-Situ Autonomous eDNA Sampling',
        description: 'Filters 10 liters of seawater at set depths, sealing genetic material in preservative chambers for lab sequencing.'
      },
      {
        title: 'Near-Zero Acoustic Signature',
        description: 'Silent propulsion avoids disturbing marine mammals or altering natural fish schooling behaviors.'
      }
    ]
  } as unknown as VehicleSpec,
  {
    id: 'vesper-sentinel-usv',
    name: 'Vesper Sentinel USV',
    class: 'Long-Endurance USV',
    tagline: 'Autonomous Surface Vessel & Subsea Communications Gateway and Swarm Coordinator',
    depthRatingMeters: 0,
    enduranceHours: 720, // 30 days
    speedKnots: 8.0,
    weightKg: 1250,
    lengthMeters: 6.2,
    autonomyLevel: 'Level 4 Full Swarm',
    primarySensors: [
      'Dunking High-Power USBL Transceiver Array',
      'Marine X-Band Radar & AIS Receiver',
      '360-Degree EO/IR Thermal Collision-Avoidance Camera',
      'Starlink High-Bandwidth Maritime Uplink'
    ],
    batteryKWh: 45.0,
    communication: ['Starlink LEO Satellite', 'Acoustic Mesh Bridge', '4G/5G Offshore Private Network'],
    image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=1200&q=80',
    description: 'The autonomous surface backbone that acts as a mothership gateway for subsea AUV swarms, relaying gigabytes of sonar point-clouds to cloud engineers onshore in real time.',
    applications: [
      'Autonomous subsea swarm tracking & acoustic positioning',
      'Live cloud streaming of offshore wind survey data',
      'Boundary layer meteorology & wave spectrum analysis',
      '24/7 offshore security exclusion zone enforcement'
    ],
    features: [
      {
        title: 'Solar-Hybrid Diesel Propulsion',
        description: 'Continuous solar array recharging coupled with high-efficiency tier-4 auxiliary generator for 30-day missions.'
      },
      {
        title: 'Acoustic-to-Satellite Bridge',
        description: 'Translates high-frequency subsea acoustic packets to encrypted LEO satellite bandwidth with 400ms latency.'
      },
      {
        title: 'COLREGs-Compliant Collision Avoidance',
        description: 'Multi-modal optical and radar perception autonomously steers clear of commercial shipping and marine obstacles.'
      }
    ]
  }
];

export const sensorPayloads: SensorPayload[] = [
  {
    id: 'sas-kraken-ultra',
    name: 'Kraken Ultra Synthetic Aperture Sonar',
    category: 'Acoustic',
    weightKg: 32,
    powerWatts: 140,
    dataYieldRate: '1.2 GB / hr',
    description: 'Millimeter-scale side-scan acoustic resolution with 300-meter swath width, even in high-turbidity water.',
    compatibleHulls: ['Vesper Apex-6000', 'Vesper Manta-3000']
  },
  {
    id: 'lidar-bathy-scan',
    name: 'BathyMetric Subsea Green LiDAR',
    category: 'Optical',
    weightKg: 18,
    powerWatts: 95,
    dataYieldRate: '4.5 GB / hr',
    description: '532nm polarized green laser emitting 500k pulses/sec for sub-millimeter 3D point cloud generation of seabed structures.',
    compatibleHulls: ['Vesper Apex-6000', 'Vesper Manta-3000']
  },
  {
    id: 'edna-cycler',
    name: 'Benthic eDNA Automated Filtration Suite',
    category: 'Environmental',
    weightKg: 12,
    powerWatts: 25,
    dataYieldRate: '12 MB / sample',
    description: 'Multi-port sterile membrane micro-filtering system with chemical lysis and cryogenic preservative canisters.',
    compatibleHulls: ['Vesper Glider-X', 'Vesper Apex-6000']
  },
  {
    id: 'cp-mag-ndt',
    name: 'Cathodic Protection & Ultrasonic NDT Rig',
    category: 'Structural',
    weightKg: 14,
    powerWatts: 45,
    dataYieldRate: '250 MB / hr',
    description: 'Electric field gradient sensor and high-frequency acoustic thickness gauge for asset integrity certification.',
    compatibleHulls: ['Vesper Manta-3000']
  }
];
