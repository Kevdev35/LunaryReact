import React from 'react';

function Footer() {
  const socialLinks = [
    {
      icon: <i class='bx bxl-facebook-square'></i>,
      href: 'https://facebook.com',
      label: 'Facebook',
      hoverColor: 'hover:bg-blue-600'
    },
    {
      icon: <i class='bx bxl-whatsapp' ></i>,
      href: 'https://wa.me/yourphone',
      label: 'WhatsApp',
      hoverColor: 'hover:bg-green-600'
    },
    {
      icon: <i class='bx bxl-github'></i>,
      href: 'https://github.com',
      label: 'GitHub',
      hoverColor: 'hover:bg-gray-700'
    },
    {
      icon: <i class='bx bxl-instagram'></i>,
      href: 'https://instagram.com',
      label: 'Instagram',
      hoverColor: 'hover:bg-pink-600'
    }
  ];

  return (
    <footer className="bg-black backdrop-blur-md border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-32">
        <div className="flex flex-col items-center space-y-8">
          {/* Logo */}
          <h3 className="text-5xl text-center bg-gradient-to-r from-[#582D7D] to-[#A1000A]  text-transparent bg-clip-text font-bold">
            LUNARY GAMES STUDIO
          </h3>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full bg-gray-800/50 ${social.hoverColor} transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-purple-500/20`}
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-6 text-XL bg-gradient-to-r from-[#582D7D] to-[#A1000A]  text-transparent bg-clip-text font-bold">
            <a href="#inicio"className="hover:text-white transition-colors">INICIO</a>
            <a href="#Juegos" className="hover:text-white transition-colors">PROYECTOS</a>
            <a href="#about" className="hover:text-white transition-colors">NOSOTROS</a>
            <a href="#Contact" className="hover:text-white transition-colors">CONTACTO</a>
          </nav>

          {/* Copyright */}
          <div className="text-center text-gray-500 text-XL">
            <p>© 2024 Lunary Games Studio. Todos los derechos reservados.</p>
            <p className="mt-1">Diseñado con ❤️ para gamers</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;