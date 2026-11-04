import React, { useState } from 'react';

const CLIENT_CONFIGS = {
  'manus-sse': {
    title: 'Manus (Remote Cloud SSE)',
    badge: 'Recommended for Manus',
    desc: 'Connects directly to the hosted HTTPS Server-Sent Events stream without requiring any local files or container cloning.',
    filename: 'Manus Connector JSON',
    code: `{
  "mcpServers": {
    "unifyapps": {
      "type": "sse",
      "url": "https://unifyapps-agentic-controller.mhaf.cloud/mcp/sse"
    }
  }
}`
  },
  'manus-http': {
    title: 'Manus (Remote HTTP POST)',
    badge: 'Alternative HTTP Mode',
    desc: 'Direct HTTP JSON-RPC 2.0 endpoint for clients that support standard POST transport.',
    filename: 'Manus Connector JSON',
    code: `{
  "mcpServers": {
    "unifyapps": {
      "url": "https://unifyapps-agentic-controller.mhaf.cloud/mcp"
    }
  }
}`
  },
  'antigravity': {
    title: 'Antigravity IDE',
    badge: 'Local Stdio Bridge',
    desc: 'Runs the local Node.js stdio bridge inside the IDE sandbox or local project root.',
    filename: '~/.gemini/antigravity/mcp/unifyapps.json',
    code: `{
  "name": "unifyapps",
  "command": "node",
  "args": [
    "./server.js"
  ],
  "env": {
    "UNIFY_BASE_URL": "https://unifyapps-dev.modhs.med.sa",
    "UNIFY_CLIENT_ID": "6aeaedcf41af9153531ebb1f"
  }
}`
  },
  'cursor': {
    title: 'Cursor Editor',
    badge: 'Cursor MCP',
    desc: 'Integrates UnifyApps actions into Cursor composer and inline coding agent.',
    filename: '.cursor/mcp.json',
    code: `{
  "mcpServers": {
    "unifyapps": {
      "type": "sse",
      "url": "https://unifyapps-agentic-controller.mhaf.cloud/mcp/sse"
    }
  }
}`
  },
  'claude': {
    title: 'Claude Desktop',
    badge: 'Desktop App',
    desc: 'Native macOS and Windows Claude Desktop integration.',
    filename: 'claude_desktop_config.json',
    code: `{
  "mcpServers": {
    "unifyapps": {
      "command": "npx",
      "args": [
        "-y",
        "unifyapps-agentic-controller"
      ],
      "env": {
        "UNIFY_BASE_URL": "https://unifyapps-dev.modhs.med.sa",
        "UNIFY_CLIENT_ID": "6aeaedcf41af9153531ebb1f"
      }
    }
  }
}`
  }
};

export default function ClientConnectors() {
  const [activeTab, setActiveTab] = useState('manus-sse');
  const [copied, setCopied] = useState(false);
  const current = CLIENT_CONFIGS[activeTab];

  const handleCopy = () => {
    navigator.clipboard.writeText(current.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="clients" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-mod-green px-3 py-1 rounded-full bg-mod-green/10 border border-mod-green/20">
            One-Click Setup
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Connect Any AI Coding Agent
          </h2>
          <p className="text-slate-600 mt-3 text-base">
            Pre-configured snippets for Manus, Antigravity IDE, Cursor, and Claude Desktop. Copy and paste directly into your agent's MCP settings.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {Object.keys(CLIENT_CONFIGS).map(k => (
            <button
              key={k}
              onClick={() => { setActiveTab(k); setCopied(false); }}
              className={`px-4 py-2.5 rounded-xl font-bold text-xs transition-all flex items-center gap-2 border ${
                activeTab === k
                  ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${activeTab === k ? 'bg-mod-gold' : 'bg-slate-300'}`}></span>
              <span>{CLIENT_CONFIGS[k].title}</span>
            </button>
          ))}
        </div>

        {/* Configuration Code Box */}
        <div className="max-w-3xl mx-auto bg-slate-950 rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl text-slate-200 font-mono text-xs">
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
            <div>
              <span className="text-[10px] font-bold uppercase text-mod-gold bg-mod-gold/10 px-2.5 py-0.5 rounded border border-mod-gold/30">
                {current.badge}
              </span>
              <div className="text-slate-400 font-sans text-xs mt-1">
                File: <span className="text-slate-200">{current.filename}</span>
              </div>
            </div>
            <button
              onClick={handleCopy}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold font-sans transition-all flex items-center gap-1.5 ${
                copied
                  ? 'bg-emerald-600 text-white'
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700'
              }`}
            >
              <span>{copied ? '✓ Copied!' : 'Copy Config'}</span>
            </button>
          </div>

          <p className="text-slate-400 font-sans text-xs mb-4">
            {current.desc}
          </p>

          <pre className="bg-slate-900 p-4 rounded-xl border border-slate-800 text-amber-300 overflow-x-auto leading-relaxed">
            {current.code}
          </pre>

          <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500 font-sans">
            <span>Protocol: MCP v2024-11-05 (JSON-RPC 2.0)</span>
            <span className="text-emerald-400 font-mono">Status: Production Ready</span>
          </div>
        </div>
      </div>
    </section>
  );
}
