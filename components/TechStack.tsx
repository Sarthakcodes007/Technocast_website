'use client';

const techCategories = [
  {
    category: 'Frontend',
    technologies: ['ReactJS', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    category: 'Backend',
    technologies: ['Python', 'FastAPI', 'LangChain', 'LangGraph'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    category: 'AI/ML',
    technologies: ['Anthropic MCP', 'Multi-Modal RAG', 'Vector DB'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    category: 'Database',
    technologies: ['Neo4j', 'Pinecone', 'Faiss'],
    color: 'from-orange-500 to-red-500',
  },
  {
    category: 'Infrastructure',
    technologies: ['AWS', 'Kubernetes', 'Vercel'],
    color: 'from-indigo-500 to-blue-500',
  },
  {
    category: 'Tools',
    technologies: ['PyDantic', 'Model Context Protocol'],
    color: 'from-yellow-500 to-orange-500',
  },
];

export default function TechStack() {
  return (
    <section 
      id="tech-stack" 
      className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{
        backgroundImage: 'url(/Gemini_Generated_Image_hpd2wqhpd2wqhpd2.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/70"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Technology Stack</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCategories.map((category, index) => (
            <div
              key={index}
              className="bg-[#0a0a0a]/80 backdrop-blur-sm border border-[#1f1f1f] rounded-xl p-6 hover:border-blue-500/50 transition-all"
            >
              <h3 className="text-xl font-semibold mb-4 text-white">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className={`px-4 py-2 bg-gradient-to-r ${category.color} rounded-lg text-white text-sm font-medium`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

