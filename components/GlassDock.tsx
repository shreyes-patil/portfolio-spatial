
import React from 'react';
import { DeviceType, NAVIGATION_ITEMS } from '../constants';

interface GlassDockProps {
  activeDevice: DeviceType;
  onSelect: (device: DeviceType) => void;
}

const GlassDock: React.FC<GlassDockProps> = ({ activeDevice, onSelect }) => {
  return (
    <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-[100]">
      {/* Liquid Glass Container */}
      <div className="flex items-center gap-6 px-8 py-5 rounded-[3rem] bg-white/5 backdrop-blur-[40px] border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] ring-1 ring-white/10 overflow-hidden relative transition-all duration-500 hover:bg-white/10 hover:scale-[1.02]">
        
        {/* Glossy Gradient Overlay for Liquid Feel */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none opacity-50" />
        
        {NAVIGATION_ITEMS.map((item) => {
          const isActive = activeDevice === item.id;
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              onClick={() => onSelect(item.id)}
              className="group relative flex flex-col items-center justify-center outline-none"
            >
              {/* Active Backlight Glow */}
              {isActive && (
                <div className="absolute inset-0 bg-white/20 rounded-2xl blur-xl scale-150 animate-pulse" />
              )}

              <div
                className={`
                  relative flex items-center justify-center w-14 h-14 rounded-[1.2rem] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]
                  ${isActive 
                    ? 'bg-white text-black scale-110 shadow-[0_0_25px_rgba(255,255,255,0.4)] translate-y-[-6px]' 
                    : 'bg-white/5 text-white/60 hover:bg-white/20 hover:text-white hover:scale-110 hover:translate-y-[-2px]'}
                `}
              >
                <Icon size={24} strokeWidth={isActive ? 2.5 : 2} className="relative z-10" />
              </div>
              
              {/* Floating Label */}
              <span className={`absolute -top-14 px-3 py-1.5 text-[11px] font-semibold tracking-wide text-white/90 bg-black/70 backdrop-blur-xl rounded-full border border-white/10 shadow-lg transition-all duration-300 ${isActive ? 'opacity-0 translate-y-4 scale-90' : 'opacity-0 translate-y-4 scale-90 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100'}`}>
                {item.label}
              </span>

              {/* Floor Reflection for Active Item */}
              {isActive && (
                  <div className="absolute -bottom-9 w-10 h-1.5 bg-white/40 blur-lg rounded-full transition-opacity duration-500" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default GlassDock;
