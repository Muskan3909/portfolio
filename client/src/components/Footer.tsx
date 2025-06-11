export default function Footer() {
  return (
    <footer className="py-8 border-t border-[#64748B]/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <div className="text-xl font-bold text-[#22D3EE] mb-2">Muskan Kushwaha</div>
            <div className="text-[#64748B]">Backend Developer & DevOps Engineer</div>
          </div>
          
          <div className="text-center md:text-right">
            <div className="text-[#64748B] mb-2">© 2024 All rights reserved</div>
            <div className="text-sm text-[#64748B]">Built with passion for innovation</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
