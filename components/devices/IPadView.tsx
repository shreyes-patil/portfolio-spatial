import React from 'react';
import { EXPERIENCE } from '../../constants';
import { Building2, Calendar, MapPin } from 'lucide-react';

const IPadView: React.FC = () => {
  return (
    <div className="relative w-full h-full bg-[#121212] rounded-[30px] overflow-hidden shadow-[0_0_0_12px_#2a2a2a,0_20px_60px_rgba(0,0,0,0.6)] animate-float-slow ring-1 ring-white/20">
      {/* Status Bar */}
      <div className="absolute top-0 w-full h-8 px-6 flex justify-between items-center text-white/80 text-xs font-medium z-10 bg-black/20 backdrop-blur-md">
        <span>9:41 AM Mon Jul 25</span>
        <div className="flex gap-2 items-center">
           <span>100%</span>
           <div className="w-5 h-3 border border-white/30 rounded-[2px] bg-white/80" />
        </div>
      </div>

      {/* Screen Content - Split View / Grid */}
      <div className="w-full h-full pt-12 px-8 pb-8 overflow-y-auto glass-scroll flex flex-col">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 mb-2">
            Experience
          </h1>
          <p className="text-zinc-400">Professional journey & key achievements</p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {EXPERIENCE.map((exp, index) => (
            <div key={index} className="bg-zinc-800/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 transition-all hover:bg-zinc-800/80">
              <div className="flex flex-col md:flex-row justify-between md:items-start gap-4 mb-4">
                <div>
                  <h2 className="text-xl font-bold text-white">{exp.role}</h2>
                  <div className="flex items-center gap-2 text-pink-400 font-medium mt-1">
                    <Building2 size={16} />
                    <span>{exp.company}</span>
                  </div>
                </div>
                <div className="flex flex-col items-start md:items-end gap-1 text-sm text-zinc-500">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={14} />
                    <span>{exp.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin size={14} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                {exp.details.map((detail, i) => (
                  <div key={i} className="flex gap-3 items-start text-zinc-300 text-sm leading-relaxed">
                    <span className="min-w-[6px] h-[6px] rounded-full bg-pink-500 mt-2 opacity-60"></span>
                    <p>{detail}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      
       {/* Home Indicator */}
       <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full z-20"></div>
    </div>
  );
};

export default IPadView;