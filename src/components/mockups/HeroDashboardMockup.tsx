import React, { useState } from 'react';
import { Camera, MessageSquare, Database, Layout, Cpu, ArrowRight } from 'lucide-react';

export const HeroDashboardMockup: React.FC = () => {
  const [activeSystem, setActiveSystem] = useState<'cameras' | 'whatsapp' | 'data' | 'software'>('cameras');

  return (
    <div className="w-full rounded-2xl border border-[#151618] bg-[#0A0A0B] shadow-2xl p-6 md:p-8 font-sans text-left space-y-6">
      
      {/* System Layer Top Controller */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#151618] pb-5">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#2563EB] animate-pulse" />
          <span className="text-xs font-mono font-bold text-[#F4F1EA] tracking-wider uppercase">
            FAROGH AI OPERATIONS LAYER
          </span>
        </div>
        <span className="text-xs font-mono text-[#2563EB]/70">
          INTELLIGENT SYSTEM PIPELINE
        </span>
      </div>

      {/* Interactive System Stream Selectors */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <button
          onClick={() => setActiveSystem('cameras')}
          className={`p-3 rounded-xl border text-left font-mono transition-all space-y-2 ${
            activeSystem === 'cameras'
              ? 'bg-[#151618] border-[#2563EB] text-white'
              : 'bg-[#0A0A0B] border-[#151618] text-[#F4F1EA]/60 hover:text-white'
          }`}
        >
          <div className="flex items-center justify-between">
            <Camera className="w-4 h-4 text-[#3B82F6]" />
            <span className="text-[10px] text-[#2563EB]/70">01</span>
          </div>
          <div className="text-xs font-bold">CAMERAS</div>
          <div className="text-[10px] text-[#F4F1EA]/50">Computer Vision</div>
        </button>

        <button
          onClick={() => setActiveSystem('whatsapp')}
          className={`p-3 rounded-xl border text-left font-mono transition-all space-y-2 ${
            activeSystem === 'whatsapp'
              ? 'bg-[#151618] border-[#2563EB] text-white'
              : 'bg-[#0A0A0B] border-[#151618] text-[#F4F1EA]/60 hover:text-white'
          }`}
        >
          <div className="flex items-center justify-between">
            <MessageSquare className="w-4 h-4 text-[#3B82F6]" />
            <span className="text-[10px] text-[#2563EB]/70">02</span>
          </div>
          <div className="text-xs font-bold">WHATSAPP</div>
          <div className="text-[10px] text-[#F4F1EA]/50">AI Customer Service</div>
        </button>

        <button
          onClick={() => setActiveSystem('data')}
          className={`p-3 rounded-xl border text-left font-mono transition-all space-y-2 ${
            activeSystem === 'data'
              ? 'bg-[#151618] border-[#2563EB] text-white'
              : 'bg-[#0A0A0B] border-[#151618] text-[#F4F1EA]/60 hover:text-white'
          }`}
        >
          <div className="flex items-center justify-between">
            <Database className="w-4 h-4 text-[#3B82F6]" />
            <span className="text-[10px] text-[#2563EB]/70">03</span>
          </div>
          <div className="text-xs font-bold">BUSINESS DATA</div>
          <div className="text-[10px] text-[#F4F1EA]/50">AI Automation</div>
        </button>

        <button
          onClick={() => setActiveSystem('software')}
          className={`p-3 rounded-xl border text-left font-mono transition-all space-y-2 ${
            activeSystem === 'software'
              ? 'bg-[#151618] border-[#2563EB] text-white'
              : 'bg-[#0A0A0B] border-[#151618] text-[#F4F1EA]/60 hover:text-white'
          }`}
        >
          <div className="flex items-center justify-between">
            <Layout className="w-4 h-4 text-[#3B82F6]" />
            <span className="text-[10px] text-[#2563EB]/70">04</span>
          </div>
          <div className="text-xs font-bold">CUSTOM SOFTWARE</div>
          <div className="text-[10px] text-[#F4F1EA]/50">Business Dashboard</div>
        </button>
      </div>

      {/* Abstract Flow Diagram Display */}
      <div className="bg-[#151618] rounded-xl border border-[#151618] p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center font-mono">
          
          {/* Input Stage */}
          <div className="bg-[#0A0A0B] p-4 rounded-xl border border-[#151618] space-y-2">
            <span className="text-[10px] text-[#2563EB]/70 font-bold block uppercase">OPERATIONAL INPUT</span>
            <div className="text-sm font-bold text-white flex items-center gap-2">
              {activeSystem === 'cameras' && <Camera className="w-4 h-4 text-[#3B82F6]" />}
              {activeSystem === 'whatsapp' && <MessageSquare className="w-4 h-4 text-[#3B82F6]" />}
              {activeSystem === 'data' && <Database className="w-4 h-4 text-[#3B82F6]" />}
              {activeSystem === 'software' && <Layout className="w-4 h-4 text-[#3B82F6]" />}
              <span>
                {activeSystem === 'cameras' && 'Kitchen Camera Feed'}
                {activeSystem === 'whatsapp' && 'Customer WhatsApp Message'}
                {activeSystem === 'data' && 'Unstructured Invoice PDF'}
                {activeSystem === 'software' && 'Staff Admin Request'}
              </span>
            </div>
          </div>

          {/* Processing Engine */}
          <div className="bg-[#0A0A0B] p-4 rounded-xl border border-[#2563EB]/40 text-center space-y-2">
            <span className="text-[10px] text-[#3B82F6] font-bold block uppercase">FAROGH AI ENGINE</span>
            <div className="text-xs font-bold text-[#3B82F6] flex items-center justify-center gap-1.5">
              <Cpu className="w-4 h-4 animate-spin" />
              <span>
                {activeSystem === 'cameras' && 'YOLOv8 Detection & Pose'}
                {activeSystem === 'whatsapp' && 'AI Agent Task Router'}
                {activeSystem === 'data' && 'Document Extraction Pipeline'}
                {activeSystem === 'software' && 'Backend API & Database Logic'}
              </span>
            </div>
          </div>

          {/* Business Action */}
          <div className="bg-[#0A0A0B] p-4 rounded-xl border border-[#151618] space-y-2">
            <span className="text-[10px] text-[#2563EB]/70 font-bold block uppercase">AUTOMATED ACTION</span>
            <div className="text-sm font-bold text-white flex items-center gap-2">
              <ArrowRight className="w-4 h-4 text-[#3B82F6]" />
              <span>
                {activeSystem === 'cameras' && 'Live Activity Dashboard Alert'}
                {activeSystem === 'whatsapp' && 'Instant Status & Appointment Reply'}
                {activeSystem === 'data' && 'Automated SQL Record Update'}
                {activeSystem === 'software' && 'Unified Management Portal Update'}
              </span>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};
