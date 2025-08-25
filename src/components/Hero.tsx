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
    <section className="bg-gradient-to-br from-neutral-900 via-neutral-900 to-neutral-900 py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-neutral-500/10 to-neutral-500/10"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-32 h-32 bg-neutral-400/20 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-neutral-400/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-neutral-400/20 rounded-full blur-xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-5xl md:text-6xl text-white mb-6">
            Building the Future of{' '}
            <span className="bg-gradient-to-r from-neutral-400 via-neutral-400 to-neutral-400 bg-clip-text text-transparent">
              Betting Software
            </span>
          </h1>
          <p className="text-xl text-neutral-100 mb-8">
            We are a team of innovators with {projects.length} active projects in betting analytics and automation, 
            pushing the boundaries of what's possible in the sports betting industry.
          </p>
          <div className="flex justify-center space-x-4 mb-12">
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm border border-neutral-300/20">
              <i className="fa-solid fa-trophy text-neutral-300"></i>
              <span className="text-white">{projects.length} Active Projects</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm border border-neutral-300/20">
              <i className="fa-solid fa-users text-neutral-300"></i>
              <span className="text-white">Expert Team</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm border border-neutral-300/20">
              <i className="fa-solid fa-rocket text-neutral-300"></i>
              <span className="text-white">Cutting Edge Tech</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-300/20 hover:border-neutral-400/50 cursor-pointer hover:bg-white/15"
              onClick={() => scrollToProject(project.id)}
            >
              <div className="flex items-center space-x-3 mb-3">
                <div className={`w-10 h-10 bg-gradient-to-br ${project.gradient} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <i className={`${project.icon} text-white`}></i>
                </div>
                <div>
                  <h3 className="text-white text-sm">{project.title}</h3>
                  <p className="text-xs text-neutral-200">{project.description}</p>
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
