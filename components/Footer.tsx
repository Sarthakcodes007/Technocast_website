'use client';

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] border-t border-blue-500/30 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">TC</span>
              </div>
              <span className="text-xl font-bold text-white">TechnoCast</span>
            </div>
            <p className="text-blue-200 text-sm">
              Multi-Agentic Technology Forecasting Platform for strategic intelligence and decision-making.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-blue-200 hover:text-white transition-colors text-sm">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-white transition-colors text-sm">
                  Research Paper
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-white transition-colors text-sm">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-white transition-colors text-sm">
                  Demo
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="mailto:pandeysarthak1510@gmail.com" 
                  className="text-blue-200 hover:text-white transition-colors text-sm"
                >
                  pandeysarthak1510@gmail.com
                </a>
              </li>
              <li>
                <a 
                  href="https://www.linkedin.com/company/buildwithtechnocast/?viewAsMember=true" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-200 hover:text-white transition-colors text-sm inline-flex items-center gap-1"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
              </li>
              <li className="text-blue-200 text-sm">Head Office: Delhi Technological University</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-blue-500/30 pt-8 text-center">
          <p className="text-blue-200 text-sm">
            © 2024 TechnoCast. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

