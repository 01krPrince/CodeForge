"use client";

import Link from "next/link";
import { 
  Code2, Github, Linkedin, Twitter, Mail, ArrowUpRight, 
  MapPin, Phone, Globe, MessageSquare, Instagram, Youtube 
} from "lucide-react";

const tickerItems = [
  { text: "20% Off New Enrollments" },
  { text: "100% Job Guarantee" },
  { text: "Paid Internships" },
  { text: "Expert Mentorship" },
  { text: "Master System Design" },
  { text: "Cracking FAANG 2026" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scroll-left {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        @keyframes scroll-right {
          0% { transform: translate3d(-50%, 0, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }
        .track-left { display: flex; width: max-content; animation: scroll-left 30s linear infinite; }
        .track-right { display: flex; width: max-content; animation: scroll-right 25s linear infinite; }
        .track-left:hover, .track-right:hover { animation-play-state: paused; }
      `}} />

      <div className="relative py-32 bg-white overflow-hidden z-20 flex items-center justify-center">
        <div className="absolute w-[150%] bg-slate-900 py-2.5 rotate-3 transform-gpu shadow-xl z-0 border-y border-white/10">
          <div className="track-left items-center">
            {[...tickerItems, ...tickerItems].map((item, index) => (
              <div key={`slate-${index}`} className="flex items-center gap-10 mx-10">
                 <span className="text-white font-bold text-[11px] tracking-[0.3em] uppercase italic opacity-90">
                   {item.text}
                 </span>
                 <span className="text-blue-500 text-lg">✦</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative w-[150%] bg-blue-600 py-3 -rotate-3 transform-gpu shadow-2xl z-10 border-y border-blue-400/20">
          <div className="track-right items-center">
            {[...tickerItems, ...tickerItems].reverse().map((item, index) => (
              <div key={`blue-${index}`} className="flex items-center gap-10 mx-10">
                 <span className="text-white font-black text-[12px] tracking-[0.2em] uppercase drop-shadow-sm">
                   {item.text}
                 </span>
                 <span className="text-white/40 text-lg">✦</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#020617] relative text-slate-400">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/[0.03] rounded-full blur-[150px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10 pt-24 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
            
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center gap-3 group mb-8">
                <div className="bg-blue-600 p-2.5 rounded-xl shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform duration-300">
                  <Code2 className="h-6 w-6 text-white stroke-[2.5]" />
                </div>
                <div>
                  <span className="font-bold text-2xl tracking-tight text-white">CodeForge</span>
                  <span className="block text-[8px] font-mono tracking-[0.4em] text-blue-500 -mt-1 uppercase font-bold">Academy</span>
                </div>
              </Link>
              <p className="text-sm text-slate-500 leading-relaxed mb-8 max-w-sm">
                CodeForge Academy is more than just a coding bootcamp. We are an elite engineering community dedicated to producing the next generation of tech leaders through immersive, hands-on learning.
              </p>
              <div className="flex items-center gap-4">
                {[Twitter, Linkedin, Github, Instagram, Youtube].map((Icon, i) => (
                  <a key={i} href="#" className="p-2.5 rounded-lg bg-white/[0.03] text-slate-500 hover:text-white border border-white/[0.05] transition-all hover:border-blue-500/50">
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold text-sm mb-8 uppercase tracking-widest border-l-2 border-blue-500 pl-3">Explore</h4>
              <ul className="space-y-4 text-sm font-medium">
                {[
                  { n: 'All Courses', h: '#courses' },
                  { n: 'Online Compiler', h: '/compiler' },
                  { n: 'Our Mentors', h: '#mentors' },
                  { n: 'Placement Cell', h: '#' },
                  { n: 'Scholarships', h: '#' }
                ].map((item) => (
                  <li key={item.n}>
                    <Link href={item.h} className="hover:text-blue-400 transition-all flex items-center group">
                      {item.n} <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-sm mb-8 uppercase tracking-widest border-l-2 border-blue-500 pl-3">Reach Us</h4>
              <ul className="space-y-5 text-sm">
                <li className="flex gap-3">
                  <MapPin className="w-5 h-5 text-blue-500 shrink-0" />
                  <span className="text-slate-500">Boring Road, Patna, Bihar, India - 800001</span>
                </li>
                <li className="flex gap-3 items-center">
                  <Phone className="w-5 h-5 text-blue-500 shrink-0" />
                  <span className="text-slate-500">+91 98765 43210</span>
                </li>
                <li className="flex gap-3 items-center">
                  <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                  <span className="text-slate-500">admissions@codeforge.io</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-sm mb-8 uppercase tracking-widest border-l-2 border-blue-500 pl-3">Get Updates</h4>
              <p className="text-xs text-slate-500 mb-6 leading-relaxed">
                Subscribe to get the latest tech roadmap and batch announcements.
              </p>
              <form className="relative flex items-center mb-4" onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="Email address" className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl py-3 pl-4 pr-12 text-sm text-white focus:outline-none focus:border-blue-500/50" />
                <button className="absolute right-2 p-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/20">
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </form>
              <Link href="#" className="text-[10px] text-blue-500/80 hover:text-blue-400 flex items-center gap-1 transition-colors">
                <MessageSquare className="w-3 h-3" /> Chat with an Expert
              </Link>
            </div>
          </div>

          <div className="pt-8 border-t border-white/[0.05] flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-[10px] font-bold tracking-widest text-slate-600 uppercase">
              © {new Date().getFullYear()} CodeForge Academy. Designed for Engineering Excellence.
            </div>
            
            <div className="flex items-center gap-8 text-[10px] font-bold tracking-widest text-slate-600 uppercase">
              <Link href="#" className="hover:text-slate-400">Privacy Policy</Link>
              <Link href="#" className="hover:text-slate-400">Terms of Use</Link>
              <div className="flex items-center gap-2 text-blue-500/60">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                System: Operational
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}