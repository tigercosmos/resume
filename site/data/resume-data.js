window.resumeData = {
  profile: {
    name: "Yi-Xi Chen",
    role: "Systems And Networking Researcher",
    summary:
      "I work on agentic systems and networked communication, with recent projects focused on multi-agent evaluation, observability, and the systems behavior of communicating agents.",
    location: "KAUST, Saudi Arabia",
    focus: [
      "Agentic Networks",
      "Communication Systems",
      "Observability",
    ],
    actions: [
      { label: "Download Resume PDF", href: "./resume.pdf", primary: true },
      { label: "GitHub", href: "https://github.com/chenIshi" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/yi-xi-chen-06526a117/" },
      { label: "Email", href: "mailto:chen.ishi@gmail.com" },
    ],
  },
  updates: [
    {
      date: "2026.04",
      kind: "poster",
      venueOrOrg: "NSDI 2026 Poster Session",
      title: "Aistral",
      summary: "Poster presentation.",
    },
    {
      date: "2025.04",
      kind: "poster",
      venueOrOrg: "NSDI 2025 Poster Session",
      title: "OffRAC: Offloading Through Remote Accelerator Calls",
      summary: "Poster presentation.",
    },
    {
      date: "2025.06",
      kind: "publication",
      venueOrOrg: "e-Energy 2025",
      title: "Revisiting CPU Performance Scaling for Energy-Efficient Packet Processing Applications",
      summary: "Conference publication and presentation.",
    },
    {
      date: "2024.12",
      kind: "publication",
      venueOrOrg: "5G-MeMU 2024",
      title: "Towards Continuous Latency Monitoring through Open RAN Interfaces",
      summary: "Workshop publication.",
    },
    {
      date: "2023.07",
      kind: "role",
      venueOrOrg: "National University of Singapore",
      title: "Started as Research Assistant on Network Systems and Open 5G Infrastructure",
      summary: "Research role transition.",
    },
  ],
  experience: [
    {
      title: "Research Assistant",
      organization: "National University of Singapore",
      location: "Singapore",
      period: "Jul 2023 - Present",
      highlights: [
        "Automated fine-grained monitoring for a self-deployed open 5G research stack with Ansible.",
        "Captured and analyzed traffic offline to diagnose bottlenecks using P4 and Go-based tooling.",
        "Built a framework that adapts CPU core configuration to traffic demand with eBPF/XDP to reduce energy usage while preserving bandwidth targets.",
      ],
    },
    {
      title: "Research Intern",
      organization: "Industrial Technology Research Institute",
      location: "Hsinchu, Taiwan",
      period: "Jul 2018 - Aug 2018",
      highlights: [
        "Worked with full-time engineers on Cuju, a virtualization-based fault tolerance system for QEMU virtual machine migration.",
        "Located and troubleshot 47 integrity failures within a week using official tests including qtest.",
      ],
    },
  ],
  education: [
    {
      degree: "M.Sc. in Computer Science",
      institution: "Tsinghua University",
      location: "Beijing, China",
      period: "Sep 2019 - Jun 2022",
      details: [
        "Focused on data center networking, programmable switching, and networked systems research.",
        "Built NFD2Rust, a cross compiler from a domain-specific network-function language to Rust.",
        "Maintained a mixed programmable and commodity switch testbed with server, proxy, and gateway configuration work.",
      ],
    },
    {
      degree: "B.Eng. in Electrical Engineering",
      institution: "National Cheng Kung University",
      location: "Tainan, Taiwan",
      period: "Sep 2015 - Jun 2019",
      details: [
        "Built the systems foundation behind later work in networking, operating systems, and performance-aware computing.",
        "Contributed to Demystifying the Linux CPU Scheduler with professors and undergraduate collaborators.",
        "Presented in regional open-source communities including FOSSASIA and HKOSCon.",
      ],
    },
  ],
  skills: [
    {
      label: "Agentic Networking",
      items: ["Multi-agent communication", "Coordination patterns", "Network-aware system design"],
    },
    {
      label: "Evaluation And Observability",
      items: ["Reliability analysis", "Tracing", "Latency and cost measurement", "Reproducible benchmarking"],
    },
    {
      label: "Distributed And Programmable Systems",
      items: ["Communication infrastructure", "Packet processing", "Programmable data planes", "Systems optimization"],
    },
    {
      label: "Implementation",
      items: ["Rust", "Go", "Python", "C", "eBPF/XDP", "Research prototyping"],
    },
  ],
  publications: [
    {
      id: "open-ran-latency-2024",
      title: "Towards Continuous Latency Monitoring through Open RAN Interfaces",
      authors: "Permal, S.K., Chen, Y., Khooi, X.Z., Qiu, B., and Chan, M.C.",
      venue: "Proceedings of the 4th ACM Workshop on 5G and Beyond Network Measurements, Modeling, and Use Cases",
      year: 2024,
      month: 12,
      type: "workshop-paper",
      status: "Published",
      pages: "14-20",
      links: [
        {
          label: "PDF",
          href: "https://dl.acm.org/doi/pdf/10.1145/3694810.3700159",
        },
      ],
      featured: true,
      homepage: true,
    },
    {
      id: "cpu-scaling-packet-processing-2024",
      title: "Revisiting CPU Performance Scaling for Energy-Efficient Packet Processing Applications",
      authors: "Qiu, B., Chen, Y., Khooi, X.Z., Song, C.H., and Chan, M.C.",
      venue: "Proceedings of the 16th ACM International Conference on Future and Sustainable Energy Systems",
      year: 2025,
      month: 6,
      type: "conference-paper",
      status: "Published",
      pages: "385-397",
      links: [
        {
          label: "PDF",
          href: "https://dl.acm.org/doi/pdf/10.1145/3679240.3734588",
        },
      ],
      featured: true,
      homepage: true,
    },
    {
      id: "maestro-2026",
      title: "MAESTRO: Multi-Agent Evaluation Suite for Testing, Reliability, and Observability",
      authors:
        "Ma, T., Chen, Y., Anand, V., Cornacchia, A., Faustino, A.R., Liu, G., Zhang, S., Luo, H., Fahmy, S.A., Qazi, Z.A., and Canini, M.",
      venue: "arXiv preprint arXiv:2601.00481",
      year: 2026,
      month: 1,
      type: "preprint",
      status: "Preprint",
      links: [
        {
          label: "PDF",
          href: "https://arxiv.org/pdf/2601.00481",
        },
      ],
      featured: true,
      homepage: true,
    },
    {
      id: "offrac-2025",
      title: "OffRAC: Offloading Through Remote Accelerator Calls",
      authors: "Yang, Z., Iyer, K.B., Chen, Y., Shu, R., Istvan, Z., Canini, M., and Fahmy, S.A.",
      venue: "arXiv preprint arXiv:2504.04404",
      year: 2025,
      month: 4,
      type: "preprint",
      status: "Preprint",
      links: [
        {
          label: "PDF",
          href: "https://arxiv.org/pdf/2504.04404",
        },
      ],
      featured: false,
      homepage: false,
    },
    {
      id: "nq-atp-iwqos-2022",
      title: "NQ/ATP: Architectural Support for Massive Aggregate Queries in Data Center Networks",
      authors: "Chen, Y., Wu, W., Shen, S.H. and Zhang, Y.",
      venue: "IEEE/ACM IWQoS",
      year: 2022,
      month: 6,
      type: "conference-paper",
      status: "Published",
      links: [
        {
          label: "Link",
          href: "https://ieeexplore-ieee-org.kaust.idm.oclc.org/document/9812906",
        },
      ],
      featured: true,
      homepage: true,
    },
    {
      id: "atp-nsdi-2021",
      title: "ATP: In-network Aggregation for Multi-tenant Learning",
      authors: "Lao, C., Le, Y., Mahajan, K., Chen, Y., Wu, W., Akella, A. and Swift, M.M.",
      venue: "NSDI",
      year: 2021,
      month: 4,
      type: "conference-paper",
      status: "Published, Best Paper Award",
      links: [
        {
          label: "PDF",
          href: "https://www.usenix.org/system/files/nsdi21-lao.pdf",
        },
      ],
      featured: true,
      homepage: true,
    },
  ],
  talks: [
    {
      title: "Why should we attend conferences oversea?",
      venue: "COSCUP",
      year: "2022",
      location: "Taipei",
    },
    {
      title: "Formal Verification on Smart Contract",
      venue: "HKOSCon",
      year: "2019",
      location: "Hong Kong",
    },
    {
      title: "Only Empty Lip Service? Free Software Development in Taiwan",
      venue: "FOSSASIA",
      year: "2018",
      location: "Singapore",
    },
  ],
};
