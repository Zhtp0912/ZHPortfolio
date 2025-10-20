export default function Footer() {
    return (
      <footer className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold">Zhan Heng</h3>
            <p className="text-sm text-white/80">AI Engineer | Software Engineer</p>
          </div>
  
          <ul className="flex gap-6 mb-6 md:mb-0 text-sm font-medium">
            <li><a href="#services" className="hover:text-blue-200 transition-colors">Services</a></li>
            <li><a href="#portfolio" className="hover:text-blue-200 transition-colors">Portfolio</a></li>
            <li><a href="#contact" className="hover:text-blue-200 transition-colors">Contact</a></li>
          </ul>
  
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/zhan-heng-cho-6902b1238" target="_blank" rel="noopener noreferrer"
               className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300 backdrop-blur-sm border border-white/20"
               title="LinkedIn">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
  
            <a href="mailto:tp068635@mail.apu.edu.my"
               className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300 backdrop-blur-sm border border-white/20"
               title="Email">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
  
            <a href="https://wa.me/60186605356" target="_blank" rel="noopener noreferrer"
               className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300 backdrop-blur-sm border border-white/20"
               title="WhatsApp">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
              </svg>
            </a>
          </div>
        </div>
  
        <div className="mt-10 pt-6 border-t border-white/20 text-center">
          <p className="text-sm text-white/70">© 2025 CHO ZHAN HENG | All rights reserved.</p>
        </div>
      </footer>
    );
  }
  