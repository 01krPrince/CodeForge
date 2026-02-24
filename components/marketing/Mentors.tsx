"use client";

import { Linkedin, Twitter, Github, ExternalLink, ArrowRight } from "lucide-react";
import Image from "next/image";
import mentor1 from "../../public/mentors/mentor1.png";
import mentor2 from "../../public/mentors/mentor2.png";
import mentor3 from "../../public/mentors/mentor3.png";

const mentors = [
  {
    id: 1,
    name: "Vikram Sharma",
    role: "Ex-SDE III at Amazon",
    image: mentor1,
    bio: "10+ years of experience building scalable backend systems. Master of System Design and Data Structures.",
    color: "orange" 
  },
  {
    id: 2,
    name: "Aditi Desai",
    role: "Senior Frontend Engineer at Meta",
    image: mentor2,
    bio: "React and Next.js expert. Passionate about pixel-perfect UI, web performance, and modern frontend architecture.",
    color: "cyan"
  },
  {
    id: 3,
    name: "Karan Verma",
    role: "AI/ML Lead at Microsoft",
    image: mentor3,
    bio: "Leading generative AI initiatives. Loves teaching Python, neural networks, and deploying ML models to production.",
    color: "emerald"
  }
];

export default function Mentors() {
  return (
    <section id="mentors" className="py-32 relative overflow-hidden bg-neutral-950">
      
      {/* === BACKGROUND ENHANCEMENTS === */}
      {/* Subtle Mesh Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl text-left mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/5 border border-cyan-400/20 backdrop-blur text-cyan-400 font-semibold text-sm mb-6">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative rounded-full h-2.5 w-2.5 bg-cyan-400" />
            </span>
            LEARN FROM THE BEST
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Meet Your <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">Mentors</span>
          </h2>
          <p className="text-lg text-neutral-400 leading-relaxed">
            Our instructors are industry veterans who have cracked top tech companies and are here to help you do the same.
          </p>
        </div>

        {/* Mentors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {mentors.map((mentor) => (
            <div 
              key={mentor.id}
              className="group relative flex flex-col bg-white/[0.02] border border-white/10 rounded-[2.5rem] p-5 hover:bg-white/[0.04] transition-all duration-500 hover:-translate-y-2"
            >
              {/* Card Glow Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2.5rem]" />

              {/* Image Container */}
              <div className="relative h-72 w-full mb-6 overflow-hidden rounded-3xl bg-neutral-900/40 border border-white/5 shadow-inner">
                <Image
                  src={mentor.image}
                  alt={mentor.name} 
                  fill
                  className="object-contain p-4 transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                {/* Image Bottom Shade */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-neutral-950 to-transparent opacity-60" />
              </div>

              {/* Content Area */}
              <div className="relative z-10 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {mentor.name}
                    </h3>
                    <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-neutral-500 hover:text-white transition-all">
                       <Linkedin className="w-4 h-4" />
                    </a>
                </div>
                
                <div className="inline-flex items-center px-3 py-1 rounded-lg text-[10px] tracking-widest font-black border bg-white/5 text-neutral-300 border-white/10 w-fit mb-4 uppercase">
                  {mentor.role}
                </div>
                
                <p className="text-neutral-400 text-sm leading-relaxed mb-8 line-clamp-3">
                  {mentor.bio}
                </p>

                <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                    <div className="flex -space-x-2">
                       {[1,2,3].map(i => (
                         <div key={i} className="w-7 h-7 rounded-full border-2 border-neutral-950 bg-neutral-800" />
                       ))}
                       <div className="w-7 h-7 rounded-full border-2 border-neutral-950 bg-neutral-900 flex items-center justify-center text-[8px] text-white font-bold">
                         +5k
                       </div>
                    </div>
                    <button className="text-[11px] font-bold text-white flex items-center gap-2 group/btn">
                       FULL BIO 
                       <ArrowRight className="w-3 h-3 text-cyan-400 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}