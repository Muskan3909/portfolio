import { Cloud, Brain, Briefcase, Award } from "lucide-react";

export default function Certifications() {
  const cloudCertifications = [
    {
      icon: "☁️",
      title: "AWS Cloud Solutions Architect",
      provider: "Coursera - Feb 2024",
      description: "4 Courses: Cloud Technical Essentials, Architecting Solutions, Data Lakes, Exam Prep"
    },
    {
      icon: "🔷",
      title: "Azure Fundamentals",
      provider: "Microsoft - 2024",
      description: "Cloud Skill Challenge Completion"
    },
    {
      icon: "🔗",
      title: "Google Cloud Programs",
      provider: "Google - 2022-2024",
      description: "100% badges in Cloud Ready Facilitator Program 2022, Gen AI Program"
    }
  ];

  const aiMLCertifications = [
    {
      icon: "👁️",
      title: "Computer Vision Specialization",
      provider: "Coursera - Nov 2023",
      description: "3 Courses: Introduction, Machine Learning, Object Tracking"
    },
    {
      icon: "🤖",
      title: "Machine Learning Training",
      provider: "Internshala - Jul 2022",
      description: "100% marks - Top Performer (6 weeks)"
    },
    {
      icon: "💾",
      title: "IoT, Robotics & Embedded Systems",
      provider: "IMV - Jul-Aug 2021",
      description: "Hands-on training program"
    }
  ];

  const professionalDevelopment = [
    {
      icon: "🏛️",
      title: "JP Morgan Chase",
      provider: "Software Engineering Virtual Internship",
      description: "Financial data analysis tools implementation"
    },
    {
      icon: "💻",
      title: "Wipro Talent Next",
      provider: "Sep-Dec 2023",
      description: "AI, Cloud, Robotics, Cyber Security, IoT projects"
    },
    {
      icon: "🐛",
      title: "Software Testing",
      provider: "NPTEL",
      description: "Testing methodologies and best practices"
    },
    {
      icon: "⭐",
      title: "Java Programming",
      provider: "HackerRank - 2024",
      description: "5-Star Rating Achievement"
    }
  ];

  const amcatScores = [
    { subject: "English Comprehension", score: "98%", percentile: "98%" },
    { subject: "Quantitative Ability", score: "97%", percentile: "97%" },
    { subject: "Logical Ability", score: "82%", percentile: "82%" },
    { subject: "Computer Programming", score: "98%", percentile: "98%" },
    { subject: "Computer Science", score: "99%", percentile: "99%" }
  ];

  return (
    <section id="certifications" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Certifications & <span className="text-[#22D3EE]">Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-[#22D3EE] mx-auto mb-4"></div>
          <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
            Continuous learning through professional development programs and industry certifications
          </p>
        </div>

        {/* Cloud Computing Certifications */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 text-[#22D3EE] flex items-center">
            <Cloud className="mr-3" />
            Cloud Computing
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cloudCertifications.map((cert, index) => (
              <div 
                key={index}
                className="cert-badge bg-[#64748B]/10 p-6 rounded-xl border border-[#64748B]/20 hover:border-[#22D3EE]/50 transition-all duration-300 text-center"
              >
                <div className="text-4xl text-[#22D3EE] mb-4">{cert.icon}</div>
                <h4 className="font-semibold mb-2">{cert.title}</h4>
                <p className="text-[#64748B] text-sm mb-3">{cert.provider}</p>
                <div className="text-xs text-[#64748B]">{cert.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* AI & Machine Learning */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 text-[#22D3EE] flex items-center">
            <Brain className="mr-3" />
            AI & Machine Learning
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiMLCertifications.map((cert, index) => (
              <div 
                key={index}
                className="cert-badge bg-[#64748B]/10 p-6 rounded-xl border border-[#64748B]/20 hover:border-[#22D3EE]/50 transition-all duration-300 text-center"
              >
                <div className="text-4xl text-[#22D3EE] mb-4">{cert.icon}</div>
                <h4 className="font-semibold mb-2">{cert.title}</h4>
                <p className="text-[#64748B] text-sm mb-3">{cert.provider}</p>
                <div className="text-xs text-[#64748B]">{cert.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Development */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 text-[#22D3EE] flex items-center">
            <Briefcase className="mr-3" />
            Professional Development
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {professionalDevelopment.map((cert, index) => (
              <div 
                key={index}
                className="cert-badge bg-[#64748B]/10 p-6 rounded-xl border border-[#64748B]/20 hover:border-[#22D3EE]/50 transition-all duration-300 text-center"
              >
                <div className="text-4xl text-[#22D3EE] mb-4">{cert.icon}</div>
                <h4 className="font-semibold mb-2">{cert.title}</h4>
                <p className="text-[#64748B] text-sm mb-3">{cert.provider}</p>
                <div className="text-xs text-[#64748B]">{cert.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* AMCAT Achievement */}
        <div className="bg-gradient-to-r from-[#22D3EE]/10 to-[#64748B]/10 p-8 rounded-xl border border-[#22D3EE]/30">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-[#22D3EE] flex items-center justify-center">
              <Award className="mr-3" />
              AMCAT Assessment Achievement
            </h3>
            <p className="text-lg mb-6">Exceptional performance across multiple technical domains</p>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
              {amcatScores.map((score, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-[#22D3EE]">{score.percentile}</div>
                  <div className="text-sm text-[#64748B]">{score.subject}</div>
                </div>
              ))}
            </div>
            
            <div className="text-sm text-[#64748B]">
              <p>Employable for: Software Engineer (IT Services & Product), Associate ITES/BPO, Analyst, Creative Content Developer</p>
              <p className="mt-2">AMCAT ID: 354330817525606 | Completed: July 29, 2023</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
