import React, { useState } from 'react';

const PROJECTS_DATA = {
  'agent-sandbox-test': {
    name: 'Agent Sandbox Test',
    type: 'Sandbox Interface',
    owner: 'Antigravity / Manus',
    status: 'Active (Live Verified)',
    blocks: [
      { id: 'root_id', name: 'body', type: 'container', canStyle: true, css: "background: #f8fafc;\nborder-radius: 16px;\nborder: 2px solid #125939;" }
    ],
    samplePrompt: "Apply Saudi MOD luxury styling with 2px solid #125939 green border and rounded 16px radius to root_id."
  },
  'media-center-app': {
    name: 'MediaCenter_App',
    type: 'Enterprise Web Portal',
    owner: 'Ahmed Atef',
    status: 'Active',
    blocks: [
      { id: 'root_id', name: 'body', type: 'container', children: ['stack173', 'tbl'] },
      { id: 'stack173', name: 'stack173', type: 'stack', parent: 'root_id', children: ['searchbar'] },
      { id: 'searchbar', name: 'searchbar', type: 'stack', parent: 'stack173', children: ['filters', 'viewToggle'] },
      { id: 'filters', name: 'filters', type: 'component', parent: 'searchbar', blockId: 'b_cvQmi', canStyle: true, css: "background: #ffffff;\nborder: 1.6px solid #125939;\nborder-radius: 12px;\npadding: 16px 20px;" },
      { id: 'viewToggle', name: 'viewToggle', type: 'component', parent: 'searchbar' },
      { id: 'tbl', name: 'tbl', type: 'table', parent: 'root_id' }
    ],
    samplePrompt: "Inspect filters block b_cvQmi and apply MOD green 1.6px border with 12px radius."
  },
  'Overtime_App': {
    name: 'Overtime_App',
    type: 'HR Workflow',
    owner: 'Enterprise Admin',
    status: 'Active',
    blocks: [
      { id: 'root_id', name: 'body', type: 'container', children: ['header_grid', 'approval_form'] },
      { id: 'header_grid', name: 'header_grid', type: 'grid', parent: 'root_id' },
      { id: 'approval_form', name: 'approval_form', type: 'form', parent: 'root_id', blockId: 'b_ot992', canStyle: true, css: "background: #f8fafc;\nborder: 1px solid #dba102;\nborder-radius: 8px;" }
    ],
    samplePrompt: "Enhance approval_form with golden accent border #dba102 and subtle slate background."
  },
  'MODHS Facility Profile': {
    name: 'MODHS Facility Profile',
    type: 'Healthcare Services',
    owner: 'Healthcare Ops',
    status: 'Active',
    blocks: [
      { id: 'root_id', name: 'body', type: 'container', children: ['profile_card', 'kpi_tiles'] },
      { id: 'profile_card', name: 'profile_card', type: 'card', parent: 'root_id', blockId: 'b_fac01', canStyle: true, css: "background: #ffffff;\nborder-left: 4px solid #125939;\nborder-radius: 12px;\nbox-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.05);" }
    ],
    samplePrompt: "Apply Saudi MOD standard green left border accent to profile_card container."
  }
};

export default function ProjectSelector() {
  const [selectedApp, setSelectedApp] = useState('agent-sandbox-test');
  const project = PROJECTS_DATA[selectedApp];

  return (
    <section id="projects" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-mod-green px-3 py-1 rounded-full bg-mod-green/10 border border-mod-green/20">
            Universal Scope
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Multi-Project AST & Scoped Styling
          </h2>
          <p className="text-slate-600 mt-3 text-base">
            The MCP bridge is completely application-agnostic. Select any UnifyApps project below to inspect its live Abstract Syntax Tree (AST) and surgical CSS rules.
          </p>
        </div>

        {/* Project Tab Selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {Object.keys(PROJECTS_DATA).map(appKey => (
            <button
              key={appKey}
              onClick={() => setSelectedApp(appKey)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 border ${
                selectedApp === appKey
                  ? 'bg-mod-green text-white border-mod-green shadow-xs'
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${selectedApp === appKey ? 'bg-mod-gold' : 'bg-slate-400'}`}></span>
              <span>{PROJECTS_DATA[appKey].name}</span>
            </button>
          ))}
        </div>

        {/* Dynamic Project Inspector Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Metadata & Tree view */}
          <div className="lg:col-span-6 bg-slate-900 rounded-2xl p-6 border border-slate-800 text-slate-200 font-mono text-xs shadow-md">
            <div className="flex justify-between items-center pb-4 mb-4 border-b border-slate-800">
              <div>
                <span className="text-slate-400 font-sans text-xs">App Slug:</span>{' '}
                <span className="text-emerald-400 font-bold">{selectedApp}</span>
              </div>
              <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-sans font-bold">
                {project.status}
              </span>
            </div>

            <div className="mb-4">
              <span className="text-slate-400 font-sans block mb-1">AST Block Hierarchy:</span>
              <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 max-h-56 overflow-y-auto space-y-1.5">
                {project.blocks.map(b => (
                  <div key={b.id} className="flex items-center justify-between text-slate-300 hover:text-white">
                    <span>
                      <span className="text-slate-500">└─</span>{' '}
                      <span className="text-amber-300 font-semibold">{b.name}</span>{' '}
                      <span className="text-slate-500 text-[11px]">({b.type})</span>
                    </span>
                    <span className="text-emerald-400 text-[11px] bg-slate-900 px-1.5 py-0.5 rounded border border-slate-800">
                      blockId: "{b.blockId || b.id}"
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <span className="text-slate-400 font-sans block mb-1">Agent Natural Language Intent:</span>
              <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 text-slate-300 italic text-[11px]">
                "{project.samplePrompt}"
              </div>
            </div>
          </div>

          {/* Generated Surgical Scoped CSS */}
          <div className="lg:col-span-6 bg-slate-50 rounded-2xl p-6 border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Surgically Injected CSS Rule
                </span>
                <span className="text-[10px] font-bold text-mod-green bg-mod-green/10 px-2 py-0.5 rounded">
                  Zero Global Leakage
                </span>
              </div>

              <p className="text-xs text-slate-600 mb-3">
                Every style injected by the controller is wrapped strictly with <code className="text-mod-green font-bold bg-slate-100 px-1 py-0.5 rounded">[data-block-id='...']</code> to prevent affecting UnifyApps navigation drawers, topbars, or data grids.
              </p>

              <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 text-emerald-400 font-mono text-xs overflow-x-auto shadow-inner">
                <pre>{`[data-block-id='${project.blocks[0].blockId || project.blocks[0].id}'] {\n${project.blocks[0].css ? project.blocks[0].css.split('\n').map(l => '  ' + l).join('\n') : '  /* custom styles */'}\n}`}</pre>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
              <span>Standard: Saudi MOD Luxury Preset</span>
              <span className="font-mono text-emerald-600 font-bold">✓ Validated in UnifyApps Builder</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
