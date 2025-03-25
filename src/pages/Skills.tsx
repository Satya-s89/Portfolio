import React from 'react';
import { Code, Database, Globe, Palette, Cpu, Brain, Sword, Shield } from 'lucide-react';

function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Globe size={32} />,
      skills: [
        { name: "React", level: 90 },
        { name: "HTML & CSS", level: 70 },
        { name: "JavaScript", level: 80 }
      ]
    },
    {
      title: "Backend Development",
      icon: <Database size={32} />,
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "SQL", level: 70 }
      ]
    },
    {
      title: "Programming Languages",
      icon: <Code size={32} />,
      skills: [
        { name: "Python", level: 80 },
        { name: "Java", level: 80 },
        { name: "C++", level: 40 }
      ]
    },
    {
      title: "Soft Skills",
      icon: <Brain size={32} />,
      skills: [
        { name: "Problem Solving", level: 90 },
        { name: "Team Leadership", level: 70 },
        { name: "Communication", level: 85 },
        { name: "Time Management", level: 80 }
      ]
    },
    {
      title: "Combat Skills",
      icon: <Sword size={32} />,
      skills: [
        { name: "Debugging", level: 95 },
        { name: "Code Optimization", level: 85 },
        { name: "Performance Tuning", level: 80 },
        { name: "Security", level: 85 }
      ]
    },
    {
      title: "Defense Tactics",
      icon: <Shield size={32} />,
      skills: [
        { name: "Testing", level: 90 },
        { name: "Error Handling", level: 85 },
        { name: "Code Review", level: 80 },
        { name: "Documentation", level: 85 }
      ]
    },
    {
      title: "Design Tools",
      icon: <Palette size={32} />,
      skills: [
        { name: "Figma", level: 80 }
      ]
    }, 
    {
      title: "DevOps & Tools",
      icon: <Cpu size={32} />,
      skills: [
        { name: "Git", level: 85 }
      ]
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Titan Powers</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6 hover-titan">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-semibold">{category.title}</h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-red-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5 overflow-hidden">
                      <div
                        className="bg-red-500 h-2.5 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;