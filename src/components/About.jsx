function About() {
  return (
    <div id="about" className=" bg-black max-h-967">

      <div  className="container mx-auto px-4 py-16 md:py-20 ">
      <div className="relative">
            <h2 className="text-5xl text-center font-bold text-transparent bg-gradient-to-r from-[#582D7D] to-[#A1000A] bg-clip-text ">
                LUNARY GAMES STUDIO
            </h2>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-[#582D7D] to-[#A1000A]"></div>
          </div>

        <div className="max-w-5xl mx-auto my-16  text-center text-xl md:text-xl leading-relaxed space-y-6">
          <p className="text-gray-300">
            En LunaryGame, creamos videojuegos indie únicos y imaginativos que se adaptan a los gustos y preferencias más variados.
          </p>
          
          <p className="text-gray-300">
            Desarrollamos juegos porque nos apasiona la industria y queremos aportar algo significativo al mundo del gaming. Nuestro equipo de visionarios creativos se dedica a impulsar la innovación y la narrativa en la esfera de los juegos, diseñando experiencias inmersivas y emocionantes que inspiren a los jugadores a explorar y divertirse.
          </p>
          
          <p className="text-gray-300">
            Al combinar nuestra experiencia y energía creativa, nos esforzamos por crear juegos que dejen un impacto duradero en la comunidad de jugadores.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;