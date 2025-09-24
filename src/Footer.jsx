const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">


        <div className="flex flex-col space-y-4 md:hidden">

          <div className="flex flex-col space-y-3">


            <a
              href="https://www.instagram.com/"
              className="text-xs font-medium tracking-wider uppercase hover:text-gray-600 transition-colors duration-200"
            >
              INSTAGRAM
            </a>
          </div>

          {/* Navigation Links - Mobile */}
          <div className="flex flex-col space-y-3">
            <a
              href="#"
              className="text-xs font-medium tracking-wider uppercase hover:text-gray-600 transition-colors duration-200"
            >
              ABOUT ME
            </a>
            <a
              href="#"
              className="text-xs font-medium tracking-wider uppercase hover:text-gray-600 transition-colors duration-200"
            >
              BLOG
            </a>
            <a
              href="#"
              className="text-xs font-medium tracking-wider uppercase hover:text-gray-600 transition-colors duration-200"
            >
              CONTACT
            </a>
          </div>
        </div>


        <div className="hidden md:flex md:justify-between md:items-center">

          {/* Left Side - Social Media Links */}
          <div className="flex space-x-8">


            <a
              href="https://www.instagram.com/"
              className="text-xs font-medium tracking-wider uppercase hover:text-gray-600 transition-colors duration-200"
            >
              INSTAGRAM
            </a>
          </div>


          <div className="flex space-x-8">
            <a
              href="#"
              className="text-xs font-medium tracking-wider uppercase hover:text-gray-600 transition-colors duration-200"
            >
              ABOUT ME
            </a>
            <a
              href="#"
              className="text-xs font-medium tracking-wider uppercase hover:text-gray-600 transition-colors duration-200"
            >
              BLOG
            </a>
            <a
              href="#"
              className="text-xs font-medium tracking-wider uppercase hover:text-gray-600 transition-colors duration-200"
            >
              CONTACT
            </a>
          </div>
        </div>

        {/* Copyright - Optional */}
        <div className="mt-8 pt-4 border-t border-gray-300 md:mt-6">
          <p className="text-xs text-gray-500 text-center md:text-left">
            © 2025 Altan AYDIN 2321032065  ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
