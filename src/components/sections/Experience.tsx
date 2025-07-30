import React from 'react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-slate-900">Experience</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-4 border-blue-500 pl-8 pb-12">
            <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2 top-0"></div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Amazon Web Services (AWS)</h3>
            <p className="text-lg text-blue-600 mb-4">Software Engineer</p>
            <div className="prose text-slate-700">
              <p className="mb-4">
                Working on machine learning projects and infrastructure development, with a focus on:
              </p>
              <ul className="list-disc pl-5 mb-4">
                <li className="mb-2">
                  <strong>LLM Inference Infrastructure:</strong> Deployed infrastructure for the Alexa+ launch, enabling advanced language model capabilities.
                </li>
                <li className="mb-2">
                  <strong>AI Gateway:</strong> Built an AI gateway providing proxy capabilities for a majority of LLM usage at Alexa, streamlining access and improving efficiency.
                </li>
                <li>
                  <strong>ML Infrastructure:</strong> Contributed to critical AI infrastructure components, enhancing performance and reliability.
                </li>
              </ul>
            </div>
          </div>
          
          <div className="relative border-l-4 border-gray-300 pl-8">
            <div className="absolute w-4 h-4 bg-gray-300 rounded-full -left-2 top-0"></div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Previous Experience</h3>
            <p className="text-lg text-gray-600 mb-4">Software Engineering Roles</p>
            <p className="text-slate-700">
              Prior to my current role, I worked on various software engineering projects, focusing on web development and application building. My work has consistently aligned with my mission of enhancing how people understand and create.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
