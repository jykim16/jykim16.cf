import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Get In Touch</h2>
        <div className="max-w-2xl mx-auto">
          <p className="text-center text-lg mb-8">
            I'm always open to discussing new projects, opportunities, or collaborations.
          </p>
          <div className="mt-12 flex justify-center space-x-6">
            <a 
              href="https://linkedin.com/in/jykim16" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/jykim16" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              GitHub
            </a>
            <a 
              href="mailto:jykim16@gmail.com" 
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
