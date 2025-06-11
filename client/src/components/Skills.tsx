import { useEffect, useRef, useState } from "react";
import { Code, Layers, Cloud, Database, Brain, Settings } from "lucide-react";

interface SkillBarProps {
  skill: string;
  percentage: number;
  isVisible: boolean;
}

function SkillBar({ skill, percentage, isVisible }: SkillBarProps) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setWidth(percentage);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isVisible, percentage]);

  return (
    <div>
      <div className="flex justify-between mb-1">
        <span>{skill}</span>
        <span className="text-[#22D3EE]">{percentage}%</span>
      </div>
      <div className="w-full bg-[#64748B]/30 rounded-full h-2">
        <div 
          className="skill-bar bg-[#22D3EE] h-2 rounded-full transition-all duration-2000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5, rootMargin: '0px 0px -100px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: [
        { name: "Java", percentage: 95 },
        { name: "Python", percentage: 92 },
        { name: "JavaScript", percentage: 88 },
        { name: "SQL", percentage: 90 },
      ],
    },
    {
      icon: Layers,
      title: "Frameworks & Libraries",
      skills: [
        { name: "Spring Boot", percentage: 90 },
        { name: "Express.js", percentage: 88 },
        { name: "REST APIs", percentage: 92 },
        { name: "Hibernate", percentage: 85 },
      ],
    },
    {
      icon: Cloud,
      title: "Cloud & Infrastructure",
      skills: [
        { name: "AWS", percentage: 88 },
        { name: "Google Cloud Platform", percentage: 85 },
        { name: "Docker", percentage: 80 },
        { name: "CI/CD", percentage: 82 },
      ],
    },
    {
      icon: Database,
      title: "Databases & Data Management",
      skills: [
        { name: "PostgreSQL", percentage: 90 },
        { name: "MySQL", percentage: 88 },
        { name: "MongoDB", percentage: 85 },
        { name: "Oracle", percentage: 80 },
      ],
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      skills: [
        { name: "Machine Learning", percentage: 85 },
        { name: "Computer Vision", percentage: 82 },
        { name: "Flask", percentage: 80 },
        { name: "OpenCV", percentage: 85 },
      ],
    },
    {
      icon: Settings,
      title: "Tools & Development",
      skills: [
        { name: "Git & GitHub", percentage: 95 },
        { name: "Jenkins", percentage: 85 },
        { name: "Maven", percentage: 88 },
        { name: "IntelliJ IDEA", percentage: 90 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="text-[#22D3EE]">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-[#22D3EE] mx-auto mb-4"></div>
          <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
            Comprehensive expertise across multiple domains of software development and emerging technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div 
                key={index}
                className="bg-[#64748B]/10 p-6 rounded-xl border border-[#64748B]/20 hover:border-[#22D3EE]/50 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <IconComponent className="text-[#22D3EE] text-2xl mr-3" />
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar 
                      key={skillIndex}
                      skill={skill.name} 
                      percentage={skill.percentage} 
                      isVisible={isVisible}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
