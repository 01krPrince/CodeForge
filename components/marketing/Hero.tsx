"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Terminal, Play, Code2, TerminalSquare, ChevronRight } from "lucide-react";

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState("code");

  return (
    <section className="relative bg-[#020617] min-h-screen flex items-center overflow-hidden border-b border-white/[0.05]">
      
      {/* === MINIMALIST BACKGROUND === */}
      {/* Background is now static and deep, with very subtle glows */}
      <div className="absolute inset-0 tech-grid opacity-[0.03]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.03)_0,transparent_70%)]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10 w-full py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Left Side: Professional Typography */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Minimal Badge */}
            <Link href="/batches" className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/5 border border-blue-500/20 text-blue-400 text-xs font-medium mb-8 hover:bg-blue-500/10 transition-all">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              Admission open for Batch 2026
              <ChevronRight size={14} />
            </Link>

            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 tracking-tight leading-[1.1]">
              Engineering excellence <br />
              <span className="text-slate-400 italic font-serif">starts here.</span>
            </h1>

            <p className="text-lg text-slate-400 mb-12 leading-relaxed max-w-lg">
              A meticulously curated curriculum designed for the next generation of software engineers. Learn by building, guided by industry veterans.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
              <Link
                href="#courses"
                className="w-full sm:w-auto flex items-center justify-center px-8 py-4 rounded-full font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-all shadow-lg shadow-blue-500/20"
              >
                View Curriculum <ArrowRight className="ml-2 w-4 h-4" />
              </Link>

              <Link
                href="/compiler"
                className="w-full sm:w-auto flex items-center justify-center px-8 py-4 rounded-full font-semibold text-slate-300 border border-slate-800 hover:bg-slate-900 transition-all"
              >
                <Terminal className="mr-2 w-4 h-4" />
                Live Playground
              </Link>
            </div>
          </div>

          {/* Right Side: Sleek IDE Window */}
          <div className="relative w-full max-w-xl mx-auto group">
            {/* Subtle glow instead of loud gradient */}
            <div className="absolute -inset-0.5 bg-blue-500/10 rounded-2xl blur-2xl opacity-50" />

            <div className="relative flex flex-col bg-[#0b1120] border border-white/[0.08] rounded-xl shadow-2xl overflow-hidden">

              {/* Window Header: MacOS Style */}
              <div className="flex items-center justify-between px-5 py-4 bg-slate-900/50 border-b border-white/[0.05]">
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-medium text-slate-500 tracking-wider uppercase">
                    <Code2 size={12} className="text-blue-500" />
                    UserAuthentication.cpp
                  </div>
                </div>
                <button
                  onClick={() => setActiveTab(activeTab === "code" ? "preview" : "code")}
                  className="px-3 py-1 rounded bg-blue-500/10 text-blue-400 text-[10px] font-bold uppercase tracking-wider hover:bg-blue-500/20 transition-all"
                >
                  {activeTab === "code" ? "Run Solution" : "Back to Editor"}
                </button>
              </div>

              {/* Editor Content: Focus on Readability */}
              <div className="relative h-[340px] w-full bg-[#0b1120]">
                {activeTab === 'code' ? (
                   <div className="p-8 font-mono text-[13px] leading-relaxed text-slate-400 overflow-auto h-full">
                      <div className="flex gap-6">
                        <div className="flex flex-col text-slate-700 select-none text-right opacity-50">
                          <span>01</span><span>02</span><span>03</span><span>04</span><span>05</span><span>06</span><span>07</span><span>08</span>
                        </div>
                        <div className="flex flex-col whitespace-pre">
                          <span><span className="text-blue-400">#include</span> <span className="text-slate-300">&lt;iostream&gt;</span></span>
                          <span><span className="text-blue-400">using namespace</span> std;</span>
                          <br />
                          <span><span className="text-blue-500">int</span> <span className="text-slate-200">main</span>() {"{"}</span>
                          <span>  <span className="text-slate-600">// Build for the future</span></span>
                          <span>  string mission = <span className="text-blue-300">"Master Code"</span>;</span>
                          <span>  cout &lt;&lt; <span className="text-blue-300">"Mission: "</span> &lt;&lt; mission;</span>
                          <span>  <span className="text-blue-500">return</span> 0;</span>
                          <span>{"}"}</span>
                        </div>
                      </div>
                   </div>
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center animate-in fade-in duration-500">
                    <div className="p-4 rounded-xl bg-blue-500/5 border border-blue-500/10 mb-6">
                      <TerminalSquare className="w-8 h-8 text-blue-500" />
                    </div>
                    <div className="text-xl font-medium text-white mb-2">Build Successful</div>
                    <div className="text-slate-500 text-sm font-mono">
                      $ Output: Mission: Master Code
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}