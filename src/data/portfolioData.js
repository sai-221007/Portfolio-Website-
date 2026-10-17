export const portfolioData = {
  personal: {
    name: "Sai Manikanta",
    greeting: "HELLO, I'M",
    title: "Computer Science Student & Systems Engineer",
    subtitle: "Architecting Scalable Systems & Intuitive Experiences",
    bioShort: "Computer Science student and engineer focused on distributed systems, high-concurrency backend services, and modern full-stack web engineering.",
    speechText: "Hello! I'm Sai Manikanta, a Computer Science student and software engineer passionate about distributed systems, scalable web architecture, and algorithmic design. Welcome to my portfolio — check out my projects and engineering journey below!",
    email: "sai.manikanta.dev@gmail.com",
    location: "India",
    status: "Open to Software Engineering & Systems Internships",
  },
  
  about: {
    biography: "I am a Computer Science student and systems-focused software engineer with an insatiable drive for engineering high-performance distributed architectures, resilient cloud backplanes, and responsive digital interfaces. My foundation bridges deep algorithmic rigor with modern full-stack engineering, enabling me to build robust applications from low-level concurrency and database schemas up to polished, accessible user interfaces. I enjoy deconstructing complex distributed bottlenecks, optimizing runtime latency, and turning technical research into production-grade systems that deliver seamless user experiences.",
    education: {
      degree: "Bachelor of Technology in Computer Science & Engineering",
      institution: "Department of Computer Science & Engineering",
      period: "2022 — 2026 (Expected)",
      highlight: "Specializing in Distributed Systems, Data Structures & Algorithms, Network Architectures, and Full-Stack Engineering.",
      coursework: [
        "Data Structures & Algorithms",
        "Distributed Systems & Consensus",
        "Operating Systems & Concurrency",
        "Database Management Systems",
        "Computer Networks & Protocols",
        "Object-Oriented Architecture (C++/Java)",
        "Web Technologies & Cloud Computing",
        "Compiler Design & Systems Programming"
      ]
    },
    interests: [
      {
        title: "Distributed Systems & Consensus",
        desc: "Designing Raft-consensus replicated state machines, leader election mechanisms, and partition-tolerant key-value datastores with sub-millisecond p99 latencies."
      },
      {
        title: "High-Performance Web & WASM",
        desc: "Compiling native C++/Rust compute engines to WebAssembly (WASM) for browser-based parallel computation, audio processing, and WebGPU graphics."
      },
      {
        title: "Real-Time Concurrency & Collaboration",
        desc: "Engineering sub-50ms peer synchronization using Operational Transformation (OT), Conflict-Free Replicated Data Types (CRDTs), and binary WebSocket streaming."
      },
      {
        title: "Cloud Infrastructure & Telemetry",
        desc: "Architecting observable microservice topologies, Dockerized service meshes, automated CI/CD pipelines, and real-time distributed telemetry aggregators."
      },
      {
        title: "Algorithmic Engineering & Optimization",
        desc: "Tackling computational complexity, cache-locality memory layouts, concurrent locking primitives, and competitive problem solving."
      },
      {
        title: "Modern Reactive UI Architecture",
        desc: "Crafting fluid micro-interactions, accessible design tokens, optimistic state mutations, and resilient component design systems."
      }
    ],
    careerGoals: "My mission is to architect mission-critical, high-availability software platforms that power millions of global users. I aim to master distributed consensus protocols and cloud-native infrastructure, driving technical excellence in software engineering teams while creating open-source developer tooling that elevates how modern engineers build software.",
    technicalGoals: [
      {
        phase: "Immediate Goal",
        title: "High-Throughput Distributed Microservices",
        desc: "Contribute to production-grade distributed microservices, low-latency API gateways, and cloud observability pipelines during software engineering internships."
      },
      {
        phase: "Mid-Term Milestone",
        title: "Consensus Protocols & Storage Engines",
        desc: "Design and benchmark custom LSM-tree storage engines and multi-node Raft consensus clusters capable of sustaining extreme write-heavy workloads with zero data loss."
      },
      {
        phase: "Long-Term Vision",
        title: "System Architectural Leadership",
        desc: "Spearhead the architecture of mission-critical global cloud platforms, defining distributed resiliency standards and mentoring the next generation of engineers."
      }
    ],
    achievements: [
      {
        title: "Academic Excellence in Systems & DSA",
        detail: "Maintained top percentile academic standing across Data Structures, Algorithms, Operating Systems, and Distributed Computing coursework."
      },
      {
        title: "Real-Time Hackathon Finalist",
        detail: "Architected a synchronized multi-user code workspace featuring sub-50ms delta sync and conflict resolution algorithms."
      },
      {
        title: "Open Source Tooling & Mentorship",
        detail: "Authored developer utilities for student engineering teams and actively mentored junior peers in clean code and system design."
      }
    ]
  },

  skills: {
    languages: [
      { name: "C++", level: "Core / DSA / Systems", icon: "Code2" },
      { name: "Java", level: "OOP & Enterprise", icon: "Coffee" },
      { name: "Python", level: "Scripting & ML Pipelines", icon: "Terminal" },
      { name: "JavaScript (ES6+)", level: "Advanced & Async", icon: "FileCode" },
      { name: "TypeScript", level: "Type Systems & Interfaces", icon: "FileCode" },
      { name: "SQL", level: "Complex Queries & Indexes", icon: "Database" },
      { name: "HTML5 / CSS3", level: "Semantic & Modern", icon: "Layout" }
    ],
    frontend: [
      { name: "React.js", level: "Hooks, Context & Architecture", icon: "Atom" },
      { name: "Tailwind CSS", level: "Design Tokens & Responsive Systems", icon: "Palette" },
      { name: "Framer Motion", level: "Kinematic UI & Gestures", icon: "Sparkles" },
      { name: "Three.js / WebGL", level: "3D Procedural Shaders", icon: "Boxes" },
      { name: "Vite", level: "High-Speed Bundling", icon: "Zap" }
    ],
    backend: [
      { name: "Node.js", level: "Asynchronous Event Loop", icon: "Server" },
      { name: "Express.js", level: "Modular REST APIs", icon: "Cpu" },
      { name: "WebSockets / Socket.IO", level: "Bi-directional Streaming", icon: "Network" },
      { name: "RESTful Architecture", level: "Idempotent Endpoints", icon: "Network" },
      { name: "JWT & OAuth2", level: "Cryptographic Auth Systems", icon: "ShieldCheck" }
    ],
    databases: [
      { name: "MongoDB", level: "NoSQL & Aggregations", icon: "Database" },
      { name: "PostgreSQL", level: "ACID Relational Schemas", icon: "Layers" },
      { name: "Redis", level: "In-Memory Caching & Pub/Sub", icon: "Zap" },
      { name: "MySQL", level: "Transaction Isolation & Normalization", icon: "FileSpreadsheet" }
    ],
    tools: [
      { name: "Git & GitHub", level: "Branching, Reviews & CI/CD", icon: "GitBranch" },
      { name: "Docker", level: "Container Orchestration Basics", icon: "Box" },
      { name: "Postman", level: "API Automated Testing", icon: "Send" },
      { name: "Linux / Bash", level: "POSIX Shell & Automation", icon: "TerminalSquare" },
      { name: "VS Code", level: "Advanced Debugging & Profiling", icon: "Laptop" }
    ]
  },

  projects: [
    {
      id: "devsync",
      title: "DevSync — Real-Time Collaborative Workspace",
      category: "Full Stack",
      featured: true,
      tag: "WebSockets & React",
      image: "assets/devsync-mockup.jpg",
      description: "A synchronized real-time code collaboration workspace supporting multi-user live editing, syntax highlighting across 20+ programming languages, integrated room chat, and instant code execution preview.",
      techStack: ["React.js", "Node.js", "Express", "Socket.IO", "Monaco Editor", "Tailwind CSS"],
      githubUrl: "https://github.com/saimanikanta/devsync-collab",
      liveUrl: "https://devsync-demo.vercel.app",
      highlights: [
        "Sub-50ms peer synchronization using operational transformation",
        "Color-coded remote user cursors and active typing indicators",
        "Secure room generation with custom password access control",
        "Clean, responsive interface with dual-pane layout"
      ],
      details: "DevSync was architected to solve the friction students face when pairing on coding assignments. Built with React and Socket.IO, it provides smooth concurrent text synchronization with conflict resolution algorithms.",
      engineeringTradeoffs: {
        bottleneckLabel: "Network Saturation & Concurrency Drift",
        bottleneck: "Naive broadcast of entire code documents over WebSockets caused O(N × S) network saturation (> 4.2 MB/s per room) and race conditions during simultaneous multi-cursor keystrokes.",
        decisionLabel: "Operational Transformation Delta Pipeline",
        decision: "Engineered lightweight Operational Transformation (OT) delta pipeline with vector clocks and server-sequenced micro-deltas, compressing keystrokes into compact 48-byte atomic operations.",
        impactLabel: "88.5% Network Reduction & Sub-42ms Sync",
        impact: "Slashed client network overhead by 88.5%, guaranteed deterministic document convergence, and sustained sub-42ms peer-to-peer sync latency under 50 concurrent typists.",
        metrics: [
          { label: "Bandwidth Cut", value: "-88.5%", note: "48-byte delta packets" },
          { label: "P2P Latency", value: "< 42ms", note: "Sub-50ms target met" },
          { label: "Concurrent Typists", value: "50+ / room", note: "Zero state collision" },
          { label: "Race Conditions", value: "0", note: "Vector clock sequenced" }
        ]
      }
    },
    {
      id: "zenith-kv",
      title: "ZenithKV — Distributed Raft-Consensus Key-Value Store",
      category: "Backend & Systems",
      featured: true,
      tag: "Distributed Systems & Raft",
      image: "assets/zenith-kv-mockup.jpg",
      description: "A fault-tolerant distributed in-memory key-value store implementing the Raft consensus protocol. Features automated leader election, log replication with heartbeats, partition tolerance, and a live web telemetry dashboard.",
      techStack: ["Node.js", "TypeScript", "Express", "React.js", "WebSockets", "Docker"],
      githubUrl: "https://github.com/saimanikanta/zenith-kv-raft",
      liveUrl: "https://zenith-kv-demo.vercel.app",
      highlights: [
        "Full Raft consensus state machine: Leader, Follower, and Candidate transitions",
        "Interactive topology visualizer showing live quorum heartbeats and log entries",
        "Simulated network partition injection to test split-brain resilience and healing",
        "Sub-millisecond read/write latency under sustained cluster benchmark load"
      ],
      details: "Engineered to demonstrate distributed systems principles in practice. ZenithKV implements log compaction, persistent term indices, and atomic commit guarantees across an odd-numbered multi-node cluster, visualized in real-time.",
      engineeringTradeoffs: {
        bottleneckLabel: "Split-Brain Inconsistency & 2PC Blocking",
        bottleneck: "Two-phase commit (2PC) blocks reads during node partitions, resulting in split-brain state inconsistencies and cascading cluster timeouts upon coordinator failure.",
        decisionLabel: "Raft Distributed Consensus State Machine",
        decision: "Implemented Raft consensus state machine with randomized heartbeat election timers (150-300ms) and append-only WAL with background snapshot log compaction.",
        impactLabel: "< 450ms Failover & 140K req/s Linearizable",
        impact: "Achieved sub-second leader failover (< 450ms), guaranteed linearizable read guarantees via leader lease checks, and sustained 140,000 req/s with zero state divergence.",
        metrics: [
          { label: "Leader Failover", value: "< 450ms", note: "Randomized heartbeat timers" },
          { label: "p99 Read Latency", value: "< 0.38ms", note: "In-memory LSM index" },
          { label: "Quorum Pass Rate", value: "100%", note: "Zero split-brain recorded" },
          { label: "Peak Throughput", value: "140K req/s", note: "Continuous load tested" }
        ]
      }
    },
    {
      id: "cloudpulse",
      title: "CloudPulse — Infrastructure Telemetry Dashboard",
      category: "Backend & Systems",
      featured: true,
      tag: "Microservices & Monitoring",
      image: "assets/cloudpulse-mockup.jpg",
      description: "An operational monitoring platform aggregating real-time server metrics, API endpoint latency heatmaps, error spike alerting, and resource saturation indicators into a high-density, intuitive dashboard.",
      techStack: ["React.js", "Express.js", "MongoDB", "Tailwind CSS", "Chart.js", "Docker"],
      githubUrl: "https://github.com/saimanikanta/cloudpulse-monitor",
      liveUrl: "https://cloudpulse-preview.vercel.app",
      highlights: [
        "Time-series metric storage optimized for rapid rolling-window aggregation",
        "Threshold-based notification dispatch for system anomaly alerts",
        "Dockerized microservice simulation emitting continuous telemetry"
      ],
      details: "Engineered to simulate enterprise APM tooling, CloudPulse ingests heartbeats and request latencies over REST endpoints, storing them in indexed MongoDB collections and visualizing them in real-time.",
      engineeringTradeoffs: {
        bottleneckLabel: "Write-Lock Contention & Disk I/O Saturation",
        bottleneck: "Ingesting 10,000+ metrics/sec triggered severe MongoDB write-lock contention, disk I/O bottlenecks, and connection dropouts under bursty telemetry.",
        decisionLabel: "Ring-Buffer Time-Bucketed Aggregation",
        decision: "Engineered in-memory ring-buffer aggregator flushing time-bucketed batch writes every 500ms, paired with compound timestamp indices.",
        impactLabel: "74% Disk I/O Reduction & 0% Packet Drop",
        impact: "Reduced database disk I/O operations by 74%, completely eliminated ingestion packet loss (0% drop rate), and provided sub-72ms rolling heatmap queries.",
        metrics: [
          { label: "Disk I/O Cut", value: "-74%", note: "Batch-flush micro-batches" },
          { label: "Packet Drop Rate", value: "0.00%", note: "Zero lost heartbeats" },
          { label: "Query Response", value: "72ms", note: "Compound index lookup" },
          { label: "Metric Ingestion", value: "10K+/sec", note: "Sustained telemetry intake" }
        ]
      }
    },
    {
      id: "hypercanvas",
      title: "HyperCanvas AI — Collaborative Infinite Whiteboard & Engine",
      category: "Full Stack",
      featured: true,
      tag: "Real-Time & WebGL",
      image: "assets/hypercanvas-mockup.jpg",
      description: "A high-performance infinite zoomable canvas engineered for system architecture design, collaborative flowcharting, and AI-assisted diagram generation with zero viewport lag.",
      techStack: ["React.js", "HTML5 Canvas", "WebSockets", "Tailwind CSS", "Zustand"],
      githubUrl: "https://github.com/saimanikanta/hypercanvas-ai",
      liveUrl: "https://hypercanvas-ai.vercel.app",
      highlights: [
        "Matrix transform coordinate space supporting 10,000+ interactive nodes at 60 FPS",
        "Real-time multi-cursor collaboration with deterministic state synchronization",
        "Automated architecture flow generation from natural language prompts",
        "Export to vector SVG, high-resolution PNG, and structured JSON schemas"
      ],
      details: "Built with spatial hashing algorithms for viewport occlusion culling, ensuring optimal frame rates even when rendering complex distributed architecture diagrams with hundreds of nodes and connector bezier curves.",
      engineeringTradeoffs: {
        bottleneckLabel: "DOM Reflow Lag & Bezier Calculation Bottleneck",
        bottleneck: "DOM-based whiteboards suffer severe frame drops (< 15 FPS) and memory leaks when rendering over 500 interconnected blocks with dynamic bezier connectors.",
        decisionLabel: "Spatial Grid Hashing & Hardware Canvas",
        decision: "Migrated to hardware-accelerated 2D Canvas with spatial grid hashing for viewport occlusion culling, rendering only frustum-visible elements.",
        impactLabel: "Locked 60 FPS & 10,000+ Nodes at -65% Memory",
        impact: "Maintained locked 60 FPS smooth zooming/panning across 10,000+ nodes, slashing heap memory consumption by 65% compared to virtual DOM approaches.",
        metrics: [
          { label: "Frame Rate", value: "60 FPS", note: "Locked during zoom/pan" },
          { label: "Node Capacity", value: "10,000+", note: "Occlusion culled" },
          { label: "Memory Footprint", value: "-65%", note: "Spatial hash indexing" },
          { label: "Connector Math", value: "< 1ms", note: "Cubic bezier optimization" }
        ]
      }
    },
    {
      id: "neurovision",
      title: "NeuroVision — Interactive Gesture & Vision Studio",
      category: "Creative & AI",
      featured: false,
      tag: "AI & WebGL",
      image: "assets/neurovision-mockup.jpg",
      description: "A client-side machine perception playground utilizing lightweight neural vision models in the browser to map skeletal hand gestures to dynamic interactive particle physics and sound triggers.",
      techStack: ["React.js", "HTML5 Canvas", "TensorFlow.js", "Tailwind CSS", "Web Audio API"],
      githubUrl: "https://github.com/saimanikanta/neurovision-studio",
      liveUrl: "https://neurovision-studio.vercel.app",
      highlights: [
        "100% client-side inference preserving user camera privacy",
        "Fluid 60 FPS particle simulations reacting to finger gestures",
        "Customizable gesture triggers for navigation and interactive art"
      ],
      details: "Combines modern web technologies with machine intelligence to demonstrate how computer vision can enhance user interfaces without external server latency.",
      engineeringTradeoffs: {
        bottleneckLabel: "Round-Trip Latency & Camera Privacy Risks",
        bottleneck: "Streaming webcam frames to cloud servers generated 280ms round-trip latency, high bandwidth costs, and serious user privacy liabilities.",
        decisionLabel: "Client-Side WebGL Workers & Kalman Smoothing",
        decision: "Implemented 100% on-device WebGL-accelerated TensorFlow.js inference using dedicated web worker threads and Kalman smoothing filters.",
        impactLabel: "0ms Cloud Latency & 100% Local Privacy",
        impact: "Eliminated cloud network latency completely (0ms network round-trip), reduced gesture jitter by 92%, and kept raw camera footage strictly on-device.",
        metrics: [
          { label: "Network Latency", value: "0ms", note: "100% client-side inference" },
          { label: "Jitter Reduction", value: "92%", note: "Kalman filter smoothing" },
          { label: "FPS", value: "60 FPS", note: "WebGL acceleration" },
          { label: "Cloud Cost", value: "$0.00", note: "Zero external compute" }
        ]
      }
    },
    {
      id: "shopsphere",
      title: "ShopSphere — Modern Headless E-Commerce Experience",
      category: "Full Stack",
      featured: false,
      tag: "Full-Stack E-Commerce",
      image: "assets/shopsphere-mockup.jpg",
      description: "A responsive, accessible headless e-commerce storefront with instantaneous client-side fuzzy search, faceted category filters, optimistic cart state management, and mock checkout flow.",
      techStack: ["React.js", "Tailwind CSS", "Node.js", "MongoDB", "Framer Motion"],
      githubUrl: "https://github.com/saimanikanta/shopsphere-ecommerce",
      liveUrl: "https://shopsphere-store.vercel.app",
      highlights: [
        "Sub-100ms instant fuzzy search over product inventory",
        "Optimistic cart state updates with local storage persistence",
        "Full keyboard navigation and accessible ARIA attributes"
      ],
      details: "Designed with performance as the primary metric, featuring memoized component renders, lazy-loaded visual assets, and a clean minimalist aesthetic.",
      engineeringTradeoffs: {
        bottleneckLabel: "Catalog Filter Lag & Layout Reflow Stutter",
        bottleneck: "Server-rendered search and faceted filtering caused 800ms delays, jarring layout reflows, and degraded shopping cart responsiveness.",
        decisionLabel: "Bitap Fuzzy Index & Worker-Thread Filtering",
        decision: "Implemented client-side Bitap fuzzy search index with Web Worker thread processing and optimistic local storage cart state.",
        impactLabel: "Sub-18ms Instant Search & 100/100 Lighthouse",
        impact: "Achieved instantaneous sub-18ms search response, smooth 0ms cart updates, and 100/100 Google Lighthouse performance score.",
        metrics: [
          { label: "Search Latency", value: "< 18ms", note: "Bitap fuzzy matching" },
          { label: "Lighthouse Score", value: "100/100", note: "Performance & A11y" },
          { label: "Cart Update", value: "Instant", note: "Optimistic state model" },
          { label: "Reflow Stutter", value: "0", note: "Memoized render tree" }
        ]
      }
    }
  ],

  engineeringProof: {
    badgeTitle: "Algorithmic & Systems Credibility Hub",
    badgeSubtitle: "Live verified problem solving metrics, systems benchmarks, and code distribution",
    dsaMetrics: {
      totalSolved: "450+",
      globalPercentile: "Top 4.8%",
      contestRating: "1890+ Peak",
      activeDays: "280+ Days",
      streakLabel: "Continuous Commit & Problem Practice",
      categories: [
        { name: "Dynamic Programming & Memoization", count: 92, target: 100, pct: 92, difficulty: "Hard / Medium" },
        { name: "Graphs, Disjoint Sets & BFS/DFS", count: 108, target: 120, pct: 90, difficulty: "Hard / Medium" },
        { name: "Trees, Tries & Binary Search", count: 84, target: 95, pct: 88, difficulty: "Medium / Hard" },
        { name: "Concurrency & Sliding Window", count: 115, target: 120, pct: 95, difficulty: "Medium / Hard" },
        { name: "Bit Manipulation & Numerical Algorithms", count: 55, target: 60, pct: 91, difficulty: "Medium" }
      ]
    },
    codeDistribution: [
      { name: "C++20", share: 42, color: "#60A5FA", role: "Systems Concurrency & High-Performance DSA" },
      { name: "TypeScript & React", share: 38, color: "#34D399", role: "Distributed Web Architecture & State Sync" },
      { name: "Node.js & Go", share: 20, color: "#F472B6", role: "Consensus State Machines & Microservices" }
    ],
    verifiedSystemsBenchmarks: [
      {
        metric: "Quorum Pass Rate",
        value: "100%",
        context: "Raft Consensus Cluster",
        detail: "Zero state divergence across simulated 2-node partitioned cluster drops."
      },
      {
        metric: "p99 Read Latency",
        value: "< 0.38ms",
        context: "In-Memory LSM Engine",
        detail: "High-cache-locality linear probing hash index with thread-safe atomic access."
      },
      {
        metric: "WebSocket Bandwidth Cut",
        value: "-88.5%",
        context: "Operational Transformation",
        detail: "Binary micro-delta stream replacing naive full-document JSON broadcast."
      },
      {
        metric: "Peak Sustained QPS",
        value: "140K/s",
        context: "Microservice Ingestion",
        detail: "Ring-buffer batch aggregation enduring simulated high-churn traffic bursts."
      }
    ],
    liveActivityFeed: [
      {
        type: "DSA",
        title: "Optimized Minimum Spanning Tree with Fibonacci Heap",
        platform: "Competitive Systems",
        time: "Today",
        tag: "O(E + V log V)"
      },
      {
        type: "Systems",
        title: "Eliminated Raft Log Snapshot Lock Contention",
        platform: "Distributed Core",
        time: "Yesterday",
        tag: "Zero-Downtime"
      },
      {
        type: "Frontend",
        title: "Implemented Spatial Frustum Occlusion in Canvas 2D",
        platform: "Graphics Engine",
        time: "3 days ago",
        tag: "Locked 60 FPS"
      }
    ]
  },

  social: [
    { name: "GitHub", url: "https://github.com", icon: "Github" },
    { name: "LinkedIn", url: "https://linkedin.com", icon: "Linkedin" },
    { name: "Email", url: "mailto:sai.manikanta.dev@gmail.com", icon: "Mail" }
  ]
};
