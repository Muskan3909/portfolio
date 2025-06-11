import { Mail, Phone, MapPin, Download, CheckCircle } from "lucide-react";

export default function Contact() {
  const handleDownloadResume = () => {
    // Create a link to the resume PDF and trigger download
    const link = document.createElement('a');
    link.href = '/resume/Muskan_Kushwaha_Resume.pdf'; // Path to resume in public folder
    link.download = 'Muskan_Kushwaha_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const opportunities = [
    "Backend Developer positions",
    "DevOps Engineer roles",
    "Cloud Solutions Architect positions",
    "Java/Spring Boot Developer opportunities",
    "Full-stack development projects"
  ];

  return (
    <section id="contact" className="py-20 bg-[#0F172A]/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="text-[#22D3EE]">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-[#22D3EE] mx-auto mb-4"></div>
          <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
            Ready to collaborate on innovative projects or discuss opportunities in software development, AI/ML, or cloud technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="animate-slideInLeft">
            <h3 className="text-2xl font-bold mb-6 text-[#22D3EE]">Let's Connect</h3>
            <p className="text-lg mb-8">
              I'm eager to contribute to highly available, scalable platforms in agile development environments. 
              Let's discuss how my backend systems expertise and DevOps fundamentals can add value to your team.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#22D3EE]/20 rounded-lg flex items-center justify-center mr-4">
                  <Mail className="text-[#22D3EE] text-xl" />
                </div>
                <div>
                  <div className="font-semibold">Email</div>
                  <a 
                    href="mailto:kushwahamuskan97@gmail.com" 
                    className="text-[#64748B] hover:text-[#22D3EE] transition-colors duration-300"
                  >
                    kushwahamuskan97@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#22D3EE]/20 rounded-lg flex items-center justify-center mr-4">
                  <Phone className="text-[#22D3EE] text-xl" />
                </div>
                <div>
                  <div className="font-semibold">Phone</div>
                  <a 
                    href="tel:+919568365450" 
                    className="text-[#64748B] hover:text-[#22D3EE] transition-colors duration-300"
                  >
                    +91-9568365450
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#22D3EE]/20 rounded-lg flex items-center justify-center mr-4">
                  <MapPin className="text-[#22D3EE] text-xl" />
                </div>
                <div>
                  <div className="font-semibold">Location</div>
                  <div className="text-[#64748B]">Bengaluru, Karnataka, India</div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4">Social Links</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://www.linkedin.com/in/muskan-kushwaha-4a11551ba/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#64748B]/20 hover:bg-[#22D3EE]/20 rounded-lg flex items-center justify-center text-[#64748B] hover:text-[#22D3EE] transition-all duration-300"
                >
                  💼
                </a>
                <a 
                  href="https://github.com/Muskan3909" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#64748B]/20 hover:bg-[#22D3EE]/20 rounded-lg flex items-center justify-center text-[#64748B] hover:text-[#22D3EE] transition-all duration-300"
                >
                  🔗
                </a>
                <a 
                  href="mailto:kushwahamuskan97@gmail.com" 
                  className="w-12 h-12 bg-[#64748B]/20 hover:bg-[#22D3EE]/20 rounded-lg flex items-center justify-center text-[#64748B] hover:text-[#22D3EE] transition-all duration-300"
                >
                  📧
                </a>
              </div>
            </div>

            <div className="mt-8">
              <button 
                onClick={handleDownloadResume}
                className="inline-flex items-center bg-[#22D3EE] text-[#0F172A] px-6 py-3 rounded-lg font-semibold hover:bg-[#22D3EE]/90 transition-all duration-300 glow-effect"
              >
                <Download className="mr-2" size={20} />
                Download Resume
              </button>
            </div>
          </div>

          <div className="animate-slideInRight">
            <img 
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Cloud computing and network connectivity visualization" 
              className="rounded-xl shadow-lg w-full h-auto mb-8"
            />
            
            <div className="bg-[#64748B]/10 p-6 rounded-xl border border-[#64748B]/20">
              <h4 className="text-lg font-semibold mb-4 text-[#22D3EE]">Open to Opportunities</h4>
              <ul className="space-y-2 text-[#64748B]">
                {opportunities.map((opportunity, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="text-[#22D3EE] mr-2" size={16} />
                    {opportunity}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
