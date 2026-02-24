"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { 
  Code2, Play, TerminalSquare, FileCode2, ChevronLeft, ChevronRight, 
  Loader2, Plus, Sun, Moon, X, Edit2, Columns, Rows, Maximize2, Minimize2, Trash2
} from "lucide-react";

type FileData = {
  id: string;
  name: string;
  content: string;
  lang: string;
  isOpen: boolean;
};

const TEMPLATES: Record<string, string> = {
  java: `public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello Java!");\n    }\n}`,
  python: `print("Hello Python!")`,
  cpp: `#include <iostream>\nint main() {\n    std::cout << "Hello C++!";\n    return 0;\n}`,
  javascript: `console.log("Hello Node.js!");`
};

export default function CompilerPage() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [layout, setLayout] = useState<"split" | "bottom">("split");
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(240);
  const [terminalSize, setTerminalSize] = useState(320);
  
  const [language, setLanguage] = useState("java");
  const [files, setFiles] = useState<FileData[]>([]);
  const [activeFileId, setActiveFileId] = useState<string>("");
  const [isRunning, setIsRunning] = useState(false);
  const [output, setOutput] = useState<string | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const saved = sessionStorage.getItem("codeforge_work");
    if (saved) {
      const parsed = JSON.parse(saved);
      setFiles(parsed.files);
      setActiveFileId(parsed.activeId);
    } else {
      const initialId = "1";
      setFiles([{ id: initialId, name: "Main.java", content: TEMPLATES.java, lang: "java", isOpen: true }]);
      setActiveFileId(initialId);
    }
  }, []);

  useEffect(() => {
    if (files.length > 0) {
      sessionStorage.setItem("codeforge_work", JSON.stringify({ files, activeId: activeFileId }));
    }
  }, [files, activeFileId]);

  const updateCode = (val: string) => {
    setFiles(prev => prev.map(f => f.id === activeFileId ? { ...f, content: val } : f));
  };

  // --- PSEUDO-COMPILER ENGINE ---
  const handleRun = () => {
    const currentFile = files.find(f => f.id === activeFileId);
    if (!currentFile) return;

    setIsRunning(true);
    setOutput(null); 

    setTimeout(() => {
      setIsRunning(false);
      const timestamp = new Date().toLocaleTimeString();
      let logs = `[${timestamp}] Compilation started...\n`;

      // 1. Basic Syntax Validation (The "Real" feel)
      const code = currentFile.content;
      let hasError = false;
      let errorMsg = "";

      if (currentFile.lang === 'java') {
        if (!code.includes("public class")) {
          hasError = true;
          errorMsg = "error: class, interface, or enum expected";
        } else if (!code.includes(";")) {
          hasError = true;
          errorMsg = "error: ';' expected";
        }
      }

      if (hasError) {
        setOutput(logs + `\n${currentFile.name}: ${errorMsg}\nBuild Failed.`);
        return;
      }

      // 2. Execution Simulation
      logs += `$ javac ${currentFile.name}\n$ java ${currentFile.name.split('.')[0]}\n--------------------------\n`;
      
      const match = code.match(/["'](.*?)["']/);
      const result = match ? match[1] : "Program executed with no output.";
      
      setOutput(logs + result + `\n\nProcess finished with exit code 0.`);
    }, 1500);
  };

  // --- UI RESIZING ---
  const startResizingSidebar = (e: React.MouseEvent) => {
    const onMouseMove = (m: MouseEvent) => setSidebarWidth(m.clientX);
    const onMouseUp = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  const startResizingTerminal = (e: React.MouseEvent) => {
    const startPos = layout === 'split' ? e.clientX : e.clientY;
    const startSize = terminalSize;
    const onMouseMove = (m: MouseEvent) => {
      const currentPos = layout === 'split' ? m.clientX : m.clientY;
      setTerminalSize(startSize + (startPos - currentPos));
    };
    const onMouseUp = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  const activeFile = files.find(f => f.id === activeFileId);
  const openTabs = files.filter(f => f.isOpen);
  const s = {
    bg: theme === "dark" ? "bg-[#0d1117]" : "bg-white",
    border: theme === "dark" ? "border-white/10" : "border-neutral-200",
    editor: theme === "dark" ? "bg-[#161b22]" : "bg-neutral-50",
    text: theme === "dark" ? "text-neutral-300" : "text-neutral-900"
  };

  return (
    <div ref={containerRef} className={`h-screen w-full flex flex-col overflow-hidden ${s.bg} ${s.text}`}>
      
      {/* NAVBAR */}
      <nav className={`h-12 shrink-0 border-b ${s.border} flex items-center justify-between px-4 z-50`}>
        <div className="flex items-center gap-4">
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-1 hover:bg-emerald-500/10 rounded">
            {isSidebarOpen ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
          </button>
          <div className="flex items-center gap-2 font-bold text-emerald-500">
            <Code2 size={20} /> <span>CodeForge</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="opacity-60 hover:opacity-100">
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </nav>

      <div className="flex-1 flex overflow-hidden relative">
        {/* SIDEBAR */}
        {isSidebarOpen && (
          <aside style={{ width: sidebarWidth }} className={`flex flex-col shrink-0 ${theme === 'dark' ? 'bg-[#0d1117]' : 'bg-neutral-100'} border-r ${s.border}`}>
            <div className="p-3">
              <select value={language} onChange={(e) => setLanguage(e.target.value)} className="w-full bg-emerald-500/10 border border-emerald-500/30 rounded px-2 py-1 text-xs outline-none">
                <option value="java">Java 17</option>
                <option value="python">Python 3</option>
                <option value="cpp">C++ 20</option>
              </select>
            </div>
            <div className="px-4 py-2 flex items-center justify-between text-[10px] uppercase font-bold text-neutral-500 tracking-widest border-b border-white/5">
              <span>Files</span>
              <button onClick={() => {
                 const name = prompt("File name:");
                 if(name) setFiles([...files, { id: Date.now().toString(), name, content: TEMPLATES[language] || "", lang: language, isOpen: true }]);
              }} className="hover:text-emerald-500"><Plus size={14}/></button>
            </div>
            <div className="flex-1 overflow-y-auto">
              {files.map(f => (
                <div key={f.id} onClick={() => setActiveFileId(f.id)} className={`px-4 py-1.5 text-sm cursor-pointer border-l-2 ${activeFileId === f.id ? 'bg-emerald-500/10 text-emerald-500 border-emerald-500' : 'hover:bg-white/5 border-transparent opacity-70'}`}>
                  {f.name}
                </div>
              ))}
            </div>
          </aside>
        )}
        <div onMouseDown={startResizingSidebar} className="w-1 cursor-col-resize hover:bg-emerald-500 z-10" />

        {/* WORKSPACE */}
        <main className={`flex-1 flex ${layout === 'split' ? 'flex-row' : 'flex-col'} overflow-hidden`}>
          <div className="flex-1 flex flex-col min-w-0">
            
            {/* TABS & RUN RECTANGLE */}
            <div className={`h-10 flex items-center justify-between border-b ${s.border} bg-black/10`}>
              <div className="flex items-center overflow-x-auto no-scrollbar h-full">
                {openTabs.map(t => (
                  <div key={t.id} onClick={() => setActiveFileId(t.id)} className={`px-4 h-full flex items-center gap-2 text-xs cursor-pointer border-r ${s.border} ${activeFileId === t.id ? `${s.editor} text-emerald-500 border-t-2 border-t-emerald-500` : ''}`}>
                    {t.name}
                    <X size={12} className="ml-2 hover:text-red-500" onClick={(e) => { e.stopPropagation(); setFiles(files.map(f => f.id === t.id ? {...f, isOpen: false} : f)); }} />
                  </div>
                ))}
              </div>

              {/* RUN BUTTON POSITIONED IN YOUR RECTANGLE */}
              <div className="px-6 flex items-center h-full">
                <button 
                  onClick={handleRun} 
                  disabled={isRunning}
                  className="flex items-center gap-2 px-4 py-1.5 bg-emerald-500 hover:bg-emerald-400 text-neutral-950 text-[11px] font-black rounded shadow-lg transition-all active:scale-95 disabled:opacity-30"
                >
                  {isRunning ? <Loader2 size={12} className="animate-spin" /> : <Play size={12} fill="currentColor" />}
                  RUN
                </button>
              </div>
            </div>

            <div className={`flex-1 ${s.editor} flex relative overflow-hidden`}>
              {activeFile && (
                <>
                  <div className={`w-12 text-right py-4 pr-4 font-mono text-[11px] text-neutral-600 border-r ${s.border} select-none opacity-50`}>
                    {activeFile.content.split('\n').map((_, i) => <div key={i} className="leading-6">{i + 1}</div>)}
                  </div>
                  <textarea value={activeFile.content} onChange={(e) => updateCode(e.target.value)} className="flex-1 bg-transparent p-4 font-mono text-[14px] leading-6 outline-none resize-none text-inherit caret-emerald-500" spellCheck="false" />
                </>
              )}
            </div>
          </div>

          <div onMouseDown={startResizingTerminal} className={`${layout === 'split' ? 'w-1 cursor-col-resize' : 'h-1 cursor-row-resize'} hover:bg-emerald-500 z-10`} />

          {/* TERMINAL */}
          <section style={{ [layout === 'split' ? 'width' : 'height']: terminalSize }} className={`shrink-0 flex flex-col ${s.bg} ${layout === 'split' ? 'border-l' : 'border-t'} ${s.border}`}>
            <div className={`h-9 flex items-center px-4 border-b ${s.border} justify-between bg-black/20`}>
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-emerald-500">
                <TerminalSquare size={14} /> Output
              </div>
              <button onClick={() => setOutput(null)} className="opacity-50 hover:opacity-100"><Trash2 size={14}/></button>
            </div>
            <div className="flex-1 p-5 font-mono text-[13px] overflow-y-auto leading-relaxed">
              {isRunning ? (
                <div className="flex items-center gap-3 text-emerald-500 animate-pulse">
                   <Loader2 size={14} className="animate-spin" /> Compiling...
                </div>
              ) : (
                <pre className="opacity-90 whitespace-pre-wrap">{output || "Waiting for execution..."}</pre>
              )}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}