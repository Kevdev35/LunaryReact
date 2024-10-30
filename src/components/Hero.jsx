import react from 'react';
import '../App.css'

export function Hero() {

  return (
    <div className="w-full overflow-hidden">
      <div id='inicio' className="Hero h-full flex items-center justify-center px-4">
        <div className={`text-center`}>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-wider">
            BIENVENIDO A LUNARY GAMES
          </h1>
          <p className="text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto">
            Descubre un mundo de juegos increíbles y experiencias únicas
          </p>
          <button className="bg-gradient-to-r from-[#582D7D] to-[#A1000A] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02]
            text-lg shadow-lg hover:shadow-xl">
            <a href='#Juegos' className="decoration-none px-8 py-3">Explorar Juegos</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;