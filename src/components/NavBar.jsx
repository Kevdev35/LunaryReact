import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" nav shadow-lg bg-black/80 backdrop-blur-2xl fixed w-full top-0 left-0">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img className="h-9 w-auto" src="/lgs.svg" alt="Logo" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#inicio" className="text-gray-800 hover:text-gray-600 text-xl bg-gradient-to-r from-[#582D7D] to-[#A1000A]  text-transparent bg-clip-text font-bold">INICIO</a>
            <a href="#Juegos" className="text-gray-800 hover:text-gray-600 text-xl bg-gradient-to-r from-[#582D7D] to-[#A1000A]  text-transparent bg-clip-text font-bold">PROYECTOS</a>
            <a href="#about" className="text-gray-800 hover:text-gray-600 text-xl bg-gradient-to-r from-[#582D7D] to-[#A1000A] text-transparent bg-clip-text font-bold" >NOSOTROS</a>
            <a href="#Contact" className="text-gray-800 hover:text-gray-600 text-xl bg-gradient-to-r from-[#582D7D] to-[#A1000A]  text-transparent bg-clip-text font-bold">CONTACTO</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-800 hover:text-gray-600 focus:outline-none items-center content-center"
            >
              {isOpen ? <i class='bx bx-x'></i>:<i class='bx bx-menu'></i>}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="justify-items-center px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#inicio"
                className="block px-5 py-4 text-gray-800 hover:text-gray-600 text-xl bg-gradient-to-r from-[#582D7D] to-[#A1000A]  text-transparent bg-clip-text font-bold"
              >
                INICIO
              </a>
              <a
                href="#Juegos"
                className="block px-5 py-4 text-gray-800 hover:text-gray-600 text-xl bg-gradient-to-r from-[#582D7D] to-[#A1000A]  text-transparent bg-clip-text font-bold"
              >
                PROYECTOS
              </a>
              <a
                href="#about"
                className="block px-5 py-4 text-gray-800 hover:text-gray-600 text-xl bg-gradient-to-r from-[#582D7D] to-[#A1000A]  text-transparent bg-clip-text font-bold"
              >
                NOSOTROS
              </a>
              <a
                href="#Contact"
                className="block px-5 py-4 text-gray-800 hover:text-gray-600 text-xl bg-gradient-to-r from-[#582D7D] to-[#A1000A]  text-transparent bg-clip-text font-bold"
              >
                CONTACTO
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;