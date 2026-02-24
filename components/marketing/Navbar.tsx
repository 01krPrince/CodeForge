"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Code2, Menu, X, LogIn, Sparkles } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-60 transition-all duration-300 border-b ${
        scrolled 
          ? "bg-neutral-950/80 backdrop-blur-xl border-white/10 py-0" 
          : "bg-transparent border-transparent py-2"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="bg-gradient-to-br from-teal-400 to-cyan-500 p-2.5 rounded-xl shadow-lg shadow-teal-500/20 group-hover:scale-110 transition-transform duration-300">
                <Code2 className="h-6 w-6 text-neutral-950 stroke-[2.5]" />
              </div>
            </div>
            <div>
              <span className="font-extrabold text-2xl tracking-tight text-white">CodeForge</span>
              <span className="block text-[8px] font-mono tracking-[0.3em] text-teal-400 -mt-1">ACADEMY</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
            <Link href="/courses" className="hover:text-white transition-colors">Programs</Link>
            <Link href="/compiler" className="hover:text-white transition-colors">Live Compiler</Link>
            <Link href="#testimonials" className="hover:text-white transition-colors">Success Stories</Link>
            <Link href="#mentors" className="hover:text-white transition-colors">Mentors</Link>
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-5">
            {/* <Link href="/auth/login" className="flex items-center gap-2 text-neutral-400 hover:text-white font-medium transition-colors">
              <LogIn className="w-4 h-4" /> Log in
            </Link> */}
            <Link 
              href="/demo" 
              className="group flex items-center gap-2 px-6 py-2.5 bg-white/5 border border-white/10 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white/20 transition-all backdrop-blur"
            >
              <Sparkles className="w-4 h-4 text-teal-400 group-hover:scale-110 transition-transform" /> 
              Book Free Trial
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-neutral-400 hover:text-white transition-colors p-2"
          >
            {isMobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-neutral-950/95 backdrop-blur-xl border-b border-white/10 transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-6 flex flex-col gap-6 text-base font-medium text-neutral-300">
          <Link href="#courses" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-white">Programs</Link>
          <Link href="/student/compiler" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-white">Live Compiler</Link>
          <Link href="#testimonials" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-white">Success Stories</Link>
          <Link href="#mentors" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-white">Mentors</Link>
          
          <div className="h-px w-full bg-white/10 my-2" />
          
          <Link href="/login" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2 hover:text-white">
            <LogIn className="w-4 h-4" /> Log in
          </Link>
          <Link 
            href="/demo" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-teal-400 to-emerald-400 text-neutral-950 font-bold rounded-xl"
          >
            <Sparkles className="w-4 h-4" /> Book Free Trial
          </Link>
        </div>
      </div>
    </nav>
  );
}