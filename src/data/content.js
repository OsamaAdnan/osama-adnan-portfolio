/**
 * ============================================================
 *  PORTFOLIO CONTENT  -  edit everything here
 * ============================================================
 *  All text, links, projects and skills on the website come from this
 *  single file. You normally never need to touch the components.
 *
 *  Rules used when writing this content:
 *   - No employment dates, certifications or achievements were invented.
 *   - No skill ratings or percentages are shown.
 *   - Project 01 is clearly marked as assessment / planning / proposed design.
 *   - Project 04 is clearly marked as a personal technical laboratory.
 */

export const site = {
  name: 'Osama Adnan',
  headingName: 'OSAMA ADNAN',
  titleLines: ['IT SYSTEM ADMINISTRATOR', 'IT INFRASTRUCTURE SPECIALIST'],
  tagline: 'Building, Managing and Securing Reliable IT Infrastructure.',
  intro:
    'IT professional with hands-on experience in enterprise IT support, network administration, system administration, and IT infrastructure operations. Focused on network reliability, infrastructure improvement, system administration, troubleshooting, and delivering dependable IT solutions.',
  location: 'United Arab Emirates',
  // Path of the downloadable PDF (file lives in public/documents/).
  // Replace that file with your real CV any time, keeping the same name,
  // or change the path here.
  cvPath: '/documents/Osama-Adnan-Portfolio.pdf',
  cvFileName: 'Osama-Adnan-Portfolio.pdf',
}

export const contact = {
  email: 'usama3dnan@gmail.com',
  phone: '+971 56 880 9130',
  linkedin: 'https://www.linkedin.com/in/osama-adnan',
  location: 'United Arab Emirates',
  // OPTIONAL: paste a Formspree (or similar) endpoint here to send form
  // messages straight to your inbox, e.g. 'https://formspree.io/f/xxxxxxx'.
  // Leave empty to use the "open my email app" fallback, which needs no backend.
  formEndpoint: '',
}

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'lab', label: 'IT Lab' },
  { id: 'contact', label: 'Contact' },
]

export const targetRoles = [
  'IT System Administrator',
  'IT Infrastructure Engineer',
  'Network Administrator',
  'Network Engineer',
  'IT Support Engineer',
  'Systems Administrator',
]

export const about = {
  paragraphs: [
    'I am an IT professional with experience in IT Support, System Administration, Network Infrastructure, and Enterprise IT Operations.',
    'Throughout my career, I have supported business environments, managed IT operations, investigated complex technical issues, and contributed to infrastructure improvements.',
    'My technical background includes Windows administration, network infrastructure, FortiGate firewall administration, wireless networking, server environments, and IT security fundamentals.',
    'I am passionate about technology, continuous learning, infrastructure improvement, and delivering reliable IT solutions.',
  ],
  facts: [
    { value: '~6 yrs', label: 'at Americana Food Company' },
    { value: '2', label: 'organizations' },
    { value: 'Multi-site', label: 'IT operations' },
    { value: 'FortiGate', label: 'firewall administration' },
  ],
  focus: [
    'Enterprise IT Support',
    'Network Administration',
    'Windows Administration',
    'Firewall Administration',
    'Infrastructure Troubleshooting',
    'Multi-site IT Operations',
    'Network Security',
    'IT Infrastructure Planning',
  ],
}

/** icon names are resolved in src/components/icons.js */
export const skillCategories = [
  {
    id: 'network',
    icon: 'network',
    title: 'Network Administration',
    skills: [
      'TCP/IP',
      'LAN / WAN',
      'VLAN Configuration',
      'Routing and Switching',
      'Wireless Networking',
      'Network Troubleshooting',
      'Network Monitoring',
    ],
  },
  {
    id: 'windows',
    icon: 'windows',
    title: 'Windows System Administration',
    skills: [
      'Windows Server',
      'Active Directory',
      'DNS',
      'DHCP',
      'Group Policy',
      'Windows Client Administration',
      'Remote Administration',
    ],
  },
  {
    id: 'security',
    icon: 'security',
    title: 'Network Security',
    skills: [
      'FortiGate Firewall',
      'Firewall Policies',
      'Access Control',
      'VPN Configuration Fundamentals',
      'Network Security',
      'Security Troubleshooting',
    ],
  },
  {
    id: 'infrastructure',
    icon: 'infrastructure',
    title: 'IT Infrastructure',
    skills: [
      'Server Infrastructure',
      'NAS and Storage',
      'Backup Planning',
      'Disaster Recovery Concepts',
      'Hardware Troubleshooting',
      'Software Troubleshooting',
    ],
  },
  {
    id: 'cloud',
    icon: 'cloud',
    title: 'Cloud and Productivity',
    skills: [
      'Microsoft 365',
      'Microsoft Outlook',
      'User and Access Management',
      'Cloud Services Fundamentals',
    ],
  },
  {
    id: 'operations',
    icon: 'operations',
    title: 'IT Operations',
    skills: [
      'Incident Management',
      'IT Asset Management',
      'Technical Documentation',
      'Remote Support',
      'IT Operations Management',
    ],
  },
]

