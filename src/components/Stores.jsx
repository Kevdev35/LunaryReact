export function Stores() {
    const stores = [
      {
        id: 1,
        name: "War Gaming",
        icon: "/icons/wargaming.svg",
        link: "#"
      },
      {
        id: 2,
        name: "App Store",
        icon: "/icns/appstore.svg",
        link: "#"
      },
      {
        id: 3,
        name: "Google Play",
        icon: "/icons/googleplay.svg",
        link: "#"
      },
      {
        id: 4,
        name: "Steam",
        icon: "/icons/steam.svg",
        link: "#"
      }
    ];


  
    return (
      <div className="bg-black py-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col items-center text-white mb-16">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-5xl bg-gradient-to-r from-[#582D7D] to-[#A1000A]  text-transparent bg-clip-text font-bold">TIENDAS</h2>
            </div>
            <p className="text-xl text-gray-300 text-center max-w-3xl">
              Nuestros juegos se encuentran disponibles en las siguientes tiendas de videojuegos
            </p>
          </div>
  
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
            {stores.map((store) => (
              <a
                key={store.id}
                href={store.link}
                className="group w-32 h-32 flex items-center justify-center bg-white/5 rounded-2xl 
                  hover:bg-white/10 transition-all duration-300 transform hover:scale-110"
              >
                <img
                  src={store.icon}
                  alt={store.name}
                  className="w-20 h-20 object-contain filter invert"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  export default Stores;