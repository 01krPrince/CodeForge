"use client";

import Link from "next/link";
import { Code2, Github, Linkedin, Twitter, Mail, ArrowUpRight } from "lucide-react";

const tickerItems = [
  { type: "text", text: "20% Off New Enrollments" },
  { type: "image", src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80", shape: "circle" },
  { type: "text", text: "100% Job Guarantee" },
  { type: "image", src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80", shape: "rect" },
  { type: "text", text: "Paid Internships" },
  { type: "image", src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=100&q=80", shape: "circle" },
  { type: "text", text: "Expert Mentorship" },
  { type: "image", src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80", shape: "rect" },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#050b14] overflow-hidden text-neutral-300">
      
      {/* --- CUSTOM CSS FOR SMOOTH INFINITE SCROLL --- */}
      <style dangerouslySetInnerHTML={{__html: `
        .ticker-track {
          display: flex;
          width: max-content;
          will-change: transform;
          animation: ticker 40s linear infinite; 
        }
        .ticker-track:hover {
          animation-play-state: paused;
        }
        @keyframes ticker {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
      `}} />

      {/* --- SLEEK AUTO SCROLLING BANNER (TILTED) --- */}
      <div className="relative w-[110%] -left-[5%] mt-12 bg-[#0a1324]/80 border-y border-cyan-500/20 py-3 flex overflow-hidden backdrop-blur-md z-20 -rotate-2 transform-gpu shadow-[0_0_40px_-10px_rgba(6,182,212,0.15)]">
        <div className="ticker-track items-center px-4">
          {[...tickerItems, ...tickerItems].map((item, index) => (
            <div key={index} className="flex items-center shrink-0">
              {item.type === "text" ? (
                <div className="flex items-center gap-6 mx-6">
                  <span className="text-cyan-500/40 text-sm">✦</span>
                  <span className="text-xs md:text-sm font-semibold tracking-[0.15em] uppercase text-cyan-50 drop-shadow-[0_0_8px_rgba(6,182,212,0.3)]">
                    {item.text}
                  </span>
                </div>
              ) : (
                <div className="relative shrink-0 mx-2">
                  <img 
                    src={item.src} 
                    alt="Student" 
                    className={`w-8 h-8 object-cover grayscale opacity-80 border border-white/10 shadow-lg ${
                      item.shape === 'circle' ? 'rounded-full' : 'rounded-md'
                    }`}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* --- AMBIENT DEEP SEA GLOW --- */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/5 rounded-full mix-blend-screen blur-[120px] pointer-events-none z-0" />

      {/* --- ORIGINAL FOOTER DATA --- */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 pt-20 pb-12 mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 group mb-6">
              <div className="bg-gradient-to-br from-teal-400 to-cyan-500 p-2.5 rounded-xl shadow-lg shadow-teal-500/20 group-hover:scale-105 transition-transform duration-300">
                <Code2 className="h-6 w-6 text-[#050b14] stroke-[2.5]" />
              </div>
              <div>
                <span className="font-extrabold text-2xl tracking-tight text-white">CodeForge</span>
                <span className="block text-[8px] font-mono tracking-[0.3em] text-teal-400 -mt-1">ACADEMY</span>
              </div>
            </Link>
            <p className="text-sm text-neutral-400 leading-relaxed mb-6">
              Empowering the next generation of top-tier software engineers through immersive, industry-aligned learning.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a href="#" className="p-2.5 rounded-full bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10 transition-colors border border-white/5">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="p-2.5 rounded-full bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10 transition-colors border border-white/5">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="p-2.5 rounded-full bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10 transition-colors border border-white/5">
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6 tracking-wide">Learning</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link href="#courses" className="hover:text-cyan-400 transition-colors inline-flex items-center group">
                  Flagship Programs <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity -translate-y-1 group-hover:translate-y-0" />
                </Link>
              </li>
              <li>
                <Link href="/student/compiler" className="hover:text-cyan-400 transition-colors inline-flex items-center group">
                  Live Compiler <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity -translate-y-1 group-hover:translate-y-0" />
                </Link>
              </li>
              <li>
                <Link href="#mentors" className="hover:text-cyan-400 transition-colors inline-flex items-center group">
                  Our Mentors <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity -translate-y-1 group-hover:translate-y-0" />
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="hover:text-cyan-400 transition-colors inline-flex items-center group">
                  Success Stories <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity -translate-y-1 group-hover:translate-y-0" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal / Support */}
          <div>
            <h4 className="text-white font-semibold mb-6 tracking-wide">Support</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/faq" className="hover:text-cyan-400 transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-cyan-400 transition-colors">Contact Us</Link></li>
              <li><Link href="/privacy" className="hover:text-cyan-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-cyan-400 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-6 tracking-wide">Stay Updated</h4>
            <p className="text-sm text-neutral-400 mb-4">
              Get the latest tech news and course updates directly in your inbox.
            </p>
            <form className="relative flex items-center" onSubmit={(e) => e.preventDefault()}>
              <Mail className="absolute left-3 w-4 h-4 text-neutral-500" />
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all"
              />
              <button 
                type="submit" 
                className="absolute right-1.5 p-1.5 bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/30 rounded-lg transition-colors"
              >
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} CodeForge Academy. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Systems Operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}