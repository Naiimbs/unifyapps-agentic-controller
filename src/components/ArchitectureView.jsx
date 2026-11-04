import React from 'react';

export default function ArchitectureView() {
  return (
    <section id="architecture" className="py-20 bg-slate-900 text-slate-100 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
            System Architecture
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3 tracking-tight">
            Universal AI-to-UnifyApps Bridge
          </h2>
          <p className="text-slate-400 mt-3 text-base">
            How external AI agents communicate with internal UnifyApps interfaces via MCP, A2A, and the API Gateway.
          </p>
        </div>

        {/* 4-Layer Architecture Diagram */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
          {/* Layer 1 */}
          <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-bold uppercase text-mod-gold bg-mod-gold/10 px-2 py-0.5 rounded border border-mod-gold/30">
                Layer 1: Reasoning
              </span>
              <h3 className="font-bold text-white text-base mt-2">AI Coding Agents</h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Antigravity IDE, Manus Linux Runner, Claude Desktop, Cursor initiate user intent in natural language.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] font-mono text-emerald-400">
              Protocol: MCP JSON-RPC 2.0
            </div>
          </div>

          {/* Layer 2 */}
          <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-bold uppercase text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
                Layer 2: Protocol Bridge
              </span>
              <h3 className="font-bold text-white text-base mt-2">Remote MCP & SSE Server</h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Dual-mode Node/Express bridge translating MCP tool calls into secure tenant mutations.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] font-mono text-emerald-400">
              Transport: HTTPS / SSE Stream
            </div>
          </div>

          {/* Layer 3 */}
          <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-bold uppercase text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/30">
                Layer 3: Enterprise Hub
              </span>
              <h3 className="font-bold text-white text-base mt-2">API Gateway & A2A</h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                OAuth2 client verification (Client ID: 6aeaedcf...), workspace resolution, and workflow authorization.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] font-mono text-emerald-400">
              Auth: Bearer / OAuth2 Client
            </div>
          </div>

          {/* Layer 4 */}
          <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-bold uppercase text-amber-300 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/30">
                Layer 4: Target Application
              </span>
              <h3 className="font-bold text-white text-base mt-2">UnifyApps Canvas & AST</h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Surgical block styling via [data-block-id], grid layout synthesis, and reusable module packaging.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] font-mono text-emerald-400">
              Target: Any Project & Env
            </div>
          </div>
        </div>

        {/* Universal Environment Grid */}
        <div className="bg-slate-950 p-6 sm:p-8 rounded-3xl border border-slate-800 max-w-4xl mx-auto">
          <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-3">
            Multi-Environment Deployment Compatibility
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
            <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
              <div className="text-slate-400">Development Tenant:</div>
              <div className="text-emerald-400 font-bold mt-1">unifyapps-dev.modhs.med.sa</div>
            </div>
            <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
              <div className="text-slate-400">Staging Tenant:</div>
              <div className="text-mod-gold font-bold mt-1">unifyapps-staging.modhs.med.sa</div>
            </div>
            <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
              <div className="text-slate-400">Production Tenant:</div>
              <div className="text-blue-400 font-bold mt-1">app.unifyapps.com (Tenant ID)</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
