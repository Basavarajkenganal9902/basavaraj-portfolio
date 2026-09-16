import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Layers, ArrowDown, Play, CheckCircle2, Server, Database, Laptop, RefreshCw, Cpu, Code } from 'lucide-react';

export default function FullStackArchitecture() {
  const [isSimulating, setIsSimulating] = useState(false);
  const [simStep, setSimStep] = useState(0);

  const startSimulation = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setSimStep(1);

    const steps = [
      { step: 1, delay: 600 },
      { step: 2, delay: 1200 },
      { step: 3, delay: 1800 },
      { step: 4, delay: 2400 },
      { step: 5, delay: 3000 },
    ];

    steps.forEach(({ step, delay }) => {
      setTimeout(() => {
        setSimStep(step);
        if (step === 5) {
          setTimeout(() => {
            setIsSimulating(false);
            setSimStep(0);
          }, 1200);
        }
      }, delay);
    });
  };

  return (
    <section id="fullstack" className="py-24 relative bg-grid-pattern overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-sky-500/10 via-indigo-500/10 to-emerald-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-sky-500/30 text-sky-400 text-xs font-mono">
            <Layers className="w-3.5 h-3.5" />
            <span>FULL STACK ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            End-to-End <span className="text-gradient-cyan">Data Flow Diagram</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Visualizing how client-side user actions flow into enterprise Spring Boot backend microservices and relational MySQL storage.
          </p>

          {/* Interactive Simulation Trigger */}
          <div className="pt-4">
            <button
              onClick={startSimulation}
              disabled={isSimulating}
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs font-mono tracking-wider uppercase transition-all ${
                isSimulating
                  ? 'bg-sky-500/20 text-sky-300 border border-sky-500/40 cursor-wait'
                  : 'bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 hover:scale-[1.02]'
              }`}
            >
              {isSimulating ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin text-sky-400" />
                  <span>Simulating API Trace ({simStep}/5)...</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 fill-white" />
                  <span>Simulate Live API Request</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Architecture Layout */}
        <div className="max-w-4xl mx-auto space-y-6">
          
          {/* LAYER 1: FRONTEND */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`glass-card rounded-3xl p-6 border transition-all ${
              simStep === 1
                ? 'border-sky-400 shadow-xl shadow-sky-500/20 bg-sky-950/40 ring-2 ring-sky-500/50'
                : 'border-white/10 hover:border-sky-500/30'
            }`}
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-white/10 mb-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-sky-500/10 border border-sky-500/30 text-sky-400">
                  <Laptop className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-sky-400 font-bold uppercase">Layer 1</span>
                    <h3 className="text-lg font-bold text-white">Frontend Client Layer</h3>
                  </div>
                  <p className="text-xs text-slate-400">React • JavaScript • HTML5 • CSS3</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-sky-300">
                  User Interface & State
                </span>
              </div>
            </div>

            {/* Chips */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
              {['React.js', 'JavaScript (ES6+)', 'HTML5 Markup', 'CSS3 / Tailwind'].map((item, idx) => (
                <div key={idx} className="p-2.5 rounded-xl bg-slate-900/80 border border-white/5 text-xs font-mono text-slate-200">
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          {/* CONNECTION 1 (Frontend -> Backend HTTP REST) */}
          <div className="flex flex-col items-center justify-center py-2 relative">
            <div className="w-0.5 h-10 bg-gradient-to-b from-sky-500 to-indigo-500 relative">
              <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-sky-400 shadow-lg shadow-sky-400 ${
                simStep === 2 ? 'animate-ping' : ''
              }`} />
            </div>
            <div className="px-4 py-1.5 rounded-full bg-slate-900 border border-white/10 text-[11px] font-mono text-sky-300 flex items-center gap-2 shadow-md">
              <ArrowDown className="w-3.5 h-3.5 text-sky-400 animate-bounce" />
              <span>HTTP / REST API (JSON Request)</span>
            </div>
          </div>

          {/* LAYER 2: BACKEND */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`glass-card rounded-3xl p-6 border transition-all ${
              simStep === 3
                ? 'border-indigo-400 shadow-xl shadow-indigo-500/20 bg-indigo-950/40 ring-2 ring-indigo-500/50'
                : 'border-white/10 hover:border-indigo-500/30'
            }`}
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-white/10 mb-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400">
                  <Server className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-indigo-400 font-bold uppercase">Layer 2</span>
                    <h3 className="text-lg font-bold text-white">Backend Microservices Layer</h3>
                  </div>
                  <p className="text-xs text-slate-400">Java • Spring Boot • Hibernate ORM • REST Controllers</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-indigo-300">
                  Business Logic & API
                </span>
              </div>
            </div>

            {/* Chips */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
              {['Java Core', 'Spring Boot MVC', 'Hibernate ORM', 'REST Controller'].map((item, idx) => (
                <div key={idx} className="p-2.5 rounded-xl bg-slate-900/80 border border-white/5 text-xs font-mono text-slate-200">
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          {/* CONNECTION 2 (Backend -> Database JDBC/SQL) */}
          <div className="flex flex-col items-center justify-center py-2 relative">
            <div className="w-0.5 h-10 bg-gradient-to-b from-indigo-500 to-emerald-500 relative">
              <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400 ${
                simStep === 4 ? 'animate-ping' : ''
              }`} />
            </div>
            <div className="px-4 py-1.5 rounded-full bg-slate-900 border border-white/10 text-[11px] font-mono text-emerald-300 flex items-center gap-2 shadow-md">
              <ArrowDown className="w-3.5 h-3.5 text-emerald-400 animate-bounce" />
              <span>JDBC / Hibernate Entity Mapping</span>
            </div>
          </div>

          {/* LAYER 3: DATABASE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`glass-card rounded-3xl p-6 border transition-all ${
              simStep === 5
                ? 'border-emerald-400 shadow-xl shadow-emerald-500/20 bg-emerald-950/40 ring-2 ring-emerald-500/50'
                : 'border-white/10 hover:border-emerald-500/30'
            }`}
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-white/10 mb-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                  <Database className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-emerald-400 font-bold uppercase">Layer 3</span>
                    <h3 className="text-lg font-bold text-white">Database & Persistence Layer</h3>
                  </div>
                  <p className="text-xs text-slate-400">MySQL • Relational Tables • SQL Transactions</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-emerald-300">
                  Data Persistence
                </span>
              </div>
            </div>

            {/* Chips */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
              {['MySQL Engine', 'Relational Schemas', 'SQL Queries', 'Connection Pool'].map((item, idx) => (
                <div key={idx} className="p-2.5 rounded-xl bg-slate-900/80 border border-white/5 text-xs font-mono text-slate-200">
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
