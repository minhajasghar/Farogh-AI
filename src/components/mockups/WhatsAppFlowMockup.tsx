import React from 'react';
import { MessageSquare, Server, Database, Bot } from 'lucide-react';

export const WhatsAppFlowMockup: React.FC = () => {
  return (
    <div className="w-full rounded-xl border border-[#151618] bg-[#0A0A0B] p-4 md:p-5 font-sans text-left space-y-4">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#151618] pb-3">
        <div className="flex items-center gap-2">
          <MessageSquare className="w-4 h-4 text-[#3B82F6]" />
          <span className="text-xs font-mono font-bold text-[#F4F1EA]">WHATSAPP_AI_INTEGRATION_PIPELINE</span>
        </div>
        <span className="text-xs font-mono text-[#3B82F6] bg-[#1E3A8A]/30 px-2.5 py-1 rounded border border-[#2563EB]/40">
          WhatsApp Cloud API Verified
        </span>
      </div>

      {/* Interactive Flow Architecture Diagram */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs text-center py-2">
        {/* Node 1: Customer */}
        <div className="bg-[#151618] p-3 rounded-lg border border-[#1a1c20] space-y-1.5 flex flex-col items-center justify-center">
          <div className="w-8 h-8 rounded-full bg-[#1E3A8A]/40 flex items-center justify-center text-[#3B82F6] border border-[#2563EB]/40">
            💬
          </div>
          <div className="font-bold text-[#F4F1EA]">1. Customer</div>
          <div className="text-[10px] text-[#F4F1EA]/50">Sends WhatsApp message</div>
        </div>

        {/* Node 2: Webhook Router */}
        <div className="bg-[#151618] p-3 rounded-lg border border-[#1a1c20] space-y-1.5 flex flex-col items-center justify-center">
          <div className="w-8 h-8 rounded-full bg-cyan-950 flex items-center justify-center text-cyan-400 border border-cyan-800">
            <Server className="w-4 h-4" />
          </div>
          <div className="font-bold text-[#F4F1EA]">2. Webhook Router</div>
          <div className="text-[10px] text-[#F4F1EA]/50">WhatsApp Cloud API</div>
        </div>

        {/* Node 3: AI Agent Core */}
        <div className="bg-[#151618] p-3 rounded-lg border border-[#2563EB]/50 space-y-1.5 flex flex-col items-center justify-center">
          <div className="w-8 h-8 rounded-full bg-[#2563EB] text-white font-bold flex items-center justify-center">
            <Bot className="w-4 h-4" />
          </div>
          <div className="font-bold text-[#3B82F6]">3. AI Agent Core</div>
          <div className="text-[10px] text-[#60A5FA]">RAG & Intent Classifier</div>
        </div>

        {/* Node 4: Business System */}
        <div className="bg-[#151618] p-3 rounded-lg border border-[#1a1c20] space-y-1.5 flex flex-col items-center justify-center">
          <div className="w-8 h-8 rounded-full bg-indigo-950 flex items-center justify-center text-indigo-400 border border-indigo-800">
            <Database className="w-4 h-4" />
          </div>
          <div className="font-bold text-[#F4F1EA]">4. Business System</div>
          <div className="text-[10px] text-[#F4F1EA]/50">Database & Order API</div>
        </div>
      </div>

      {/* Simulated Conversation Panel */}
      <div className="bg-[#151618] p-3 rounded-lg border border-[#1a1c20] space-y-2 text-xs">
        <div className="text-[11px] font-semibold text-[#F4F1EA]/50 border-b border-[#0A0A0B] pb-1.5">
          Simulated Live Conversation Flow
        </div>

        <div className="space-y-2 text-[11px]">
          <div className="bg-[#0A0A0B] p-2.5 rounded-lg border border-[#151618] max-w-[85%] text-[#F4F1EA]/70">
            <span className="text-[10px] text-[#F4F1EA]/40 font-mono block">Customer (10:24 AM)</span>
            "Hi, what is the status of my order #5821?"
          </div>

          <div className="bg-[#1E3A8A]/20 p-2.5 rounded-lg border border-[#2563EB]/30 max-w-[85%] ml-auto text-[#93C5FD]">
            <span className="text-[10px] text-[#3B82F6] font-mono block">AI Support Agent (Responds Instantly)</span>
            "Hello! Order #5821 has been processed and is currently out for courier dispatch. Expected delivery is today by 4:00 PM."
          </div>
        </div>
      </div>
    </div>
  );
};
