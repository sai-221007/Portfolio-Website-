import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useTheme } from '../context/ThemeContext';

export default function HeroNameBadge3D() {
  const mountRef = useRef(null);
  const { currentThemeConfig } = useTheme();

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 56;
    const height = container.clientHeight || 56;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 3.8);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // Accent color from theme
    const themeColor = currentThemeConfig?.accentColor || '#38BDF8';
    const threeColor = new THREE.Color(themeColor);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(threeColor, 3.5, 10);
    pointLight.position.set(2, 2, 3);
    scene.add(pointLight);

    const group = new THREE.Group();
    scene.add(group);

    // 3D Core Octahedron Geometry
    const gemGeo = new THREE.OctahedronGeometry(1.05, 0);
    const gemMat = new THREE.MeshPhysicalMaterial({
      color: 0x111827,
      roughness: 0.15,
      metalness: 0.85,
      transmission: 0.35,
      transparent: true,
      opacity: 0.95,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      emissive: threeColor,
      emissiveIntensity: 0.3,
    });
    const gem = new THREE.Mesh(gemGeo, gemMat);
    group.add(gem);

    // Glowing Neon Wireframe Edges
    const edgesGeo = new THREE.EdgesGeometry(gemGeo);
    const edgesMat = new THREE.LineBasicMaterial({
      color: threeColor,
      linewidth: 2,
    });
    const wireframe = new THREE.LineSegments(edgesGeo, edgesMat);
    gem.add(wireframe);

    // Orbiting 3D Ring
    const ringGeo = new THREE.TorusGeometry(1.4, 0.04, 16, 64);
    const ringMat = new THREE.MeshStandardMaterial({
      color: 0x67e8f9,
      emissive: 0x06b6d4,
      emissiveIntensity: 0.6,
      roughness: 0.2,
      metalness: 0.8,
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 3;
    group.add(ring);

    // Mouse tilt interaction
    let isHovered = false;
    let targetSpeed = 1.0;
    const handleMouseEnter = () => {
      isHovered = true;
      targetSpeed = 3.5;
    };
    const handleMouseLeave = () => {
      isHovered = false;
      targetSpeed = 1.0;
    };

    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    let animId;
    let currentSpeed = 1.0;

    const animate = () => {
      animId = requestAnimationFrame(animate);

      currentSpeed += (targetSpeed - currentSpeed) * 0.08;

      group.rotation.y += 0.018 * currentSpeed;
      group.rotation.x += 0.012 * currentSpeed;
      ring.rotation.z -= 0.02 * currentSpeed;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
      renderer.dispose();
      gemGeo.dispose();
      gemMat.dispose();
      edgesGeo.dispose();
      edgesMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
    };
  }, [currentThemeConfig]);

  return (
    <div
      ref={mountRef}
      className="w-full h-full flex items-center justify-center cursor-pointer"
      title="Interactive 3D Systems Core"
    />
  );
}
