import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/ppp.jpg';

const TYPING_TEXTS = [
  'Full Stack Developer',
  'Cyber Security Enthusiast',
  'React & Node.js Developer',
  'Future SOC Analyst',
];

const BUTTON_STYLES = {
  background: 'linear-gradient(90deg, #8245ec, #a855f7)',
  boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
};

const About = () => {
  return (
    <section
      id="about"
      className="py-8 px-4 sm:py-12 sm:px-6 md:px-8 lg:px-16 xl:px-20 font-sans mt-16 sm:mt-20 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-8 lg:gap-12">
        {/* Left Side */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          {/* Greeting */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Ravinder Singh
          </h2>
          {/* Skills Heading with Typing Effect */}
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
            <ReactTypingEffect
              text={TYPING_TEXTS}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#8245ec]">{cursor}</span>
              )}
            />
          </h3>
          {/* About Me Paragraph */}
        <p className="text-sm sm:text-base md:text-lg text-gray-400 mb-8 sm:mb-10 mt-6 sm:mt-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
          I am a third-year BTech Cyber Security student and an aspiring full-stack developer. Currently learning and building projects using the MERN stack, I am focused on creating responsive and user-friendly web applications. I enjoy exploring how web development and cybersecurity can work together to build secure and modern digital experiences.
        </p>


          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1AiBdibSrbOZBq_RDD7gaGlKEQgINQlVn/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-6 sm:py-4 sm:px-8 rounded-full mt-4 sm:mt-5 text-sm sm:text-base md:text-lg font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
            style={BUTTON_STYLES}
          >
            DOWNLOAD CV
          </a>
          
        </div>
        {/* Right Side */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <Tilt
            className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 border-4 border-purple-700 rounded-full shadow-2xl"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Ravinder Singh"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
