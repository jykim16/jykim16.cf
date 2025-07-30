import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-r from-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-4 py-16 flex flex-col items-center text-center">
        <div className="w-40 h-40 rounded-full overflow-hidden mb-8 border-4 border-blue-500 shadow-lg">
          <img 
            src="/avatar.jpeg" 
            alt="Jonathan Kim" 
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://via.placeholder.com/150?text=JK';
            }}
          />
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Jonathan Kim</h1>
        <h2 className="text-2xl md:text-3xl text-blue-400 mb-6">Software Engineer at Amazon Web Services</h2>
        <p className="text-xl max-w-2xl mb-8">
          A software engineer with the mission of enhancing how people understand and create
        </p>
        <a 
          href="#about" 
          className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-lg font-medium transition-colors duration-300"
        >
          Learn More
        </a>
      </div>
    </section>
  );
};

export default Hero;
