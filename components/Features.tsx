'use client';

import { Link2, BarChart3, Radio, TrendingUp, TrendingDown, Target } from 'lucide-react';

const features = [
  {
    title: 'Technology Convergence Detection',
    description: 'Identifies merging technologies using Link Prediction, Dynamic Topic Modelling, and Technology Topic Networks to analyze potential threats and benefits.',
    icon: Link2,
  },
  {
    title: 'Technology Readiness Level (TRL)',
    description: 'Assesses technology maturity on a 1-to-9 scale from basic research to operational deployment using comprehensive research agent data.',
    icon: BarChart3,
  },
  {
    title: 'Signal Analysis',
    description: 'Interprets data from research papers and patents to identify weak signals and create Knowledge Graphs with node and edge formulation.',
    icon: Radio,
  },
  {
    title: 'Market Size Prediction',
    description: 'Analyzes industry reports, market trends, and commercialization data to estimate current and future market potential.',
    icon: TrendingUp,
  },
  {
    title: 'S-Curve Analysis',
    description: 'Plots technology emergence, growth, and stagnancy using data points like patents vs. time and research papers vs. time.',
    icon: TrendingDown,
  },
  {
    title: 'Gartner Hype Cycle',
    description: 'Formulates technology hype based on 5 key factors: Innovation Trigger, Peak of Expectations, Trough of Disillusionment, Slope of Enlightenment, and Plateau of Productivity.',
    icon: Target,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0f172a]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Powerful Features</span>
          </h2>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Comprehensive intelligence tools for technology forecasting and strategic decision-making
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-blue-900/40 border border-blue-400/30 rounded-xl p-6 hover:border-blue-400/60 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="w-14 h-14 bg-blue-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
              <p className="text-blue-200 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

