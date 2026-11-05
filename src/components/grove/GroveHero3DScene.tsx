"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Loader2, RotateCcw, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function GroveHero3DScene() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeNodeName, setActiveNodeName] = useState<string>("High-Availability Core");
  const [activeNodeMetric, setActiveNodeMetric] = useState<string>("SLA 99.98% • Latency < 15ms");

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.background = null; // Transparent to blend seamlessly with Warm Oat background

    const width = container.clientWidth;
    const height = container.clientHeight;

    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 1000);
    camera.position.set(0, 2.2, 5.8);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // 2. Lighting Setup (Editorial Studio Lighting)
    const ambientLight = new THREE.AmbientLight(0xf4f1ea, 1.4);
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0xffffff, 2.8);
    mainLight.position.set(5, 8, 6);
    mainLight.castShadow = true;
    mainLight.shadow.mapSize.width = 1024;
    mainLight.shadow.mapSize.height = 1024;
    mainLight.shadow.bias = -0.0005;
    scene.add(mainLight);

    const rimLight = new THREE.DirectionalLight(0xd15b3a, 1.8); // Terracotta accent rim
    rimLight.position.set(-6, -2, -4);
    scene.add(rimLight);

    const pointEmerald = new THREE.PointLight(0x10b981, 2.5, 12); // Emerald data pulse
    pointEmerald.position.set(0, 0, 1.5);
    scene.add(pointEmerald);

    // 3. Materials
    const deepForestMat = new THREE.MeshStandardMaterial({
      color: 0x18362b, // Forest Green
      roughness: 0.25,
      metalness: 0.35,
    });

    const warmSandMat = new THREE.MeshStandardMaterial({
      color: 0xded7c8, // Warm Sand / Oat
      roughness: 0.4,
      metalness: 0.1,
    });

    const terracottaMat = new THREE.MeshStandardMaterial({
      color: 0xd15b3a, // Terracotta Accent
      roughness: 0.3,
      metalness: 0.2,
      emissive: 0xd15b3a,
      emissiveIntensity: 0.15,
    });

    const glassMat = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      transmission: 0.7,
      opacity: 0.85,
      transparent: true,
      roughness: 0.1,
      ior: 1.45,
      thickness: 0.8,
    });

    // 4. Main Architectural Core Group
    const coreRoot = new THREE.Group();
    scene.add(coreRoot);

    // Central Monolith Pillar (Decoupled Server Core)
    const monolithGeom = new THREE.BoxGeometry(0.9, 1.6, 0.9);
    const monolith = new THREE.Mesh(monolithGeom, deepForestMat);
    monolith.castShadow = true;
    monolith.receiveShadow = true;
    coreRoot.add(monolith);

    // Inner glowing core slice
    const innerGeom = new THREE.BoxGeometry(0.78, 0.08, 0.78);
    const innerSlice = new THREE.Mesh(
      innerGeom,
      new THREE.MeshStandardMaterial({
        color: 0x10b981,
        emissive: 0x10b981,
        emissiveIntensity: 1.2,
        roughness: 0.1,
      })
    );
    innerSlice.position.y = 0.1;
    coreRoot.add(innerSlice);

    // Top & Bottom floating plates
    const plateGeom = new THREE.BoxGeometry(1.2, 0.08, 1.2);
    const topPlate = new THREE.Mesh(plateGeom, warmSandMat);
    topPlate.position.y = 0.95;
    topPlate.castShadow = true;
    coreRoot.add(topPlate);

    const bottomPlate = new THREE.Mesh(plateGeom, warmSandMat);
    bottomPlate.position.y = -0.95;
    bottomPlate.receiveShadow = true;
    coreRoot.add(bottomPlate);

    // 5. Orbital Rings (Data Bus)
    const ringGeom = new THREE.TorusGeometry(1.6, 0.02, 16, 80);
    const ring1 = new THREE.Mesh(ringGeom, terracottaMat);
    ring1.rotation.x = Math.PI / 3;
    ring1.rotation.y = Math.PI / 6;
    coreRoot.add(ring1);

    const ring2 = new THREE.Mesh(ringGeom, glassMat);
    ring2.rotation.x = -Math.PI / 4;
    ring2.rotation.y = -Math.PI / 4;
    coreRoot.add(ring2);

    // 6. Satellite Modules (4 Systems: SIAKAD, PDF Worker, Omnichannel, WA API)
    const satelliteConfigs = [
      {
        name: "SIAKAD Decoupled Engine",
        metric: "99.98% Anti-Down SLA",
        pos: [-1.8, 0.6, 0.3],
        color: 0x18362b,
        scale: 0.36,
      },
      {
        name: "Parallel PDF Worker",
        metric: "500+ Docs / <45s Queue",
        pos: [1.7, -0.5, 0.4],
        color: 0xd15b3a,
        scale: 0.32,
      },
      {
        name: "Atomic Stock Hub",
        metric: "< 150ms Sync Latency",
        pos: [-1.4, -0.8, -0.6],
        color: 0x10b981,
        scale: 0.28,
      },
      {
        name: "Meta WA Gateway",
        metric: "< 2s Auto-Retry Dispatch",
        pos: [1.5, 0.9, -0.5],
        color: 0xded7c8,
        scale: 0.3,
      },
    ];

    const satellites: {
      mesh: THREE.Mesh;
      initialPos: THREE.Vector3;
      speed: number;
      name: string;
      metric: string;
    }[] = [];

    satelliteConfigs.forEach((cfg, idx) => {
      const satGeom = new THREE.BoxGeometry(cfg.scale, cfg.scale, cfg.scale);
      const satMat = new THREE.MeshStandardMaterial({
        color: cfg.color,
        roughness: 0.2,
        metalness: 0.4,
      });
      const satMesh = new THREE.Mesh(satGeom, satMat);
      satMesh.position.set(cfg.pos[0], cfg.pos[1], cfg.pos[2]);
      satMesh.castShadow = true;
      satMesh.receiveShadow = true;
      coreRoot.add(satMesh);

      satellites.push({
        mesh: satMesh,
        initialPos: new THREE.Vector3(...cfg.pos),
        speed: 0.8 + idx * 0.2,
        name: cfg.name,
        metric: cfg.metric,
      });
    });

    // 7. Ambient Data Particle Cloud (Floating Light Packets)
    const particleCount = 70;
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 5.5;
      particlePositions[i + 1] = (Math.random() - 0.5) * 4.5;
      particlePositions[i + 2] = (Math.random() - 0.5) * 4;
    }

    const particleGeom = new THREE.BufferGeometry();
    particleGeom.setAttribute("position", new THREE.Float32BufferAttribute(particlePositions, 3));

    const particleMat = new THREE.PointsMaterial({
      color: 0x18362b,
      size: 0.045,
      transparent: true,
      opacity: 0.45,
    });

    const particles = new THREE.Points(particleGeom, particleMat);
    coreRoot.add(particles);

    // 8. Ground Shadow Plane (Soft architectural ambient contact)
    const planeGeom = new THREE.PlaneGeometry(6, 6);
    const planeMat = new THREE.ShadowMaterial({ opacity: 0.14 });
    const groundPlane = new THREE.Mesh(planeGeom, planeMat);
    groundPlane.rotation.x = -Math.PI / 2;
    groundPlane.position.y = -1.8;
    groundPlane.receiveShadow = true;
    scene.add(groundPlane);

    // 9. Interactive Drag & Mouse Physics Tracking
    let targetRotationX = 0.2;
    let targetRotationY = -0.4;
    let currentRotationX = 0.2;
    let currentRotationY = -0.4;

    let isDragging = false;
    let previousPointerX = 0;
    let previousPointerY = 0;

    const handlePointerDown = (e: PointerEvent) => {
      isDragging = true;
      previousPointerX = e.clientX;
      previousPointerY = e.clientY;
    };

    const handlePointerMove = (e: PointerEvent) => {
      if (isDragging) {
        const deltaX = e.clientX - previousPointerX;
        const deltaY = e.clientY - previousPointerY;
        targetRotationY += deltaX * 0.008;
        targetRotationX += deltaY * 0.008;
        previousPointerX = e.clientX;
        previousPointerY = e.clientY;
      } else {
        // Subtle Parallax when hovering without drag
        const rect = container.getBoundingClientRect();
        const normX = (e.clientX - rect.left) / rect.width - 0.5;
        const normY = (e.clientY - rect.top) / rect.height - 0.5;
        targetRotationY = normX * 0.8;
        targetRotationX = 0.2 + normY * 0.6;
      }
    };

    const handlePointerUp = () => {
      isDragging = false;
    };

    container.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);

    // 10. Resize Observer
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    const resizeObserver = new ResizeObserver(() => handleResize());
    resizeObserver.observe(container);

    // 11. Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Smooth Lerp Physics Rotation
      currentRotationX += (targetRotationX - currentRotationX) * 0.06;
      currentRotationY += (targetRotationY - currentRotationY) * 0.06;

      // Base idle continuous drift
      if (!isDragging) {
        coreRoot.rotation.y = currentRotationY + elapsedTime * 0.12;
        coreRoot.rotation.x = currentRotationX;
      } else {
        coreRoot.rotation.y = currentRotationY;
        coreRoot.rotation.x = currentRotationX;
      }

      // Orbital Rings Rotation
      ring1.rotation.z = elapsedTime * 0.35;
      ring2.rotation.z = -elapsedTime * 0.25;

      // Inner Pulse Breathing
      const pulse = 1.0 + Math.sin(elapsedTime * 3) * 0.4;
      innerSlice.scale.set(1 + pulse * 0.05, 1, 1 + pulse * 0.05);
      pointEmerald.intensity = 2.0 + Math.sin(elapsedTime * 3) * 0.8;

      // Satellites Floating Orbit
      satellites.forEach((sat, i) => {
        const offset = (i * Math.PI) / 2;
        sat.mesh.position.y =
          sat.initialPos.y + Math.sin(elapsedTime * sat.speed + offset) * 0.18;
        sat.mesh.rotation.x = elapsedTime * 0.4;
        sat.mesh.rotation.y = elapsedTime * 0.5;
      });

      // Ambient Particles Slow Float
      particles.rotation.y = elapsedTime * 0.04;

      renderer.render(scene, camera);
    };

    animate();
    setIsLoaded(true);

    // 12. Cleanup on Unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
      resizeObserver.disconnect();

      renderer.dispose();
      monolithGeom.dispose();
      innerGeom.dispose();
      plateGeom.dispose();
      ringGeom.dispose();
      particleGeom.dispose();
      planeGeom.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[4/3] sm:aspect-[5/4] lg:aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-b from-[#EDE8DB] to-[#E3DDD0] border border-[#DDD7C9] shadow-lg select-none cursor-grab active:cursor-grabbing group"
    >
      {/* Three.js Canvas */}
      <canvas ref={canvasRef} className="w-full h-full block" />

      {/* Loading Skeleton Indicator */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#EAE5D9]/80 backdrop-blur-sm">
          <div className="flex items-center gap-2 text-xs font-mono text-[#18362B] font-semibold">
            <Loader2 className="h-4 w-4 animate-spin text-[#D15B3A]" />
            <span>{t.hero3D.loading}</span>
          </div>
        </div>
      )}

      {/* TOP FLOATING HUD BADGE: Live System Architecture State */}
      <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
        <div className="bg-[#18362B]/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-white shadow-md flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <div className="flex flex-col">
            <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-300 font-bold">
              {t.hero3D.badgeTitle}
            </span>
            <span className="text-[9px] text-white/70 font-mono">
              {t.hero3D.badgeSub}
            </span>
          </div>
        </div>

        <div className="bg-[#FAF7F0]/85 backdrop-blur-md px-2.5 py-1 rounded-md border border-[#DDD7C9] text-[10px] font-mono text-[#18362B] font-semibold hidden sm:flex items-center gap-1 shadow-sm">
          <Sparkles className="h-3 w-3 text-[#D15B3A]" />
          <span>{t.hero3D.interactiveBadge}</span>
        </div>
      </div>

      {/* BOTTOM FLOATING CONTROLS & HUD */}
      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none">
        {/* Node Telemetry Card */}
        <div className="bg-[#FAF7F0]/90 backdrop-blur-md border border-[#DDD7C9] px-3 py-1.5 rounded-lg shadow-sm">
          <div className="text-[9px] font-mono uppercase tracking-wider text-[#D15B3A] font-bold">
            {t.hero3D.nodeMonitor}
          </div>
          <div className="text-xs font-bold text-[#18362B]">
            {activeNodeName}
          </div>
          <div className="text-[10px] text-[#717872] font-mono">
            {activeNodeMetric}
          </div>
        </div>

        {/* Interaction Hint */}
        <div className="bg-[#18362B]/85 backdrop-blur-sm text-emerald-100 px-3 py-1.5 rounded-full text-[10px] font-medium border border-white/10 flex items-center gap-1.5 shadow-sm opacity-90 group-hover:opacity-100 transition-opacity">
          <RotateCcw className="h-3 w-3 text-emerald-400 animate-spin-slow" />
          <span className="hidden sm:inline">{t.hero3D.hint}</span>
          <span className="sm:hidden">{t.hero3D.hintShort}</span>
        </div>
      </div>
    </div>
  );
}
