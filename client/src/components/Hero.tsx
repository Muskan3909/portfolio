import { useEffect, useState } from "react";
import { Code } from "lucide-react";
import profileImage from "@assets/Rudra_20240120_134034_lmc_8.4.PORTRAIT (1)_1751476051723.jpg";

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const [roleText, setRoleText] = useState("");
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [nameTypingComplete, setNameTypingComplete] = useState(false);
  
  const fullText = "Hi, I'm Muskan";
  const roles = [
    "Software Developer",
    "Full Stack Developer", 
    "Backend Developer",
    "DevOps Engineer"
  ];

  // Type the name once
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
        setNameTypingComplete(true);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  // Handle role typing and cycling
  useEffect(() => {
    if (!nameTypingComplete) return;

    const currentRole = roles[currentRoleIndex];
     let timer: NodeJS.Timeout;

    if (!isDeleting) {
      // Typing phase
      if (roleText.length < currentRole.length) {
        timer = setTimeout(() => {
          setRoleText(currentRole.slice(0, roleText.length + 1));
        }, 100);
      } else {
        // Wait before starting to delete
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      }
    } else {
      // Deleting phase
      if (roleText.length > 0) {
        timer = setTimeout(() => {
          setRoleText(roleText.slice(0, -1));
        }, 50);
      } else {
        // Move to next role and start typing again
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timer);
  }, [roleText, isDeleting, currentRoleIndex, nameTypingComplete, roles]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background tech workspace image */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080" 
          alt="Professional tech workspace" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left animate-slideInLeft">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {typedText} <span className="text-[#22D3EE]">👋</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-[#64748B] mb-6 h-8">
              {roleText}<span className="animate-pulse">|</span>
            </h2>
            <p className="text-lg mb-8 max-w-lg">
              B.E. Computer Science graduate (2024) with hands-on experience in backend systems, distributed architecture, 
              scalable API design, and DevOps fundamentals. Proficient in Java, Python, and shell scripting with strong 
              debugging and system troubleshooting skills.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button 
                onClick={() => scrollToSection("contact")}
                className="bg-[#22D3EE] text-[#0F172A] px-8 py-3 rounded-lg font-semibold hover:bg-[#22D3EE]/90 transition-all duration-300 glow-effect"
              >
                Get In Touch
              </button>
              <button 
                onClick={() => scrollToSection("projects")}
                className="border border-[#22D3EE] text-[#22D3EE] px-8 py-3 rounded-lg font-semibold hover:bg-[#22D3EE] hover:text-[#0F172A] transition-all duration-300"
              >
                View My Work
              </button>
            </div>
          </div>
          
          <div className="flex justify-center animate-slideInRight">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-[#22D3EE] glow-effect">
                <img 
                  src={profileImage} 
                  alt="Muskan Kushwaha" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#22D3EE] rounded-full flex items-center justify-center animate-glow">
                <Code className="text-[#0F172A] text-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
