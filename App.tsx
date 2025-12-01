
import React, { useState, useEffect } from 'react';
import SpaceBackground from './components/SpaceBackground';
import GlassDock from './components/GlassDock';
import IPhoneView from './components/devices/IPhoneView';
import IPadView from './components/devices/IPadView';
import MacBookView from './components/devices/MacBookView';
import WatchView from './components/devices/WatchView';
import { DeviceType, PROFILE } from './constants';
import { ChevronDown } from 'lucide-react';

// Types
interface DeviceConfig {
  id: DeviceType;
  component: React.ReactNode;
  width: string;
  height: string;
}

const App: React.FC = () => {
  const [activeDevice, setActiveDevice] = useState<DeviceType>(DeviceType.MACBOOK);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const devices: DeviceConfig[] = [
    { 
      id: DeviceType.MACBOOK, 
      component: <MacBookView />,
      width: 'w-[95vw] md:w-[900px]', // Wider on mobile for better aspect ratio
      height: 'h-[40vh] md:h-[600px]'
    },
    { 
      id: DeviceType.IPHONE, 
      component: <IPhoneView />,
      width: 'w-[300px] sm:w-[360px]',
      height: 'h-[600px] sm:h-[720px]'
    },
    { 
      id: DeviceType.IPAD, 
      component: <IPadView />,
      width: 'w-[90vw] sm:w-[800px]',
      height: 'h-[50vh] sm:h-[600px]'
    },
    { 
      id: DeviceType.WATCH, 
      component: <WatchView />,
      width: 'w-[260px] sm:w-[300px]',
      height: 'h-[310px] sm:h-[350px]'
    },
  ];

  // Handle Mouse Move for Parallax
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize coordinates from -1 to 1
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Refined Orbital Logic with Viewport Units for Symmetry
  const getPositionStyles = (deviceId: DeviceType) => {
    const activeIndex = devices.findIndex(d => d.id === activeDevice);
    const currentIndex = devices.findIndex(d => d.id === deviceId);
    
    // Calculate offset in circular buffer (0 = active, 1 = right, 2 = back, 3 = left)
    const offset = (currentIndex - activeIndex + devices.length) % devices.length;

    const baseStyles: React.CSSProperties = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transition: 'all 0.8s cubic-bezier(0.25, 0.8, 0.25, 1)', // Smooth orbit transition
    };

    // Active (Center)
    if (offset === 0) {
      // 3D Tilt Logic
      const tiltX = -mousePos.y * 5; // Rotate X axis based on Y mouse pos
      const tiltY = mousePos.x * 5;  // Rotate Y axis based on X mouse pos

      return {
        ...baseStyles,
        transform: `
          translate(-50%, -50%) 
          perspective(1000px) 
          rotateX(${tiltX}deg) 
          rotateY(${tiltY}deg) 
          scale(1)
        `,
        zIndex: 50,
        opacity: 1,
        filter: 'blur(0px)',
        pointerEvents: 'auto' as const,
      };
    }
    
    // Right Satellite
    if (offset === 1) {
      return {
        ...baseStyles,
        transform: 'translate(calc(-50% + 35vw), -50%) scale(0.6) rotateY(-15deg) translateZ(-100px)',
        zIndex: 30,
        opacity: 0.5,
        filter: 'blur(2px) brightness(0.7)',
        pointerEvents: 'auto' as const,
        cursor: 'pointer'
      };
    }

    // Back/Distant Satellite
    if (offset === 2) {
      return {
        ...baseStyles,
        transform: 'translate(-50%, -85%) scale(0.4) translateZ(-200px)',
        zIndex: 10,
        opacity: 0.3,
        filter: 'blur(5px) brightness(0.5)',
        pointerEvents: 'auto' as const,
        cursor: 'pointer'
      };
    }

    // Left Satellite
    if (offset === 3) {
      return {
        ...baseStyles,
        transform: 'translate(calc(-50% - 35vw), -50%) scale(0.6) rotateY(15deg) translateZ(-100px)',
        zIndex: 30,
        opacity: 0.5,
        filter: 'blur(2px) brightness(0.7)',
        pointerEvents: 'auto' as const,
        cursor: 'pointer'
      };
    }

    return {};
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black text-white selection:bg-pink-500 selection:text-white perspective-2000">
      <SpaceBackground activeDevice={activeDevice} />
      
      {/* Vision Pro Vignette Overlay */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_50%,rgba(0,0,0,0.6)_100%)] z-40 mix-blend-multiply" />

      {/* VisionOS System Controls Hint */}
      <div className="absolute top-2 left-1/2 transform -translate-x-1/2 z-[70] opacity-60 hover:opacity-100 transition-opacity cursor-pointer group">
         <div className="w-12 h-1.5 bg-white/30 rounded-full backdrop-blur-md shadow-[0_0_10px_rgba(255,255,255,0.1)] group-hover:bg-white/50 transition-colors" />
         <div className="absolute top-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <ChevronDown size={16} className="text-white/60" />
         </div>
      </div>

      {/* Header */}
      <header className="absolute top-0 left-0 w-full p-6 flex justify-between items-start z-[60] pointer-events-none">
        <div className="pointer-events-auto">
          <h1 className="text-2xl font-bold tracking-tight text-white/90 drop-shadow-md">{PROFILE.name}</h1>
          <p className="text-sm text-white/60 font-light tracking-wide">{PROFILE.role}</p>
        </div>
        
        {/* Environment Label - Subtle Vision Pro Indicator */}
        <div className="pointer-events-none flex items-center gap-2 opacity-40">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[10px] uppercase tracking-[0.2em] font-medium">Immersive Space</span>
        </div>
      </header>

      {/* Main Orbital Stage */}
      <main className="absolute inset-0 w-full h-full pointer-events-none [perspective:2000px] [transform-style:preserve-3d]">
         {devices.map((device) => {
           const styles = getPositionStyles(device.id);
           const isActive = activeDevice === device.id;
           
           return (
             <div
               key={device.id}
               onClick={() => !isActive && setActiveDevice(device.id)}
               className={`flex justify-center items-center ${device.width} ${device.height}`}
               style={styles}
             >
                {/* Interactivity Wrapper */}
                <div className={`w-full h-full relative transition-all duration-500 ${!isActive ? 'hover:scale-105' : ''}`}>
                  
                  {/* Glare Effect (Only on active) */}
                  {isActive && (
                     <div 
                        className="absolute inset-0 z-50 rounded-[inherit] pointer-events-none opacity-40 mix-blend-overlay bg-gradient-to-tr from-transparent via-white to-transparent"
                        style={{
                            transform: `translate(${mousePos.x * -20}px, ${mousePos.y * -20}px)`,
                            background: `radial-gradient(circle at ${50 + mousePos.x * 30}% ${50 + mousePos.y * 30}%, rgba(255,255,255,0.15), transparent 50%)`
                        }}
                     />
                  )}

                  {device.component}
                  
                  {/* Clickable Overlay/Scrim for inactive items */}
                  {!isActive && (
                    <div className="absolute inset-0 z-50 rounded-[40px] bg-black/20 hover:bg-white/5 transition-colors cursor-pointer backdrop-blur-[1px]" />
                  )}
                </div>
             </div>
           );
         })}
      </main>

      {/* Dock */}
      <GlassDock activeDevice={activeDevice} onSelect={setActiveDevice} />
    </div>
  );
};

export default App;
