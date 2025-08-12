import React from "react";
import { experiences } from "../../constants"; // Import your data

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-8 sm:mb-12 md:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-16 sm:w-24 md:w-32 h-1 bg-purple-500 mx-auto mt-3 sm:mt-4"></div>
        <p className="text-gray-400 mt-3 sm:mt-4 text-sm sm:text-base md:text-lg font-semibold max-w-3xl mx-auto px-4">
          A collection of my work experience and the roles I have taken in various organizations
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-white h-full"></div>

        {/* Experience Entries */}
        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`flex flex-col sm:flex-row items-start sm:items-center mb-8 sm:mb-12 md:mb-16 relative ${
              index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
            }`}
          >


            {/* Content Section */}
            <div
              className={`w-full sm:max-w-md md:max-w-lg p-4 sm:p-6 md:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] ${
                index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"
              } transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_2px_rgba(130,69,236,0.4)]`}
            >
              {/* Flex container for image and text */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-6">
                {/* Company Logo/Image */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white rounded-md overflow-hidden flex-shrink-0">
                  <img
                    src={experience.img}
                    alt={experience.company}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Role, Company Name, and Date */}
                <div className="flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white line-clamp-2">
                      {experience.role}
                    </h3>
                    <h4 className="text-sm sm:text-base text-gray-300 mt-1">
                      {experience.company}
                    </h4>
                  </div>
                  {/* Date at the bottom */}
                  <p className="text-xs sm:text-sm text-gray-500 mt-2">{experience.date}</p>
                </div>
              </div>

              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-400 leading-relaxed">{experience.desc}</p>
              <div className="mt-4 sm:mt-6">
                <h5 className="font-medium text-white text-sm sm:text-base mb-2 sm:mb-3">Skills:</h5>
                <ul className="flex flex-wrap gap-2">
                  {experience.skills.map((skill, index) => (
                    <li
                      key={`${experience.id}-${skill}-${index}`}
                      className="bg-[#8245ec] text-gray-300 px-2 sm:px-3 md:px-4 py-1 text-xs sm:text-sm rounded-lg border border-gray-400 hover:bg-purple-600 hover:text-white transition-colors"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
