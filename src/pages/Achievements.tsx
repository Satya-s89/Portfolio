import React from 'react';

function Achievements() {
  const achievements = [
    {
      title: "National Hackathon Champion",
      event: "TechFest 2024",
      description: "Developed an AI-powered solution for sustainable agriculture",
      prize: "Top 20",
      date: "March 2024"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Battle Achievements</h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-6 hover-titan relative overflow-hidden group"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  {achievement.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-2 text-red-400">
                    {achievement.title}
                  </h3>
                  <p className="text-xl text-gray-300 mb-2">{achievement.event}</p>
                  <p className="text-gray-400 mb-4">{achievement.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-red-500 font-semibold">
                      {achievement.prize}
                    </span>
                    <span className="text-gray-500">{achievement.date}</span>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Achievements;