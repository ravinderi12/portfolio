// src/components/Skills/Skills.jsx
import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => (
  <section
    id="skills"
    className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 font-sans bg-skills-gradient clip-path-custom"
  >
    {/* Section Title */}
    <div className="text-center mb-8 sm:mb-12 md:mb-16">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">SKILLS</h2>
      <div className="w-16 sm:w-20 md:w-24 h-1 bg-[#8245ec] mx-auto mt-2 sm:mt-3 md:mt-4"></div>
      <p className="text-gray-400 mt-3 sm:mt-4 text-sm sm:text-base md:text-lg font-semibold max-w-2xl mx-auto px-4">
        A collection of my technical skills and expertise honed through various projects and experiences
      </p>
    </div>

    {/* Skill Categories */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 py-6 sm:py-8 md:py-10">
      {SkillsInfo.map((category) => (
        <div
          key={category.title}
          className="bg-gray-900 backdrop-blur-md px-4 sm:px-6 md:px-8 py-6 sm:py-8 rounded-2xl border border-white shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] hover:shadow-[0_0_30px_2px_rgba(130,69,236,0.4)] transition-all duration-300"
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-400 mb-4 sm:mb-6 text-center">
            {category.title}
          </h3>

          {/* Skill Items - 3 per row on larger screens */}
          <Tilt
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 w-full">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center justify-center space-x-1 sm:space-x-2 bg-transparent border-2 border-gray-700 rounded-2xl sm:rounded-3xl py-2 sm:py-3 px-2 sm:px-3 text-center hover:border-purple-500 hover:bg-purple-500/5 transition-all duration-200"
                >
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 flex-shrink-0"
                  />
                  <span className="text-xs sm:text-sm text-gray-300 truncate">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </Tilt>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
