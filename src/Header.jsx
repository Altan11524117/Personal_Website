import { useState } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>

      <header className="bg-gray-100 border-b border-gray-300 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">

            <div className="flex-shrink-0">
              <a href="https://github.com/Altan11524117" className="block">
                <h1 className="text-sm font-medium tracking-wider uppercase">
                  ALTAN AYDIN
                </h1>
              </a>
            </div>


            <nav className="hidden md:flex space-x-8">
              <a
                href="https://youtu.be/6P4AF8eP-Yg?si=zjlX71M1te_n83Nr"
                className="text-xs font-medium tracking-wider uppercase hover:text-gray-600 transition-colors duration-200"
              >
                ABOUT ME(youtube link)
              </a>
              <a
                href="https://x.com"
                className="text-xs font-medium tracking-wider uppercase hover:text-gray-600 transition-colors duration-200"
              >
                COLLECTIONS
              </a>
              <a
                href="#"
                className="text-xs font-medium tracking-wider uppercase hover:text-gray-600 transition-colors duration-200"
              >
                CONTACT
              </a>
            </nav>


            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className={`hamburger flex flex-col justify-center items-center w-6 h-6 space-y-1 ${isMobileMenuOpen ? 'hamburger-active' : ''}`}
                aria-label="Toggle mobile menu"
              >
                <span className={`block w-5 h-0.5 bg-gray-800 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                <span className={`block w-5 h-0.5 bg-gray-800 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-5 h-0.5 bg-gray-800 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
              </button>
            </div>
          </div>
        </div>

        <div className={`md:hidden bg-gray-100 border-b border-gray-300 transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
          <nav className="px-4 py-4 space-y-4">
            <a
              href="https://youtu.be/6P4AF8eP-Yg?si=zjlX71M1te_n83Nr"
              className="block text-xs font-medium tracking-wider uppercase hover:text-gray-600 transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              ABOUT ME (youtube link)
            </a>
            <a
              href="https://x.com"
              className="block text-xs font-medium tracking-wider uppercase hover:text-gray-600 transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              COLLECTIONS
            </a>
            <a
              href="#"
              className="block text-xs font-medium tracking-wider uppercase hover:text-gray-600 transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              CONTACT
            </a>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;