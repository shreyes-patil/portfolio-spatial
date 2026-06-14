
import React from 'react';
import { PROFILE, EDUCATION } from '../../constants';

const MacBookView: React.FC = () => {
    const currentDate = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

    // Helper for rendering JSON properties with links
    const JsonLine = ({ label, value, href, isLast = false }: { label: string, value: string, href?: string, isLast?: boolean }) => (
        <div className="flex whitespace-pre ml-2 md:ml-4">
            <span className="text-orange-300/80">"{label}"</span>
            <span className="text-white/40">: </span>
            {href ? (
                <a href={href} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline decoration-emerald-400/50 underline-offset-2 cursor-pointer transition-colors hover:text-emerald-300">
                    "{value}"
                </a>
            ) : (
                <span className="text-yellow-100/90">"{value}"</span>
            )}
            {!isLast && <span className="text-white/40">,</span>}
        </div>
    );

    return (
        <div className="relative w-full h-full flex flex-col items-center justify-center animate-float-medium">
            {/* Screen Lid */}
            <div className="relative w-full md:w-[90%] aspect-[16/10] bg-[#0d0d0d] rounded-t-xl md:rounded-t-2xl border-[6px] md:border-[12px] border-[#1a1a1a] border-b-0 ring-1 ring-white/10 shadow-2xl overflow-hidden flex flex-col">

                {/* Terminal Title Bar */}
                <div className="h-6 md:h-8 bg-[#1e1e1e] flex items-center px-3 md:px-4 border-b border-white/5 w-full shrink-0 z-10">
                    <div className="flex gap-1.5 md:gap-2">
                        <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#ff5f56] border border-[#e0443e]/50"></div>
                        <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#ffbd2e] border border-[#dea123]/50"></div>
                        <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#27c93f] border border-[#1aab29]/50"></div>
                    </div>
                    <div className="flex-1 text-center text-[10px] md:text-xs font-medium text-gray-500 font-mono tracking-wide select-none">
                        shreyas — -zsh
                    </div>
                </div>

                {/* Terminal Content */}
                <div className="flex-1 bg-[#0c0c0c]/95 p-3 md:p-8 font-mono text-[10px] md:text-sm overflow-y-auto overflow-x-auto glass-scroll text-gray-300 leading-relaxed w-full shadow-inner font-medium">

                    {/* Login Message */}
                    <div className="mb-4 md:mb-8 text-gray-600 font-mono select-none whitespace-nowrap">
                        Last login: {currentDate} on ttys001
                    </div>

                    {/* Command 1: whoami (About) */}
                    <div className="mb-6 md:mb-8 group">
                        <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3 opacity-80 group-hover:opacity-100 transition-opacity select-none">
                            <span className="text-emerald-400 font-bold">➜</span>
                            <span className="text-blue-400 font-bold">~</span>
                            <span className="text-gray-100">whoami</span>
                        </div>
                        <div className="pl-3 md:pl-6 border-l-2 border-gray-800/50 text-gray-300 space-y-2 md:space-y-3">
                            <h1 className="text-lg md:text-2xl font-bold text-white tracking-tight">{PROFILE.name}</h1>
                            <div className="flex items-center gap-2 md:gap-3 text-emerald-400/90 text-[9px] md:text-xs uppercase tracking-wider font-bold flex-wrap">
                                <span>{PROFILE.role}</span>
                                <span className="w-1 h-1 rounded-full bg-gray-700"></span>
                                <span>{EDUCATION[0].degree}</span>
                            </div>
                            <p className="max-w-2xl text-gray-400 leading-5 md:leading-6 mt-1 md:mt-2">
                                {PROFILE.summary}
                            </p>
                        </div>
                    </div>

                    {/* Command 2: cat contact.json */}
                    <div className="mb-6 md:mb-8 group">
                        <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3 opacity-80 group-hover:opacity-100 transition-opacity select-none">
                            <span className="text-emerald-400 font-bold">➜</span>
                            <span className="text-blue-400 font-bold">~</span>
                            <span className="text-gray-100">cat contact.json</span>
                        </div>
                        <div className="pl-3 md:pl-6 border-l-2 border-gray-800/50 text-gray-300">
                            <div className="bg-[#15161c]/80 p-3 md:p-4 rounded-lg border border-white/5 w-fit backdrop-blur-sm shadow-lg min-w-full sm:min-w-0">
                                <div className="text-white/40">{`{`}</div>

                                <JsonLine label="email" value={PROFILE.contact.email} href={`mailto:${PROFILE.contact.email}`} />
                                <JsonLine label="github" value="@shreyes-patil" href={PROFILE.contact.github} />
                                <JsonLine label="linkedin" value="/in/shreyes-patil" href={PROFILE.contact.linkedin} />
                                <JsonLine label="website" value={PROFILE.contact.website.replace('https://', '')} href={PROFILE.contact.website} />
                                <JsonLine label="resume" value="Shreyas_H_Patil.pdf" href={PROFILE.contact.resume} />
                                <JsonLine label="location" value="Fort Lauderdale, FL" isLast={true} />

                                <div className="text-white/40">{`}`}</div>
                            </div>
                        </div>
                    </div>

                    {/* Active Prompt */}
                    <div className="mt-4 flex items-center gap-2 md:gap-3 select-none">
                        <span className="text-emerald-400 font-bold">➜</span>
                        <span className="text-blue-400 font-bold">~</span>
                        <span className="w-2 md:w-2.5 h-4 md:h-5 bg-gray-500/50 animate-pulse"></span>
                    </div>
                </div>
            </div>

            {/* Bottom Base */}
            <div className="relative w-[95%] h-2 md:h-3 bg-[#252525] rounded-b-lg md:rounded-b-xl border-t border-black/50 shadow-xl flex justify-center items-center">
                <div className="w-20 md:w-32 h-0.5 md:h-1 bg-black/40 rounded-full mb-0.5 md:mb-1"></div>
            </div>
        </div>
    );
};

export default MacBookView;
