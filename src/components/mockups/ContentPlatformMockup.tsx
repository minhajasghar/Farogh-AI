import React from 'react';
import { Sparkles, Copy, Check, Send, Sliders, Layers } from 'lucide-react';

export const ContentPlatformMockup: React.FC = () => {
  return (
    <div className="w-full rounded-xl border border-[#151618] bg-[#0A0A0B] p-4 md:p-5 font-sans text-left space-y-4">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#151618] pb-3">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-[#3B82F6]" />
          <span className="text-xs font-mono font-bold text-[#F4F1EA]">AI_CONTENT_GENERATOR // MARKETING_SUITE</span>
        </div>
        <span className="text-xs font-mono text-[#3B82F6] bg-[#1E3A8A]/30 px-2.5 py-1 rounded border border-[#2563EB]/40">
          GPT-4o / Claude Fine-Tuned Model
        </span>
      </div>

      {/* Main Workspace */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
        {/* Left: Input & Prompt Builder */}
        <div className="space-y-3 bg-[#151618] p-3 rounded-lg border border-[#1a1c20]">
          <div className="font-semibold text-[#F4F1EA]/80">Prompt & Campaign Settings</div>
          
          <div className="space-y-1">
            <label className="text-[11px] text-[#F4F1EA]/50">Target Topic / Product Focus</label>
            <div className="p-2 rounded bg-[#0A0A0B] border border-[#151618] text-[#F4F1EA]/80">
              Launch announcement for automated customer service AI agent
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="space-y-1">
              <label className="text-[11px] text-[#F4F1EA]/50">Tone of Voice</label>
              <div className="p-1.5 rounded bg-[#0A0A0B] border border-[#151618] text-[#3B82F6] font-mono text-[11px]">
                Professional & Confident
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-[11px] text-[#F4F1EA]/50">Target Platform</label>
              <div className="p-1.5 rounded bg-[#0A0A0B] border border-[#151618] text-cyan-400 font-mono text-[11px]">
                LinkedIn & X (Twitter)
              </div>
            </div>
          </div>

          <div className="p-2 bg-[#1E3A8A]/20 border border-[#2563EB]/40 rounded text-[#93C5FD] text-[11px] flex items-center justify-between">
            <span>Automated Generation Pipeline</span>
            <span className="font-mono bg-[#2563EB] text-white font-bold px-2 py-0.5 rounded text-[10px]">
              GENERATE CAPTION
            </span>
          </div>
        </div>

        {/* Right: AI Output Preview */}
        <div className="space-y-3 bg-[#151618] p-3 rounded-lg border border-[#1a1c20]">
          <div className="flex justify-between items-center font-semibold text-[#F4F1EA]/80">
            <span>Generated Post Result</span>
            <span className="text-[10px] text-[#3B82F6] bg-[#1E3A8A]/30 px-2 py-0.5 rounded border border-[#2563EB]/40 font-mono">
              READY TO PUBLISH
            </span>
          </div>

          <div className="bg-[#0A0A0B] p-3 rounded border border-[#151618] space-y-2 text-[#F4F1EA]/70 font-sans leading-relaxed text-[11px]">
            <p>🚀 Stop letting routine customer support queries backlog your operations.</p>
            <p>Our custom WhatsApp AI agents handle order lookups, appointment triage, and FAQs 24/7—directly integrated into your existing database.</p>
            <p className="text-[#3B82F6] font-mono">#Automation #AIEngineering #EnterpriseSoftware</p>
          </div>

          <div className="flex justify-between items-center text-[10px] text-[#F4F1EA]/40 pt-1">
            <span>Word count: 48 words</span>
            <span className="flex items-center gap-1 text-[#F4F1EA]/70 bg-[#151618] px-2 py-1 rounded cursor-pointer hover:bg-[#1a1c20]">
              <Copy className="w-3 h-3" /> Copy to Clipboard
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
