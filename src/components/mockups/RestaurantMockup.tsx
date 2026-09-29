import React from 'react';
import { Camera, Check } from 'lucide-react';

export const RestaurantMockup: React.FC = () => {
  return (
    <div className="w-full rounded-2xl border border-[#151618] bg-[#0A0A0B] p-5 font-mono text-left space-y-4">
      {/* Frame Top Bar */}
      <div className="flex items-center justify-between text-xs text-[#F4F1EA]/70 border-b border-[#151618] pb-3">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-pulse" />
          <span className="font-bold text-white">CAMERA FEED // KITCHEN PREP</span>
        </div>
        <div className="flex items-center gap-1.5 text-[11px] text-[#3B82F6]">
          <Camera className="w-3.5 h-3.5" />
          <span>YOLOv8 Active</span>
        </div>
      </div>

      {/* Single Camera Frame Visual with Bounding Overlays */}
      <div className="relative rounded-xl bg-[#151618] p-6 min-h-[180px] flex items-center justify-around border border-[#151618] overflow-hidden">
        {/* Detection Bounding Box 1 */}
        <div className="border-2 border-[#2563EB]/80 bg-[#0A0A0B]/80 rounded-lg p-3 space-y-1 shadow-lg shadow-[#2563EB]/5">
          <div className="text-[10px] font-bold text-white bg-[#2563EB] px-2 py-0.5 rounded inline-block">
            STATION 01 // PREP
          </div>
          <div className="text-xs text-white font-semibold">Active Assembly</div>
          <div className="text-[10px] text-[#3B82F6]">Confidence: 98.4%</div>
        </div>

        {/* Detection Bounding Box 2 */}
        <div className="border-2 border-cyan-400/80 bg-[#0A0A0B]/80 rounded-lg p-3 space-y-1 shadow-lg shadow-cyan-400/5">
          <div className="text-[10px] font-bold text-slate-950 bg-cyan-400 px-2 py-0.5 rounded inline-block">
            STATION 02 // QC
          </div>
          <div className="text-xs text-white font-semibold flex items-center gap-1">
            <span>Order Checked</span>
            <Check className="w-3.5 h-3.5 text-cyan-400" />
          </div>
          <div className="text-[10px] text-cyan-400">Confidence: 99.1%</div>
        </div>
      </div>
    </div>
  );
};
