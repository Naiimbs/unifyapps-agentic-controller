import React, { useState } from 'react';

export default function BeforeAfterSlider() {
  const [sliderPos, setSliderPos] = useState(50);

  return (
    <section id="comparison" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-mod-green px-3 py-1 rounded-full bg-mod-green/10 border border-mod-green/20">
            Visual Transformation
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Before vs. After AI Styling
          </h2>
          <p className="text-slate-600 mt-3 text-base">
            Drag the interactive slider below to see how the Agentic Controller transforms standard UnifyApps containers into institutional Saudi MOD luxury branded UI components.
          </p>
        </div>

        {/* Comparison Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-lg">
          <div className="relative h-[340px] sm:h-[400px] rounded-2xl overflow-hidden select-none border border-slate-300 shadow-inner bg-slate-100">
            {/* "After" Layer (Styled Luxury component) */}
            <div className="absolute inset-0 p-8 flex flex-col justify-center items-center text-center bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0]">
              <div className="max-w-md w-full bg-white p-6 rounded-2xl border-2 border-[#125939] shadow-md text-left">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#125939]"></span>
                    <span className="font-bold text-slate-900 text-sm">Media Center Search Filters</span>
                  </div>
                  <span className="text-[10px] uppercase font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Saudi MOD Luxe
                  </span>
                </div>
                <div className="space-y-3">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      disabled
                      placeholder="Search medical releases..."
                      className="w-full text-xs px-3 py-2 rounded-lg border border-slate-200 bg-slate-50 text-slate-400"
                    />
                    <button className="px-4 py-2 bg-[#125939] text-white rounded-lg text-xs font-bold shadow-xs">
                      Filter
                    </button>
                  </div>
                  <div className="flex gap-2 pt-1 text-[11px] text-slate-500">
                    <span className="px-2 py-1 rounded-md bg-slate-100 border border-slate-200">Type: All</span>
                    <span className="px-2 py-1 rounded-md bg-slate-100 border border-slate-200">Status: Published</span>
                  </div>
                </div>
              </div>
              <span className="absolute bottom-4 right-4 bg-mod-green/90 text-white text-[11px] font-bold px-3 py-1 rounded-full shadow">
                AFTER: AI Scoped CSS Injected
              </span>
            </div>

            {/* "Before" Layer (Raw unstyled container) clipped by slider */}
            <div
              className="absolute inset-0 p-8 flex flex-col justify-center items-center text-center bg-slate-200 border-r-2 border-mod-gold"
              style={{ width: `${sliderPos}%`, overflow: 'hidden' }}
            >
              <div className="max-w-md w-full bg-white p-6 rounded-none border border-slate-300 text-left">
                <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-200">
                  <span className="font-mono text-slate-700 text-xs font-bold">[root_id &gt; stack173]</span>
                  <span className="text-[10px] text-slate-400">Default Unstyled</span>
                </div>
                <div className="space-y-3">
                  <input
                    type="text"
                    disabled
                    placeholder="Search releases..."
                    className="w-full text-xs p-2 border border-slate-300 bg-white"
                  />
                  <button className="px-3 py-1.5 bg-blue-600 text-white text-xs">
                    Submit
                  </button>
                </div>
              </div>
              <span className="absolute bottom-4 left-4 bg-slate-800 text-white text-[11px] font-bold px-3 py-1 rounded-full shadow">
                BEFORE: Raw UnifyApps Layout
              </span>
            </div>

            {/* Slider Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-mod-gold cursor-ew-resize z-20"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-mod-gold text-slate-900 flex items-center justify-center font-bold text-xs shadow-lg border-2 border-white">
                ↔
              </div>
            </div>

            {/* Interactive Range Input overlay */}
            <input
              type="range"
              min="10"
              max="90"
              value={sliderPos}
              onChange={e => setSliderPos(e.target.value)}
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
            />
          </div>

          <div className="mt-4 flex justify-between text-xs text-slate-500 font-medium">
            <span>← Raw UnifyApps Component</span>
            <span>Drag slider horizontally</span>
            <span>Institutional MODHS Branded Theme →</span>
          </div>
        </div>
      </div>
    </section>
  );
}
