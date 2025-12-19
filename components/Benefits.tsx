'use client';

import { Zap, Target, Rocket, Building2 } from 'lucide-react';

const benefits = [
  {
    category: 'Massive Operational Efficiency',
    items: [
      'Reduces Analysis Time from Months to Days',
      'Empowers Human Capital by automating labor-intensive tasks',
      'Creates a Unified Source of Truth with centralized Knowledge Graph',
    ],
    icon: Zap,
  },
  {
    category: 'Enhanced Strategic Decision-Making',
    items: [
      'Enhanced Accuracy through multi-source data extraction',
      'Confidence in Assessments with S-Curve, Hype Cycle, and TRL analysis',
      'Proactive vs. Reactive Strategy with Signal Analysis',
    ],
    icon: Target,
  },
  {
    category: 'Accelerated National Self-Reliance',
    items: [
      'Comparative Hype Cycle Analysis for gap identification',
      'Threat Identification through signal analysis and convergence detection',
      'Future Production Cost and Viability prediction',
    ],
    icon: Rocket,
  },
  {
    category: 'Architecture Impact',
    items: [
      'Task-specific scaling with MCP Server',
      'Multi-Modal RAG and Knowledge Graph transformation',
      'Scalable, reusable, and easy to update architecture',
    ],
    icon: Building2,
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0f172a]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Impact & Benefits</span>
          </h2>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Transforming technology intelligence with measurable results
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-blue-900/40 border border-blue-400/30 rounded-xl p-8 hover:border-blue-400/60 transition-all"
            >
              <div className="flex items-center mb-6">
                <div className="mr-4">
                  <benefit.icon className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-2xl font-semibold text-white">{benefit.category}</h3>
              </div>
              <ul className="space-y-3">
                {benefit.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <span className="text-blue-400 mr-3">✓</span>
                    <span className="text-blue-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Key Metrics */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-900/40 border border-blue-400/30 rounded-xl p-8 text-center">
            <div className="text-5xl font-bold text-white mb-2">90%+</div>
            <div className="text-blue-200 text-lg">Reduction in Time-to-Insight</div>
          </div>
          <div className="bg-blue-900/40 border border-blue-400/30 rounded-xl p-8 text-center">
            <div className="text-5xl font-bold text-white mb-2">24/7</div>
            <div className="text-blue-200 text-lg">Automated Monitoring</div>
          </div>
          <div className="bg-blue-900/40 border border-blue-400/30 rounded-xl p-8 text-center">
            <div className="text-5xl font-bold text-white mb-2">50%+</div>
            <div className="text-blue-200 text-lg">API Cost Reduction</div>
          </div>
        </div>
      </div>
    </section>
  );
}

