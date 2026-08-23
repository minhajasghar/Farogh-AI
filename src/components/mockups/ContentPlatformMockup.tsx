import React from 'react';
import { Sparkles, Copy, Check, Send, Sliders, Layers } from 'lucide-react';

export const ContentPlatformMockup: React.FC = () => {
  return (
    <div className="w-full rounded-xl border border-slate-700/80 bg-slate-950 p-4 md:p-5 font-sans text-left space-y-4">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-emerald-400" />
          <span className="text-xs font-mono font-bold text-slate-200">AI_CONTENT_GENERATOR // MARKETING_SUITE</span>
        </div>
        <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded border border-emerald-800/40">
          GPT-4o / Claude Fine-Tuned Model
        </span>
      </div>

      {/* Main Workspace */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
        {/* Left: Input & Prompt Builder */}
        <div className="space-y-3 bg-slate-900/60 p-3 rounded-lg border border-slate-800">
          <div className="font-semibold text-slate-300">Prompt & Campaign Settings</div>
          
          <div className="space-y-1">
            <label className="text-[11px] text-slate-400">Target Topic / Product Focus</label>
            <div className="p-2 rounded bg-slate-950 border border-slate-800 text-slate-200">
              Launch announcement for automated customer service AI agent
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="space-y-1">
              <label className="text-[11px] text-slate-400">Tone of Voice</label>
              <div className="p-1.5 rounded bg-slate-950 border border-slate-800 text-emerald-400 font-mono text-[11px]">
                Professional & Confident
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-[11px] text-slate-400">Target Platform</label>
              <div className="p-1.5 rounded bg-slate-950 border border-slate-800 text-cyan-400 font-mono text-[11px]">
                LinkedIn & X (Twitter)
              </div>
            </div>
          </div>

          <div className="p-2 bg-emerald-950/40 border border-emerald-800/40 rounded text-emerald-300 text-[11px] flex items-center justify-between">
            <span>Generation Speed: 0.8s</span>
            <span className="font-mono bg-emerald-500 text-slate-950 font-bold px-2 py-0.5 rounded text-[10px]">
              GENERATE CAPTION
            </span>
          </div>
        </div>

        {/* Right: AI Output Preview */}
        <div className="space-y-3 bg-slate-900/90 p-3 rounded-lg border border-slate-800">
          <div className="flex justify-between items-center font-semibold text-slate-300">
            <span>Generated Post Result</span>
            <span className="text-[10px] text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800 font-mono">
              READY TO PUBLISH
            </span>
          </div>

          <div className="bg-slate-950 p-3 rounded border border-slate-800 space-y-2 text-slate-300 font-sans leading-relaxed text-[11px]">
            <p>🚀 Stop letting routine customer support queries backlog your operations.</p>
            <p>Our custom WhatsApp AI agents handle order lookups, appointment triage, and FAQs 24/7—directly integrated into your existing database.</p>
            <p className="text-emerald-400 font-mono">#Automation #AIEngineering #EnterpriseSoftware</p>
          </div>

          <div className="flex justify-between items-center text-[10px] text-slate-400 pt-1">
            <span>Word count: 48 words</span>
            <span className="flex items-center gap-1 text-slate-200 bg-slate-800 px-2 py-1 rounded cursor-pointer hover:bg-slate-700">
              <Copy className="w-3 h-3" /> Copy to Clipboard
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
