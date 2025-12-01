
import React, { useEffect, useRef } from 'react';
import { DeviceType } from '../constants';

interface SpaceBackgroundProps {
  activeDevice: DeviceType;
}

const SpaceBackground: React.FC<SpaceBackgroundProps> = ({ activeDevice }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Map device to ambient color
  const getAmbientColor = (device: DeviceType) => {
    switch (device) {
      case DeviceType.IPHONE: return 'rgba(59, 130, 246, 0.15)'; // Blue
      case DeviceType.IPAD: return 'rgba(236, 72, 153, 0.15)';   // Pink
      case DeviceType.WATCH: return 'rgba(249, 115, 22, 0.15)';  // Orange
      case DeviceType.MACBOOK: return 'rgba(99, 102, 241, 0.15)'; // Indigo
      default: return 'rgba(255, 255, 255, 0.05)';
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: { x: number; y: number; size: number; speedX: number; speedY: number; opacity: number }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const particleCount = Math.floor((window.innerWidth * window.innerHeight) / 10000); // More stars
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5 + 0.2, // Smaller, sharper stars
          speedX: (Math.random() - 0.5) * 0.05, // Slower, more majestic
          speedY: (Math.random() - 0.5) * 0.05,
          opacity: Math.random() * 0.8 + 0.1
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Deep space gradient background
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, canvas.width
      );
      gradient.addColorStop(0, '#0f1014');
      gradient.addColorStop(1, '#000000');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Stars
      ctx.fillStyle = 'white';
      particles.forEach((p) => {
        ctx.globalAlpha = p.opacity;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
      });
      ctx.globalAlpha = 1;

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resize);
    resize();
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
        <canvas ref={canvasRef} className="fixed inset-0 -z-20 pointer-events-none" />
        {/* Dynamic Ambient Glow Blob */}
        <div 
            className="fixed inset-0 -z-10 transition-colors duration-1000 ease-in-out pointer-events-none"
            style={{
                background: `radial-gradient(circle at 50% 50%, ${getAmbientColor(activeDevice)}, transparent 70%)`
            }}
        />
    </>
  );
};

export default SpaceBackground;
