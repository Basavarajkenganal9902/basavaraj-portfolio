import React from 'react';
import { motion } from 'framer-motion';
import { User, Code2, Server, Database, Brain, Sparkles, CheckCircle2, Laptop, ShieldCheck } from 'lucide-react';

const stats = [
  {
    category: 'Frontend',
    icon: Laptop,
    color: 'from-sky-500 to-cyan-400',
    borderColor: 'border-sky-500/30',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js'],
    desc: 'Responsive, accessible & interactive UI engineering',
  },
  {
    category: 'Backend',
    icon: Server,
    color: 'from-indigo-500 to-violet-500',
    borderColor: 'border-indigo-500/30',
    skills: ['Java', 'Spring Boot', 'Hibernate', 'REST APIs', 'JDBC'],
    desc: 'Scalable architecture, object-oriented logic & secure APIs',
  },
  {
    category: 'Database',
    icon: Database,
    color: 'from-emerald-500 to-teal-400',
    borderColor: 'border-emerald-500/30',
    skills: ['MySQL', 'Relational Schemas', 'SQL Queries'],
    desc: 'Structured query optimization, entity mapping & data persistence',
  },
];

const highlights = [
  'Computer Science and Engineering Student (2022–2026)',
  'Passionate Full-Stack Developer & Problem Solver',
  'Object-Oriented Design & Clean Code Principles',
  'Building End-to-End Real-World Applications',
];

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#07090e]">
      {/* Glow Ambient background */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-sky-500/30 text-sky-400 text-xs font-mono">
            <User className="w-3.5 h-3.5" />
            <span>ABOUT MY JOURNEY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Passionate Engineering Student & <span className="text-gradient-cyan">Java Full Stack Developer</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Bridging theoretical computer science principles with modern full-stack web engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Animated Bio Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col justify-between"
          >
            <div className="glass-card rounded-3xl p-8 border border-white/10 relative h-full flex flex-col justify-between shadow-xl">
              <div className="space-y-6">
                
                {/* Header Badge */}
                <div className="flex items-center justify-between pb-6 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-sky-500 to-indigo-600 p-[1px]">
                      <div className="w-full h-full bg-[#0d111a] rounded-[15px] flex items-center justify-center">
                        <Code2 className="w-6 h-6 text-sky-400" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Basavaraj Kenganal</h3>
                      <p className="text-xs text-sky-400 font-mono">CS Engineer & Full Stack Aspirant</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-medium">
                    Available 2026
                  </span>
                </div>

                {/* Narrative */}
                <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                  <p>
                    I am a <strong className="text-white">Computer Science and Engineering student</strong> driven by a strong desire to craft efficient, robust, and scalable software solutions.
                  </p>
                  <p>
                    My core technical focus centers on <strong className="text-sky-300">Java Full Stack Development</strong>. I specialize in developing seamless frontends using React and building high-performance backends powered by Java, Spring Boot, Hibernate, and RESTful web services.
                  </p>
                  <p>
                    Whether modeling relational databases in MySQL or integrating modern natural language processing workflows, I love tackling real-world problems through clean code architecture.
                  </p>
                </div>

                {/* Key Bullet Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-white/5 border border-white/5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Quote / Goal */}
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <Brain className="w-4 h-4 text-indigo-400" />
                  <span>Goal: Professional Full Stack Engineer</span>
                </div>
                <span className="text-sky-400">B.E. CSE</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Key Stack Overview Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 space-y-6 flex flex-col justify-between"
          >
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={idx}
                  className={`glass-card rounded-2xl p-6 border ${stat.borderColor} glass-card-hover relative group overflow-hidden`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3.5 rounded-2xl bg-gradient-to-tr ${stat.color} text-white shadow-lg shrink-0`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="space-y-2 w-full">
                      <div className="flex items-center justify-between">
                        <h4 className="text-lg font-bold text-white group-hover:text-sky-300 transition-colors">
                          {stat.category} Architecture
                        </h4>
                        <span className="text-[11px] font-mono text-slate-500 uppercase tracking-widest">Core Stack</span>
                      </div>
                      <p className="text-xs text-slate-400 leading-normal">{stat.desc}</p>
                      
                      {/* Tech Chips */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {stat.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-slate-200 group-hover:border-sky-500/30 transition-all"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
