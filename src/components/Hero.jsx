import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Code2, Sparkles, Terminal, ChevronRight, FileText } from 'lucide-react';
import Hero3DCanvas from './Hero3DCanvas';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-grid-pattern">
      {/* Subtle profile background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img
          src="/basavaraj-profile.jpg"
          alt=""
          aria-hidden="true"
          className="absolute right-[-5%] top-1/2 -translate-y-1/2 w-[560px] max-w-[65vw] opacity-[0.75] object-contain object-top [mask-image:linear-gradient(to_left,black,transparent_90%)]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07090e]/85 via-[#07090e]/35 to-transparent" />
      </div>
      {/* Background Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-sky-500/10 to-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Text Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Developer Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-sky-500/30 text-sky-300 text-xs font-mono shadow-inner shadow-sky-500/10">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Software Engineering Roles</span>
              <Sparkles className="w-3.5 h-3.5 text-sky-400 ml-1" />
            </div>

            {/* Main Greeting & Name */}
            <div className="space-y-2">
              <h2 className="text-slate-400 text-lg sm:text-xl font-medium tracking-wide">
                Hi, I'm <span className="text-white font-semibold">Basavaraj Kenganal</span> 👋
              </h2>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Java Full Stack <br />
                <span className="text-gradient-cyan">Developer</span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed font-normal">
              Computer Science Engineer passionate about building scalable, modern and user-focused web applications using <span className="text-sky-300 font-medium">Java</span>, <span className="text-indigo-300 font-medium">Spring Boot</span>, <span className="text-sky-400 font-medium">React</span> and modern web technologies.
            </p>

            {/* Quick Tech Pill Tags */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1 font-mono text-xs text-slate-400">
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-sky-300">Java</span>
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-emerald-300">Spring Boot</span>
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-cyan-300">React.js</span>
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-indigo-300">Hibernate</span>
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-amber-300">MySQL</span>
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-purple-300">REST APIs</span>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#projects"
                className="group relative inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-sky-500 to-indigo-600 shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <span>View My Projects</span>
                <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-white/5 hover:bg-white/10 border border-white/15 hover:border-sky-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 glass-card"
              >
                <Mail className="w-4 h-4 mr-2 text-sky-400" />
                <span>Contact Me</span>
              </a>

              <a
                href="/Basavaraj-Kenganal-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-white/5 hover:bg-white/10 border border-white/15 hover:border-sky-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 glass-card"
              >
                <FileText className="w-4 h-4 mr-2 text-emerald-400" />
                <span>View Resume</span>
              </a>
            </div>

            {/* Social Buttons / Icons */}
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-6 border-t border-white/10">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">Connect:</span>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/in/basavarajkenganal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-sky-500/20 border border-white/10 hover:border-sky-500/40 text-slate-300 hover:text-sky-400 transition-all shadow-sm"
                  aria-label="LinkedIn Profile"
                  title="Connect on LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>

                <a
                  href="https://github.com/Basavarajkenganal9902"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-indigo-500/20 border border-white/10 hover:border-indigo-500/40 text-slate-300 hover:text-indigo-400 transition-all shadow-sm"
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>

                <a
                  href="mailto:basavarajkenganal0@gmail.com"
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-emerald-500/20 border border-white/10 hover:border-emerald-500/40 text-slate-300 hover:text-emerald-400 transition-all shadow-sm"
                  aria-label="Send Email"
                  title="Send Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right 3D Visual Canvas Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative glass-card rounded-3xl p-2 border border-white/15 shadow-2xl shadow-sky-950/40 overflow-hidden">
              {/* Header Bar simulation */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900/80 border-b border-white/10 rounded-t-2xl">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-sky-400" />
                  <span>developer-workspace.3d</span>
                </div>
                <div className="w-12" />
              </div>

              {/* 3D Canvas */}
              <Hero3DCanvas />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Down Prompt */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
        <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Scroll Down</span>
        <a href="#about" className="p-2 rounded-full bg-white/5 border border-white/10 text-sky-400 animate-bounce">
          <ArrowDown className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
