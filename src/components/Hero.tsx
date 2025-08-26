import React from 'react';
import { Project } from '../data/projects';
import '../styles/components/Hero.css';

interface HeroProps {
  projects: Project[];
}

const Hero: React.FC<HeroProps> = ({ projects }) => {
  const scrollToProject = (projectId: string) => {
    const element = document.getElementById(`project-${projectId}`);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  return (
    <section className="bg-gradient-to-br from-neutral-900 via-neutral-900 to-neutral-900 py-12 relative overflow-hidden min-h-screen flex flex-col">
      <div className="absolute inset-0 bg-gradient-to-r from-neutral-500/10 to-neutral-500/10"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-32 h-32 bg-neutral-400/20 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-neutral-400/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-neutral-400/20 rounded-full blur-xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10 flex-1 flex flex-col">
        <div className="text-center max-w-5xl mx-auto mb-8">
          <h1 className="text-5xl md:text-6xl text-white mb-8 leading-tight">
            <div className="mb-2 text-4xl md:text-5xl">Building the Future of</div>
            <div className="bg-gradient-to-r from-neutral-300 via-white to-neutral-300 bg-clip-text text-transparent font-bold pb-2">
              Betting Software
            </div>
          </h1>
          <p className="text-xl text-neutral-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            We are a team of innovators with {projects.length} active projects in betting analytics and automation, 
            pushing the boundaries of what's possible in the sports betting industry.
          </p>
          <div className="flex justify-center gap-3 mb-10">
            <div className="group flex items-center space-x-2 bg-gradient-to-r from-blue-600/20 to-blue-500/20 backdrop-blur-sm px-4 py-2 rounded border border-blue-400/30 hover:from-blue-600/30 hover:to-blue-500/30 hover:border-blue-400/50 transition-all duration-300 cursor-pointer">
              <i className="fa-solid fa-trophy text-blue-400 text-sm group-hover:text-blue-300 transition-colors"></i>
              <span className="text-white text-sm font-medium">{projects.length} Active Projects</span>
            </div>
            <div className="group flex items-center space-x-2 bg-gradient-to-r from-green-600/20 to-green-500/20 backdrop-blur-sm px-4 py-2 rounded border border-green-400/30 hover:from-green-600/30 hover:to-green-500/30 hover:border-green-400/50 transition-all duration-300 cursor-pointer">
              <i className="fa-solid fa-users text-green-400 text-sm group-hover:text-green-300 transition-colors"></i>
              <span className="text-white text-sm font-medium">Expert Team</span>
            </div>
            <div className="group flex items-center space-x-2 bg-gradient-to-r from-purple-600/20 to-purple-500/20 backdrop-blur-sm px-4 py-2 rounded border border-purple-400/30 hover:from-purple-600/30 hover:to-purple-500/30 hover:border-purple-400/50 transition-all duration-300 cursor-pointer">
              <i className="fa-solid fa-rocket text-purple-400 text-sm group-hover:text-purple-300 transition-colors"></i>
              <span className="text-white text-sm font-medium">Cutting Edge Tech</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-3 max-w-7xl mx-auto flex-1">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white/5 backdrop-blur-sm p-3 rounded border border-neutral-600/30 hover:border-neutral-500/50 cursor-pointer hover:bg-white/8 h-16 flex items-center transition-all duration-300 hover:shadow-lg hover:shadow-black/20 hover:-translate-y-0.5"
              onClick={() => scrollToProject(project.id)}
            >
              <div className="flex items-center space-x-2 w-full">
                <div className={`w-8 h-8 bg-gradient-to-br ${project.gradient} rounded flex items-center justify-center group-hover:scale-105 transition-all duration-300 flex-shrink-0 shadow-md`}>
                  <i className={`${project.icon} text-white text-xs`}></i>
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-white text-xs font-semibold truncate group-hover:text-neutral-100 transition-colors">{project.title}</h3>
                  <p className="text-xs text-neutral-300 truncate group-hover:text-neutral-200 transition-colors">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
