import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import {
  Sparkles,
  BookOpen,
  Zap,
  Info,
  X,
  Cpu,
  CheckCircle2,
  Eye,
  ChevronRight,
  Layers,
  Terminal,
  Activity,
  Compass,
  Code2,
  ChevronDown,
  ChevronUp,
  Server,
  Layout,
  Database,
  Boxes,
  Atom
} from 'lucide-react';
import Scene from './Scene';
import BookScene from './BookScene';

// The 3 Featured 3D Field Manuals (MERN, JavaScript, Claude)
const SHOWCASE_BOOKS = [
  {
    id: 'mern',
    title: 'MERN',
    fullName: 'MERN Stack Architecture',
    badge: 'Full-Stack Ecosystem',
    tagline: 'MongoDB, Express.js, React.js & Node.js',
    color: 'text-amber-400',
    borderColor: 'border-amber-400/40',
    bg: 'bg-amber-500/10',
    overview:
      'A comprehensive guide to full-stack JavaScript architecture. Covers MongoDB document schema design, Express.js REST middleware, declarative React 19 component hierarchies, and Node.js asynchronous event-loop runtimes.',
    highlights: [
      { label: 'Database', desc: 'MongoDB B-tree indexing & pipeline aggregations' },
      { label: 'Backend API', desc: 'Express.js idempotent REST controllers & JWT auth' },
      { label: 'Client UI', desc: 'React.js custom hooks, Context state & minimal re-renders' },
      { label: 'Runtime', desc: 'Node.js non-blocking I/O & streaming buffers' }
    ]
  },
  {
    id: 'javascript',
    title: 'JavaScript',
    fullName: 'Modern JavaScript & Runtime',
    badge: 'Core Language & V8',
    tagline: 'Modern ES6+, Asynchronous Concurrency & Event Loop',
    color: 'text-yellow-400',
    borderColor: 'border-yellow-400/40',
    bg: 'bg-yellow-500/10',
    overview:
      'Deep architectural study of the JavaScript runtime environment: V8 JIT compilation, call stack execution contexts, microtask Promise queues, lexical closures, and high-concurrency asynchronous workflows.',
    highlights: [
      { label: 'Event Loop', desc: 'Microtask queue scheduling & non-blocking execution' },
      { label: 'Concurrency', desc: 'Async/await, Promise.allSettled & AbortController' },
      { label: 'Memory & Scope', desc: 'Lexical closures, garbage collection & scope chains' },
      { label: 'Modern Syntax', desc: 'Native ESM modules, optional chaining & destructuring' }
    ]
  },
  {
    id: 'claude',
    title: 'Claude',
    fullName: 'Claude Agentic AI & Reasoning',
    badge: 'Agentic Workspaces',
    tagline: 'System Prompts, Codebase Context & Tool Use',
    color: 'text-portfolio-rose',
    borderColor: 'border-portfolio-rose/40',
    bg: 'bg-portfolio-rose/10',
    overview:
      'Exploration of agentic coding workflows: structured multi-file codebase discovery, chain-of-thought architectural planning, system prompt engineering, deterministic tool execution, and regression-proof verification.',
    highlights: [
      { label: 'Code Context', desc: 'Multi-file source tree mapping & intent resolution' },
      { label: 'Deliberate Planning', desc: 'Step-by-step diff planning before code changes' },
      { label: 'Tool Protocol', desc: 'Deterministic terminal tools & automated testing' },
      { label: 'Verification', desc: 'Strict invariance checks & regression elimination' }
    ]
  }
];

