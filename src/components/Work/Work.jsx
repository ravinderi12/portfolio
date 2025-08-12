import React, { useState, useCallback, useMemo } from "react";
import { projects } from "../../constants";

const ProjectCard = React.memo(({ project, onOpenModal }) => {
  const handleClick = useCallback(() => {
    onOpenModal(project);
  }, [project, onOpenModal]);

  return (
    <div
      onClick={handleClick}
      className="border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-2 transition-all duration-300 group"
    >
      <div className="p-3 sm:p-4">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-40 sm:h-48 md:h-52 object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
          onError={(e) => {
            e.target.src = '/placeholder-image.jpg';
          }}
        />
      </div>
      <div className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 line-clamp-2">
          {project.title}
        </h3>
        <p className="text-gray-500 mb-4 pt-2 sm:pt-4 text-sm sm:text-base line-clamp-3">
          {project.description}
        </p>
        <div className="mb-4">
          {project.tags.map((tag, index) => (
            <span
              key={`${project.id}-${tag}-${index}`}
              className="inline-block bg-[#251f38] text-xs sm:text-sm font-semibold text-purple-500 rounded-full px-2 sm:px-3 py-1 mr-2 mb-2 hover:bg-purple-500 hover:text-white transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
});

ProjectCard.displayName = 'ProjectCard';

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = useCallback((project) => {
    setSelectedProject(project);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedProject(null);
  }, []);

  const projectCards = useMemo(() => {
    return projects.map((project) => (
      <ProjectCard
        key={project.id}
        project={project}
        onOpenModal={handleOpenModal}
      />
    ));
  }, []);

  return (
    <section
      id="work"
      className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 font-sans relative"
    >
      {/* Section Title */}
      <div className="text-center mb-8 sm:mb-12 md:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">PROJECTS</h2>
        <div className="w-16 sm:w-24 md:w-32 h-1 bg-red-500 mx-auto mt-3 sm:mt-4"></div>
        <p className="text-gray-200 mt-3 sm:mt-4 text-sm sm:text-base md:text-lg font-semibold max-w-3xl mx-auto px-4">
          A showcase of the projects I have worked on, highlighting my skills and experience in various technologies
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-6 sm:gap-8 md:gap-10 lg:gap-12 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {projectCards}
      </div>

      {/* Modal Container */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4 sm:p-6 md:p-8">
          <div className="bg-gray-900 rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative">
            <div className="sticky top-0 bg-gray-900 flex justify-end p-4 sm:p-6 border-b border-gray-700">
              <button
                onClick={handleCloseModal}
                className="text-white text-2xl sm:text-3xl font-bold hover:text-purple-500 p-2 rounded-full hover:bg-purple-500/10 transition-all"
                aria-label="Close modal"
              >
                ×
              </button>
            </div>

            <div className="flex flex-col">
              <div className="w-full flex justify-center bg-gray-900 p-4 sm:p-6">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full max-w-2xl object-contain rounded-xl shadow-2xl"
                  onError={(e) => {
                    e.target.src = '/placeholder-image.jpg';
                  }}
                />
              </div>
              <div className="p-4 sm:p-6 md:p-8">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-400 mb-6 text-sm sm:text-base md:text-lg leading-relaxed">
                  {selectedProject.description}
                </p>
                <div className="flex flex-wrap gap-2 sm:gap-3 mb-6">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={`modal-${selectedProject.id}-${tag}-${index}`}
                      className="bg-[#251f38] text-xs sm:text-sm font-semibold text-purple-500 rounded-full px-3 py-1 sm:px-4 sm:py-2"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-800 hover:bg-purple-800 text-gray-400 hover:text-white px-4 py-3 sm:px-6 sm:py-3 rounded-xl text-sm sm:text-base md:text-lg font-semibold text-center transition-all duration-200"
                  >
                    View Code
                  </a>
                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-purple-600 hover:bg-purple-800 text-white px-4 py-3 sm:px-6 sm:py-3 rounded-xl text-sm sm:text-base md:text-lg font-semibold text-center transition-all duration-200"
                  >
                    View Live
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
