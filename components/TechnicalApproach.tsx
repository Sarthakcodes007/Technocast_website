'use client';

import { useEffect, useRef } from 'react';

const steps = [
  {
    number: '1',
    title: 'Intelligent Query Understanding',
    description: 'User queries are refined by a Clarifying Agent to capture precise intent. The system checks our custom database before launching multi-source research for speed and relevance.',
    image: '/Point_1.png',
  },
  {
    number: '2',
    title: 'Automated Research & Knowledge Expansion',
    description: 'The Research Agent gathers multi-source data (patents, papers, market, media, financial) to build the Knowledge Graph and Vector DB. A Continuous Knowledge Growth Module keeps these expanding with new insights.',
    image: '/Point_2.png',
  },
  {
    number: '3',
    title: 'Indexing and Semantic Extraction',
    description: 'The Knowledge Extraction Engine performs semantic indexing, entity linking, and feature tagging to build an interconnected, retrievable data layer. Multi-modal RAG enables rich contextual retrieval for analysis.',
    image: '/Point_3.png',
  },
  {
    number: '4',
    title: 'Analytical Intelligence Layer',
    description: 'The Analysis Agent derives actionable insights. These analytics quantify technological maturity, adoption rate, and market potential.',
    image: '/Point_4.png',
  },
  {
    number: '5',
    title: 'MCP Server Integration',
    description: 'A unified MCP Server integrates forecasting, statistical analysis, TRL estimation, visualization, and report generation. It centralizes analytical tools as independent, on-demand services.',
    image: '/Point_5.png',
  },
];

export default function TechnicalApproach() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    let animationId: number;
    let isPaused = false;
    const scrollSpeed = 0.5; // Adjust speed (pixels per frame)
    const itemWidth = 500; // Width of each item including gap
    const totalItems = steps.length;

    const scroll = () => {
      if (!isPaused) {
        scrollPosition += scrollSpeed;
        
        // Reset scroll position when it reaches halfway (seamless loop)
        if (scrollPosition >= itemWidth * totalItems) {
          scrollPosition = 0;
        }
        
        scrollContainer.scrollLeft = scrollPosition;
      }
      animationId = requestAnimationFrame(scroll);
    };

    // Start auto-scroll
    animationId = requestAnimationFrame(scroll);

    // Pause on hover
    const handleMouseEnter = () => {
      isPaused = true;
    };

    const handleMouseLeave = () => {
      isPaused = false;
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section id="approach" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#1e3a8a] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Technical Approach</span>
          </h2>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            A sophisticated multi-agentic architecture designed for scalability and intelligence
          </p>
        </div>
        
        {/* Horizontal Scrolling Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 cursor-grab active:cursor-grabbing"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {/* Duplicate items for seamless infinite loop */}
          {[...steps, ...steps].map((step, index) => (
            <div
              key={`${step.number}-${index}`}
              className="flex-shrink-0 w-[400px] md:w-[500px] bg-blue-900/40 border border-blue-400/30 rounded-xl p-6 hover:border-blue-400/60 transition-all group shadow-lg"
            >
              <div className="mb-4">
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center text-2xl font-bold text-white flex-shrink-0 shadow-lg">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-semibold text-white">{step.title}</h3>
                </div>
              </div>
              <p className="text-blue-200 leading-relaxed text-sm md:text-base">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
}

