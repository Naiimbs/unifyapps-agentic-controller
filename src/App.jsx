import React from 'react';
import Navbar from './components/Navbar.jsx';
import HeroSection from './components/HeroSection.jsx';
import ProjectSelector from './components/ProjectSelector.jsx';
import BeforeAfterSlider from './components/BeforeAfterSlider.jsx';
import ScreenshotsGallery from './components/ScreenshotsGallery.jsx';
import ClientConnectors from './components/ClientConnectors.jsx';
import LiveSimulator from './components/LiveSimulator.jsx';
import ArchitectureView from './components/ArchitectureView.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between">
      <div>
        <Navbar />
        <main>
          <HeroSection />
          <ProjectSelector />
          <BeforeAfterSlider />
          <ScreenshotsGallery />
          <ClientConnectors />
          <LiveSimulator />
          <ArchitectureView />
        </main>
      </div>

      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800 text-xs font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-mod-green flex items-center justify-center text-mod-gold font-bold text-sm">
              U
            </div>
            <div>
              <span className="font-bold text-slate-200">UnifyApps Agentic Controller</span>
              <div className="text-[11px] text-slate-500">Saudi MODHS Standard | Antigravity & Manus Bridge</div>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#screenshots" className="hover:text-white transition-colors">Proof</a>
            <a href="#clients" className="hover:text-white transition-colors">Setup</a>
            <a href="#simulator" className="hover:text-white transition-colors">MCP Playground</a>
            <a
              href="https://github.com/Naiimbs/unifyapps-agentic-controller"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors font-mono"
            >
              GitHub ↗
            </a>
          </div>

          <div className="text-slate-500 text-[11px]">
            © {new Date().getFullYear()} Universal AI Controller for UnifyApps.
          </div>
        </div>
      </footer>
    </div>
  );
}
