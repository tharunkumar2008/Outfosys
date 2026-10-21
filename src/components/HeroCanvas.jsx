import React, { useEffect, useRef } from 'react';

export default function HeroCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = canvas.parentElement.offsetWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight);

    // Mouse coordinates for subtle interactive parallax
    let mouse = { x: width / 2, y: height / 2, targetX: width / 2, targetY: height / 2 };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Creative particles inspired by generative neural visuals
    const particleCount = prefersReducedMotion ? 25 : 55;
    const particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2.5 + 1,
        color: Math.random() > 0.4 ? '#B7F34A' : '#8A42FF',
        alpha: Math.random() * 0.5 + 0.2,
        speedX: (Math.random() - 0.5) * 0.6,
        speedY: (Math.random() - 0.5) * 0.6,
        pulseSpeed: Math.random() * 0.02 + 0.01,
        pulseOffset: Math.random() * Math.PI * 2
      });
    }

    let time = 0;

    const render = () => {
      time += 0.012;

      // Smooth mouse lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // Deep Purple Ambient Radial Light Centers
      const grad1 = ctx.createRadialGradient(
        width * 0.7 + (mouse.x - width / 2) * 0.15,
        height * 0.45 + (mouse.y - height / 2) * 0.15,
        50,
        width * 0.7,
        height * 0.45,
        Math.max(width, height) * 0.6
      );
      grad1.addColorStop(0, 'rgba(60, 34, 99, 0.45)');
      grad1.addColorStop(0.5, 'rgba(36, 20, 61, 0.25)');
      grad1.addColorStop(1, 'rgba(16, 13, 24, 0)');
      ctx.fillStyle = grad1;
      ctx.fillRect(0, 0, width, height);

      // Neon Lime Soft Accent Ambient Glow
      const gradLime = ctx.createRadialGradient(
        width * 0.78 + (mouse.x - width / 2) * 0.08,
        height * 0.42 + (mouse.y - height / 2) * 0.08,
        10,
        width * 0.78,
        height * 0.42,
        280
      );
      gradLime.addColorStop(0, 'rgba(183, 243, 74, 0.18)');
      gradLime.addColorStop(0.6, 'rgba(183, 243, 74, 0.03)');
      gradLime.addColorStop(1, 'rgba(16, 13, 24, 0)');
      ctx.fillStyle = gradLime;
      ctx.fillRect(0, 0, width, height);

      // Draw OutfoSys Abstract Logo-Inspired Orbitals & Smooth Geometry
      const centerX = width * 0.72 + (mouse.x - width / 2) * 0.05;
      const centerY = height * 0.46 + (mouse.y - height / 2) * 0.05;
      const baseRadius = Math.min(width, height) * 0.28;

      ctx.save();
      ctx.translate(centerX, centerY);

      // Orbital Ring 1: Neon Lime Rotating Ellipse
      ctx.save();
      ctx.rotate(time * 0.35);
      ctx.beginPath();
      ctx.ellipse(0, 0, baseRadius * 1.1, baseRadius * 0.48, time * 0.2, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(183, 243, 74, 0.65)';
      ctx.lineWidth = 2.5;
      ctx.shadowColor = '#B7F34A';
      ctx.shadowBlur = 18;
      ctx.stroke();

      // Lime orbital node
      const nodeX = Math.cos(time * 1.5) * (baseRadius * 1.1);
      const nodeY = Math.sin(time * 1.5) * (baseRadius * 0.48);
      ctx.beginPath();
      ctx.arc(nodeX, nodeY, 5, 0, Math.PI * 2);
      ctx.fillStyle = '#B7F34A';
      ctx.shadowColor = '#B7F34A';
      ctx.shadowBlur = 12;
      ctx.fill();
      ctx.restore();

      // Orbital Ring 2: Purple / Violet Intersecting Dynamic Torus
      ctx.save();
      ctx.rotate(-time * 0.25 + 0.8);
      ctx.beginPath();
      ctx.ellipse(0, 0, baseRadius * 0.95, baseRadius * 0.65, -0.6, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(138, 66, 255, 0.55)';
      ctx.lineWidth = 2;
      ctx.shadowColor = '#8A42FF';
      ctx.shadowBlur = 22;
      ctx.stroke();
      ctx.restore();

      // Orbital Ring 3: Delicate Dotted Wave
      ctx.save();
      ctx.rotate(time * 0.15 + 1.6);
      ctx.beginPath();
      ctx.setLineDash([4, 12]);
      ctx.arc(0, 0, baseRadius * 1.25, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(183, 243, 74, 0.35)';
      ctx.lineWidth = 1.5;
      ctx.stroke();
      ctx.restore();

      // Central glowing core representing technological precision
      ctx.beginPath();
      ctx.arc(0, 0, baseRadius * 0.14, 0, Math.PI * 2);
      const coreGrad = ctx.createRadialGradient(0, 0, 2, 0, 0, baseRadius * 0.14);
      coreGrad.addColorStop(0, '#FFFFFF');
      coreGrad.addColorStop(0.3, '#B7F34A');
      coreGrad.addColorStop(0.7, 'rgba(138, 66, 255, 0.8)');
      coreGrad.addColorStop(1, 'transparent');
      ctx.fillStyle = coreGrad;
      ctx.shadowColor = '#B7F34A';
      ctx.shadowBlur = 25;
      ctx.fill();

      ctx.restore();

      // Render Floating Neural Particles
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        const pulse = Math.sin(time * 2 + p.pulseOffset) * 0.2;
        const currentAlpha = Math.max(0.1, p.alpha + pulse);

        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color === '#B7F34A' ? `rgba(183, 243, 74, ${currentAlpha})` : `rgba(138, 66, 255, ${currentAlpha})`;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.restore();
      });

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="hero-canvas-wrapper" aria-hidden="true">
      <canvas ref={canvasRef} className="hero-interactive-canvas" />
    </div>
  );
}
