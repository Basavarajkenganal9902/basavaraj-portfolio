import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, BookOpen, CheckCircle2, Award, Code2 } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-24 relative bg-[#07090e]">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-sky-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-sky-500/30 text-sky-400 text-xs font-mono">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & <span className="text-gradient-cyan">Degree</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Formal Computer Science engineering training grounding core computer systems & software development principles.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-3xl mx-auto relative">
          
          {/* Vertical Timeline Line */}
          <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-sky-500 via-indigo-500 to-transparent opacity-30 hidden sm:block" />

          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex flex-col sm:flex-row items-start gap-6 group"
          >
            {/* Icon Node */}
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-sky-500 to-indigo-600 p-[1px] shadow-lg shadow-sky-500/20 shrink-0 z-10 hidden sm:flex items-center justify-center">
              <div className="w-full h-full bg-[#0d111a] rounded-[15px] flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-sky-400 group-hover:scale-110 transition-transform" />
              </div>
            </div>

            {/* Card Content */}
            <div className="glass-card rounded-3xl p-8 border border-white/10 glass-card-hover relative w-full space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-4">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
                    Bachelor of Engineering
                  </h3>
                  <p className="text-sm text-sky-400 font-mono font-medium mt-0.5">
                    Computer Science and Engineering
                  </p>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-300 w-fit">
                  <Calendar className="w-3.5 h-3.5 text-sky-400" />
                  <span>2022 – 2026</span>
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed">
                Pursuing a comprehensive curriculum in Computer Science and Engineering, focusing on Object-Oriented Software Engineering, Data Structures & Algorithms, Database Management Systems, Operating Systems, Computer Networks, and Full Stack Web Technologies.
              </p>

              {/* Core Coursework Areas */}
              <div className="pt-2">
                <span className="text-xs font-mono text-slate-400 block mb-2">Core Engineering Foundations:</span>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Data Structures & Algorithms',
                    'Object-Oriented Programming',
                    'Database Management Systems',
                    'Operating Systems',
                    'Software Engineering',
                    'Web Technologies'
                  ].map((subject, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-slate-300">
                      {subject}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