/**
 * Diagram spec (rendered by NetworkDiagram.jsx) on a 420 x 240 canvas.
 *   node kinds: core | security | network | wireless | server | storage | endpoint | process
 *   planned: true  -> dashed outline (proposed / not deployed)
 */
export const projects = [
  {
    id: 'branch-it',
    number: '01',
    title: 'Branch IT Infrastructure Development',
    short: 'Assessment, planning and proposed design',
    environment: 'Darwish Engineering Emirates',
    status: { label: 'Assessment · Planning · Proposed Design', tone: 'planned' },
    notice:
      'This project covers infrastructure assessment, planning and proposed design. Implementation has not been completed.',
    overview:
      'An assessment of the existing branch IT infrastructure, followed by planning and a proposed design for a centralized IT environment built around Active Directory.',
    objectives: [
      'Understand the current state of the branch IT infrastructure.',
      'Define a centralized infrastructure model for the branches.',
      'Propose identity, name resolution, addressing, storage and backup services.',
      'Introduce network segmentation concepts into the design.',
    ],
    implementation: [
      'Assessed existing branch IT infrastructure.',
      'Planned centralized IT infrastructure.',
      'Designed a proposed Active Directory architecture.',
      'Planned Domain Controller deployment.',
      'Planned DNS and DHCP services.',
      'Proposed centralized file storage.',
      'Developed backup infrastructure plans.',
      'Designed network segmentation concepts.',
    ],
    technologies: [
      'Windows Server',
      'Active Directory',
      'DNS',
      'DHCP',
      'VLANs',
      'Network Infrastructure',
    ],
    diagram: {
      caption: 'Proposed design (conceptual). Not a deployed network.',
      nodes: [
        { id: 'fs', label: 'File Storage', sub: 'Proposed', x: 80, y: 40, kind: 'storage', planned: true },
        { id: 'dc', label: 'Domain Controller', sub: 'Proposed', x: 210, y: 40, kind: 'server', planned: true },
        { id: 'dns', label: 'DNS · DHCP', sub: 'Proposed', x: 340, y: 40, kind: 'server', planned: true },
        { id: 'sw', label: 'Core Switch', x: 210, y: 120, kind: 'network', planned: true },
        { id: 'bk', label: 'Backup', sub: 'Proposed', x: 340, y: 120, kind: 'storage', planned: true },
        { id: 'a', label: 'Segment A', x: 80, y: 200, kind: 'endpoint', planned: true },
        { id: 'b', label: 'Segment B', x: 210, y: 200, kind: 'endpoint', planned: true },
        { id: 'c', label: 'Segment C', x: 340, y: 200, kind: 'endpoint', planned: true },
      ],
      links: [
        { from: 'fs', to: 'sw', dashed: true },
        { from: 'dc', to: 'sw', dashed: true },
        { from: 'dns', to: 'sw', dashed: true },
        { from: 'sw', to: 'bk', dashed: true },
        { from: 'sw', to: 'a', dashed: true },
        { from: 'sw', to: 'b', dashed: true },
        { from: 'sw', to: 'c', dashed: true },
      ],
    },
  },
  {
    id: 'fortigate',
    number: '02',
    title: 'FortiGate Firewall Administration',
    short: 'Firewall administration and connectivity troubleshooting',
    environment: 'Enterprise environment',
    status: { label: 'Hands-on Administration', tone: 'operational' },
    overview:
      'Day-to-day administration of FortiGate firewalls, including configuration review and troubleshooting of WAN, LAN and network access issues.',
    objectives: [
      'Keep network connectivity and access reliable.',
      'Review firewall configuration and policies.',
      'Investigate and resolve connectivity and gateway problems.',
    ],
    implementation: [
      'FortiGate firewall administration.',
      'WAN and LAN connectivity troubleshooting.',
      'Firewall configuration review.',
      'DHCP configuration investigation.',
      'Network interface management.',
      'Network access troubleshooting.',
      'Gateway and connectivity analysis.',
    ],
    technologies: ['FortiGate', 'Firewall Policies', 'WAN', 'LAN', 'DHCP', 'TCP/IP'],
    diagram: {
      caption: 'Typical firewall topology (illustrative).',
      nodes: [
        { id: 'pol', label: 'Firewall Policies', x: 210, y: 36, kind: 'security' },
        { id: 'wan', label: 'WAN / ISP', x: 70, y: 120, kind: 'network' },
        { id: 'fg', label: 'FortiGate', sub: 'Firewall', x: 210, y: 120, kind: 'security' },
        { id: 'lan', label: 'LAN Switch', x: 350, y: 120, kind: 'network' },
        { id: 'dhcp', label: 'DHCP', x: 210, y: 204, kind: 'server' },
        { id: 'cl', label: 'Clients', x: 350, y: 204, kind: 'endpoint' },
      ],
      links: [
        { from: 'pol', to: 'fg' },
        { from: 'wan', to: 'fg' },
        { from: 'fg', to: 'lan' },
        { from: 'fg', to: 'dhcp' },
        { from: 'lan', to: 'cl' },
      ],
    },
  },
  {
    id: 'wireless',
    number: '03',
    title: 'Network Infrastructure & Wireless Management',
    short: 'Managed switching and TP-Link Omada wireless',
    environment: 'Enterprise environment',
    status: { label: 'Hands-on Administration', tone: 'operational' },
    overview:
      'Management of switched network environments and wireless infrastructure using the TP-Link Omada Controller and EAP225 access points.',
    objectives: [
      'Maintain reliable wired and wireless connectivity.',
      'Manage access points centrally through the Omada Controller.',
      'Plan VLANs for network separation.',
    ],
    implementation: [
      'Managed network switching environments.',
      'TP-Link Omada Controller administration.',
      'Wireless access point management.',
      'Network connectivity troubleshooting.',
      'VLAN planning.',
      'Wireless infrastructure support.',
    ],
    technologies: ['Managed Switches', 'TP-Link Omada', 'EAP225', 'VLANs', 'Wi-Fi'],
    diagram: {
      caption: 'Switching and wireless management (illustrative).',
      nodes: [
        { id: 'ctl', label: 'Omada Controller', x: 210, y: 36, kind: 'core' },
        { id: 'sw', label: 'Managed Switch', x: 210, y: 120, kind: 'network' },
        { id: 'ap1', label: 'EAP225', sub: 'Access Point', x: 70, y: 204, kind: 'wireless' },
        { id: 'ap2', label: 'EAP225', sub: 'Access Point', x: 210, y: 204, kind: 'wireless' },
        { id: 'ap3', label: 'EAP225', sub: 'Access Point', x: 350, y: 204, kind: 'wireless' },
      ],
      links: [
        { from: 'ctl', to: 'sw' },
        { from: 'sw', to: 'ap1' },
        { from: 'sw', to: 'ap2' },
        { from: 'sw', to: 'ap3' },
      ],
    },
  },
  {
    id: 'lab',
    number: '04',
    title: 'Virtual IT Infrastructure Lab',
    short: 'Personal technical laboratory (EVE-NG and VMware)',
    environment: 'EVE-NG and VMware',
    status: { label: 'Personal Technical Laboratory', tone: 'lab' },
    notice:
      'This is a personal technical laboratory used for learning and testing. It is not a production environment.',
    overview:
      'A personal lab built on EVE-NG and VMware for testing firewalls, routing and switching scenarios, and Windows administration.',
    objectives: [
      'Practice firewall, routing and switching scenarios safely.',
      'Test configurations before using them in real work.',
      'Keep building hands-on infrastructure skills.',
    ],
    implementation: [
      'Virtual firewall testing.',
      'FortiGate lab environments.',
      'pfSense configuration testing.',
      'Routing and switching scenarios.',
      'DHCP configuration.',
      'Network segmentation.',
      'Remote Windows administration.',
    ],
    technologies: ['EVE-NG', 'VMware', 'FortiGate', 'pfSense', 'Windows'],
    diagram: {
      caption: 'Personal lab layout (illustrative).',
      nodes: [
        { id: 'host', label: 'VMware', sub: 'Virtualization host', x: 210, y: 36, kind: 'core' },
        { id: 'eve', label: 'EVE-NG', x: 80, y: 120, kind: 'network' },
        { id: 'pf', label: 'pfSense', x: 210, y: 120, kind: 'security' },
        { id: 'fg', label: 'FortiGate (virtual)', x: 340, y: 120, kind: 'security' },
        { id: 'rs', label: 'Routing & Switching', x: 80, y: 204, kind: 'network' },
        { id: 'win', label: 'Windows', sub: 'Remote admin', x: 210, y: 204, kind: 'endpoint' },
      ],
      links: [
        { from: 'host', to: 'eve' },
        { from: 'host', to: 'pf' },
        { from: 'eve', to: 'fg' },
        { from: 'eve', to: 'rs' },
        { from: 'pf', to: 'win' },
      ],
    },
  },
  {
    id: 'operations',
    number: '05',
    title: 'Enterprise IT Operations',
    short: 'Multi-site support and service continuity',
    environment: 'Enterprise environment',
    status: { label: 'Operational Experience', tone: 'operational' },
    overview:
      'Multi-site IT support and operations: investigating incidents, maintaining infrastructure and coordinating with teams to keep IT services running.',
    objectives: [
      'Keep IT services available across multiple sites.',
      'Investigate and resolve hardware, software and network incidents.',
      'Coordinate technically with the people and teams involved.',
    ],
    implementation: [
      'Multi-site IT support.',
      'Network troubleshooting.',
      'Infrastructure maintenance.',
      'Hardware and software incident investigation.',
      'Technical coordination.',
      'IT service continuity.',
    ],
    technologies: [
      'Incident Management',
      'Network Troubleshooting',
      'Infrastructure Maintenance',
      'Technical Coordination',
    ],
    diagram: {
      caption: 'Operational workflow (illustrative).',
      nodes: [
        { id: 'sites', label: 'Multi-site Users', x: 70, y: 56, kind: 'endpoint' },
        { id: 'inc', label: 'Incident', x: 210, y: 56, kind: 'process' },
        { id: 'ts', label: 'Troubleshooting', x: 350, y: 56, kind: 'network' },
        { id: 'co', label: 'Technical Coordination', x: 140, y: 170, kind: 'process' },
        { id: 'sc', label: 'Service Continuity', x: 290, y: 170, kind: 'core' },
      ],
      links: [
        { from: 'sites', to: 'inc' },
        { from: 'inc', to: 'ts' },
        { from: 'ts', to: 'sc' },
        { from: 'inc', to: 'co' },
        { from: 'co', to: 'sc' },
      ],
    },
  },
]

