import React, { useEffect } from 'react';
import { Header, Hero, ProjectSection, Contact } from './components';
import { projects } from './data/projects';
import { APP_CONFIG } from './constants';
import { scrollToTop } from './utils/helpers';
import './styles/globals.css';
import { tailwindConfig } from './styles/tailwind.config';

function App() {
  useEffect(() => {
    // Configure Tailwind CSS
    if (window.tailwind && window.tailwind.config) {
      window.tailwind.config = tailwindConfig;
    }
  }, []);

  const handleScrollToTop = () => {
    scrollToTop();
  };

  return (
    <div className="h-full text-base-content">
      <Header onBackToTop={handleScrollToTop} />
      <Hero projects={projects} />
      
      {projects.map((project, index) => (
        <div key={project.id} id={`project-${project.id}`}>
          <ProjectSection 
            project={project} 
            index={index}
          />
        </div>
      ))}
      
      <Contact />
      
      {/* Footer */}
      <header className="bg-white border-t border-neutral-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center">
                <i className="fa-solid fa-chart-line text-white text-lg"></i>
              </div>
              <span className="text-xl text-neutral-800">{APP_CONFIG.name}</span>
            </div>
            <button 
              onClick={handleScrollToTop}
              className="bg-neutral-800 text-white px-6 py-2 rounded-lg hover:bg-neutral-700 transition-colors flex items-center space-x-2"
            >
              <i className="fa-solid fa-arrow-up text-sm"></i>
              <span>Back to Top</span>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
