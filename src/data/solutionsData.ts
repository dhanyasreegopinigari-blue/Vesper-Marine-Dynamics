import { SolutionVertical } from '../types';

export const solutionVerticals: SolutionVertical[] = [
  {
    id: 'offshore-wind',
    slug: 'offshore-wind-renewables',
    title: 'Offshore Wind & Subsea Power Grid',
    subtitle: 'Full-Lifecycle Autonomous Cable Burial, Scour Monitoring & Jacket Integrity',
    iconName: 'Wind',
    heroImage: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1200&q=80',
    summary: 'Eliminate 65% of support vessel days while increasing inspection cadence across gigawatt-scale offshore wind farms. Our AUV swarms navigate turbulent dynamic cable zones to verify depth of lowering, detect micro-vibrations, and map seabed sediment migration.',
    challenges: [
      'High-energy tidal currents making ROV tether management hazardous and failure-prone',
      'Costly \$120k/day crewed support vessels sitting idle during weather windows',
      'Dynamic power cable bending strain leading to unforeseen fatigue fractures',
      'Scour hole development around monopiles destabilizing turbine foundation aerodynamics'
    ],
    autonomousCapabilities: [
      {
        title: 'Autonomous Cable Tracking (ACT)',
        description: 'Magnetic gradiometers coupled with edge synthetic aperture sonar follow buried 66kV and 220kV export cables up to 3m below seabed.',
        metric: '18 km/day survey rate'
      },
      {
        title: 'Millimeter Photogrammetric Twinning',
        description: 'Laser-guided hover systems generate accurate 3D CAD meshes of subsea turbine transition pieces and anode depletion.',
        metric: '0.8mm spatial precision'
      },
      {
        title: 'Pre-Tensioned Mooring Inspection',
        description: 'Vesper Manta autonomously ascends along floating wind polyester and chain mooring lines to measure tension anomalies.',
        metric: '100% automated trajectory'
      }
    ],
    caseStudyHighlight: {
      client: 'North Sea Wind Consortium',
      location: 'Dogger Bank, North Sea',
      result: 'Inspected 240km of inter-array cables 14 days ahead of schedule, zero safety incidents.'
    },
    telemetryMetrics: [
      { label: 'CO2 Footprint Reduction', value: '-88%' },
      { label: 'Survey Speed vs ROV', value: '4.2x Faster' },
      { label: 'Data Latency to Cloud', value: '< 2.5 mins' }
    ]
  },
  {
    id: 'subsea-infrastructure',
    slug: 'deepwater-pipelines-cables',
    title: 'Deepwater Pipelines & Transoceanic Telecom',
    subtitle: 'Abyssal Pipeline Integrity, Free-Span Detection & Subsea Interconnector Patrol',
    iconName: 'Cpu',
    heroImage: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
    summary: 'Safeguard strategic energy arteries and intercontinental fiber optics down to 6,000 meters. Vesper Apex AUVs execute unattended multi-day pipeline tracking missions with automated cathodic protection logging and geohazard risk modeling.',
    challenges: [
      'Extreme hydrostatic pressures up to 600 bar exceeding conventional inspection tools',
      'Free-span pipeline segments exposed to vortex-induced structural resonance',
      'Trench infill and seismic seabed slope instabilities threatening subsea lines',
      'High latency of legacy acoustic systems delaying critical rupture and leak intervention'
    ],
    autonomousCapabilities: [
      {
        title: 'Real-Time Hydrocarbon Sniffing',
        description: 'Optical fluorometers and mass spectrometers detect dissolved methane plumes at parts-per-billion sensitivity.',
        metric: '5 ppb detection threshold'
      },
      {
        title: 'Non-Contact Cathodic Logging',
        description: 'Electric field gradient sensors assess sacrificial zinc anode lifespan without touching the pipeline coating.',
        metric: '45km continuous run'
      },
      {
        title: 'Bathymetric Geohazard Predictive AI',
        description: 'Neural models contrast seasonal multibeam point-clouds to forecast subsea mudslides and anchor drag gouges.',
        metric: '99.4% predictive accuracy'
      }
    ],
    caseStudyHighlight: {
      client: 'Atlantic Interconnect Energy',
      location: 'Celtic Sea & Bay of Biscay',
      result: 'Mapped 780km deepwater HVDC interconnector route identifying 14 critical geohazard zones.'
    },
    telemetryMetrics: [
      { label: 'Depth Operational Ceiling', value: '6,000 m' },
      { label: 'Continuous Endurance', value: '48 Hours' },
      { label: 'Point Cloud Density', value: '1,200 pts/m²' }
    ]
  },
  {
    id: 'ocean-science',
    slug: 'marine-biosystems-carbon-monitoring',
    title: 'Marine Biosystems & Ocean Carbon Flux',
    subtitle: 'Persistent Acoustic & eDNA Monitoring for Marine Protected Areas & Carbon Credits',
    iconName: 'Waves',
    heroImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
    summary: 'Quantify biological pump sequestration and verify marine carbon dioxide removal (mCDR) projects. Vesper Gliders provide uninterrupted multi-month oceanographic profiling without fossil fuel emissions or underwater acoustic disturbance.',
    challenges: [
      'Lack of verifiable in-situ data to validate ocean alkalinity enhancement and blue carbon credits',
      'Invasive research vessels introducing acoustic pollution that drives marine megafauna away',
      'Sparse spatial and temporal sampling creating blind spots in global climate models',
      'High labor costs of manual marine biological water sampling at depth'
    ],
    autonomousCapabilities: [
      {
        title: 'Autonomous In-Situ eDNA Sampling',
        description: 'Programmable multi-cartridge filtration isolates environmental DNA from water samples, identifying 200+ marine species.',
        metric: '64 discrete samples / dive'
      },
      {
        title: 'Biogeochemical Profiling',
        description: 'High-accuracy optodes measure dissolved oxygen, pH, pCO2, and chlorophyll-a continuously from 0 to 1,500m.',
        metric: '0.001 pH accuracy'
      },
      {
        title: 'Passive Bioacoustic Hydrophone Array',
        description: 'Edge ML detects and classifies marine mammal vocalizations (whales, dolphins) in real time to pause noisy offshore drilling.',
        metric: '98.7% classification rate'
      }
    ],
    caseStudyHighlight: {
      client: 'Global Ocean Resilience Institute',
      location: 'Azores Marine Reserve',
      result: '120-day autonomous glider patrol documenting pelagic biodiversity and thermocline heat transfer.'
    },
    telemetryMetrics: [
      { label: 'Autonomous Endurance', value: '120 Days' },
      { label: 'Acoustic Signature', value: '< 95 dB (Silent)' },
      { label: 'Total Distance Covered', value: '3,800 km' }
    ]
  },
  {
    id: 'defense-harbor',
    slug: 'harbor-security-defense-integrity',
    title: 'Harbor Security & Subsea Critical Assets',
    subtitle: 'Rapid-Deploy Anomaly Detection, Hull Inspection & Benthic Reconnaissance',
    iconName: 'Shield',
    heroImage: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=1200&q=80',
    summary: 'Deliver round-the-clock underwater situational awareness for commercial ports, maritime terminals, and defense installations. Autonomous micro-swarms conduct rapid berth clearing, hull foreign-object detection, and cable sabotage prevention.',
    challenges: [
      'Turbid harbor waters with zero visibility making human diver operations unsafe and slow',
      'Vulnerability of vital undersea communications nodes and energy pipelines to asymmetric tampering',
      'Congested shipping channels requiring instant autonomous collision avoidance in high-traffic zones',
      'Need for non-magnetic, rapid-response systems that can deploy from a small RHIB or dock'
    ],
    autonomousCapabilities: [
      {
        title: 'Zero-Visibility Sonar Fusion',
        description: 'Multi-frequency acoustic camera processes 40 frames/sec, rendering crystal-clear silhouettes through thick harbor silt.',
        metric: '40 fps real-time render'
      },
      {
        title: 'Magnetic Hull Crawling & Sweeps',
        description: 'Vector-thruster station keeping allows autonomous adherence to steel ship hulls to discover limpet attachments or anomalies.',
        metric: '100% hull coverage'
      },
      {
        title: 'Subsea Perimeter Acoustic Tripwire',
        description: 'Autonomous sensor nodes form an encrypted acoustic mesh that alerts command stations to unauthorized divers or submersibles.',
        metric: '< 1.5s alarm latency'
      }
    ],
    caseStudyHighlight: {
      client: 'Port of Rotterdam Authority',
      location: 'Rotterdam Europort Terminal',
      result: 'Automated 100% of subsea quay wall and deep-draft vessel hull inspections with zero dock downtime.'
    },
    telemetryMetrics: [
      { label: 'Rapid Deployment Time', value: '< 15 Mins' },
      { label: 'Acoustic Imaging Clarity', value: 'Ultra-HD' },
      { label: 'Encryption Standard', value: 'AES-256 Marine' }
    ]
  }
];
