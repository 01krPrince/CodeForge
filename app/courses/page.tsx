"use client";

import { useState } from "react";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import CourseSection from "@/components/marketing/CourseSection";
import { Search, Filter, BookOpen } from "lucide-react";

export default function AllCoursesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="bg-[#050b14] min-h-screen flex flex-col">
      <Navbar />
      {/* --- PAGE HEADER --- */}
      <header className="relative pt-32 pb-16 overflow-hidden">
        {/* Ambient background glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-cyan-500/5 to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold tracking-widest uppercase mb-6">
              <BookOpen className="w-3 h-3" /> Explore Our Catalog
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
              All <span className="bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">Programs</span>
            </h1>
            <p className="text-lg text-neutral-400 leading-relaxed">
              From zero-to-one mastery in Full Stack Development to cracking top product companies with DSA. Choose your path to a 100x career.
            </p>
          </div>

          {/* --- SEARCH & FILTER BAR --- */}
          <div className="mt-12 flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-500" />
              <input 
                type="text"
                placeholder="Search courses (e.g. MERN, Java, Python...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-neutral-600 focus:outline-none focus:border-cyan-500/50 transition-all"
              />
            </div>
            <button className="flex items-center justify-center gap-2 px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-neutral-300 hover:text-white hover:bg-white/10 transition-all">
              <Filter className="w-5 h-5" /> Filters
            </button>
          </div>
        </div>
      </header>

      {/* --- CONTENT SECTION --- */}
      <main className="flex-grow">
        {/* We reuse your CourseSection here. 
            If you want to filter based on 'searchQuery', you can pass it as a prop 
            if you modify CourseSection to accept one. 
        */}
        <CourseSection />
      </main>

      {/* --- CALL TO ACTION --- */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto rounded-[3rem] bg-gradient-to-br from-cyan-600 to-teal-700 p-12 text-center relative overflow-hidden group shadow-2xl shadow-cyan-900/20">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Still confused which path to choose?</h2>
            <p className="text-cyan-100 mb-8 max-w-2xl mx-auto">
              Schedule a free 1-on-1 career counseling session with our expert mentors and get a personalized learning roadmap.
            </p>
            <button className="px-8 py-4 bg-white text-cyan-950 font-bold rounded-2xl hover:bg-neutral-100 transition-all active:scale-95">
              Book Free Counseling
            </button>
          </div>
          {/* Abstract background shape */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700" />
        </div>
      </section>

      <Footer />

    </div>
  );
}