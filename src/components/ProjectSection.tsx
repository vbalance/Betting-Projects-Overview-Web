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
      <section className={`py-20 ${backgroundClass} border-b border-neutral-100`}>
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-16 h-16 bg-neutral-100 rounded-xl flex items-center justify-center">
                <i className={`${project.icon} text-neutral-600 text-2xl`}></i>
              </div>
              <div>
                <h2 className="text-4xl text-neutral-800">{project.title}</h2>
                <p className="text-neutral-600 mt-2">{project.subtitle}</p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="prose max-w-none">
                  <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                    {project.extendedDescription}
                  </p>
                  <p className="text-neutral-700 mb-8">
                    The system integrates advanced mathematical models with machine learning algorithms to provide accurate probability assessments and automated bet placement capabilities. Users can customize their risk parameters and betting strategies while the system handles the complex calculations and execution.
                  </p>
                </div>

                <div className={`${techBackgroundClass} p-6 rounded-xl shadow-sm`}>
                  <h4 className="text-neutral-800 mb-4 flex items-center">
                    <i className="fa-solid fa-code text-neutral-600 mr-2"></i>
                    Technical Implementation
                  </h4>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-neutral-200 text-neutral-700 text-sm px-3 py-1 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-neutral-200">
                    <p className="text-sm text-neutral-600">
                      Real-time data processing with WebSocket connections and automated betting execution through secure API integrations.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-1 gap-4">
                  <div
                    className="relative group cursor-pointer"
                    onClick={() => openLightbox(project.images.main)}
                  >
                    <div className="w-full h-[338px] rounded-xl overflow-hidden bg-neutral-200">
                      <img 
                        src={project.images.main} 
                        alt={`${project.title} Dashboard`}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-xl flex items-center justify-center">
                      <i className="fa-solid fa-expand text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-2xl"></i>
                    </div>
                    <p className="text-sm text-neutral-600 mt-2 text-center">
                      Real-time {project.title} Dashboard with Live Monitoring
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {project.images.gallery.map((image, imageIndex) => (
                      <div
                        key={imageIndex}
                        className="relative group cursor-pointer"
                        onClick={() => openLightbox(image.url)}
                      >
                        <div className="w-full h-[165px] rounded-xl overflow-hidden bg-neutral-200">
                          <img 
                            src={image.url} 
                            alt={image.caption}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-xl flex items-center justify-center">
                          <i className="fa-solid fa-expand text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xl"></i>
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
