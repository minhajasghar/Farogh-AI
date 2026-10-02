import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const NeuralGridCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene setup
    const scene = new THREE.Scene();

    // Camera setup
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.set(0, 5, 22);
    camera.lookAt(0, 0, 0);

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Create Neural Grid Mesh (Landscape Wireframe Grid)
    const gridWidth = 60;
    const gridDepth = 60;
    const gridSegments = 45;
    const geometry = new THREE.PlaneGeometry(gridWidth, gridDepth, gridSegments, gridSegments);
    geometry.rotateX(-Math.PI / 2.3);

    // Initial position manipulation for wave terrain
    const posAttribute = geometry.attributes.position;
    const originalY: number[] = [];
    for (let i = 0; i < posAttribute.count; i++) {
      const x = posAttribute.getX(i);
      const z = posAttribute.getZ(i);
      const y = Math.sin(x * 0.2) * Math.cos(z * 0.2) * 0.8;
      posAttribute.setY(i, y);
      originalY.push(y);
    }
    geometry.computeVertexNormals();

    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0x2563eb,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    });

    const gridMesh = new THREE.Mesh(geometry, wireframeMaterial);
    gridMesh.position.y = -4;
    scene.add(gridMesh);

    // Particle nodes floating above the grid
    const particleCount = 120;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleSpeeds: { x: number; y: number; z: number }[] = [];

    for (let i = 0; i < particleCount; i++) {
      const px = (Math.random() - 0.5) * 40;
      const py = (Math.random() - 0.5) * 15;
      const pz = (Math.random() - 0.5) * 30;

      particlePositions[i * 3] = px;
      particlePositions[i * 3 + 1] = py;
      particlePositions[i * 3 + 2] = pz;

      particleSpeeds.push({
        x: (Math.random() - 0.5) * 0.015,
        y: (Math.random() - 0.5) * 0.015,
        z: (Math.random() - 0.5) * 0.015,
      });
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    // Glow dot texture for particles
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const grad = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
      grad.addColorStop(0, 'rgba(59, 130, 246, 1)');
      grad.addColorStop(0.4, 'rgba(37, 99, 235, 0.6)');
      grad.addColorStop(1, 'rgba(37, 99, 235, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 32, 32);
    }
    const texture = new THREE.CanvasTexture(canvas);

    const particleMat = new THREE.PointsMaterial({
      size: 0.6,
      map: texture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Lines connecting nearby particles
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x3b82f6,
      transparent: true,
      opacity: 0.15,
    });

    const lineGeometry = new THREE.BufferGeometry();
    const linePositions = new Float32Array(particleCount * particleCount * 6);
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    const linesMesh = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(linesMesh);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      targetMouseX = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      targetMouseY = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse damping
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      // Subtle camera tilt with mouse
      camera.position.x = mouseX * 3;
      camera.position.y = 5 - mouseY * 2;
      camera.lookAt(0, 0, 0);

      // Grid mesh wave animation
      const pos = geometry.attributes.position;
      for (let i = 0; i < pos.count; i++) {
        const u = pos.getX(i);
        const v = pos.getZ(i);
        const origY = originalY[i];
        const newY = origY + Math.sin(elapsedTime * 1.5 + u * 0.3 + v * 0.3) * 0.3;
        pos.setY(i, newY);
      }
      pos.needsUpdate = true;
      gridMesh.rotation.z = Math.sin(elapsedTime * 0.2) * 0.02 + mouseX * 0.03;

      // Update particle positions
      const pPositions = particleGeo.attributes.position.array as Float32Array;
      let vertexIdx = 0;

      for (let i = 0; i < particleCount; i++) {
        const speed = particleSpeeds[i];
        pPositions[i * 3] += speed.x;
        pPositions[i * 3 + 1] += speed.y;
        pPositions[i * 3 + 2] += speed.z;

        // Boundary bounce
        if (Math.abs(pPositions[i * 3]) > 20) speed.x *= -1;
        if (Math.abs(pPositions[i * 3 + 1]) > 8) speed.y *= -1;
        if (Math.abs(pPositions[i * 3 + 2]) > 15) speed.z *= -1;

        // Connect lines between close nodes
        for (let j = i + 1; j < particleCount; j++) {
          const dx = pPositions[i * 3] - pPositions[j * 3];
          const dy = pPositions[i * 3 + 1] - pPositions[j * 3 + 1];
          const dz = pPositions[i * 3 + 2] - pPositions[j * 3 + 2];
          const distSq = dx * dx + dy * dy + dz * dz;

          if (distSq < 25) {
            linePositions[vertexIdx++] = pPositions[i * 3];
            linePositions[vertexIdx++] = pPositions[i * 3 + 1];
            linePositions[vertexIdx++] = pPositions[i * 3 + 2];

            linePositions[vertexIdx++] = pPositions[j * 3];
            linePositions[vertexIdx++] = pPositions[j * 3 + 1];
            linePositions[vertexIdx++] = pPositions[j * 3 + 2];
          }
        }
      }

      particleGeo.attributes.position.needsUpdate = true;
      lineGeometry.setDrawRange(0, vertexIdx / 3);
      lineGeometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      wireframeMaterial.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      texture.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {/* Three.js interactive canvas container */}
      <div ref={containerRef} className="w-full h-full absolute inset-0 opacity-75" />

      {/* Radial cobalt gradient overlay specified in requirements */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 20%, rgba(37, 99, 235, 0.15) 0%, transparent 60%)',
        }}
      />
    </div>
  );
};
