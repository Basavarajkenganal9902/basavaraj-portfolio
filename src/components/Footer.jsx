import React from 'react';
import { Code2, ArrowUp, Linkedin, Github, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#04060a] border-t border-white/10 py-12 relative overflow-hidden text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
          
          {/* Brand Logo & Title */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-600 p-[1px]">
              <div className="w-full h-full bg-[#07090e] rounded-[11px] flex items-center justify-center">
                <Code2 className="w-4 h-4 text-sky-400" />
              </div>
            </div>
            <div>
              <span className="font-bold text-slate-100 text-sm tracking-tight block">
                Basavaraj Kenganal
              </span>
              <span className="text-[11px] text-slate-400 font-mono">
                Java Full Stack Developer • Software Developer
              </span>
            </div>
          </div>

          {/* Navigation links */}
          <div className="flex flex-wrap items-center justify-center gap-6 font-mono text-slate-300">
            <a href="#home" className="hover:text-sky-400 transition-colors">Home</a>
            <a href="#about" className="hover:text-sky-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-sky-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-sky-400 transition-colors">Projects</a>
            <a href="#fullstack" className="hover:text-sky-400 transition-colors">Architecture</a>
            <a href="#education" className="hover:text-sky-400 transition-colors">Education</a>
            <a href="#contact" className="hover:text-sky-400 transition-colors">Contact</a>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/basavarajkenganal"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-white/5 hover:bg-sky-500/20 text-slate-300 hover:text-sky-400 border border-white/10 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/Basavarajkenganal9902" target="_blank" rel="noopener noreferrer"
              className="p-2 rounded-xl bg-white/5 hover:bg-indigo-500/20 text-slate-300 hover:text-indigo-400 border border-white/10 transition-all"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-sky-500/20 hover:bg-sky-500/30 text-sky-300 border border-sky-500/40 transition-all flex items-center gap-1 font-mono text-[11px]"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Top</span>
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-slate-500 font-mono text-[11px]">
          <p>© {new Date().getFullYear()} Basavaraj Kenganal. All rights reserved.</p>
          <p className="flex items-center gap-1 justify-center">
            Built with React, Three.js, Tailwind CSS & Spring Boot Architecture Principles.
          </p>
        </div>
      </div>
    </footer>
  );
}
