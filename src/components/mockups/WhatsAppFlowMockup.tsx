import React from 'react';
import { MessageSquare, ArrowRight, Server, Database, Bot, CheckCircle } from 'lucide-react';

export const WhatsAppFlowMockup: React.FC = () => {
  return (
    <div className="w-full rounded-xl border border-slate-700/80 bg-slate-950 p-4 md:p-5 font-sans text-left space-y-4">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <MessageSquare className="w-4 h-4 text-emerald-400" />
          <span className="text-xs font-mono font-bold text-slate-200">WHATSAPP_AI_INTEGRATION_PIPELINE</span>
        </div>
        <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded border border-emerald-800/40">
          WhatsApp Cloud API Verified
        </span>
      </div>

      {/* Interactive Flow Architecture Diagram */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs text-center py-2">
        {/* Node 1: Customer */}
        <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-800 space-y-1.5 flex flex-col items-center justify-center">
          <div className="w-8 h-8 rounded-full bg-emerald-950 flex items-center justify-center text-emerald-400 border border-emerald-800">
            💬
          </div>
          <div className="font-bold text-slate-200">1. Customer</div>
          <div className="text-[10px] text-slate-400">Sends WhatsApp message</div>
        </div>

        {/* Node 2: WhatsApp Cloud API */}
        <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-800 space-y-1.5 flex flex-col items-center justify-center">
          <div className="w-8 h-8 rounded-full bg-cyan-950 flex items-center justify-center text-cyan-400 border border-cyan-800">
            <Server className="w-4 h-4" />
          </div>
          <div className="font-bold text-slate-200">2. Webhook Router</div>
          <div className="text-[10px] text-slate-400">WhatsApp Cloud API</div>
        </div>

        {/* Node 3: AI Agent Core */}
        <div className="bg-slate-900/80 p-3 rounded-lg border border-emerald-500/50 space-y-1.5 flex flex-col items-center justify-center">
          <div className="w-8 h-8 rounded-full bg-emerald-500 text-slate-950 font-bold flex items-center justify-center">
            <Bot className="w-4 h-4" />
          </div>
          <div className="font-bold text-emerald-400">3. AI Agent Core</div>
          <div className="text-[10px] text-emerald-300">RAG & Intent Classifier</div>
        </div>

        {/* Node 4: Database / CRM */}
        <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-800 space-y-1.5 flex flex-col items-center justify-center">
          <div className="w-8 h-8 rounded-full bg-indigo-950 flex items-center justify-center text-indigo-400 border border-indigo-800">
            <Database className="w-4 h-4" />
          </div>
          <div className="font-bold text-slate-200">4. Business System</div>
          <div className="text-[10px] text-slate-400">Database & Order API</div>
        </div>
      </div>

      {/* Simulated Conversation Panel */}
      <div className="bg-slate-900/60 p-3 rounded-lg border border-slate-800 space-y-2 text-xs">
        <div className="text-[11px] font-semibold text-slate-400 border-b border-slate-800 pb-1.5">
          Simulated Live Conversation Flow
        </div>

        <div className="space-y-2 text-[11px]">
          <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800 max-w-[85%] text-slate-300">
            <span className="text-[10px] text-slate-500 font-mono block">Customer (10:24 AM)</span>
            "Hi, what is the status of my order #5821?"
          </div>

          <div className="bg-emerald-950/40 p-2.5 rounded-lg border border-emerald-900/60 max-w-[85%] ml-auto text-emerald-200">
            <span className="text-[10px] text-emerald-400 font-mono block">AI Support Agent (Responds Instantly)</span>
            "Hello! Order #5821 has been processed and is currently out for courier dispatch. Expected delivery is today by 4:00 PM."
          </div>
        </div>
      </div>
    </div>
  );
};
