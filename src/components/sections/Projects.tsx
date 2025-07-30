import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  technologies, 
  imageUrl, 
  githubUrl, 
  liveUrl 
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2">
      {imageUrl && (
        <div className="h-48 overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://via.placeholder.com/400x200?text=Project';
            }}
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
        <p className="text-slate-700 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span 
              key={index} 
              className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          {githubUrl && (
            <a 
              href={githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              GitHub
            </a>
          )}
          {liveUrl && (
            <a 
              href={liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Alexa LLM Infrastructure",
      description: "Deployed LLM inference infrastructure for the Alexa+ launch, enabling advanced language model capabilities.",
      technologies: ["AWS", "ML", "LLM", "Infrastructure"],
      imageUrl: "/projects/alexa-llm.png"
    },
    {
      title: "Tweetrics",
      description: "Twitter User's Tweet Analysis tool that provides insights into tweet patterns and engagement metrics.",
      technologies: ["Data Analysis", "Social Media", "JavaScript"],
      imageUrl: "/projects/Tweetrics.gif"
    },
    {
      title: "TargetBot",
      description: "A red-shirt wearing bot for Target in-store needs, helping customers find products and information.",
      technologies: ["Chatbots", "Customer Service", "Retail"],
      imageUrl: "/projects/TargetBot.gif"
    },
    {
      title: "Volume IQ",
      description: "A Raspberry Pi solution for elevators to prevent unnecessary stops when at full spatial capacity. Won 3rd place at KONE Smart Building Hackathon.",
      technologies: ["IoT", "Raspberry Pi", "Sensors"],
      imageUrl: "/projects/volume-iq.png"
    },
    {
      title: "OfferOverflow",
      description: "Job Applications Tracker to help manage the job search process and track application status.",
      technologies: ["JavaScript", "Web Development", "UI/UX"],
      imageUrl: "/projects/OfferOverflow.gif"
    },
    {
      title: "Symbolic Gestures",
      description: "EdTech project that won the Mobile-Tech Global Hackathon.",
      technologies: ["JavaScript", "Mobile", "EdTech"],
      githubUrl: "https://github.com/SymbolicGestures/SymbolicGestures",
      imageUrl: "/projects/symbolic-gestures.png"
    }
  ];

  return (    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-slate-900">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
