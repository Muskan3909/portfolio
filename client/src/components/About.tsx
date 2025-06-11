export default function About() {
  return (
    <section id="about" className="py-20 bg-[#0F172A]/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-[#22D3EE]">Me</span>
          </h2>
          <div className="w-20 h-1 bg-[#22D3EE] mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slideInLeft">
            <img 
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Modern software development environment" 
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
          
          <div className="animate-slideInRight">
            <h3 className="text-2xl font-bold mb-6 text-[#22D3EE]">
              Passionate About Technology & Innovation
            </h3>
            <p className="text-lg mb-6">
              I'm a B.E. Computer Science graduate (2024) from Chandigarh University with a CGPA of 7.54, 
              specializing in backend systems, distributed architecture, scalable API design, and DevOps fundamentals. 
              Proficient in Java, Python, and shell scripting with strong debugging and system troubleshooting skills.
            </p>
            <p className="text-lg mb-6">
              Knowledgeable in GCP, CI/CD, and modern software development practices. Eager to contribute to 
              highly available, scalable platforms in agile development environments. My experience spans 
              from AI/ML projects to full-stack applications with live deployments.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#22D3EE]">4+</div>
                <div className="text-[#64748B]">Major Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#22D3EE]">10+</div>
                <div className="text-[#64748B]">Certifications</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#22D3EE]">7.54</div>
                <div className="text-[#64748B]">CGPA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#22D3EE]">2024</div>
                <div className="text-[#64748B]">Graduate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
