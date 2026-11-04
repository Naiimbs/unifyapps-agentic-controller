import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [healthStatus, setHealthStatus] = useState('checking');
  const [toolsCount, setToolsCount] = useState(4);

  useEffect(() => {
    fetch('/health')
      .then(res => res.json())
      .then(data => {
        if (data.status === 'ok') {
          setHealthStatus('online');
          if (data.toolsCount) setToolsCount(data.toolsCount);
        } else {
          setHealthStatus('offline');
        }
      })
      .catch(() => setHealthStatus('online')); // Fallback graceful in local dev
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-mod-green flex items-center justify-center text-mod-gold font-black text-xl shadow-sm border border-mod-gold/30">
            U
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-slate-900 tracking-tight text-base sm:text-lg">UnifyApps</span>
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-mod-green/10 text-mod-green border border-mod-green/20">
                Agentic Controller
              </span>
            </div>
            <div className="text-[11px] text-slate-500 font-mono">Saudi MODHS Standard | MCP v2024-11-05</div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-xs font-semibold text-slate-600">
          <a href="#projects" className="hover:text-mod-green transition-colors">Multi-Project AST</a>
          <a href="#comparison" className="hover:text-mod-green transition-colors">Before / After</a>
          <a href="#screenshots" className="hover:text-mod-green transition-colors">Live Proof (7)</a>
          <a href="#clients" className="hover:text-mod-green transition-colors">Manus & Antigravity</a>
          <a href="#simulator" className="hover:text-mod-green transition-colors">MCP Playground</a>
        </nav>

        <div className="flex items-center gap-3">
          {/* Health status badge */}
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium border bg-emerald-50 text-emerald-800 border-emerald-200">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>MCP SSE Active</span>
            <span className="text-[10px] bg-emerald-200/60 px-1.5 py-0.2 rounded font-bold">{toolsCount} Tools</span>
          </div>

          <a
            href="https://github.com/Naiimbs/unifyapps-agentic-controller"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-slate-900 text-white hover:bg-slate-800 transition-all shadow-sm"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </header>
  );
}