// The 2 Creative 3D Experiences (Warp & Books only)
const EXPERIENCES = [
  {
    id: 'warp',
    title: '3D Hyperspace Warp Field',
    shortTitle: 'Hyperspace Warp',
    tagline: 'Interactive Relativistic Tunnel & WebGL Shaders',
    badge: 'WebGL 2.0 • GLSL Additive Shaders • 60 FPS',
    icon: Zap,
    accentColor: 'text-cyan-400',
    accentBorder: 'border-cyan-400/30',
    accentBg: 'bg-cyan-500/10',
    glowColor: 'from-cyan-500/20 via-indigo-500/10 to-transparent',
    overview:
      'A real-time procedural WebGL hyperspace warp simulation featuring relativistic optical aberration, dynamic camera FOV expansion, and zero-allocation buffer geometry rendering 1,200 continuous streak lines at 60 FPS.',
    stats: [
      { label: 'Render Target', value: '60 FPS Continuous' },
      { label: 'Max Velocity', value: '50.0c (Trans-Warp)' },
      { label: 'Blending Pass', value: 'Additive GLSL' },
      { label: 'Instanced Lines', value: '1,200 Buffers' }
    ],
    technicalSummary:
      'Demonstrates high-performance WebGL graphics engineering. Powered by @designcodeio/threeui WarpFieldBackground, this simulation calculates relativistic optical aberration where streak vertices accelerate forward along the Z-axis with zero garbage-collection allocations.',
    deepDiveModules: [
      {
        title: '1. Relativistic Optical Aberration & Dynamic FOV',
        description:
          'Simulates relativistic optical aberration where light paths bend forward toward the apex of travel. Camera FOV stretches dynamically from 75° to 90° as velocity accelerates from 5.0c (sub-light) to 50.0c (trans-warp).'
      },
      {
        title: '2. Additive Blending & Zero-Overdraw Shaders',
        description:
          'Rendered using THREE.AdditiveBlending on a single-pass vertex-colored LineBasicMaterial. Light streaks sum RGB values directly without depth-buffer write locks (depthWrite: false), ensuring 60 FPS across all devices.'
      },
      {
        title: '3. Zero-Allocation Render Loop & Lifecycle Guard',
        description:
          'Float32Array position attributes mutate in-place each frame, eliminating garbage collection pauses. An IntersectionObserver pauses WebGL computation to 0 Hz when scrolled out of view to preserve device resources.'
      }
    ],
    codeSnippet: `// Relativistic Streak Motion & In-Place Z-Advance
function updateWarpField(dt, velocity) {
  for (let i = 0; i < STREAK_COUNT; i++) {
    // Advance streak tip and base along Z-axis
    positions[i * 6 + 2] += velocity * dt;
    positions[i * 6 + 5] += velocity * dt;
    
    // Cycle particle back to far plane when passing viewer
    if (positions[i * 6 + 2] > NEAR_PLANE) {
      positions[i * 6 + 2] = FAR_PLANE;
      positions[i * 6 + 5] = FAR_PLANE + streakLength;
    }
  }
  geometry.attributes.position.needsUpdate = true;
}`,
    controlsGuide: [
      'Select Warp Speed (5x Sub-Light up to 50x Trans-Warp) to accelerate relativistic velocity in real time.',
      'Watch the procedural light streaks stretch and intensify dynamically as velocity scales.',
      'The WebGL canvas automatically pauses computation when scrolled out of view to preserve device resources.'
    ],
    techStack: ['Three.js', 'WebGL 2.0', 'GLSL Additive Shaders', 'BufferAttribute', 'IntersectionObserver']
  },
  {
    id: 'books',
    title: '3D Field Manuals — MERN, JavaScript & Claude',
    shortTitle: 'Field Manuals',
    tagline: 'Interactive 3D Virtual Library & Kinematic Bookshelf',
    badge: 'ThreeUI • 3D Desk • MERN, JS & Claude',
    icon: BookOpen,
    accentColor: 'text-amber-400',
    accentBorder: 'border-amber-400/30',
    accentBg: 'bg-amber-500/10',
    glowColor: 'from-amber-500/20 via-orange-500/10 to-transparent',
    overview:
      'An interactive 3D virtual desk featuring 3 engineering field manuals: MERN, JavaScript, and Claude. Built with compound mesh hierarchies, spine-aligned pivots, and 2K procedural canvas textures.',
    stats: [
      { label: 'Field Manuals', value: 'MERN • JS • Claude' },
      { label: 'Texture Synthesis', value: '2K Procedural Canvas' },
      { label: 'Picking Engine', value: 'Mathematical Raycaster' },
      { label: 'Kinematic Hinge', value: 'Spine Pivot (180°)' }
    ],
    technicalSummary:
      'Constructed with compound mesh hierarchies and spine-aligned pivots. Visitors can click any of the 3 featured manuals—MERN, JavaScript, or Claude—to pull it forward into view, flip pages, and inspect architectural guides.',
    deepDiveModules: [
      {
        title: '1. Compound Mesh Hierarchies & Spine Kinematics',
        description:
          'Each volume contains independent 3D meshes for front cover, rear casing, embossed spine, and internal page block. The cover pivot is offset to (0, 0, 0) along the spine edge, allowing natural 180° opening rotations without UV distortion.'
      },
      {
        title: '2. Mathematical Raycasting & Camera Transitions',
        description:
          'Cursor events cast a 3D ray through normalized device coordinates into the scene. Intersected volumes trigger a smooth cubic-bezier camera tween to lift and focus on the selected technical manual.'
      },
      {
        title: '3. Procedural Shader Texturing (Zero Network Overhead)',
        description:
          'Cover typography and cloth weaves are synthesized programmatically using HTML5 2D canvas procedural textures. Debossed foil titles render with zero network latency and infinite sharpness.'
      }
    ],
    codeSnippet: `// Hierarchical Mesh Pivot & Raycast Inspection
const coverMesh = new THREE.Mesh(coverGeo, pbrMaterial);
coverGeo.translate(coverWidth / 2, 0, 0); // Align pivot to spine edge
coverMesh.position.set(-coverWidth / 2, 0, spineDepth / 2);

function openBookManual(bookId) {
  // Smoothly rotate cover open and transition camera to focus
  coverMesh.rotation.y = THREE.MathUtils.lerp(coverMesh.rotation.y, -Math.PI * 0.85, 0.08);
  focusBookCamera(bookId);
}`,
    controlsGuide: [
      'Click directly on any 3D book on the desk (MERN, JavaScript, Claude) to lift it forward and flip pages.',
      'Use the Book tabs above the desk to inspect each manual’s architectural focus.',
      'Click outside the active book to smoothly return it to the virtual shelf.'
    ],
    techStack: ['Three.js', 'Raycaster', 'Procedural Textures', 'Kinematic Hinges', 'WebGL Sandbox']
  }
];

