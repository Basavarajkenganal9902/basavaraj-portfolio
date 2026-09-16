import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Layout, Server, Database, Code, CheckCircle, Sparkles, Layers, Terminal, Shield } from 'lucide-react';

const skillCategories = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    icon: Layout,
    color: 'from-sky-500 to-cyan-400',
    description: 'Building modern, responsive, and visually appealing user interfaces',
    skills: [
      { name: 'HTML5', desc: 'Semantic tags, Accessibility, DOM Structure' },
      { name: 'CSS3', desc: 'Flexbox, Grid, Custom Animations, Glassmorphism' },
      { name: 'JavaScript', desc: 'ES6+, Async/Await, Fetch API, Closures' },
      { name: 'React.js', desc: 'Hooks, State Management, Components, JSX' },
    ]
  },
  {
    id: 'backend',
    title: 'Backend Development',
    icon: Server,
    color: 'from-indigo-500 to-violet-500',
    description: 'Enterprise server-side logic, framework engineering, & APIs',
    skills: [
      { name: 'Java', desc: 'OOP Concepts, Collections, Streams, JVM' },
      { name: 'Spring Boot', desc: 'Dependency Injection, Spring MVC, Security' },
      { name: 'Hibernate', desc: 'ORM, Entity Mapping, JPA Repositories' },
      { name: 'REST APIs', desc: 'JSON Serialization, HTTP Verbs, Endpoints' },
      { name: 'JDBC', desc: 'Database Connectivity, Prepared Statements' },
    ]
  },
  {
    id: 'database',
    title: 'Database & Persistence',
    icon: Database,
    color: 'from-emerald-500 to-teal-400',
    description: 'Relational data modeling, query optimization, & indexing',
    skills: [
      { name: 'MySQL', desc: 'Relational Schemas, Constraints, Triggers' },
      { name: 'SQL', desc: 'Joins, Aggregations, Complex Queries, Subqueries' },
    ]
  },
  {
    id: 'core',
    title: 'Programming & Core Java',
    icon: Code,
    color: 'from-amber-500 to-orange-400',
    description: 'Fundamental computer science & software engineering principles',
    skills: [
      { name: 'Object-Oriented Programming', desc: 'Encapsulation, Inheritance, Polymorphism, Abstraction' },
      { name: 'Data Structures', desc: 'Arrays, Lists, Stacks, Queues, Hash Tables, Trees' },
      { name: 'Java Collections', desc: 'List, Set, Map, Queue Framework APIs' },
      { name: 'Exception Handling', desc: 'Custom Exceptions, Try-Catch-Finally, Error Propagation' },
      { name: 'Multithreading', desc: 'Concurrency, Thread Lifecycle, Synchronization' },
    ]
  }
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredCategories = activeTab === 'all'
    ? skillCategories
    : skillCategories.filter(cat => cat.id === activeTab);

  return (
    <section id="skills" className="py-24 relative bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-sky-500/30 text-sky-400 text-xs font-mono">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & <span className="text-gradient-cyan">Technology Stack</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Core competencies organized by architectural layer. Hands-on experience across the entire software development lifecycle.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-xl text-xs font-medium font-mono transition-all ${
                activeTab === 'all'
                  ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/30'
                  : 'glass-panel text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              All Categories
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-medium font-mono transition-all ${
                  activeTab === cat.id
                    ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/30'
                    : 'glass-panel text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCategories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="glass-card rounded-3xl p-7 border border-white/10 relative group hover:border-sky-500/30 transition-all shadow-xl"
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 pb-6 border-b border-white/10 mb-6">
                  <div className={`p-3.5 rounded-2xl bg-gradient-to-tr ${category.color} text-white shadow-lg`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-xs text-slate-400">{category.description}</p>
                  </div>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5 hover:border-sky-500/40 hover:bg-slate-900/90 transition-all duration-300 group/item flex flex-col justify-between"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-semibold text-sm text-slate-200 group-hover/item:text-sky-300 transition-colors flex items-center gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                          {skill.name}
                        </span>
                        <Sparkles className="w-3 h-3 text-sky-400/0 group-hover/item:text-sky-400 transition-opacity" />
                      </div>
                      <span className="text-[11px] text-slate-400 leading-snug pl-5">
                        {skill.desc}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
