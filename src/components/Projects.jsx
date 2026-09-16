import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, FolderGit2, Sparkles, Plane, Brain, Activity, ArrowRight, CheckCircle2, Terminal } from 'lucide-react';

const projects = [
  {
    id: 'ganapati-travel',
    title: 'Ganapati Travel',
    type: 'Full Web Application',
    tagline: 'Modern Travel & Tourism Web Application',
    description: 'A responsive modern travel platform designed for seamless trip exploration, destination showcase, user-friendly bookings, and interactive visual travel experiences.',
    liveUrl: 'https://ganapatikenganal.netlify.app/',
    hasGithub: false,
    tech: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Responsive Design', 'Web Performance'],
    features: [
      'Interactive destination showcases with high-res visuals',
      'Mobile-responsive glassmorphism layout',
      'Smooth navigation and user booking flow',
      'Optimized loading and asset performance'
    ],
    theme: 'cyan',
    badgeColor: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
  },
  {
    id: 'kannada-nlp',
    title: 'Kannada Abstractive Text Summarization with Sentiment Analysis',
    type: 'AI & Natural Language Processing',
    tagline: 'Abstractive NLP Summarization for Kannada Script',
    description: 'A Kannada Natural Language Processing project that generates abstractive summaries from Kannada text and performs sentiment analysis on the generated content.',
    liveUrl: null,
    hasGithub: false,
    tech: ['Python', 'NLP', 'IndicBART', 'Transformers', 'BERT', 'Machine Learning', 'Kannada NLP'],
    workflow: [
      'Kannada Text',
      'Preprocessing',
      'Abstractive Summarization',
      'Generated Summary',
      'Sentiment Analysis',
      'Sentiment Output'
    ],
    features: [
      'Fine-tuned IndicBART model for Kannada language abstractive summary generation',
      'BERT/Transformer-based sentiment classification on summarized text',
      'Custom Unicode text preprocessing pipeline for South Asian scripts',
      'End-to-end evaluation pipeline for model accuracy and ROUGE metrics'
    ],
    theme: 'violet',
    badgeColor: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30',
  },
  {
    id: 'heart-disease',
    title: 'Heart Disease Prediction',
    type: 'Machine Learning & Healthcare Analytics',
    tagline: 'Predictive ML Model for Medical Feature Risk Analysis',
    description: 'A machine learning project that predicts the possibility of heart disease based on relevant input features.',
    liveUrl: null,
    hasGithub: false,
    tech: ['Python', 'Machine Learning', 'Pandas', 'NumPy', 'Scikit-learn', 'Data Analysis'],
    metrics: [
      { label: 'Classification Model', val: 'Random Forest / Logistic Regression' },
      { label: 'Key Indicators', val: 'Cholesterol, RestBP, Age, Max HR' },
      { label: 'Data Preprocessing', val: 'Feature Scaling & Imputation' }
    ],
    features: [
      'Exploratory data analysis (EDA) on clinical patient features',
      'Supervised classification model for binary health risk assessment',
      'Feature importance ranking and correlation matrix analysis',
      'Evaluated via Precision, Recall, F1-Score, and ROC-AUC metrics'
    ],
    theme: 'emerald',
    badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
  }
];