export default function Showcase3D() {
  const stageRef = useRef(null);
  const { theme } = useTheme();

  // State
  const [activeView, setActiveView] = useState('warp'); // 'warp' | 'books' (ONLY these 2 experiences!)
  const [isExperienceOpen, setIsExperienceOpen] = useState(true);
  const [showMatter, setShowMatter] = useState(true);
  const [knowledgeModalId, setKnowledgeModalId] = useState(null);

  // Warp Experience State: Speed only (clean warp, no skills overlay!)
  const [warpSpeed, setWarpSpeed] = useState(15.0);

  // Books Experience State: Active Book Manual (MERN, JavaScript, Claude)
  const [activeBookId, setActiveBookId] = useState('mern');

  // Active Data
  const currentExp = EXPERIENCES.find((e) => e.id === activeView) || EXPERIENCES[0];
  const modalExp = EXPERIENCES.find((e) => e.id === knowledgeModalId);
  const currentBook = SHOWCASE_BOOKS.find((b) => b.id === activeBookId) || SHOWCASE_BOOKS[0];

  // Open specific experience and scroll stage into view smoothly
  const handleOpenExperience = (id) => {
    setActiveView(id);
    setIsExperienceOpen(true);
    setTimeout(() => {
      if (stageRef.current) {
        stageRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }, 100);
  };

  // Close modal with ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setKnowledgeModalId(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="showcase-3d" className="py-24 relative z-10 border-t border-theme-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-theme-surface border border-theme-border text-xs font-mono uppercase tracking-wider text-theme-muted shadow-sm">
            <Boxes className="w-3.5 h-3.5 text-portfolio-rose" />
            <span>Interactive 3D Technology Lab</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-theme-text tracking-tight">
            Creative 3D Experiences
          </h2>

          <p className="text-base sm:text-lg text-theme-muted max-w-2xl leading-relaxed">
            Explore two state-of-the-art interactive WebGL environments: the <strong>Relativistic Hyperspace Warp</strong> and the <strong>3D Field Manuals Virtual Library</strong> featuring <strong>MERN</strong>, <strong>JavaScript</strong>, and <strong>Claude</strong>.
          </p>
        </div>

        {/* 1. THE TWO EXPERIENCE CARDS (Warp & Books ONLY) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 max-w-4xl mx-auto">
          {EXPERIENCES.map((exp) => {
            const Icon = exp.icon;
            const isCurrentlyActive = isExperienceOpen && activeView === exp.id;

            return (
              <div
                key={exp.id}
                className={`relative rounded-3xl bg-theme-card border p-6 flex flex-col justify-between transition-all duration-300 shadow-md hover:shadow-xl group ${
                  isCurrentlyActive
                    ? 'border-portfolio-rose/60 ring-2 ring-portfolio-rose/20 bg-theme-card/90'
                    : 'border-theme-border hover:border-theme-border/90'
                }`}
              >
                {/* Background Accent Glow */}
                <div
                  className={`absolute -inset-px rounded-3xl bg-gradient-to-b ${exp.glowColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                />

                <div className="relative z-10 space-y-4">
                  {/* Top Bar: Icon & Category Badge */}
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-12 h-12 rounded-2xl ${exp.accentBg} ${exp.accentBorder} border flex items-center justify-center shadow-inner`}
                    >
                      <Icon className={`w-6 h-6 ${exp.accentColor}`} />
                    </div>

                    <span className="px-3 py-1 rounded-full bg-theme-surface border border-theme-border text-[11px] font-mono text-theme-muted">
                      {exp.badge}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-theme-text tracking-tight group-hover:text-theme-text transition-colors">
                      {exp.title}
                    </h3>
                    <p className={`text-xs font-mono font-medium mt-1 ${exp.accentColor}`}>
                      {exp.tagline}
                    </p>
                  </div>

                  {/* Brief Description */}
                  <p className="text-xs sm:text-sm text-theme-muted leading-relaxed line-clamp-3">
                    {exp.overview}
                  </p>

                  {/* Key Highlights Chips */}
                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-theme-border/60 text-[10px] font-mono">
                    {exp.stats.slice(0, 2).map((s, idx) => (
                      <div key={idx} className="bg-theme-surface/70 px-2.5 py-1.5 rounded-xl border border-theme-border/60">
                        <span className="text-theme-muted block">{s.label}:</span>
                        <span className="font-bold text-theme-text">{s.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Buttons (Open & Know More) */}
                <div className="relative z-10 pt-6 mt-4 border-t border-theme-border/60 grid grid-cols-2 gap-2.5">
                  {/* BUTTON 1: Open / Launch Experience */}
                  <button
                    onClick={() => handleOpenExperience(exp.id)}
                    className={`inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all shadow-sm ${
                      isCurrentlyActive
                        ? 'bg-portfolio-rose text-white shadow-md'
                        : 'bg-portfolio-midnight text-portfolio-ivory hover:bg-portfolio-midnight/90 dark:bg-portfolio-ivory dark:text-portfolio-midnight dark:hover:bg-portfolio-rose'
                    }`}
                    title={`Open ${exp.shortTitle} in the 3D Stage`}
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>{isCurrentlyActive ? 'Viewing Now' : 'Open'}</span>
                  </button>

                  {/* BUTTON 2: Know More & Specs */}
                  <button
                    onClick={() => setKnowledgeModalId(exp.id)}
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-semibold bg-theme-surface hover:bg-theme-surfaceHover text-theme-text border border-theme-border transition-colors"
                    title={`View technical specifications and architecture for ${exp.shortTitle}`}
                  >
                    <Info className="w-3.5 h-3.5 text-portfolio-rose" />
                    <span>Know More</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* 2. THE INTERACTIVE 3D STAGE & TECHNICAL MATTER DOSSIER */}
        <div ref={stageRef} className="scroll-mt-24">
          {isExperienceOpen ? (
            <div className="relative rounded-3xl bg-theme-card border border-theme-border shadow-2xl overflow-hidden flex flex-col">
              {/* Stage Top Control Bar */}
              <div className="flex flex-wrap items-center justify-between px-5 py-3.5 bg-theme-surface/90 border-b border-theme-border/80 backdrop-blur-md gap-3">
                {/* Left: Active Indicator */}
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-theme-card border border-theme-border text-xs font-mono">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-theme-muted font-bold uppercase tracking-wider text-[11px]">
                      OPENED:
                    </span>
                    <span className={`font-semibold ${currentExp.accentColor}`}>
                      {currentExp.title}
                    </span>
                  </span>

                  {/* Switch to the other experience quickly */}
                  <button
                    onClick={() => setActiveView(activeView === 'warp' ? 'books' : 'warp')}
                    className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-theme-surface hover:bg-theme-surfaceHover text-[11px] font-mono text-theme-muted hover:text-theme-text border border-theme-border/60 transition-colors"
                  >
                    <span>Switch to {activeView === 'warp' ? '3D Field Manuals' : 'Hyperspace Warp'}</span>
                    <ChevronRight className="w-3 h-3" />
                  </button>
                </div>

                {/* Right: Toggle Matter, Popup Specs, Close Stage */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setShowMatter(!showMatter)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-theme-card hover:bg-theme-surfaceHover text-xs font-mono font-medium text-theme-muted hover:text-theme-text border border-theme-border transition-colors"
                    title="Toggle Technical Matter Section"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-portfolio-rose" />
                    <span>{showMatter ? 'Hide Matter' : 'Show Matter'}</span>
                    {showMatter ? <ChevronUp className="w-3 h-3 ml-0.5" /> : <ChevronDown className="w-3 h-3 ml-0.5" />}
                  </button>

                  <button
                    onClick={() => setKnowledgeModalId(activeView)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-theme-card hover:bg-theme-surfaceHover text-xs font-mono font-medium text-theme-muted hover:text-theme-text border border-theme-border transition-colors"
                  >
                    <Info className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Popup Specs</span>
                  </button>

                  <button
                    onClick={() => setIsExperienceOpen(false)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-theme-card hover:bg-red-500/10 text-xs font-mono font-medium text-theme-muted hover:text-red-400 border border-theme-border transition-colors"
                    title="Close 3D Canvas Stage"
                  >
                    <X className="w-3.5 h-3.5" />
                    <span>Close</span>
                  </button>
                </div>
              </div>

              {/* ========================================================================= */}
              {/* 3D VIEWPORT 1: HYPERSPACE WARP (Clean, Pure WebGL, No Skills Overlay!) */}
              {/* ========================================================================= */}
              {activeView === 'warp' && (
                <div className="relative select-none">
                  {/* Floating Warp Speed Controls Bar (Top Right) */}
                  <div className="absolute top-4 right-4 z-20 flex flex-wrap items-center gap-1.5 bg-theme-card/90 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-theme-border/80 shadow-xl font-mono text-xs">
                    <span className="text-theme-muted text-[11px] font-semibold flex items-center gap-1.5 mr-1">
                      <Zap className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                      <span>WARP SPEED:</span>
                    </span>
                    {[
                      { label: '5x Sub-Light', val: 5.0 },
                      { label: '15x Standard', val: 15.0 },
                      { label: '30x Hyperspace', val: 30.0 },
                      { label: '50x Trans-Warp', val: 50.0 },
                    ].map((pill) => (
                      <button
                        key={pill.val}
                        onClick={() => setWarpSpeed(pill.val)}
                        className={`px-2.5 py-1 rounded-lg text-[10px] font-bold transition-all ${
                          warpSpeed === pill.val
                            ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 shadow-sm'
                            : 'text-theme-muted hover:text-theme-text bg-theme-surface/50 border border-transparent'
                        }`}
                      >
                        {pill.label}
                      </button>
                    ))}
                  </div>

                  {/* Render Requested Scene with WarpFieldBackground */}
                  <Scene
                    speed={warpSpeed}
                    streakOpacity={0.60}
                    tileOpacity={0.90}
                    fov={75}
                    hue={0}
                    saturation={1.00}
                    brightness={1.00}
                  />

                  {/* Telemetry Footer Bar */}
                  <div className="px-5 py-3 bg-theme-surface/90 border-t border-theme-border flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] font-mono text-theme-muted">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                      <span>
                        Warp Velocity: <strong className="text-cyan-300 font-bold">{warpSpeed.toFixed(1)}c</strong> • Relativistic Procedural Tunnel
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 text-theme-muted/80">
                      <Activity className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Single-Pass GLSL • 60 FPS • 1,200 Instanced Lines</span>
                    </div>
                  </div>
                </div>
              )}

              {/* ========================================================================= */}
              {/* 3D VIEWPORT 2: 3D FIELD MANUALS (MERN, JavaScript, Claude) */}
              {/* ========================================================================= */}
              {activeView === 'books' && (
                <div className="relative select-none">
                  {/* Top: 3 Books Selector Tabs Over the 3D Desk (MERN, JavaScript, Claude) */}
                  <div className="absolute top-4 left-4 right-4 z-20 flex flex-wrap items-center justify-center gap-2 bg-theme-card/90 backdrop-blur-md p-2 rounded-2xl border border-theme-border/80 shadow-xl font-mono text-xs">
                    <span className="text-theme-muted text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                      <span>FIELD MANUALS:</span>
                    </span>
                    {SHOWCASE_BOOKS.map((book) => {
                      const isActive = activeBookId === book.id;
                      return (
                        <button
                          key={book.id}
                          onClick={() => setActiveBookId(book.id)}
                          className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                            isActive
                              ? `${book.bg} ${book.color} border ${book.borderColor} shadow-sm font-bold`
                              : 'text-theme-muted hover:text-theme-text bg-theme-surface/50 border border-transparent'
                          }`}
                        >
                          <span>{book.title}</span>
                          <span className="text-[10px] opacity-75 font-normal">({book.badge.split(' ')[0]})</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Render Requested BookScene with BestsellersBookShowcase */}
                  <BookScene />

                  {/* Telemetry Footer Bar */}
                  <div className="px-5 py-3 bg-theme-surface/90 border-t border-theme-border flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] font-mono text-theme-muted">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                      <span>✦ Click any 3D book on the desk (<strong>MERN</strong>, <strong>JavaScript</strong>, <strong>Claude</strong>) to pull forward, open, and read.</span>
                    </div>

                    <div className="flex items-center gap-1.5 text-theme-muted/80">
                      <Compass className="w-3.5 h-3.5 text-amber-400" />
                      <span>Raycast Hit Detection • Spine Pivot Kinematics</span>
                    </div>
                  </div>
                </div>
              )}

              {/* ========================================================================= */}
              {/* THE TECHNICAL MATTER & ARCHITECTURE DOSSIER */}
              {/* ========================================================================= */}
              {showMatter && (
                <div className="border-t border-theme-border bg-theme-surface/80 backdrop-blur-xl p-6 sm:p-10 space-y-8 animate-fade-in">
                  {/* Executive Header for Current Experience */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-theme-border/70 pb-6">
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2.5">
                        <span className={`p-2 rounded-xl ${currentExp.accentBg} ${currentExp.accentBorder} border inline-flex items-center justify-center`}>
                          <currentExp.icon className={`w-5 h-5 ${currentExp.accentColor}`} />
                        </span>
                        <div>
                          <span className="text-[11px] font-mono font-bold tracking-wider uppercase text-portfolio-rose">
                            TECHNICAL KNOWLEDGE &amp; ENGINEERING MATTER
                          </span>
                          <h3 className="text-2xl sm:text-3xl font-display font-bold text-theme-text tracking-tight">
                            {currentExp.title}
                          </h3>
                        </div>
                      </div>
                      <p className="text-xs sm:text-sm text-theme-muted font-mono">
                        {currentExp.tagline}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                      {currentExp.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-lg bg-theme-card border border-theme-border text-[11px] font-mono text-theme-muted font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Core Architecture Summary */}
                  <div className="rounded-2xl bg-theme-card/90 p-5 border border-theme-border/80 space-y-2">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-theme-muted flex items-center gap-2">
                      <Info className="w-3.5 h-3.5 text-portfolio-rose" />
                      <span>3D WebGL Graphics &amp; Engine Architecture</span>
                    </h4>
                    <p className="text-sm text-theme-text/90 leading-relaxed font-sans">
                      {currentExp.technicalSummary}
                    </p>
                  </div>

                  {/* If Books view: Show details for the active book manual (MERN, JavaScript, Claude) */}
                  {activeView === 'books' && (
                    <div className={`rounded-2xl ${currentBook.bg} p-5 border ${currentBook.borderColor} space-y-3`}>
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <BookOpen className={`w-4 h-4 ${currentBook.color}`} />
                          <h4 className="text-sm font-display font-bold text-theme-text">
                            {currentBook.fullName}
                          </h4>
                        </div>
                        <span className="px-2.5 py-0.5 rounded-full bg-theme-surface border border-theme-border text-[10px] font-mono text-theme-muted">
                          {currentBook.badge}
                        </span>
                      </div>

                      <p className="text-xs text-theme-muted leading-relaxed font-sans">
                        {currentBook.overview}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 pt-1">
                        {currentBook.highlights.map((h, i) => (
                          <div key={i} className="p-2.5 rounded-xl bg-theme-card/80 border border-theme-border/60 text-xs">
                            <strong className={`font-mono text-[11px] block ${currentBook.color}`}>
                              {h.label}
                            </strong>
                            <span className="text-[10px] text-theme-muted leading-tight block mt-0.5">
                              {h.desc}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* 4 Telemetry Metrics Grid */}
                  <div>
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-theme-muted mb-3 flex items-center gap-2">
                      <Activity className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Engine Benchmark Telemetry</span>
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {currentExp.stats.map((stat, i) => (
                        <div
                          key={i}
                          className="p-4 rounded-2xl bg-theme-card border border-theme-border/70 text-center shadow-xs"
                        >
                          <span className="text-[10px] font-mono text-theme-muted uppercase tracking-wider block">
                            {stat.label}
                          </span>
                          <span className="text-base sm:text-lg font-display font-bold text-theme-text mt-1 block">
                            {stat.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 3 Detailed Technical Deep-Dive Modules */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-theme-muted flex items-center gap-2">
                      <Layers className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Mathematical Implementation &amp; Shaders</span>
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {currentExp.deepDiveModules.map((module, i) => (
                        <div
                          key={i}
                          className="p-5 rounded-2xl bg-theme-card border border-theme-border/70 space-y-2 flex flex-col justify-between shadow-xs"
                        >
                          <div className="space-y-2">
                            <h5 className="text-xs font-mono font-bold text-theme-text flex items-start gap-2">
                              <span className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${i === 0 ? 'bg-cyan-400' : i === 1 ? 'bg-amber-400' : 'bg-emerald-400'}`} />
                              <span>{module.title}</span>
                            </h5>
                            <p className="text-xs text-theme-muted leading-relaxed font-sans">
                              {module.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Code & Shader Implementation Insight */}
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-theme-muted flex items-center gap-2">
                        <Terminal className="w-3.5 h-3.5 text-portfolio-rose" />
                        <span>Source Code Implementation Highlight</span>
                      </h4>
                      <span className="text-[10px] font-mono text-theme-muted/70">JavaScript / Three.js Pipeline</span>
                    </div>

                    <div className="rounded-2xl bg-[#08090D] border border-theme-border/80 p-4 font-mono text-xs overflow-x-auto shadow-inner">
                      <pre className="text-emerald-400/95 leading-relaxed font-mono">
                        <code>{currentExp.codeSnippet}</code>
                      </pre>
                    </div>
                  </div>

                  {/* Interactive Controls & Tips */}
                  <div className="rounded-2xl bg-theme-card/80 border border-theme-border/70 p-5 space-y-3">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-theme-muted flex items-center gap-2">
                      <Atom className="w-3.5 h-3.5 text-amber-400" />
                      <span>Interactive Navigation &amp; Exploration Guide</span>
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs text-theme-muted">
                      {currentExp.controlsGuide.map((guide, i) => (
                        <li key={i} className="flex items-start gap-2 bg-theme-surface/60 p-3 rounded-xl border border-theme-border/50">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                          <span className="text-theme-text/90 leading-relaxed font-sans">{guide}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* Closed State Placeholder Banner */
            <div className="p-8 sm:p-12 rounded-3xl bg-theme-card/60 border border-dashed border-theme-border text-center flex flex-col items-center justify-center space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-theme-surface border border-theme-border flex items-center justify-center text-portfolio-rose shadow-sm">
                <Boxes className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-display font-bold text-theme-text">
                  3D WebGL Canvas Stage is Currently Minimized
                </h3>
                <p className="text-xs text-theme-muted max-w-md mx-auto mt-1">
                  Click <strong>Open</strong> on either the <strong>3D Hyperspace Warp</strong> or <strong>3D Field Manuals (MERN, JavaScript, Claude)</strong> above to launch the interactive 3D WebGL world.
                </p>
              </div>
              <button
                onClick={() => setIsExperienceOpen(true)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-portfolio-midnight text-portfolio-ivory hover:bg-portfolio-midnight/90 dark:bg-portfolio-ivory dark:text-portfolio-midnight dark:hover:bg-portfolio-rose text-xs font-semibold shadow-md transition-all"
              >
                <Eye className="w-4 h-4" />
                <span>Launch {currentExp.shortTitle}</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* 3. POPUP "KNOW MORE" (TECH SPECS MODAL) */}
      {modalExp && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in"
          onClick={() => setKnowledgeModalId(null)}
        >
          <div
            className="relative w-full max-w-2xl rounded-3xl bg-theme-card border border-theme-border shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-theme-border/60 pb-5">
              <div className="flex items-center gap-3">
                <div
                  className={`w-12 h-12 rounded-2xl ${modalExp.accentBg} ${modalExp.accentBorder} border flex items-center justify-center`}
                >
                  <modalExp.icon className={`w-6 h-6 ${modalExp.accentColor}`} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-theme-surface border border-theme-border text-theme-muted">
                      {modalExp.badge}
                    </span>
                  </div>
                  <h3 className="text-2xl font-display font-bold text-theme-text mt-1">
                    {modalExp.title}
                  </h3>
                </div>
              </div>

              <button
                onClick={() => setKnowledgeModalId(null)}
                className="p-2 rounded-xl text-theme-muted hover:text-theme-text hover:bg-theme-surface transition-colors"
                title="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Overview Section */}
            <div>
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-theme-muted mb-2 flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5 text-portfolio-rose" />
                <span>Executive Overview</span>
              </h4>
              <p className="text-sm text-theme-text leading-relaxed bg-theme-surface/60 p-4 rounded-2xl border border-theme-border/60">
                {modalExp.overview}
              </p>
            </div>

            {/* Specs Grid */}
            <div>
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-theme-muted mb-3 flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                <span>Performance &amp; Engine Telemetry</span>
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {modalExp.stats.map((s, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-2xl bg-theme-surface border border-theme-border/60 text-center"
                  >
                    <span className="text-[10px] font-mono text-theme-muted block">{s.label}</span>
                    <span className="text-sm font-display font-bold text-theme-text mt-0.5 block">
                      {s.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Engineering Breakdown */}
            <div>
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-theme-muted mb-2.5 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-emerald-400" />
                <span>Architecture &amp; Math Implementation</span>
              </h4>
              <ul className="space-y-2 text-xs text-theme-muted font-sans">
                {modalExp.deepDiveModules.map((module, idx) => (
                  <li key={idx} className="bg-theme-surface/40 p-3 rounded-xl border border-theme-border/40 space-y-1">
                    <span className="font-mono text-theme-text font-bold block">{module.title}</span>
                    <span className="text-theme-muted leading-relaxed block">{module.description}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack Tags */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="text-[11px] font-mono text-theme-muted mr-1">Stack:</span>
              {modalExp.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-md bg-theme-surface border border-theme-border text-[11px] font-mono text-theme-muted"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Modal Bottom CTA: Launch Experience Immediately */}
            <div className="pt-4 border-t border-theme-border/60 flex items-center justify-end gap-3">
              <button
                onClick={() => setKnowledgeModalId(null)}
                className="px-4 py-2.5 rounded-xl text-xs font-mono text-theme-muted hover:text-theme-text transition-colors"
              >
                Close Window
              </button>
              <button
                onClick={() => {
                  handleOpenExperience(modalExp.id);
                  setKnowledgeModalId(null);
                }}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-portfolio-rose text-white text-xs font-semibold shadow-md hover:bg-portfolio-rose/90 transition-all"
              >
                <Eye className="w-4 h-4" />
                <span>Launch in 3D Stage</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
