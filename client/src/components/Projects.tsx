import { Github, ExternalLink } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "TaskTrackerPro - Full-Stack Task Management",
      description: "Full-stack task management application built with Angular 19 and Python Flask. Features CRUD operations, filtering/sorting, real-time updates, and responsive design with live API deployment.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["Angular", "TypeScript", "Flask", "PostgreSQL", "Bootstrap"],
      category: "Full-Stack",
      duration: "May 2025 - Jun 2025",
      github: "https://github.com/Muskan3909/TaskTrackerPro",
      demo: "https://tasktrackerpro-backend.onrender.com/"
    },
    {
      title: "Book Review API",
      description: "RESTful API designed to manage book reviews with user authentication, secure routing, and CRUD operations. Built with Node.js, Express.js, and MongoDB with JWT-based authentication and Mongoose schema validation.",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["Node.js", "Express.js", "MongoDB", "JWT", "REST API"],
      category: "Backend",
      duration: "May 2025 - Jun 2025",
      github: "https://github.com/Muskan3909/book-review-api",
      demo: "#"
    },
    {
      title: "COVID-19 Predictor",
      description: "AI-based predictive model for COVID-19 diagnosis using supervised machine learning techniques including Random Forests, SVMs, and Neural Networks to enhance early diagnosis and improve healthcare efficiency.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["Python", "Flask", "OpenCV", "TensorFlow", "ML"],
      category: "AI/ML",
      duration: "Mar 2023 - Nov 2023",
      github: "https://github.com/Muskan3909/covid-predication-system",
      demo: "#"
    },
    {
      title: "Hospital Management System",
      description: "Comprehensive web-based system for streamlining patient records, doctor assignments, and hospital administration with remote access capabilities and secure data storage.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      category: "Full-Stack",
      duration: "Feb 2022 - Sep 2022",
      github: "https://github.com/Muskan3909/HOSPITAL-MANAGEMENT-SYSTEM",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-[#0F172A]/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-[#22D3EE]">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-[#22D3EE] mx-auto mb-4"></div>
          <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
            Innovative solutions showcasing expertise in AI, healthcare technology, and IoT development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="project-card bg-[#64748B]/10 rounded-xl overflow-hidden border border-[#64748B]/20 hover:border-[#22D3EE]/50 transition-all duration-300 group"
            >
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-[#22D3EE] text-[#0F172A] px-3 py-1 rounded-full text-sm font-semibold">
                  {project.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-[#22D3EE]">{project.title}</h3>
                <p className="text-[#64748B] mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="bg-[#22D3EE]/20 text-[#22D3EE] px-2 py-1 rounded text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#64748B] text-sm">{project.duration}</span>
                  <div className="flex space-x-2">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#22D3EE] hover:text-[#F4F4F4] transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#22D3EE] hover:text-[#F4F4F4] transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://github.com/Muskan3909" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center bg-[#64748B]/20 hover:bg-[#22D3EE]/20 text-[#F4F4F4] hover:text-[#22D3EE] px-8 py-3 rounded-lg font-semibold transition-all duration-300 border border-[#64748B]/30 hover:border-[#22D3EE]/50"
          >
            <Github className="mr-2" size={20} />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
