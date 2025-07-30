import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-slate-900">About Me</h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg mb-6 text-slate-700">
            I am a joyful human, an avid programmer, and a passionate educator. 
            Currently at Amazon Web Services (AWS), I focus on building robust machine learning infrastructure and AI solutions.
          </p>
          <p className="text-lg mb-6 text-slate-700">
            My recent work involves deploying LLM inference infrastructure for the Alexa+ launch and building an AI gateway 
            that provides AI proxy capabilities for a majority of LLM usage at Alexa. These projects have allowed me to 
            combine my passion for cutting-edge technology with practical, impactful solutions.
          </p>
          <p className="text-lg mb-6 text-slate-700">
            Beyond my work at Amazon, I'm developing a terminal agent designed to help engineers with the operational 
            aspects of their job, streamlining workflows and enhancing productivity.
          </p>
          <p className="text-lg text-slate-700">
            Based in Dublin, California, I'm constantly exploring new technologies and approaches to solve complex 
            problems and create intuitive, efficient solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
