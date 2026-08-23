import React from 'react';
import { Camera, Activity } from 'lucide-react';

export const RestaurantMockup: React.FC = () => {
  return (
    <div className="w-full rounded-xl border border-slate-700/80 bg-slate-950 p-4 md:p-5 font-sans text-left space-y-4">
      {/* Top Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
          <span className="text-xs font-mono font-bold text-slate-200">RESTAURANT_VISION_ANALYTICS</span>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded border border-emerald-800/40">
          <Camera className="w-3.5 h-3.5" />
          YOLO Pose Analysis Active
        </div>
      </div>

      {/* Main Grid Visual */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Camera Feed Simulator (2 cols) */}
        <div className="md:col-span-2 relative rounded-lg bg-slate-900 border border-slate-800 p-3 min-h-[220px] flex flex-col justify-between overflow-hidden">
          <div className="flex justify-between items-center text-[11px] text-slate-300 font-mono bg-slate-950/80 px-2.5 py-1 rounded">
            <span>FEED 01: Kitchen Prep Counter</span>
            <span className="text-emerald-400">Stream Processing</span>
          </div>

          {/* YOLO Detection Box Overlays */}
          <div className="my-4 grid grid-cols-2 gap-3">
            <div className="border border-emerald-500/70 rounded bg-emerald-950/30 p-2.5 space-y-1">
              <div className="flex justify-between items-center text-[10px] font-mono text-emerald-300 font-bold bg-emerald-950/90 px-1 py-0.5 rounded">
                <span>STATION A</span>
                <span>PREP ZONE</span>
              </div>
              <div className="text-[10px] text-slate-300">Station: Main Assembly</div>
              <div className="text-[10px] text-emerald-400 font-mono">Status: Preparing Order</div>
            </div>

            <div className="border border-cyan-500/70 rounded bg-cyan-950/30 p-2.5 space-y-1">
              <div className="flex justify-between items-center text-[10px] font-mono text-cyan-300 font-bold bg-cyan-950/90 px-1 py-0.5 rounded">
                <span>STATION B</span>
                <span>QUALITY CHECK</span>
              </div>
              <div className="text-[10px] text-slate-300">Station: Inspection & Bagging</div>
              <div className="text-[10px] text-cyan-400 font-mono">Status: Order Bagging</div>
            </div>
          </div>

          <div className="flex justify-between items-center text-[10px] font-mono text-slate-400 bg-slate-950/80 px-2 py-1 rounded">
            <span>Detection Mode: YOLOv8 Pose</span>
            <span>Station Visibility: Active</span>
          </div>
        </div>

        {/* Analytics Side Panel */}
        <div className="space-y-3 bg-slate-900/60 p-3 rounded-lg border border-slate-800 text-xs">
          <div className="font-semibold text-slate-200 border-b border-slate-800 pb-1.5 flex items-center justify-between">
            <span>Operational Insights</span>
            <Activity className="w-3.5 h-3.5 text-emerald-400" />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-slate-400">Prep Station Coverage</span>
              <span className="text-emerald-400 font-semibold font-mono">Monitored</span>
            </div>
            <div className="w-full bg-slate-800 h-1.5 rounded-full">
              <div className="bg-emerald-500 h-1.5 rounded-full w-full" />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-slate-400">Bottleneck Tracking</span>
              <span className="text-cyan-400 font-semibold font-mono">Active</span>
            </div>
            <div className="w-full bg-slate-800 h-1.5 rounded-full">
              <div className="bg-cyan-500 h-1.5 rounded-full w-[85%]" />
            </div>
          </div>

          <div className="pt-2 border-t border-slate-800 text-[11px] space-y-1">
            <div className="text-slate-400 font-semibold">Automated Insights:</div>
            <div className="text-slate-300 bg-slate-950 p-2 rounded border border-slate-800">
              Identifies workstation bottlenecks and tracks prep activity across peak rush hours.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
