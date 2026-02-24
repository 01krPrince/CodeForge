"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Kumar",
    role: "Software Engineer at TCS",
    initials: "RK",
    text: "CodeForge completely changed my career trajectory. The inbuilt compiler made practicing DSA so much easier, and the placement support is top-notch. Highly recommend it to anyone looking to crack IT jobs.",
    color: "bg-blue-600"
  },
  {
    name: "Priya Singh",
    role: "Frontend Developer at TechStartup",
    initials: "PS",
    text: "The React.js and advanced frontend modules were incredibly practical. I built 3 live projects which helped me crack my first tech job within 4 months of joining. The doubt support was always fast and helpful.",
    color: "bg-indigo-600"
  },
  {
    name: "Amit Sharma",
    role: "Full Stack Developer",
    initials: "AS",
    text: "The transition from learning theory to building actual production-ready apps was seamless. CodeForge's curriculum is exactly what the tech industry demands right now.",
    color: "bg-emerald-600"
  },
  {
    name: "Neha Gupta",
    role: "Backend Engineer",
    initials: "NG",
    text: "The system design concepts were mind-blowing. I was able to clear the technical rounds at a top product company thanks to the deep dive into scalable architectures.",
    color: "bg-violet-600"
  }
];

export default function Testimonials() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.firstElementChild?.clientWidth || 400;
      const scrollAmount = direction === "left" ? -(cardWidth + 24) : (cardWidth + 24);
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section id="testimonials" className="py-10 bg-white border-t border-slate-100 relative overflow-hidden">
      
      {/* Soft Background Accents */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-blue-50 rounded-full blur-[100px] opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Section Header */}
        <div className="max-w-3xl text-left mb-20">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-slate-50 border border-slate-200 text-slate-600 font-bold text-xs uppercase tracking-widest mb-6">
            <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
            WALL OF LOVE
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Our Graduates <span className="text-blue-600 font-serif italic">Speak For Us</span>
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed max-w-xl">
            Join thousands of students who have transformed their professional lives through our industry-leading mentorship.
          </p>
        </div>

        {/* Carousel Wrapper */}
        <div className="relative group">
          
          {/* Custom Navigation */}
          <div className="absolute -top-24 right-0 flex gap-3">
             <button onClick={() => scroll("left")} className="p-3 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-400 hover:text-slate-900 transition-all shadow-sm">
                <ChevronLeft size={20} />
             </button>
             <button onClick={() => scroll("right")} className="p-3 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-400 hover:text-slate-900 transition-all shadow-sm">
                <ChevronRight size={20} />
             </button>
          </div>

          {/* Slider */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-8 pb-12 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <style dangerouslySetInnerHTML={{__html: `div::-webkit-scrollbar { display: none; }` }} />

            {testimonials.map((t, i) => (
              <div 
                key={i} 
                className="w-full sm:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)] shrink-0 snap-center sm:snap-start relative bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-500 flex flex-col"
              >
                {/* Decorative Quote Icon */}
                <Quote className="absolute top-10 right-10 w-10 h-10 text-slate-100 -z-10" />

                <div className="flex flex-col h-full relative z-10">
                  {/* High Quality Stars */}
                  <div className="flex gap-1 mb-8 text-amber-400">
                    {[...Array(5)].map((_, index) => (
                      <Star key={index} size={18} fill="currentColor" stroke="none" />
                    ))}
                  </div>
                  
                  {/* Testimonial Text */}
                  <p className="text-slate-600 mb-10 leading-relaxed text-lg font-medium italic">
                    "{t.text}"
                  </p>
                  
                  {/* User Profile */}
                  <div className="flex items-center gap-4 mt-auto pt-8 border-t border-slate-100">
                    <div className={`w-14 h-14 shrink-0 rounded-2xl flex items-center justify-center font-bold text-xl text-white ${t.color} shadow-lg shadow-current/10`}>
                      {t.initials}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg">{t.name}</h4>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{t.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}