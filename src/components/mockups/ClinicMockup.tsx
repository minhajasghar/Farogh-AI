import React from 'react';
import { Smartphone, CheckCircle } from 'lucide-react';

export const ClinicMockup: React.FC = () => {
  return (
    <div className="w-full rounded-xl border border-slate-700/80 bg-slate-950 p-4 md:p-5 font-sans text-left space-y-4">
      {/* Clinic Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
          <span className="text-xs font-mono font-bold text-slate-200">CLINIC_ADMIN_SUITE // PATIENT_QUEUE_PORTAL</span>
        </div>
        <div className="text-xs font-mono text-cyan-400 bg-cyan-950/60 px-2.5 py-1 rounded border border-cyan-800/40">
          WhatsApp Integration Active
        </div>
      </div>

      {/* Queue & Appointment Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
        {/* Left 2 Cols: Queue Triage Board */}
        <div className="md:col-span-2 space-y-3">
          <div className="flex justify-between items-center bg-slate-900 p-2.5 rounded border border-slate-800 font-semibold text-slate-300">
            <span>Patient Queue Triage</span>
            <span className="text-[#3B82F6] font-mono text-[11px]">Active Shift</span>
          </div>

          <div className="space-y-2">
            <div className="p-2.5 rounded bg-slate-900/90 border-l-4 border-l-blue-500 border-y border-r border-slate-800 flex justify-between items-center">
              <div>
                <div className="font-bold text-slate-200 flex items-center gap-2">
                  <span>TICKET #A-102</span>
                  <span className="text-[10px] bg-[#1E3A8A]/40 text-[#3B82F6] px-1.5 py-0.5 rounded font-mono">IN CONSULTATION</span>
                </div>
                <div className="text-slate-400 text-[11px]">General Consultation</div>
              </div>
              <div className="text-right font-mono text-[11px] text-[#3B82F6]">
                In Session
              </div>
            </div>

            <div className="p-2.5 rounded bg-slate-900/90 border-l-4 border-l-cyan-500 border-y border-r border-slate-800 flex justify-between items-center">
              <div>
                <div className="font-bold text-slate-200 flex items-center gap-2">
                  <span>TICKET #A-103</span>
                  <span className="text-[10px] bg-cyan-950 text-cyan-300 px-1.5 py-0.5 rounded font-mono">NEXT IN QUEUE</span>
                </div>
                <div className="text-slate-400 text-[11px]">Follow-Up Visit • WhatsApp Notification Sent</div>
              </div>
              <div className="text-right font-mono text-[11px] text-cyan-400">
                Notified
              </div>
            </div>

            <div className="p-2.5 rounded bg-slate-900/50 border border-slate-800 flex justify-between items-center opacity-80">
              <div>
                <div className="font-bold text-slate-300 flex items-center gap-2">
                  <span>TICKET #A-104</span>
                  <span className="text-[10px] bg-slate-800 text-slate-400 px-1.5 py-0.5 rounded font-mono">CHECKED IN</span>
                </div>
                <div className="text-slate-400 text-[11px]">Appointment Confirmed</div>
              </div>
              <div className="text-right font-mono text-[11px] text-slate-400">
                Scheduled
              </div>
            </div>
          </div>
        </div>

        {/* Right 1 Col: Live WhatsApp Flow Preview */}
        <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-800 space-y-3">
          <div className="font-semibold text-slate-200 border-b border-slate-800 pb-2 flex items-center gap-1.5">
            <Smartphone className="w-3.5 h-3.5 text-[#3B82F6]" />
            <span>Patient WhatsApp Preview</span>
          </div>

          <div className="bg-slate-950 p-2.5 rounded border border-slate-800 space-y-2 text-[11px]">
            <div className="bg-[#1E3A8A]/20 p-2 rounded border border-[#2563EB]/30 text-[#93C5FD] font-mono">
              💬 "Hello! Your position in the queue has been updated. We will send a reminder when your slot is approaching."
            </div>
            <div className="text-[10px] text-slate-400 text-right font-mono">
              Automated Message Sent ✓✓
            </div>
          </div>

          <div className="p-2 bg-slate-950 rounded border border-slate-800 text-[10px] space-y-1 text-slate-400">
            <div className="text-slate-300 font-semibold">Key Benefits:</div>
            <div>• Designed to reduce waiting room congestion</div>
            <div>• Automated WhatsApp appointment reminders</div>
            <div>• Streamlined front-desk patient triage</div>
          </div>
        </div>
      </div>
    </div>
  );
};
