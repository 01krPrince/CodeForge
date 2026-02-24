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
    accent: "text-orange-600",
    bg: "bg-orange-50/50"
  },
  {
    id: 2,
    name: "Aditi Desai",
    role: "Senior Frontend Engineer at Meta",
    image: mentor2,
    bio: "React and Next.js expert. Passionate about pixel-perfect UI, web performance, and modern frontend architecture.",
    accent: "text-blue-600",
    bg: "bg-blue-50/50"
  },
  {
    id: 3,
    name: "Karan Verma",
    role: "AI/ML Lead at Microsoft",
    image: mentor3,
    bio: "Leading generative AI initiatives. Loves teaching Python, neural networks, and deploying ML models to production.",
    accent: "text-emerald-600",
    bg: "bg-emerald-50/50"
  }
];

export default function Mentors() {
  return (
    <section id="mentors" className="py-10 relative overflow-hidden bg-slate-50">
      
      {/* Subtle Background Orbs for Light Theme */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-100/40 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl text-left mb-20">
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white border border-slate-200 text-slate-600 font-bold text-xs uppercase tracking-widest mb-6 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
            Learn From Industry Leaders
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Meet Your <span className="text-blue-600">Mentors</span>
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            Our instructors are industry veterans who have built products used by millions and are here to help you scale your career.
          </p>
        </div>

        {/* Mentors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {mentors.map((mentor) => (
            <div 
              key={mentor.id}
              className="group relative flex flex-col bg-white border border-slate-200 rounded-[2.5rem] p-6 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image Container - Using object-contain for full visibility */}
              <div className={`relative h-80 w-full mb-8 overflow-hidden rounded-3xl ${mentor.bg} border border-slate-100`}>
                <Image
                  src={mentor.image}
                  alt={mentor.name} 
                  fill
                  className="object-contain p-6 transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/80 to-transparent pointer-events-none" />
              </div>

              {/* Content Area */}
              <div className="relative z-10 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-3">
                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {mentor.name}
                    </h3>
                    <a href="#" className="p-2 rounded-full bg-slate-50 text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-all">
                       <Linkedin className="w-5 h-5" />
                    </a>
                </div>
                
                <div className={`inline-flex items-center px-3 py-1 rounded-lg text-[10px] tracking-widest font-bold border ${mentor.bg} ${mentor.accent} border-current/10 w-fit mb-4 uppercase`}>
                  {mentor.role}
                </div>
                
                <p className="text-slate-500 text-sm leading-relaxed mb-8">
                  {mentor.bio}
                </p>

                <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex -space-x-2">
                       {[1,2,3].map(i => (
                         <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200" />
                       ))}
                       <div className="w-8 h-8 rounded-full border-2 border-white bg-blue-600 flex items-center justify-center text-[8px] text-white font-bold">
                         +5k
                       </div>
                    </div>
                    <button className="text-[11px] font-bold text-slate-900 flex items-center gap-2 group/btn hover:text-blue-600 transition-colors">
                       VIEW PROFILE 
                       <ArrowRight className="w-3.5 h-3.5 text-blue-500 group-hover/btn:translate-x-1 transition-transform" />
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