import React from 'react';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-100 py-16 sm:py-24 border-b border-slate-200">
      {/* Decorative ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-mod-green/5 blur-3xl rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-mod-green/10 border border-mod-green/20 text-mod-green text-xs font-semibold mb-6 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-mod-gold animate-pulse"></span>
          <span>Full-Stack React & MCP SSE Server v2.0</span>
          <span className="text-slate-400">|</span>
          <span className="text-slate-600 font-normal">Remote Cloud & Stdio Ready</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] max-w-4xl mx-auto">
          Autonomous Agentic Control for{' '}
          <span className="text-mod-green underline decoration-mod-gold decoration-4 underline-offset-8">
            UnifyApps
          </span>
        </h1>

        <p className="mt-6 text-base sm:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto font-normal">
          Empowering external AI coding agents (<strong className="text-slate-900 font-semibold">Manus, Antigravity, Claude, Cursor</strong>) 
          to query AST blocks, apply surgical scoped CSS, and package reusable template modules directly inside UnifyApps—across{' '}
          <strong className="text-slate-900 font-semibold">any project</strong> and <strong className="text-slate-900 font-semibold">any environment</strong>.
        </p>

        <div className="mt-10 flex flex-wrap gap-4 justify-center items-center">
          <a
            href="#clients"
            className="px-6 py-3.5 rounded-xl font-bold text-sm bg-mod-green text-white hover:bg-emerald-900 transition-all shadow-md hover:shadow-lg flex items-center gap-2"
          >
            <span>Connect Manus via SSE</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>

          <a
            href="#simulator"
            className="px-6 py-3.5 rounded-xl font-bold text-sm bg-white text-slate-800 border border-slate-300 hover:bg-slate-50 transition-all shadow-xs flex items-center gap-2"
          >
            <span className="text-mod-gold">⚡</span>
            <span>Test MCP Tools Live</span>
          </a>

          <a
            href="#screenshots"
            className="px-6 py-3.5 rounded-xl font-bold text-sm bg-slate-900 text-slate-100 hover:bg-slate-800 transition-all shadow-xs flex items-center gap-2"
          >
            <span>View Real Proof (7 Captures)</span>
          </a>
        </div>

        {/* Quick Highlights Grid */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto text-left">
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
            <div className="text-2xl font-black text-mod-green">100%</div>
            <div className="text-xs text-slate-500 font-medium mt-1">Zero Global CSS Pollution</div>
            <div className="text-[11px] text-slate-400 mt-0.5">Scoped by [data-block-id]</div>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
            <div className="text-2xl font-black text-mod-gold">Dual Mode</div>
            <div className="text-xs text-slate-500 font-medium mt-1">SSE Stream & JSON-RPC</div>
            <div className="text-[11px] text-slate-400 mt-0.5">Native support for Manus Cloud</div>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
            <div className="text-2xl font-black text-slate-800">Multi-Project</div>
            <div className="text-xs text-slate-500 font-medium mt-1">MediaCenter, Overtime, Sandbox</div>
            <div className="text-[11px] text-slate-400 mt-0.5">Universal App ID routing</div>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
            <div className="text-2xl font-black text-mod-green">A2A Bridge</div>
            <div className="text-xs text-slate-500 font-medium mt-1">Agent-to-Agent Protocol</div>
            <div className="text-[11px] text-slate-400 mt-0.5">Full API Gateway integration</div>
          </div>
        </div>
      </div>
    </section>
  );
}
