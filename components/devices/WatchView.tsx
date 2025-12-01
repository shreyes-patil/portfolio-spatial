import React from 'react';
import { SKILLS } from '../../constants';

const WatchView: React.FC = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center animate-float-medium">
      {/* Watch Case */}
      <div className="relative w-[220px] h-[270px] bg-[#1c1c1e] rounded-[48px] border-[6px] border-[#3a3a3c] shadow-[0_0_0_2px_#000,0_20px_40px_rgba(0,0,0,0.5)] overflow-hidden ring-1 ring-white/20">
        
        {/* Digital Crown */}
        <div className="absolute -right-[14px] top-16 w-3 h-10 bg-[#2c2c2e] rounded-r-md border-l border-black/50 shadow-sm" />
        {/* Side Button */}
        <div className="absolute -right-[10px] top-32 w-2 h-14 bg-[#2c2c2e] rounded-r-md" />

        {/* Screen */}
        <div className="w-full h-full bg-black p-4 overflow-y-auto glass-scroll">
           <div className="flex flex-col items-center gap-4 py-4">
              <div className="text-center mb-2">
                  <h2 className="text-orange-500 text-sm font-semibold uppercase tracking-wider">Skills</h2>
                  <p className="text-white text-[10px] opacity-70">Tech Stack</p>
              </div>
              
              {/* Hex Grid / Bubbles Layout Simulation */}
              <div className="flex flex-wrap justify-center gap-2">
                 {[...SKILLS.ios, ...SKILLS.architecture, ...SKILLS.backend].map((skill, i) => {
                     // Randomize colors slightly based on index for variety
                     const colors = [
                         'bg-orange-500/20 text-orange-200 border-orange-500/30',
                         'bg-blue-500/20 text-blue-200 border-blue-500/30',
                         'bg-purple-500/20 text-purple-200 border-purple-500/30',
                         'bg-green-500/20 text-green-200 border-green-500/30'
                     ];
                     const colorClass = colors[i % colors.length];

                     return (
                         <div key={i} className={`
                            flex items-center justify-center px-2 py-1.5 rounded-full border text-[10px] font-medium backdrop-blur-sm
                            ${colorClass}
                         `}>
                             {skill}
                         </div>
                     )
                 })}
              </div>
           </div>
        </div>
      </div>
      
      {/* Watch Band (Visual Hint) */}
      <div className="absolute -z-10 w-[140px] h-[350px] bg-zinc-800 rounded-[40px] opacity-40"></div>
    </div>
  );
};

export default WatchView;