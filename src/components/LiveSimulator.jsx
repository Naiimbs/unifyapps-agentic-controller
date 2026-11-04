import React, { useState } from 'react';

const AVAILABLE_TOOLS = [
  {
    name: 'unify_list_projects',
    desc: 'List all accessible UnifyApps applications across workspaces',
    defaultArgs: {}
  },
  {
    name: 'unify_get_page_blocks',
    desc: 'Retrieve AST component hierarchy & block IDs for a page',
    defaultArgs: { appId: 'agent-sandbox-test', pageSlug: 'homepage' }
  },
  {
    name: 'unify_apply_scoped_css',
    desc: 'Surgically apply custom CSS scoped to [data-block-id]',
    defaultArgs: {
      appId: 'agent-sandbox-test',
      blockId: 'root_id',
      css: 'background: #f8fafc; border: 2px solid #125939; border-radius: 16px;',
      theme: 'saudi-mod-luxury'
    }
  },
  {
    name: 'unify_create_reusable_module',
    desc: 'Package styled block into a cross-app template module',
    defaultArgs: {
      appId: 'agent-sandbox-test',
      blockId: 'root_id',
      moduleName: 'Saudi_MOD_Header_Container',
      category: 'Branded UI'
    }
  }
];

export default function LiveSimulator() {
  const [selectedTool, setSelectedTool] = useState(AVAILABLE_TOOLS[0]);
  const [argsText, setArgsText] = useState(JSON.stringify(AVAILABLE_TOOLS[0].defaultArgs, null, 2));
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState(null);

  const handleSelectTool = (tool) => {
    setSelectedTool(tool);
    setArgsText(JSON.stringify(tool.defaultArgs, null, 2));
    setOutput(null);
  };

  const handleExecute = async () => {
    setLoading(true);
    setOutput(null);

    try {
      const parsedArgs = JSON.parse(argsText);
      const res = await fetch('/mcp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          jsonrpc: '2.0',
          id: Date.now(),
          method: 'tools/call',
          params: {
            name: selectedTool.name,
            arguments: parsedArgs
          }
        })
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      setOutput(data);
    } catch (err) {
      // Fallback local mock simulation if running on standalone client
      setOutput({
        jsonrpc: '2.0',
        id: Date.now(),
        result: {
          content: [
            {
              type: 'text',
              text: `Simulated local execution of ${selectedTool.name} (${err.message})`
            }
          ]
        }
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="simulator" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-mod-green px-3 py-1 rounded-full bg-mod-green/10 border border-mod-green/20">
            Interactive Playground
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Live MCP Tools Simulator
          </h2>
          <p className="text-slate-600 mt-3 text-base">
            Test any UnifyApps MCP tool directly in your browser. This playground calls the backend endpoint over JSON-RPC 2.0 exactly as Manus or Antigravity does.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Tool Selector & Arguments Input */}
          <div className="lg:col-span-5 space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-2">
                1. Select MCP Tool:
              </label>
              <div className="space-y-2">
                {AVAILABLE_TOOLS.map(t => (
                  <button
                    key={t.name}
                    onClick={() => handleSelectTool(t)}
                    className={`w-full text-left p-3 rounded-xl border text-xs transition-all flex flex-col ${
                      selectedTool.name === t.name
                        ? 'bg-mod-green/5 border-mod-green shadow-xs'
                        : 'bg-slate-50 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono font-bold text-slate-900">{t.name}</span>
                      <span className={`text-[10px] font-bold ${selectedTool.name === t.name ? 'text-mod-green' : 'text-slate-400'}`}>
                        {selectedTool.name === t.name ? '● Selected' : 'Select'}
                      </span>
                    </div>
                    <span className="text-[11px] text-slate-500 mt-1">{t.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-2">
                2. Arguments (JSON):
              </label>
              <textarea
                rows={5}
                value={argsText}
                onChange={e => setArgsText(e.target.value)}
                className="w-full bg-slate-900 text-amber-300 font-mono text-xs p-3.5 rounded-xl border border-slate-800 shadow-inner focus:outline-hidden focus:border-mod-gold"
              />
            </div>

            <button
              onClick={handleExecute}
              disabled={loading}
              className="w-full py-3.5 rounded-xl bg-mod-green text-white font-bold text-xs uppercase tracking-wider hover:bg-emerald-900 transition-all shadow-md flex items-center justify-center gap-2 disabled:opacity-50"
            >
              <span>{loading ? 'Executing on UnifyApps...' : `⚡ Execute ${selectedTool.name}`}</span>
            </button>
          </div>

          {/* JSON-RPC 2.0 Output Screen */}
          <div className="lg:col-span-7 bg-slate-950 rounded-2xl p-6 border border-slate-800 font-mono text-xs text-slate-200 shadow-xl flex flex-col justify-between min-h-[380px]">
            <div>
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-slate-400">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>JSON-RPC 2.0 Response</span>
                </span>
                <span className="text-[11px] text-slate-500 font-sans">Endpoint: POST /mcp</span>
              </div>

              {output ? (
                <pre className="text-emerald-400 overflow-x-auto max-h-[340px] leading-relaxed">
                  {JSON.stringify(output, null, 2)}
                </pre>
              ) : (
                <div className="py-20 text-center text-slate-500 italic">
                  Select a tool on the left and click "Execute" to inspect live JSON-RPC execution.
                </div>
              )}
            </div>

            <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-500 flex justify-between font-sans">
              <span>Standard: Model Context Protocol</span>
              <span>Ready for Manus & Antigravity</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
