"use client";

import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function PageLoader() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  const [isLoading, setIsLoading] = useState(true);
  const [currentPath, setCurrentPath] = useState(pathname);

  // 🔥 THE MAGIC FIX: Jaise hi URL badlega, page paint hone se PEHLE hi loader on ho jayega
  if (pathname !== currentPath) {
    setIsLoading(true);
    setCurrentPath(pathname);
  }

  useEffect(() => {
    // Sirf tabhi timer chalao jab loader true ho
    if (isLoading) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isLoading, pathname, searchParams]);

  // Agar load nahi ho raha, toh bilkul render mat karo takii DOM clean rahe (optional but good for performance)
  if (!isLoading && currentPath === pathname) {
     // Fading effect ko complete hone dene ke liye hum opacity use kar rahe hain
     // Isliye null return karne ke bajaye class change karenge
  }

  return (
    <div 
      // Dhyan do: Jab isLoading true hai, toh transition hata diya hai takii instantly screen cover kar le.
      // Jab false hoga, toh 700ms ka smooth fade-out aayega.
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#050b14] ${
        isLoading 
          ? "opacity-100 pointer-events-auto" 
          : "opacity-0 pointer-events-none transition-opacity duration-700 ease-in-out"
      }`}
    >
      <div className="relative flex flex-col items-center gap-6">
        
        {/* The Premium Glowing Loader */}
        <div className="relative flex items-center justify-center w-24 h-24 rounded-full bg-white/[0.02] shadow-[0_0_60px_-15px_rgba(6,182,212,0.4)] backdrop-blur-sm overflow-hidden border border-white/5">
          
          {/* Spinning Gradient Ring */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-cyan-500/80 to-teal-400 animate-spin" style={{ animationDuration: '2s' }} />
          
          {/* Inner Dark Circle */}
          <div className="absolute inset-[2px] bg-[#050b14] rounded-full flex items-center justify-center">
            
            {/* The < /> Animation */}
            <span className="text-2xl font-mono font-bold tracking-tighter flex items-center gap-1">
              <span className="text-teal-400 animate-pulse">&lt;</span>
              <span className="text-white transform -rotate-12">/</span>
              <span className="text-cyan-400 animate-pulse delay-75">&gt;</span>
            </span>

          </div>
        </div>

        {/* Loading Text */}
        <div className="flex items-center gap-2 text-sm font-mono tracking-widest text-cyan-500/80 uppercase">
          <span>Compiling</span>
          <span className="flex gap-1">
            <span className="animate-bounce delay-75" style={{ animationDelay: '0ms' }}>.</span>
            <span className="animate-bounce delay-150" style={{ animationDelay: '150ms' }}>.</span>
            <span className="animate-bounce delay-300" style={{ animationDelay: '300ms' }}>.</span>
          </span>
        </div>

      </div>
    </div>
  );
}