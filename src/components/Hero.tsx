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

      {/* Floating AI HUD Badge - Left Flank (Per Requirement 4: backdrop-blur-md bg-black/40 border border-blue-500/20 shadow-xl) */}
      <motion.div
        className="hidden lg:flex absolute left-6 xl:left-12 top-1/2 -translate-y-1/2 z-20 pointer-events-none"
        animate={{ y: [-8, 8, -8] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="backdrop-blur-md bg-black/40 border border-blue-500/20 shadow-xl rounded-2xl p-4 space-y-2.5 max-w-[210px] text-left">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-[11px] font-mono font-bold text-slate-200 tracking-wider uppercase">
              ACTIVE NODE: OPERATIONAL
            </span>
          </div>

          <div className="pt-1.5 border-t border-blue-500/15 flex items-center justify-between text-[11px] font-mono text-slate-400 tracking-wider uppercase">
            <span className="flex items-center gap-1">
              <Cpu className="w-3 h-3 text-blue-400" />
              <span>PIPELINE:</span>
            </span>
            <span className="text-emerald-400 font-bold">99.8% EFF</span>
          </div>

          <div className="text-[10px] font-mono text-slate-500 tracking-widest uppercase">
            [ 0101 // TARGET: SYNCED ]
          </div>
        </div>
      </motion.div>

      {/* Floating AI HUD Badge - Right Flank (Per Requirement 4: backdrop-blur-md bg-black/40 border border-blue-500/20 shadow-xl) */}
      <motion.div
        className="hidden lg:flex absolute right-6 xl:left-auto xl:right-12 top-1/2 -translate-y-1/2 z-20 pointer-events-none"
        animate={{ y: [8, -8, 8] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      >
        <div className="backdrop-blur-md bg-black/40 border border-blue-500/20 shadow-xl rounded-2xl p-4 space-y-2.5 max-w-[210px] text-left">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-blue-400" />
              <span className="text-[11px] font-mono font-bold text-slate-200 tracking-wider uppercase">
                LATENCY: 12MS
              </span>
            </div>
            <span className="px-1.5 py-0.5 rounded bg-blue-500/20 text-[9px] font-mono text-blue-400 font-semibold tracking-wider">
              LIVE
            </span>
          </div>

          <div className="pt-1.5 border-t border-blue-500/15 flex items-center justify-between text-[11px] font-mono text-slate-400 tracking-wider uppercase">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-emerald-400" />
              <span>THROUGHPUT:</span>
            </span>
            <span className="text-slate-200 font-bold">1.4 GB/S</span>
          </div>

          <div className="text-[10px] font-mono text-blue-400/90 tracking-widest uppercase flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
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
          
          {/* Pill Badge above H1 (Per Requirement 3: border border-blue-500/30 bg-blue-950/30 text-blue-400 text-xs px-3.5 py-1 rounded-full with 2rem mb-8 spacing) */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="inline-flex items-center gap-2 border border-blue-500/30 bg-blue-950/30 text-blue-400 text-xs px-3.5 py-1 rounded-full font-mono shadow-lg shadow-blue-950/40 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span className="tracking-wider uppercase">PRACTICAL AI & CUSTOM SOFTWARE STUDIO</span>
            </div>
          </motion.div>

          {/* Primary H1 Headline (Plus Jakarta Sans, weight 800) */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] font-sans"
          >
            We Build the Systems <br className="hidden sm:inline" />
            Behind Smarter Businesses.
          </motion.h1>

          {/* Quote beneath H1 (Per Requirement 3: text-xs font-mono text-blue-400/80 tracking-[0.2em] uppercase) */}
          <motion.div variants={itemVariants} className="mt-4 mb-6">
            <p className="text-xs font-mono text-blue-400/80 tracking-[0.2em] uppercase flex items-center justify-center gap-2">
              <span className="inline-block w-4 h-[1px] bg-blue-400/40" />
              <span>ENGINEERING THE LIGHT AHEAD.</span>
              <span className="inline-block w-4 h-[1px] bg-blue-400/40" />
            </p>
          </motion.div>

          {/* Subtitle / Body Paragraph (Per Requirement 3: text-slate-300 font-normal leading-relaxed max-w-2xl) */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal"
          >
            <strong className="text-white font-semibold">{COMPANY_NAME}</strong> builds AI automation, computer vision, intelligent agents, and custom software that turn repetitive business operations into scalable systems.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          >
            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto px-8 py-4 text-sm font-mono font-bold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-xl shadow-lg shadow-blue-600/25 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2.5 cursor-pointer group"
            >
              <span>Book a Free Consultation</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <a
              href="#case-studies"
              className="w-full sm:w-auto px-8 py-4 text-sm font-mono font-semibold text-slate-200 bg-[#151618] hover:bg-[#1f2124] border border-blue-500/20 rounded-xl transition-all flex items-center justify-center gap-2 group"
            >
              <span>See What We've Built</span>
              <ChevronRight className="w-4 h-4 text-blue-400 transition-transform group-hover:translate-x-0.5" />
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