export default function Projects() {
  const [activeWorkflowStep, setActiveWorkflowStep] = useState(0);

  return (
    <section id="projects" className="py-24 relative bg-[#07090e] overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-sky-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-sky-500/30 text-sky-400 text-xs font-mono">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>PROJECT PORTFOLIO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured <span className="text-gradient-cyan">Engineering Projects</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Real-world applications spanning web platforms, natural language processing, and predictive machine learning models.
          </p>
        </div>

        {/* Projects Cards Container */}
        <div className="space-y-12">
          
          {/* PROJECT 1 — Ganapati Travel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-3xl p-8 border border-white/10 glass-card-hover relative group overflow-hidden shadow-2xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Info Column */}
              <div className="lg:col-span-7 space-y-5">
                <div className="flex flex-wrap items-center gap-3">
                  <span className={`px-3 py-1 rounded-full border text-xs font-mono font-medium ${projects[0].badgeColor}`}>
                    {projects[0].type}
                  </span>
                  <span className="text-xs font-mono text-slate-500 flex items-center gap-1">
                    <Plane className="w-3.5 h-3.5 text-sky-400" />
                    <span>Live Web App</span>
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-sky-300 transition-colors">
                  {projects[0].title}
                </h3>
                
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {projects[0].description}
                </p>

                {/* Key Features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                  {projects[0].features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {projects[0].tech.map((t, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="pt-4 flex items-center gap-4">
                  <a
                    href={projects[0].liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-sky-500 to-indigo-600 shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Mockup Preview Visual */}
              <div className="lg:col-span-5 relative">
                <div className="glass-panel rounded-2xl p-3 border border-white/10 shadow-xl bg-slate-900/90 relative overflow-hidden group-hover:border-sky-500/40 transition-all">
                  
                  {/* Browser Bar */}
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-xs font-mono text-slate-400">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    </div>
                    <span className="text-[11px] truncate text-slate-400 max-w-[200px]">ganapatikenganal.netlify.app</span>
                    <div className="w-6" />
                  </div>

                  {/* Simulated Travel Website Card */}
                  <div className="space-y-3 p-4 bg-gradient-to-br from-slate-900 via-slate-950 to-sky-950 rounded-xl border border-white/5 relative">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Plane className="w-5 h-5 text-sky-400 animate-pulse" />
                        <span className="font-bold text-sm text-white tracking-wide">GANAPATI TRAVEL</span>
                      </div>
                      <span className="px-2 py-0.5 rounded text-[10px] bg-sky-500/20 text-sky-300 font-mono">EXPLORE</span>
                    </div>

                    <div className="h-32 rounded-lg bg-sky-900/30 border border-sky-500/20 flex flex-col items-center justify-center text-center p-3 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                      <span className="text-xs font-bold text-sky-200 z-10">Discover Incredible Destinations</span>
                      <span className="text-[11px] text-slate-400 z-10 mt-1">Book curated packages & travel tours</span>
                    </div>

                    <div className="flex justify-between items-center text-[11px] text-slate-400 font-mono">
                      <span>Destination Showcase</span>
                      <span className="text-sky-400 font-semibold">Live Online →</span>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </motion.div>


          {/* PROJECT 2 — Kannada NLP Summarization */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-3xl p-8 border border-white/10 glass-card-hover relative group overflow-hidden shadow-2xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Info Column */}
              <div className="lg:col-span-6 space-y-5">
                <div className="flex flex-wrap items-center gap-3">
                  <span className={`px-3 py-1 rounded-full border text-xs font-mono font-medium ${projects[1].badgeColor}`}>
                    {projects[1].type}
                  </span>
                  <span className="text-xs font-mono text-slate-500 flex items-center gap-1">
                    <Brain className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Machine Learning</span>
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors leading-tight">
                  {projects[1].title}
                </h3>
                
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {projects[1].description}
                </p>

                {/* Features */}
                <div className="space-y-2 pt-1">
                  {projects[1].features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {projects[1].tech.map((t, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-indigo-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Interactive NLP Workflow Visualization */}
              <div className="lg:col-span-6 relative">
                <div className="glass-panel rounded-2xl p-6 border border-indigo-500/30 bg-slate-950/80 space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <Brain className="w-5 h-5 text-indigo-400 animate-pulse" />
                      <span className="font-bold text-sm text-white">NLP Pipeline Architecture</span>
                    </div>
                    <span className="text-[11px] font-mono text-indigo-300">Kannada Text Processing</span>
                  </div>

                  {/* Flowchart Steps */}
                  <div className="space-y-2">
                    {projects[1].workflow.map((step, idx) => {
                      const isActive = activeWorkflowStep === idx;
                      return (
                        <div
                          key={idx}
                          onClick={() => setActiveWorkflowStep(idx)}
                          className={`p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                            isActive
                              ? 'bg-indigo-500/20 border-indigo-500 text-white shadow-lg shadow-indigo-500/20'
                              : 'bg-white/5 border-white/5 text-slate-400 hover:bg-white/10 hover:text-slate-200'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-mono font-bold ${
                              isActive ? 'bg-indigo-500 text-white' : 'bg-slate-800 text-slate-400'
                            }`}>
                              {idx + 1}
                            </span>
                            <span className="text-xs font-semibold">{step}</span>
                          </div>
                          <ArrowRight className={`w-4 h-4 transition-transform ${isActive ? 'text-indigo-400 translate-x-1' : 'text-slate-600'}`} />
                        </div>
                      );
                    })}
                  </div>

                  <div className="text-[11px] font-mono text-slate-400 text-center pt-2">
                    Click steps above to highlight workflow pipeline
                  </div>
                </div>
              </div>

            </div>
          </motion.div>


          {/* PROJECT 3 — Heart Disease Prediction */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-3xl p-8 border border-white/10 glass-card-hover relative group overflow-hidden shadow-2xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Info Column */}
              <div className="lg:col-span-6 space-y-5">
                <div className="flex flex-wrap items-center gap-3">
                  <span className={`px-3 py-1 rounded-full border text-xs font-mono font-medium ${projects[2].badgeColor}`}>
                    {projects[2].type}
                  </span>
                  <span className="text-xs font-mono text-slate-500 flex items-center gap-1">
                    <Activity className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Predictive Analytics</span>
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors leading-tight">
                  {projects[2].title}
                </h3>
                
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {projects[2].description}
                </p>

                {/* Features */}
                <div className="space-y-2 pt-1">
                  {projects[2].features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {projects[2].tech.map((t, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-emerald-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Data ML Analytics Mockup */}
              <div className="lg:col-span-6 relative">
                <div className="glass-panel rounded-2xl p-6 border border-emerald-500/30 bg-slate-950/80 space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <Activity className="w-5 h-5 text-emerald-400 animate-pulse" />
                      <span className="font-bold text-sm text-white">ML Risk Assessment Engine</span>
                    </div>
                    <span className="text-[11px] font-mono text-emerald-300">Predictive Model</span>
                  </div>

                  {/* Simulated Model Metrics */}
                  <div className="space-y-3">
                    {projects[2].metrics.map((m, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                        <span className="text-xs font-mono text-slate-400">{m.label}</span>
                        <span className="text-xs font-mono font-bold text-emerald-300">{m.val}</span>
                      </div>
                    ))}
                  </div>

                  {/* Risk Meter Visual Simulation */}
                  <div className="p-4 rounded-xl bg-slate-900 border border-white/10 text-center space-y-2">
                    <div className="text-xs font-mono text-slate-400 flex items-center justify-between">
                      <span>Feature Evaluation Index</span>
                      <span className="text-emerald-400 font-bold">Scikit-learn Engine</span>
                    </div>
                    <div className="w-full h-3 rounded-full bg-slate-800 overflow-hidden p-0.5">
                      <div className="h-full rounded-full bg-gradient-to-r from-emerald-500 via-teal-400 to-sky-400 w-4/5 animate-pulse" />
                    </div>
                    <span className="text-[11px] text-slate-500 block">
                      Trained on standardized clinical metrics & biometric risk parameters.
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
