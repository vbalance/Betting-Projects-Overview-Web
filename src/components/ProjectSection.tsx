import React, { useState } from 'react';
import { Project } from '../data/projects';
import '../styles/components/ProjectSection.css';

interface ProjectSectionProps {
  project: Project;
  index: number;
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ project, index }) => {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const openLightbox = (imageSrc: string) => {
    setLightboxImage(imageSrc);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const backgroundClass = index % 2 === 0 ? 'bg-white' : 'bg-neutral-50';
  const techBackgroundClass = index % 2 === 0 ? 'bg-neutral-50' : 'bg-white';

  return (
    <>
      <section className={`py-16 ${backgroundClass} border-b border-neutral-100`}>
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center space-x-5 mb-10">
              <div className="w-14 h-14 bg-neutral-800 rounded flex items-center justify-center shadow-lg">
                <i className={`${project.icon} text-white text-xl`}></i>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-1">{project.title}</h2>
                <p className="text-neutral-600 text-lg">{project.subtitle}</p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <div className="prose max-w-none">
                  <p className="text-lg text-neutral-700 leading-relaxed mb-8 font-medium">
                    {project.extendedDescription}
                  </p>
                  <p className="text-neutral-600 mb-10 leading-relaxed">
                    The system integrates advanced mathematical models with machine learning algorithms to provide accurate probability assessments and automated bet placement capabilities. Users can customize their risk parameters and betting strategies while the system handles the complex calculations and execution.
                  </p>
                </div>

                <div className={`${techBackgroundClass} p-6 rounded border border-neutral-200 shadow-sm hover:shadow-md transition-shadow duration-300`}>
                  <h4 className="text-neutral-800 mb-5 flex items-center font-semibold text-lg">
                    <i className="fa-solid fa-code text-neutral-700 mr-3"></i>
                    Technical Implementation
                  </h4>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-neutral-800 text-white text-sm px-4 py-2 rounded font-medium hover:bg-neutral-700 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-5">
                <div className="grid grid-cols-1 gap-5">
                  <div
                    className="relative group cursor-pointer"
                    onClick={() => openLightbox(project.images.main)}
                  >
                    <div className="w-full h-[320px] rounded border overflow-hidden bg-neutral-200 shadow-md group-hover:shadow-xl transition-all duration-300">
                      <img 
                        src={project.images.main} 
                        alt={`${project.title} Dashboard`}
                        className="w-full h-full object-contain bg-white transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 rounded flex items-center justify-center">
                      <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/30">
                        <i className="fa-solid fa-expand text-white text-lg"></i>
                      </div>
                    </div>
                    <p className="text-sm text-neutral-600 mt-3 text-center font-medium">
                      Real-time {project.title} Dashboard with Live Monitoring
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {project.images.gallery.map((image, imageIndex) => (
                      <div
                        key={imageIndex}
                        className="relative group cursor-pointer"
                        onClick={() => openLightbox(image.url)}
                      >
                        <div className="w-full h-[150px] rounded border overflow-hidden bg-neutral-200 shadow-sm group-hover:shadow-lg transition-all duration-300">
                          <img 
                            src={image.url} 
                            alt={image.caption}
                            className="w-full h-full object-contain bg-white transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 rounded flex items-center justify-center">
                          <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <i className="fa-solid fa-expand text-white text-sm"></i>
                          </div>
                        </div>
                        <p className="text-xs text-neutral-600 mt-2 text-center">
                          {image.caption}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-neutral-300 text-2xl"
            >
              <i className="fa-solid fa-times"></i>
            </button>
            <img
              src={lightboxImage}
              alt="Project screenshot"
              className="max-w-full max-h-full rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectSection;
