import React from 'react';

interface SkillCategoryProps {
  title: string;
  skills: string[];
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills }) => {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-bold text-slate-900 mb-4">{title}</h3>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <span 
            key={index} 
            className="px-4 py-2 bg-slate-100 text-slate-800 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Machine Learning & AI",
      skills: ["LLM Deployment", "AI Infrastructure", "ML Operations", "AI Gateway Development"]
    },
    {
      title: "Programming Languages",
      skills: ["JavaScript", "TypeScript", "Python", "HTML", "CSS"]
    },
    {
      title: "Cloud & Infrastructure",
      skills: ["AWS Services", "Infrastructure as Code", "Serverless", "Containerization"]
    },
    {
      title: "Tools & Frameworks",
      skills: ["React", "Node.js", "Git", "CI/CD", "Terminal Applications"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-slate-900">Skills</h2>
        <div className="max-w-4xl mx-auto">
          {skillCategories.map((category, index) => (
            <SkillCategory key={index} title={category.title} skills={category.skills} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
