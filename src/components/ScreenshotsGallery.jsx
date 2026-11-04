import React, { useState } from 'react';

const SCREENSHOTS = [
  {
    id: 1,
    title: 'Enterprise Portfolio & Workspaces',
    file: 'assets/images/new_01_all_applications_portfolio.png',
    badge: 'Discovery',
    desc: 'UnifyApps portfolio view displaying MediaCenter_App, MODHS Facility Profile, Overtime_App, and Agent Sandbox Test.'
  },
  {
    id: 2,
    title: 'API Gateway & OAuth Clients',
    file: 'assets/images/new_02_api_gateway_clients.png',
    badge: 'Authentication',
    desc: 'API Gateway Client credentials setup (Client ID: 6aeaedcf41af9153531ebb1f) powering the MCP bridge.'
  },
  {
    id: 3,
    title: 'Active MCP Server Deployment',
    file: 'assets/images/new_03_mcp_server_active.png',
    badge: 'MCP Protocol',
    desc: 'UnifyApps native MCP Server (ID: e_6aeaeef394cbd46d9f75d981) exposing application actions as tools to external agents.'
  },
  {
    id: 4,
    title: 'A2A Agent Bridge Server',
    file: 'assets/images/new_04_a2a_server_deployed.png',
    badge: 'A2A Protocol',
    desc: 'Agent-to-Agent protocol server deployed for multi-agent synthesis and layout delegation.'
  },
  {
    id: 5,
    title: 'A2A REST & Webhook Endpoints',
    file: 'assets/images/new_05_a2a_api_endpoints.png',
    badge: 'Gateway API',
    desc: 'REST API endpoints mapping direct HTTP requests into UnifyApps internal workflow executions.'
  },
  {
    id: 6,
    title: 'Custom Application Connectors',
    file: 'assets/images/new_06_custom_connectors_portal.png',
    badge: 'Integration',
    desc: 'Portal for registering OpenAPI 3.0 specs and third-party SaaS integrations inside UnifyApps.'
  },
  {
    id: 7,
    title: 'Live Builder Canvas & Custom CSS Injection',
    file: 'assets/images/new_07_builder_canvas_real.png',
    badge: 'Canvas Proof',
    desc: 'Real UnifyApps builder for Agent Sandbox Test with Custom CSS panel reflecting [data-block-id="root_id"] green border and background.'
  }
];

export default function ScreenshotsGallery() {
  const [activeModal, setActiveModal] = useState(null);

  return (
    <section id="screenshots" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-mod-green px-3 py-1 rounded-full bg-mod-green/10 border border-mod-green/20">
            Real Proof
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Live Platform Verification (7 Captures)
          </h2>
          <p className="text-slate-600 mt-3 text-base">
            Every step—from API Gateway registration to live scoped CSS execution in the builder canvas—captured directly from the active UnifyApps tenant. Click any screenshot to enlarge.
          </p>
        </div>

        {/* Gallery Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SCREENSHOTS.map(s => (
            <div
              key={s.id}
              onClick={() => setActiveModal(s)}
              className="group cursor-pointer bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 hover:border-mod-green hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 overflow-hidden bg-slate-900 border-b border-slate-200">
                  <img
                    src={s.file}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase bg-slate-900/80 text-mod-gold border border-slate-700 backdrop-blur-xs">
                    {s.badge}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-slate-900 text-sm group-hover:text-mod-green transition-colors">
                    {s.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
              <div className="px-4 pb-3 pt-0 flex justify-between items-center text-[11px] font-semibold text-mod-green">
                <span>Click to inspect</span>
                <span>🔍</span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Viewer */}
        {activeModal && (
          <div
            className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm p-4 flex items-center justify-center"
            onClick={() => setActiveModal(null)}
          >
            <div
              className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <div className="p-4 sm:p-6 border-b border-slate-200 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase text-mod-gold bg-slate-900 px-2 py-0.5 rounded">
                    {activeModal.badge}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-1">
                    {activeModal.title}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveModal(null)}
                  className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-700 font-bold text-sm"
                >
                  ✕
                </button>
              </div>

              <div className="p-4 overflow-y-auto bg-slate-950 flex items-center justify-center">
                <img
                  src={activeModal.file}
                  alt={activeModal.title}
                  className="max-h-[65vh] w-auto object-contain rounded-lg shadow-lg"
                />
              </div>

              <div className="p-4 bg-slate-50 border-t border-slate-200 text-xs text-slate-600">
                {activeModal.desc}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
