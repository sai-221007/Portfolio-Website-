import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { useTheme } from '../context/ThemeContext';
import {
  Activity,
  CheckCircle2,
  Cpu,
  Layers,
  Sparkles,
  Zap,
  Radio,
  Copy,
  Check,
  Boxes,
  Globe2
} from 'lucide-react';

export default function HeroAnimatedVisual() {
  const mountRef = useRef(null);
  const { theme } = useTheme();
  const [activeMode, setActiveMode] = useState('spheres'); // 'spheres' | 'stack'
  const [copied, setCopied] = useState(false);

  // Helper to create sharp in-memory canvas textures for 3D spheres
  const createSphereTexture = (name, sub, color) => {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');

    // Deep space dark background
    ctx.fillStyle = '#0B0D14';
    ctx.fillRect(0, 0, 512, 256);

    // Glowing border frame
    ctx.strokeStyle = color;
    ctx.lineWidth = 6;
    ctx.strokeRect(8, 8, 496, 240);

    // Core radial glow
    const grad = ctx.createRadialGradient(256, 128, 10, 256, 128, 220);
    grad.addColorStop(0, `${color}40`);
    grad.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 512, 256);

    // Equator accent line
    ctx.strokeStyle = `${color}55`;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, 128);
    ctx.lineTo(512, 128);
    ctx.stroke();

    // Primary Name
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 50px "Space Grotesk", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(name, 256, 90);

    // Subtitle / Specialty
    ctx.fillStyle = color;
    ctx.font = 'bold 26px "JetBrains Mono", monospace';
    ctx.fillText(sub, 256, 160);

    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    return texture;
  };

  // 3D SCENE CONTROLLER (Supports both 'spheres' and 'stack' in Three.js)
  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let width = container.clientWidth || 440;
    let height = container.clientHeight || 320;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 7.2);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.95);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.2);
    dirLight.position.set(5, 5, 5);
    scene.add(dirLight);

    const pointLight = new THREE.PointLight(0x38bdf8, 2.5, 15);
    pointLight.position.set(0, 0, 3);
    scene.add(pointLight);

    // Group to hold all 3D scene objects
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // Background Cyber Particles
    const particleCount = 120;
    const posArray = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10;
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particleMat = new THREE.PointsMaterial({
      size: 0.04,
      color: 0x9ca3af,
      transparent: true,
      opacity: 0.6,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // DISPOSABLES ARRAY
    const disposables = [];

    // --- MODE 1: 3D INTERACTIVE TECH SPHERES GALAXY ---
    let sphereMeshes = [];
    if (activeMode === 'spheres') {
      const techOrbsData = [
        { name: 'C++20', sub: 'DSA & Memory', color: '#60A5FA', x: -1.7, y: 1.1, z: 0.2, r: 0.65 },
        { name: 'Raft', sub: 'Consensus', color: '#34D399', x: 1.8, y: 0.9, z: -0.3, r: 0.68 },
        { name: 'React', sub: 'UI Systems', color: '#38BDF8', x: 0, y: -0.2, z: 0.8, r: 0.72 },
        { name: 'DSA 450+', sub: 'Top 4.8%', color: '#FBBF24', x: -1.4, y: -1.2, z: 0.3, r: 0.65 },
        { name: 'Node.js', sub: 'Microservices', color: '#4ADE80', x: 1.6, y: -1.0, z: 0.4, r: 0.62 },
        { name: 'Sockets', sub: '42ms Sync', color: '#F472B6', x: 0.3, y: 1.6, z: -0.4, r: 0.6 },
        { name: 'Redis', sub: 'In-Memory', color: '#F87171', x: -2.3, y: -0.1, z: -0.5, r: 0.54 },
        { name: 'Docker', sub: 'Containers', color: '#818CF8', x: 2.2, y: -0.1, z: -0.6, r: 0.54 },
      ];

      techOrbsData.forEach((data, idx) => {
        const geo = new THREE.SphereGeometry(data.r, 32, 32);
        const texture = createSphereTexture(data.name, data.sub, data.color);
        const mat = new THREE.MeshStandardMaterial({
          map: texture,
          roughness: 0.18,
          metalness: 0.3,
          emissive: new THREE.Color(data.color),
          emissiveIntensity: 0.22,
        });
        const mesh = new THREE.Mesh(geo, mat);
        mesh.position.set(data.x, data.y, data.z);
        mesh.userData = {
          origX: data.x,
          origY: data.y,
          origZ: data.z,
          speed: 0.8 + idx * 0.15,
          phase: idx * 0.8
        };

        // Orbiting Saturn-style 3D Ring around each sphere
        const ringGeo = new THREE.TorusGeometry(data.r * 1.32, 0.015, 16, 48);
        const ringMat = new THREE.MeshBasicMaterial({
          color: data.color,
          transparent: true,
          opacity: 0.6,
        });
        const ringMesh = new THREE.Mesh(ringGeo, ringMat);
        ringMesh.rotation.x = Math.PI / 2.3;
        mesh.add(ringMesh);

        mainGroup.add(mesh);
        sphereMeshes.push(mesh);
        disposables.push(geo, mat, texture, ringGeo, ringMat);
      });

      // 3D Constellation Neon Laser Beams connecting the spheres
      const connections = [
        [0, 1], [1, 2], [2, 4], [4, 6], [6, 7], [2, 3], [1, 5], [0, 3], [3, 4]
      ];
      connections.forEach(([i, j]) => {
        const p1 = new THREE.Vector3(techOrbsData[i].x, techOrbsData[i].y, techOrbsData[i].z);
        const p2 = new THREE.Vector3(techOrbsData[j].x, techOrbsData[j].y, techOrbsData[j].z);
        const lineGeo = new THREE.BufferGeometry().setFromPoints([p1, p2]);
        const lineMat = new THREE.LineBasicMaterial({
          color: 0x38bdf8,
          transparent: true,
          opacity: 0.22,
        });
        const line = new THREE.Line(lineGeo, lineMat);
        mainGroup.add(line);
        disposables.push(lineGeo, lineMat);
      });
    }

    // --- MODE 2: 3D SYSTEMS ARCHITECTURE STACK (ISOMETRIC 3D SLABS) ---
    let stackSlabs = [];
    let photonRays = [];

    if (activeMode === 'stack') {
      const layersData = [
        { name: 'Layer 3: Client & Real-Time Sync', sub: 'React 18 • WebSockets • Monaco', color: 0x38bdf8, y: 1.1 },
        { name: 'Layer 2: Distributed Consensus Core', sub: 'Raft State Machine • WAL Compaction', color: 0x34d399, y: 0.0 },
        { name: 'Layer 1: High-Performance Storage', sub: 'In-Memory LSM Engine • Ring Buffer', color: 0xf59e0b, y: -1.1 }
      ];

      layersData.forEach((layer) => {
        const slabGeo = new THREE.BoxGeometry(3.6, 0.24, 2.2);
        const slabMat = new THREE.MeshPhysicalMaterial({
          color: layer.color,
          roughness: 0.2,
          metalness: 0.25,
          transmission: 0.45,
          transparent: true,
          opacity: 0.88,
          clearcoat: 1.0,
          emissive: new THREE.Color(layer.color),
          emissiveIntensity: 0.25,
        });
        const slab = new THREE.Mesh(slabGeo, slabMat);
        slab.position.y = layer.y;
        slab.rotation.x = 0.35;
        slab.rotation.y = -0.55;
        mainGroup.add(slab);
        stackSlabs.push(slab);

        // Edges wireframe highlight
        const edges = new THREE.EdgesGeometry(slabGeo);
        const lineMat = new THREE.LineBasicMaterial({ color: layer.color, linewidth: 2 });
        const wire = new THREE.LineSegments(edges, lineMat);
        slab.add(wire);

        disposables.push(slabGeo, slabMat, edges, lineMat);
      });

      // 4 Vertical Holographic Data Pylons linking the 3 tiers
      const pylonGeo = new THREE.CylinderGeometry(0.02, 0.02, 2.6, 16);
      const pylonMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.35 });
      const corners = [
        [-1.6, 0, -0.9],
        [1.6, 0, -0.9],
        [-1.6, 0, 0.9],
        [1.6, 0, 0.9]
      ];
      corners.forEach(([cx, cy, cz]) => {
        const pylon = new THREE.Mesh(pylonGeo, pylonMat);
        pylon.position.set(cx, 0, cz);
        pylon.rotation.x = 0.35;
        pylon.rotation.y = -0.55;
        mainGroup.add(pylon);
        disposables.push(pylon);
      });
      disposables.push(pylonGeo, pylonMat);

      // Photons / Laser Data Beams between layers
      const photonGeo = new THREE.SphereGeometry(0.08, 16, 16);
      for (let i = 0; i < 4; i++) {
        const photonMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
        const photon = new THREE.Mesh(photonGeo, photonMat);
        mainGroup.add(photon);
        photonRays.push(photon);
        disposables.push(photonMat);
      }
      disposables.push(photonGeo);
    }

    // Mouse Parallax & Orbit Interaction
    let targetX = 0;
    let targetY = 0;
    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / width - 0.5;
      const y = (e.clientY - rect.top) / height - 0.5;
      targetX = x * 1.8;
      targetY = y * 1.8;
    };
    container.addEventListener('mousemove', handleMouseMove);

    // Animation Loop
    let animId;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth camera / group rotation based on cursor
      mainGroup.rotation.y += (targetX * 0.8 - mainGroup.rotation.y) * 0.05;
      mainGroup.rotation.x += (-targetY * 0.6 - mainGroup.rotation.x) * 0.05;

      particles.rotation.y = elapsedTime * 0.05;

      // Mode 1: Animate floating 3D spheres
      if (activeMode === 'spheres') {
        sphereMeshes.forEach((mesh) => {
          mesh.rotation.y = elapsedTime * 0.3;
          mesh.position.y = mesh.userData.origY + Math.sin(elapsedTime * mesh.userData.speed + mesh.userData.phase) * 0.12;
          mesh.position.x = mesh.userData.origX + Math.cos(elapsedTime * 0.4 + mesh.userData.phase) * 0.08;
        });
      }

      // Mode 2: Animate 3D architecture stack & traveling photons
      if (activeMode === 'stack') {
        stackSlabs.forEach((slab, i) => {
          slab.position.y = (1.1 - i * 1.1) + Math.sin(elapsedTime * 1.8 + i) * 0.06;
        });

        photonRays.forEach((photon, i) => {
          const t = (elapsedTime * 2.2 + i * 0.7) % 3.0;
          photon.position.set(
            Math.sin(i * 1.5) * 1.1,
            1.1 - t,
            Math.cos(i * 1.5) * 0.6
          );
        });
      }

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth;
      height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousemove', handleMouseMove);
      renderer.dispose();
      disposables.forEach((d) => d && d.dispose && d.dispose());
      particleGeo.dispose();
      particleMat.dispose();
    };
  }, [activeMode, theme]);

  const handleCopy = () => {
    const info = `const engineer = {
  name: "Sai Manikanta",
  role: "Systems & Software Engineer",
  education: "B.Tech CSE '26",
  focus: ["Distributed Systems", "Concurrency", "Full-Stack"],
  dsa: "450+ Solved • Top 4.8%",
  status: "Open to Internships '26"
};`;
    navigator.clipboard.writeText(info);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative w-full max-w-[480px] rounded-3xl bg-theme-card/95 border border-theme-border/90 shadow-2xl backdrop-blur-2xl overflow-hidden font-mono select-none flex flex-col group">
      {/* Ambient Neon Atmosphere Glow */}
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-theme-accent/25 via-cyan-500/20 to-indigo-500/25 blur-xl opacity-70 group-hover:opacity-100 transition duration-700 pointer-events-none" />

      {/* Terminal Bar Header */}
      <div className="relative z-10 flex items-center justify-between px-4 py-3 bg-theme-surface/90 border-b border-theme-border/80">
        {/* macOS Window Dots */}
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#FF5F56] shadow-sm inline-block" />
          <span className="w-3 h-3 rounded-full bg-[#FFBD2E] shadow-sm inline-block" />
          <span className="w-3 h-3 rounded-full bg-[#27C93F] shadow-sm inline-block" />
        </div>

        {/* 3D Mode Switcher Tabs */}
        <div className="flex items-center gap-1 bg-theme-card/90 p-1 rounded-xl border border-theme-border/80">
          <button
            onClick={() => setActiveMode('spheres')}
            className={`px-3 py-1 rounded-lg text-[11px] font-semibold flex items-center gap-1.5 transition-all ${
              activeMode === 'spheres'
                ? 'bg-portfolio-rose/20 text-portfolio-rose shadow-sm'
                : 'text-theme-muted hover:text-theme-text'
            }`}
          >
            <Globe2 className="w-3 h-3" />
            <span>3D Tech Orbs</span>
          </button>

          <button
            onClick={() => setActiveMode('stack')}
            className={`px-3 py-1 rounded-lg text-[11px] font-semibold flex items-center gap-1.5 transition-all ${
              activeMode === 'stack'
                ? 'bg-portfolio-rose/20 text-portfolio-rose shadow-sm'
                : 'text-theme-muted hover:text-theme-text'
            }`}
          >
            <Boxes className="w-3 h-3" />
            <span>3D Systems Stack</span>
          </button>
        </div>

        {/* Copy Quick Config */}
        <button
          onClick={handleCopy}
          className="p-1.5 rounded-lg text-theme-muted hover:text-theme-text hover:bg-theme-surfaceHover transition-colors"
          title="Copy engineer config"
          aria-label="Copy config"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
        </button>
      </div>

      {/* Interactive 3D WebGL Canvas Stage */}
      <div className="relative z-10 h-[300px] sm:h-[325px] w-full overflow-hidden bg-gradient-to-b from-theme-surface/50 via-theme-card to-theme-surface/80 flex items-center justify-center">
        {/* Three.js Canvas Container */}
        <div ref={mountRef} className="absolute inset-0 cursor-grab active:cursor-grabbing" />

        {/* Mode 1: 3D Tech Orbs Orbiting HUD Overlays */}
        {activeMode === 'spheres' && (
          <>
            <div className="absolute top-3 left-3 pointer-events-none animate-float-slow">
              <div className="px-2.5 py-1 rounded-xl bg-theme-card/90 border border-cyan-400/30 text-cyan-300 text-[10px] font-mono shadow-lg backdrop-blur-md flex items-center gap-1.5">
                <Cpu className="w-3 h-3 text-cyan-400" />
                <span>3D Kinetic Physics Orbit</span>
              </div>
            </div>

            <div className="absolute top-3 right-3 pointer-events-none animate-float-slow delay-150">
              <div className="px-2.5 py-1 rounded-xl bg-theme-card/90 border border-emerald-400/30 text-emerald-300 text-[10px] font-mono shadow-lg backdrop-blur-md flex items-center gap-1.5">
                <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                <span>Interactive Cursor Parallax</span>
              </div>
            </div>

            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[10px] text-theme-muted/70 tracking-wider pointer-events-none">
              Rotate 3D Tech Galaxy with Cursor
            </div>
          </>
        )}

        {/* Mode 2: 3D Systems Architecture Stack Overlays */}
        {activeMode === 'stack' && (
          <>
            <div className="absolute top-3 left-3 pointer-events-none animate-float-slow">
              <div className="px-2.5 py-1 rounded-xl bg-theme-card/90 border border-cyan-400/30 text-cyan-300 text-[10px] font-mono shadow-lg backdrop-blur-md flex items-center gap-1.5">
                <Boxes className="w-3 h-3 text-cyan-400" />
                <span>3D Multi-Tier Distributed Stack</span>
              </div>
            </div>

            <div className="absolute top-3 right-3 pointer-events-none animate-float-slow delay-150">
              <div className="px-2.5 py-1 rounded-xl bg-theme-card/90 border border-emerald-400/30 text-emerald-300 text-[10px] font-mono shadow-lg backdrop-blur-md flex items-center gap-1.5">
                <Zap className="w-3 h-3 text-emerald-400" />
                <span>Traveling Photon Bus</span>
              </div>
            </div>

            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[10px] text-theme-muted/70 tracking-wider pointer-events-none">
              Interactive 3D Layered Isometric View
            </div>
          </>
        )}
      </div>

      {/* Bottom Telemetry Bar */}
      <div className="relative z-10 px-4 py-2.5 bg-theme-surface/90 border-t border-theme-border/80 flex items-center justify-between text-[11px] text-theme-muted">
        <div className="flex items-center gap-2">
          <Activity className="w-3.5 h-3.5 text-portfolio-rose animate-pulse" />
          <span className="text-theme-text font-semibold">p99 Latency:</span>
          <span className="text-emerald-400 font-mono font-bold">&lt; 0.38ms</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-theme-text font-semibold">Engine:</span>
          <span className="text-theme-muted">Three.js 3D WebGL</span>
        </div>
      </div>
    </div>
  );
}
