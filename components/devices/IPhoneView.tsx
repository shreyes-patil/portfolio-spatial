
import React from 'react';
import { PROJECTS } from '../../constants';
import { Wifi, Battery, Signal, Search, Gamepad2, Layers, AppWindow } from 'lucide-react';

const IPhoneView: React.FC = () => {
  const today = new Date();
  const dateString = today.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });

  return (
    <div className="relative w-full h-full bg-black rounded-[45px] overflow-hidden shadow-[0_0_0_12px_#3a3a3a,0_0_0_14px_#1a1a1a,0_20px_50px_rgba(0,0,0,0.5)] animate-float-medium ring-1 ring-white/20 border-[4px] border-black">
      {/* Dynamic Island */}
      <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-[30%] h-7 bg-black z-30 rounded-[20px] flex justify-end items-center pr-2 gap-1.5">
         <div className="w-1.5 h-1.5 rounded-full bg-[#1a1a1a]/50"></div>
         <div className="w-1.5 h-1.5 rounded-full bg-green-500/20"></div>
      </div>

      {/* Status Bar */}
      <div className="absolute top-0 w-full h-12 px-7 flex justify-between items-end pb-2 text-white text-[10px] font-bold z-20 mix-blend-difference">
         <span>9:41</span>
         <div className="flex gap-1.5 items-center">
            <Signal size={12} className="text-white" />
            <Wifi size={12} className="text-white" />
            <Battery size={16} className="text-white" />
         </div>
      </div>

      {/* App Store Content */}
      <div className="w-full h-full bg-[#1c1c1e] text-white overflow-y-auto glass-scroll no-scrollbar pt-14 pb-20">
        
        {/* Header */}
        <div className="px-5 mb-4 flex justify-between items-start">
            <div>
                <h2 className="text-[11px] font-semibold text-gray-400 uppercase tracking-wide mb-0.5">{dateString}</h2>
                <h1 className="text-3xl font-bold tracking-tight text-white">Today</h1>
            </div>
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg border border-white/10 mt-1 cursor-pointer hover:scale-105 transition-transform">
                <span className="text-xs font-bold text-white">SP</span>
            </div>
        </div>

        {/* Projects List */}
        <div className="px-5 space-y-8">
          {PROJECTS.map((project, index) => (
            <div key={index} className="flex flex-col bg-[#2c2c2e] rounded-[20px] overflow-hidden shadow-2xl group active:scale-[0.98] transition-transform duration-200 ring-1 ring-white/5">
              {/* Hero Image/Gradient Area */}
              <div className={`relative h-72 w-full p-6 flex flex-col justify-between ${
                  index === 0 ? 'bg-gradient-to-br from-[#4158D0] to-[#C850C0]' : 
                  index === 1 ? 'bg-gradient-to-br from-[#0093E9] to-[#80D0C7]' : 
                  index === 2 ? 'bg-gradient-to-br from-[#FF9A9E] to-[#FECFEF]' :
                  'bg-gradient-to-br from-[#134E5E] to-[#71B280]'
              }`}>
                  <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-black/40" />
                  
                  {/* Card Header */}
                  <div className="relative z-10 flex flex-col h-full justify-between">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-white/70 drop-shadow-md block mb-1">
                            {index === 0 ? 'FEATURED APP' : 
                             index === 1 ? 'NEW RELEASE' : 
                             index === 2 ? 'EDITOR\'S CHOICE' : 
                             'FINANCE & AI'}
                        </span>
                        <h3 className="text-3xl font-bold text-white leading-tight drop-shadow-lg w-[85%]">
                            {project.title}
                        </h3>
                      </div>
                      <p className="text-white/90 text-sm font-medium drop-shadow-md line-clamp-2 w-[90%] leading-snug">
                          {project.description[0]}
                      </p>
                  </div>
              </div>

              {/* App Details Bar (App Icon, Title, GET button) */}
              <div className="bg-[#2c2c2e]/90 backdrop-blur-xl p-4 flex items-center justify-between relative border-t border-white/5">
                  <div className="flex items-center gap-3.5">
                      {/* App Icon */}
                      <div className={`w-11 h-11 rounded-[10px] shadow-lg flex items-center justify-center text-lg ring-1 ring-white/10 ${
                          index === 0 ? 'bg-blue-600' : 
                          index === 1 ? 'bg-cyan-600' : 
                          index === 2 ? 'bg-pink-600' : 
                          'bg-emerald-600'
                      }`}>
                         <span className="font-bold">{project.title.charAt(0)}</span>
                      </div>
                      
                      <div className="flex flex-col justify-center">
                          <span className="text-[13px] font-semibold text-white leading-tight">{project.title}</span>
                          <span className="text-[11px] text-gray-400 leading-tight mt-0.5 line-clamp-1 max-w-[120px]">{project.tags[0]}</span>
                      </div>
                  </div>

                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-[#2c2c2e] hover:bg-[#3a3a3c] text-blue-500 text-[11px] font-bold px-5 py-1.5 rounded-full transition-colors uppercase tracking-wide border border-blue-500/20 hover:border-blue-500/40"
                  >
                    GET
                  </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation Bar (Mock) */}
      <div className="absolute bottom-0 w-full h-[80px] bg-[#1c1c1e]/95 backdrop-blur-xl border-t border-white/10 flex justify-around items-start pt-3 px-2 z-20 shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
          <div className="flex flex-col items-center gap-1 text-blue-500">
               <Layers size={22} strokeWidth={2.5} />
               <span className="text-[10px] font-medium">Today</span>
          </div>
          <div className="flex flex-col items-center gap-1 text-gray-500 opacity-60">
               <Gamepad2 size={22} />
               <span className="text-[10px] font-medium">Games</span>
          </div>
          <div className="flex flex-col items-center gap-1 text-gray-500 opacity-60">
               <AppWindow size={22} />
               <span className="text-[10px] font-medium">Apps</span>
          </div>
           <div className="flex flex-col items-center gap-1 text-gray-500 opacity-60">
               <Search size={22} />
               <span className="text-[10px] font-medium">Search</span>
          </div>
      </div>

      {/* Home Indicator */}
      <div className="absolute bottom-1.5 left-1/2 transform -translate-x-1/2 w-[35%] h-1 bg-white rounded-full z-30 opacity-70"></div>
    </div>
  );
};

export default IPhoneView;
