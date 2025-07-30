import React from 'react';

interface AchievementCardProps {
  title: string;
  organization: string;
  description: string;
  date?: string;
  link?: string;
}

const AchievementCard: React.FC<AchievementCardProps> = ({ 
  title, 
  organization, 
  description, 
  date, 
  link 
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-bold text-slate-900">{title}</h3>
        {date && <span className="text-sm text-slate-500">{date}</span>}
      </div>
      <p className="text-blue-600 mb-3">{organization}</p>
      <p className="text-slate-700 mb-3">{description}</p>
      {link && (
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 transition-colors text-sm"
        >
          Learn more →
        </a>
      )}
    </div>
  );
};

const Achievements: React.FC = () => {
  const achievements = [
    {
      title: "$2000 Third Place Winner of The Smart Building Challenge Award",
      organization: "KONE",
      description: "Volume IQ: A Raspberry Pi sized solution to the everyday problem of elevators stopping unnecessarily when they're at full spatial capacity.",
      date: "October 2017",
      link: "https://kone-hackathon.bemyapp.com/#/projects/59d02a3289d93b000453d6d2"
    },
    {
      title: "Most Likely To Go Viral Award",
      organization: "Amazon Lightsail Hackathon",
      description: "Doppled - A fun tool for discovering user's celebrity doppelganger using Amazon's machine learning platform.",
      link: ""
    },
    {
      title: "Winner of the Mobile-Tech Global Hackathon",
      organization: "EdTech Category",
      description: "Won with Symbolic Gestures' core product.",
      link: "https://www.prlog.org/12668966-winners-of-mobile-tech-hackathon-hosted-at-google-launchpad.html"
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-slate-900">Achievements</h2>
        <div className="max-w-4xl mx-auto">
          {achievements.map((achievement, index) => (
            <AchievementCard key={index} {...achievement} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
