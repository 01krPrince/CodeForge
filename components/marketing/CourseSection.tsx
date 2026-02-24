"use client";

import { useRef } from "react";
import Link from "next/link";
import { Clock, MapPin, MonitorPlay, ArrowRight, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

const courses = [
  {
    id: "full-stack-web-dev",
    title: "Full-Stack Web Development",
    description: "Master the MERN stack from scratch. Build production-ready applications, learn system design basics, and get interview-ready.",
    duration: "6 Months",
    mode: "Online + Offline (Patna)",
    price: "₹14,999",
    originalPrice: "₹24,999",
    tags: ["React", "Next.js", "Node.js", "MongoDB"],
    theme: "cyan",
  },
  {
    id: "dsa-cpp-java",
    title: "Data Structures & Algorithms",
    description: "Crack top product-based companies. Master problem-solving and algorithms using C++ or Java. Practice on our inbuilt compiler.",
    duration: "4 Months",
    mode: "Online Live Classes",
    price: "₹9,999",
    originalPrice: "₹15,999",
    tags: ["C++", "Java", "DP", "Graphs"],
    theme: "emerald",
  },
  {
    id: "data-science-ai",
    title: "Data Science & Gen-AI",
    description: "Learn Python, Machine Learning, and build real-world Gen-AI applications. Become a highly paid data scientist in months.",
    duration: "6 Months",
    mode: "Online Live Classes",
    price: "₹16,999",
    originalPrice: "₹28,999",
    tags: ["Python", "TensorFlow", "Pandas", "LLMs"],
    theme: "violet",
  },
  {
    id: "frontend-masterclass",
    title: "Advanced Frontend Master",
    description: "Focus entirely on UI/UX, animations, and building pixel-perfect scalable frontends with React and modern tools.",
    duration: "3 Months",
    mode: "Online + Offline (Patna)",
    price: "₹7,999",
    originalPrice: "₹12,999",
    tags: ["UI/UX", "Tailwind", "Framer", "React"],
    theme: "amber",
  },
  {
    id: "backend-architecture",
    title: "Backend & System Design",
    description: "Scale applications to millions of users. Deep dive into microservices, caching, databases, and high-level architecture.",
    duration: "4 Months",
    mode: "Online Live Classes",
    price: "₹11,999",
    originalPrice: "₹19,999",
    tags: ["Node.js", "Go", "Redis", "Kafka"],
    theme: "blue",
  }
];

const getThemeStyles = (theme: string) => {
  switch (theme) {
    case 'emerald': return { line: 'from-emerald-500 to-teal-600', tag: 'bg-emerald-50 text-emerald-700 border-emerald-100' };
    case 'violet': return { line: 'from-violet-500 to-purple-600', tag: 'bg-violet-50 text-violet-700 border-violet-100' };
    case 'amber': return { line: 'from-amber-500 to-orange-600', tag: 'bg-amber-50 text-amber-700 border-amber-100' };
    case 'blue': return { line: 'from-blue-500 to-indigo-600', tag: 'bg-blue-50 text-blue-700 border-blue-100' };
    case 'cyan': 
    default: return { line: 'from-cyan-500 to-blue-600', tag: 'bg-cyan-50 text-cyan-700 border-cyan-100' };
  }
};

export default function CourseSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.firstElementChild?.clientWidth || 400;
      const scrollAmount = direction === "left" ? -(cardWidth + 24) : (cardWidth + 24);
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section id="courses" className="py-10 bg-white border-t border-slate-100 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="relative flex flex-col md:flex-row md:items-end md:justify-between mb-16">
            <div className="max-w-2xl text-left">
              <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-slate-50 border border-slate-200 text-slate-600 font-semibold text-sm mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute h-full w-full rounded-full bg-blue-400 opacity-75" />
                  <span className="relative rounded-full h-2 w-2 bg-blue-500" />
                </span>
                FLAGSHIP PROGRAMS
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
                Industry-Aligned <span className="text-blue-600">Learning Tracks</span>
              </h2>
              <p className="text-lg text-slate-500 leading-relaxed">
                Choose from our highly curated programs designed to take you from a beginner to a highly-paid software engineer.
              </p>
            </div>

            {/* --- GIANT MULTI-LAYERED ORBITAL RING SYSTEM (Visible Version) --- */}
            <div className="absolute -top-12 -right-10 lg:right-0 w-72 h-72 pointer-events-none hidden md:block select-none">
              <div className="relative w-full h-full flex items-center justify-center">
                
                {/* Layer 1: Outer Dotted Ring (Slow) - Visible Gray */}
                <div className="absolute inset-0 animate-[spin_25s_linear_infinite_reverse] opacity-60">
                    <svg viewBox="0 0 200 200" className="w-full h-full">
                        <circle cx="100" cy="100" r="98" fill="none" stroke="#e2e8f0" strokeWidth="1.5" strokeDasharray="6 10" />
                    </svg>
                </div>

                {/* Layer 2: Text Ring - Darker Slate for Visibility */}
                <div className="absolute inset-4 animate-[spin_15s_linear_infinite]">
                  <svg viewBox="0 0 200 200" className="w-full h-full overflow-visible">
                    <defs>
                      <path id="whiteTextPath" d="M 100, 100 m -70, 0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0" />
                    </defs>
                    <text className="uppercase font-bold text-[10px] tracking-[0.22em] fill-slate-400">
                      <textPath xlinkHref="#whiteTextPath">
                        • Enrollment Open Now • Batch 2026 • 100x Career Mastery •
                      </textPath>
                    </text>
                  </svg>
                </div>

                {/* Layer 3: Solid Tech Ring - Blue Accent */}
                <div className="absolute inset-10 animate-[spin_10s_linear_infinite] opacity-40">
                    <svg viewBox="0 0 200 200" className="w-full h-full">
                        <circle cx="100" cy="100" r="55" fill="none" stroke="#3b82f6" strokeWidth="2.5" strokeDasharray="40 100" strokeLinecap="round" />
                    </svg>
                </div>

                {/* Layer 4: Pulse Core - Premium Shadow */}
                <div className="w-24 h-24 rounded-full bg-white border border-blue-100 flex flex-col items-center justify-center shadow-xl shadow-blue-500/5 relative z-10">
                  <Sparkles className="w-6 h-6 text-blue-500 mb-1 animate-pulse" />
                  <span className="text-[10px] font-black text-slate-900 tracking-widest uppercase">Join</span>
                  <span className="text-[10px] font-bold text-blue-600 uppercase">Now</span>
                </div>
              </div>
            </div>
            {/* ---------------------------- */}
        </div>

        {/* Carousel / Slider Wrapper */}
        <div className="relative group">
          
          {/* Controls */}
          <button 
            onClick={() => scroll("left")}
            className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white border border-slate-200 text-slate-600 shadow-lg hover:bg-slate-50 hover:scale-110 transition-all hidden sm:flex"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button 
            onClick={() => scroll("right")}
            className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white border border-slate-200 text-slate-600 shadow-lg hover:bg-slate-50 hover:scale-110 transition-all hidden sm:flex"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Scroll Container */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <style dangerouslySetInnerHTML={{__html: `
              div::-webkit-scrollbar { display: none; }
            `}} />

            {courses.map((course) => {
              const themeStyle = getThemeStyles(course.theme);
              
              return (
                <div 
                  key={course.id} 
                  className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0 snap-center sm:snap-start relative bg-white border border-slate-200 rounded-3xl overflow-hidden hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500 flex flex-col group/card"
                >
                  {/* Card Top Gradient Line */}
                  <div className={`h-1.5 w-full bg-gradient-to-r ${themeStyle.line}`} />
                  
                  <div className="relative p-8 flex-grow z-10 flex flex-col">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {course.tags.map((tag, index) => (
                        <span 
                          key={index} 
                          className={`text-[10px] font-bold px-3 py-1 rounded-full border tracking-wide uppercase ${themeStyle.tag}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    {/* Title & Desc */}
                    <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{course.title}</h3>
                    <p className="text-sm text-slate-500 mb-8 leading-relaxed flex-grow">{course.description}</p>
                    
                    {/* Course Details */}
                    <div className="space-y-4 mb-8">
                      <div className="flex items-center text-sm text-slate-600 font-medium">
                        <Clock className="w-4 h-4 mr-3 text-slate-400" />
                        {course.duration}
                      </div>
                      <div className="flex items-center text-sm text-slate-600 font-medium">
                        <MapPin className="w-4 h-4 mr-3 text-slate-400" />
                        {course.mode}
                      </div>
                    </div>

                    {/* Price & CTA */}
                    <div className="mt-auto pt-6 border-t border-slate-100">
                      <div className="flex items-end gap-2 mb-6">
                        <span className="text-3xl font-extrabold text-slate-900">{course.price}</span>
                        <span className="text-sm text-slate-400 line-through mb-1 font-medium">{course.originalPrice}</span>
                      </div>

                      <Link 
                        href={`/courses/${course.id}`}
                        className="w-full flex items-center justify-center px-6 py-4 rounded-xl font-bold text-slate-700 bg-slate-50 border border-slate-200 hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:shadow-lg hover:shadow-blue-200 transition-all"
                      >
                        Explore Course <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}