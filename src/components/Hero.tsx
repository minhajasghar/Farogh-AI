import React from 'react';
import { COMPANY_NAME } from '../data/content';
import { ArrowRight, ChevronRight, Activity, ShieldCheck, Cpu } from 'lucide-react';
import { motion } from './Motion';
import { NeuralGridCanvas } from './NeuralGridCanvas';

interface HeroProps {
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  // Stagger animation variants for initial content entry
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-32 overflow-hidden bg-[#0A0A0B] min-h-[90vh] flex items-center justify-center">
      {/* 3D Interactive Three.js Neural Grid Canvas Background */}
      <NeuralGridCanvas />

      {/* Floating AI HUD Badge - Left Flank */}
      <motion.div
        className="hidden lg:flex absolute left-6 xl:left-12 top-1/2 -translate-y-1/2 z-20 pointer-events-none"
        animate={{ y: [-8, 8, -8] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="bg-[#151618]/70 backdrop-blur-xl border border-[#2563EB]/40 rounded-2xl p-4 shadow-2xl shadow-[#2563EB]/10 space-y-2.5 max-w-[210px] text-left">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-[11px] font-mono font-bold text-slate-200 tracking-wide uppercase">
              Active Node: Operational
            </span>
          </div>

          <div className="pt-1.5 border-t border-[#2563EB]/20 flex items-center justify-between text-[10px] font-mono text-slate-400">
            <span className="flex items-center gap-1">
              <Cpu className="w-3 h-3 text-[#3B82F6]" />
              <span>Pipeline:</span>
            </span>
            <span className="text-emerald-400 font-bold">99.8% Eff</span>
          </div>

          <div className="text-[9px] font-mono text-slate-500 tracking-widest uppercase">
            [ 0101 // TARGET: SYNCED ]
          </div>
        </div>
      </motion.div>

      {/* Floating AI HUD Badge - Right Flank */}
      <motion.div
        className="hidden lg:flex absolute right-6 xl:left-auto xl:right-12 top-1/2 -translate-y-1/2 z-20 pointer-events-none"
        animate={{ y: [8, -8, 8] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      >
        <div className="bg-[#151618]/70 backdrop-blur-xl border border-[#2563EB]/40 rounded-2xl p-4 shadow-2xl shadow-[#2563EB]/10 space-y-2.5 max-w-[210px] text-left">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-[#3B82F6]" />
              <span className="text-[11px] font-mono font-bold text-slate-200 tracking-wide">
                Latency: 12ms
              </span>
            </div>
            <span className="px-1.5 py-0.5 rounded bg-[#2563EB]/20 text-[9px] font-mono text-[#3B82F6] font-semibold">
              LIVE
            </span>
          </div>

          <div className="pt-1.5 border-t border-[#2563EB]/20 flex items-center justify-between text-[10px] font-mono text-slate-400">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-emerald-400" />
              <span>Throughput:</span>
            </span>
            <span className="text-slate-200 font-bold">1.4 GB/s</span>
          </div>

          <div className="text-[9px] font-mono text-[#3B82F6] tracking-widest uppercase flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] animate-pulse" />
            <span>AUTOMATION: ENGAGED</span>
          </div>
        </div>
      </motion.div>

      {/* Main Content Container with Staggered Entrance */}
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="text-center max-w-4xl mx-auto flex flex-col items-center">
          {/* 
            Note on Logo: Per requirement, centered logo above badge is removed.
            The logo is strictly placed inside the top-left navigation bar.
          */}

          {/* Top Subtle Badge with 2rem (mb-8) vertical whitespace to H1 */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#151618]/90 border border-[#2563EB]/50 text-xs font-mono text-[#3B82F6] shadow-lg shadow-[#2563EB]/15 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-pulse" />
              <span className="tracking-wide">PRACTICAL AI & CUSTOM SOFTWARE STUDIO</span>
            </div>
          </motion.div>

          {/* Primary H1 Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]"
          >
            We Build the Systems <br className="hidden sm:inline" />
            Behind Smarter Businesses.
          </motion.h1>

          {/* Repositioned Slogan as subtle glowing micro-label beneath H1 */}
          <motion.div variants={itemVariants} className="mt-4 mb-6">
            <p className="text-sm tracking-widest uppercase text-blue-400 font-mono font-semibold flex items-center justify-center gap-2">
              <span className="inline-block w-4 h-[1px] bg-blue-400/50" />
              <span>Engineering the Light Ahead.</span>
              <span className="inline-block w-4 h-[1px] bg-blue-400/50" />
            </p>
          </motion.div>

          {/* Max Readability Body Paragraph (max-w-2xl, text-slate-400, leading-7) */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-7 font-normal"
          >
            <strong className="text-white font-medium">{COMPANY_NAME}</strong> builds AI automation, computer vision, intelligent agents, and custom software that turn repetitive business operations into scalable systems.
          </motion.p>

          {/* CTAs with Staggered Entrance */}
          <motion.div
            variants={itemVariants}
            className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          >
            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto px-8 py-4 text-sm font-mono font-bold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-xl shadow-lg shadow-[#2563EB]/25 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2.5 cursor-pointer group"
            >
              <span>Book a Free Consultation</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <a
              href="#case-studies"
              className="w-full sm:w-auto px-8 py-4 text-sm font-mono font-semibold text-[#F4F1EA] bg-[#151618] hover:bg-[#1f2124] border border-[#2563EB]/30 rounded-xl transition-all flex items-center justify-center gap-2 group"
            >
              <span>See What We've Built</span>
              <ChevronRight className="w-4 h-4 text-[#3B82F6] transition-transform group-hover:translate-x-0.5" />
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