/** Listed oldest to newest. No dates are shown because none were supplied. */
export const experience = [
  {
    id: 'americana',
    company: 'Americana Food Company',
    role: 'IT Associate → IT System Administrator',
    period: 'Approximately 6 years',
    progression: ['IT Associate', 'IT System Administrator'],
    responsibilities: [
      'Enterprise IT support.',
      'Multi-site technical support.',
      'Network troubleshooting.',
      'Infrastructure support.',
      'Incident management.',
      'Technical coordination.',
      'Large-scale IT operations.',
    ],
  },
  {
    id: 'darwish',
    company: 'Darwish Engineering Emirates',
    role: 'IT Support / IT Administration',
    period: 'Current role',
    progression: null,
    responsibilities: [
      'Branch IT infrastructure support.',
      'Network administration and troubleshooting.',
      'Firewall administration.',
      'Windows environment support.',
      'IT operations.',
      'Infrastructure assessment and improvement planning.',
    ],
  },
]

export const lab = {
  intro:
    'A personal space for hands-on learning, testing configurations and practising troubleshooting outside production environments.',
  items: [
    { icon: 'network', title: 'EVE-NG Network Simulations', text: 'Building and testing network topologies in a simulated environment.' },
    { icon: 'server', title: 'VMware Virtual Environments', text: 'Running virtual machines and lab infrastructure on VMware.' },
    { icon: 'security', title: 'FortiGate Firewall Labs', text: 'Testing FortiGate configurations in a virtual lab.' },
    { icon: 'firewall', title: 'pfSense Testing', text: 'Configuring and testing pfSense in lab scenarios.' },
    { icon: 'windows', title: 'Windows Administration Experiments', text: 'Experimenting with Windows administration and remote management.' },
    { icon: 'router', title: 'Routing and Switching Scenarios', text: 'Working through routing and switching scenarios.' },
    { icon: 'troubleshoot', title: 'Network Troubleshooting Exercises', text: 'Practising structured network troubleshooting.' },
  ],
  /**
   * HOW TO ADD YOUR OWN SCREENSHOTS / DIAGRAMS
   *  1. Copy the image into  public/images/lab/   (e.g. eve-ng-topology.png)
   *  2. Set  src  below to  '/images/lab/eve-ng-topology.png'
   *  3. Update title, caption and alt text.
   * Entries with src: null show a clear "add screenshot" placeholder.
   * Add or remove entries freely.
   */
  gallery: [
  {
    title: 'EVE-NG Network Topology',
    caption: 'Virtual network topology and lab simulations.',
    alt: 'EVE-NG network topology',
    src: '/images/lab/eve-ng-topology.png'
  },
  {
    title: 'Firewall Lab',
    caption: 'Firewall architecture and network security.',
    alt: 'Firewall network diagram',
    src: '/images/lab/firewall-lab.png'
  },
  {
    title: 'Network Architecture',
    caption: 'Network segmentation and DMZ architecture.',
    alt: 'Network architecture diagram',
    src: '/images/lab/network-diagram.svg'
  },
],
};
