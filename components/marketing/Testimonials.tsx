"use client";

import { useRef } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Kumar",
    role: "Software Engineer at TCS",
    initials: "RK",
    text: "CodeForge completely changed my career trajectory. The inbuilt compiler made practicing DSA so much easier, and the placement support is top-notch. Highly recommend it to anyone looking to crack IT jobs.",
    color: "from-fuchsia-500 to-rose-600"
  },
  {
    name: "Priya Singh",
    role: "Frontend Developer at TechStartup",
    initials: "PS",
    text: "The React.js and advanced frontend modules were incredibly practical. I built 3 live projects which helped me crack my first tech job within 4 months of joining. The doubt support was always fast and helpful.",
    color: "from-violet-500 to-purple-700"
  },
  {
    name: "Amit Sharma",
    role: "Full Stack Developer",
    initials: "AS",
    text: "The transition from learning theory to building actual production-ready apps was seamless. CodeForge's curriculum is exactly what the tech industry demands right now.",
    color: "from-cyan-500 to-blue-600"
  },
  {
    name: "Neha Gupta",
    role: "Backend Engineer",
    initials: "NG",
    text: "The system design concepts were mind-blowing. I was able to clear the technical rounds at a top product company thanks to the deep dive into scalable architectures.",
    color: "from-emerald-500 to-teal-600"
  },
  {
    name: "Vikram Singh",
    role: "Data Analyst",
    initials: "VS",
    text: "Transitioning to Data Science was daunting, but the curriculum is incredibly well-structured. The hands-on projects gave me the confidence to ace my interviews.",
    color: "from-orange-500 to-amber-600"
  }
];

export default function Testimonials() {
  // Added HTMLDivElement type
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Added 'left' | 'right' type
  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      // Dynamic scroll amount based on card width + gap
      const cardWidth = scrollContainerRef.current.firstElementChild?.clientWidth || 400;
      const scrollAmount = direction === "left" ? -(cardWidth + 24) : (cardWidth + 24);
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section id="testimonials" className="py-24 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header (Left Aligned) */}
        <div className="max-w-2xl text-left mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/5 border border-emerald-400/20 backdrop-blur text-emerald-400 font-semibold text-sm mb-6">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative rounded-full h-2.5 w-2.5 bg-emerald-400" />
            </span>
            Wall of Love
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Student <span className="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">Success Stories</span>
          </h2>
          <p className="text-lg text-neutral-400 leading-relaxed">
            Don't just take our word for it. Hear from students who transformed their careers with CodeForge Academy.
          </p>
        </div>

        {/* Carousel / Slider Container Wrapper */}
        <div className="relative group">
          
          {/* Left Arrow */}
          <button 
            onClick={() => scroll("left")}
            className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-neutral-900 border border-white/10 text-white shadow-xl hover:bg-neutral-800 hover:scale-110 transition-all hidden sm:flex"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Arrow */}
          <button 
            onClick={() => scroll("right")}
            className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-neutral-900 border border-white/10 text-white shadow-xl hover:bg-neutral-800 hover:scale-110 transition-all hidden sm:flex"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Slider */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <style dangerouslySetInnerHTML={{__html: `
              div::-webkit-scrollbar { display: none; }
            `}} />

            {testimonials.map((t, i) => (
              <div 
                key={i} 
                // Exactly 3 cards on desktop, 2 on tablet, 1 on mobile
                className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0 snap-center sm:snap-start relative bg-white/[0.02] backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-2xl hover:border-white/20 hover:-translate-y-2 transition-all duration-500 flex flex-col group/card"
              >
                <div className="flex flex-col h-full">
                  {/* Star Ratings */}
                  <div className="flex gap-1.5 mb-8 text-amber-400">
                    {[...Array(5)].map((_, index) => (
                      <Star key={index} className="w-5 h-5 fill-current drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]" />
                    ))}
                  </div>
                  
                  {/* Review Text */}
                  <p className="text-neutral-300 mb-10 leading-relaxed text-base lg:text-lg flex-grow font-light">
                    "{t.text}"
                  </p>
                  
                  {/* Student Info */}
                  <div className="flex items-center gap-4 mt-auto border-t border-white/10 pt-6">
                    <div className={`w-12 h-12 lg:w-14 lg:h-14 shrink-0 rounded-full flex items-center justify-center font-bold text-lg lg:text-xl text-white bg-gradient-to-br ${t.color} shadow-lg ring-2 ring-white/10`}>
                      {t.initials}
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-base lg:text-lg">{t.name}</h4>
                      <p className="text-xs lg:text-sm font-medium text-neutral-500">{t.role}</p>
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