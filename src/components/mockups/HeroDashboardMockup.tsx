import React, { useState } from 'react';
import { Camera, Cpu, Layout, CheckCircle2, Layers, Activity } from 'lucide-react';

export const HeroDashboardMockup: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'vision' | 'automation' | 'portal'>('vision');

  return (
    <div className="w-full rounded-2xl border border-slate-700/60 bg-slate-900/90 shadow-2xl shadow-emerald-950/20 backdrop-blur-md overflow-hidden text-left font-sans">
      {/* Top Window Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-950/90 border-b border-slate-800">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="ml-2 text-xs font-mono text-slate-400">Farogh AI // Product Preview</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-md border border-emerald-800/40 font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            OPERATIONAL PREVIEW
          </span>
        </div>
      </div>

      {/* Control Tabs */}
      <div className="flex border-b border-slate-800 bg-slate-900/50 px-4 pt-2">
        <button
          onClick={() => setActiveTab('vision')}
          className={`flex items-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-t-lg transition-colors ${
            activeTab === 'vision'
              ? 'bg-slate-800 text-emerald-400 border-t-2 border-emerald-500'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
          }`}
        >
          <Camera className="w-3.5 h-3.5" />
          Computer Vision Interface
        </button>
        <button
          onClick={() => setActiveTab('automation')}
          className={`flex items-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-t-lg transition-colors ${
            activeTab === 'automation'
              ? 'bg-slate-800 text-emerald-400 border-t-2 border-emerald-500'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
          }`}
        >
          <Cpu className="w-3.5 h-3.5" />
          Workflow Automation
        </button>
        <button
          onClick={() => setActiveTab('portal')}
          className={`flex items-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-t-lg transition-colors ${
            activeTab === 'portal'
              ? 'bg-slate-800 text-emerald-400 border-t-2 border-emerald-500'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
          }`}
        >
          <Layout className="w-3.5 h-3.5" />
          Custom Admin Portal
        </button>
      </div>

      {/* Main Content View */}
      <div className="p-4 md:p-6 grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Left 2 Cols: Main Visualizer */}
        <div className="lg:col-span-2 space-y-4">
          {activeTab === 'vision' && (
            <div className="relative rounded-xl overflow-hidden border border-slate-700 bg-slate-950 aspect-video flex flex-col justify-between p-4">
              <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
              
              {/* Camera Header */}
              <div className="relative z-10 flex justify-between items-center bg-slate-900/80 backdrop-blur px-3 py-1.5 rounded-lg border border-slate-800 text-xs">
                <span className="font-mono text-slate-300 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  Camera Feed: Kitchen & Prep Area
                </span>
                <span className="text-emerald-400 font-mono text-[11px]">YOLO Pose Analytics</span>
              </div>

              {/* Bounding Box Simulators */}
              <div className="relative z-10 my-auto grid grid-cols-2 gap-4 h-44">
                <div className="relative border-2 border-emerald-500/70 rounded bg-emerald-950/20 p-2.5 flex flex-col justify-between">
                  <div className="flex justify-between items-center text-[10px] font-mono bg-emerald-500 text-slate-950 font-bold px-1.5 py-0.5 rounded-sm">
                    <span>STATION A</span>
                    <span>PREP ZONE</span>
                  </div>
                  <div className="text-[10px] font-mono text-emerald-300 bg-slate-950/90 px-2 py-1 rounded border border-emerald-900/60">
                    Activity: Order Preparation
                  </div>
                </div>

                <div className="relative border-2 border-cyan-500/70 rounded bg-cyan-950/20 p-2.5 flex flex-col justify-between">
                  <div className="flex justify-between items-center text-[10px] font-mono bg-cyan-500 text-slate-950 font-bold px-1.5 py-0.5 rounded-sm">
                    <span>STATION B</span>
                    <span>PACKAGING</span>
                  </div>
                  <div className="text-[10px] font-mono text-cyan-300 bg-slate-950/90 px-2 py-1 rounded border border-cyan-900/60">
                    Activity: Order Inspection
                  </div>
                </div>
              </div>

              {/* Camera Analytics Footer */}
              <div className="relative z-10 grid grid-cols-3 gap-2 text-center text-xs">
                <div className="bg-slate-900/80 p-2 rounded border border-slate-800">
                  <div className="text-slate-400 text-[10px]">Monitoring Status</div>
                  <div className="text-emerald-400 font-semibold font-mono text-xs">Active</div>
                </div>
                <div className="bg-slate-900/80 p-2 rounded border border-slate-800">
                  <div className="text-slate-400 text-[10px]">Detection Engine</div>
                  <div className="text-cyan-400 font-semibold font-mono text-xs">YOLO Model</div>
                </div>
                <div className="bg-slate-900/80 p-2 rounded border border-slate-800">
                  <div className="text-slate-400 text-[10px]">Data Pipeline</div>
                  <div className="text-emerald-400 font-semibold font-mono text-xs">Connected</div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'automation' && (
            <div className="rounded-xl border border-slate-700 bg-slate-950 p-4 space-y-3">
              <div className="flex justify-between items-center border-b border-slate-800 pb-2">
                <span className="text-xs font-semibold text-slate-300 flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-emerald-400" />
                  Workflow Automation Schematics
                </span>
                <span className="text-[10px] font-mono text-emerald-400">STATUS: CONFIGURED</span>
              </div>
              <div className="space-y-2">
                <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 flex justify-between items-center text-xs">
                  <div>
                    <div className="font-medium text-slate-200">WhatsApp Support Triage</div>
                    <div className="text-[11px] text-slate-400">Classifies customer questions & routes to appropriate system</div>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-900">ACTIVE</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 flex justify-between items-center text-xs">
                  <div>
                    <div className="font-medium text-slate-200">Document & Data Extraction</div>
                    <div className="text-[11px] text-slate-400">Parses structured invoice records into internal database</div>
                  </div>
                  <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-900">ACTIVE</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'portal' && (
            <div className="rounded-xl border border-slate-700 bg-slate-950 p-4 space-y-3">
              <div className="flex justify-between items-center border-b border-slate-800 pb-2">
                <span className="text-xs font-semibold text-slate-300 flex items-center gap-2">
                  <Layout className="w-4 h-4 text-emerald-400" />
                  Admin Dashboard Overview
                </span>
                <span className="text-[10px] font-mono text-slate-400">CUSTOM BUILD</span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center text-xs py-3">
                <div className="p-3 rounded bg-slate-900 border border-slate-800">
                  <div className="text-slate-400 text-[10px]">Operations View</div>
                  <div className="text-emerald-400 font-bold mt-1">Unified</div>
                </div>
                <div className="p-3 rounded bg-slate-900 border border-slate-800">
                  <div className="text-slate-400 text-[10px]">Data Flow</div>
                  <div className="text-cyan-400 font-bold mt-1">Real-Time</div>
                </div>
                <div className="p-3 rounded bg-slate-900 border border-slate-800">
                  <div className="text-slate-400 text-[10px]">System API</div>
                  <div className="text-indigo-400 font-bold mt-1">Integrated</div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right 1 Col: System Overview */}
        <div className="space-y-3 bg-slate-950/90 p-4 rounded-xl border border-slate-800">
          <div className="text-xs font-bold text-slate-300 uppercase tracking-wider border-b border-slate-800 pb-2">
            System Overview
          </div>

          <div className="space-y-2 text-xs">
            <div className="flex justify-between">
              <span className="text-slate-400">System Status</span>
              <span className="text-emerald-400 font-mono font-semibold">Operational</span>
            </div>
            <div className="w-full bg-slate-800 rounded-full h-1.5">
              <div className="bg-emerald-500 h-1.5 rounded-full w-full" />
            </div>
          </div>

          <div className="space-y-2 text-xs">
            <div className="flex justify-between">
              <span className="text-slate-400">Model Deployment</span>
              <span className="text-cyan-400 font-mono font-semibold">Production</span>
            </div>
            <div className="w-full bg-slate-800 rounded-full h-1.5">
              <div className="bg-cyan-500 h-1.5 rounded-full w-full" />
            </div>
          </div>

          <div className="pt-3 border-t border-slate-800 space-y-2 text-xs text-slate-400">
            <div className="text-slate-200 font-semibold">Key Capabilities:</div>
            <div className="space-y-1 text-[11px]">
              <div className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Reliable detection pipelines</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Custom operational dashboards</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Direct software integration</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
