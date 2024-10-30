import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const games = [
  {
    id: 1,
    title: "Cyber Adventure",
    image: "https://placehold.co/600x400/222/fff?text=Game+1",
    platform: "PC, PS5, Xbox Series X",
    downloadLink: "#",
    rating: 4.8,
    genre: "Acción / RPG"
  },
  {
    id: 2,
    title: "Space Explorer",
    image: "https://placehold.co/600x400/222/fff?text=Game+2",
    platform: "PC, Nintendo Switch",
    downloadLink: "#",
    rating: 4.5,
    genre: "Aventura Espacial"
  },
  {
    id: 3,
    title: "Fantasy Quest",
    image: "https://placehold.co/600x400/222/fff?text=Game+3",
    platform: "Mobile, PC",
    downloadLink: "#",
    rating: 4.9,
    genre: "RPG / Fantasía"
  },
  {
    id: 4,
    title: "Racing Masters",
    image: "https://placehold.co/600x400/222/fff?text=Game+4",
    platform: "PS5, Xbox Series X",
    downloadLink: "#",
    rating: 4.7,
    genre: "Carreras"
  }
];

const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          className={`w-4 h-4 ${
            index < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="text-sm text-gray-400 ml-1">{rating}</span>
    </div>
  );
};

export function GameCarousel() {
  return (
    <div id='Juegos' className="bg-black/85 backdrop-blur-md  py-24">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col items-center justify-center gap-4 mb-16 px-4">
          <div className="relative">
            <h2 className="text-5xl text-center bg-gradient-to-r from-[#582D7D] to-[#A1000A]  text-transparent bg-clip-text font-bold">
              NUESTROS VIDEOJUEGOS
            </h2>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-[#582D7D] to-[#A1000A]"></div>
          </div>
          <p className="text-gray-300 text-center mt-8 max-w-2xl">
            Explora nuestra colección de juegos únicos y emocionantes, diseñados para ofrecer experiencias inolvidables
          </p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          centeredSlides={true}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 2,
            },
          }}
          className="game-carousel"
        >
          {games.map((game) => (
            <SwiperSlide key={game.id}>
              <div className="group bg-[#080808] rounded-xl overflow-hidden shadow-2xl transition-all hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]">
                <div className="relative">
                  <img
                    src={game.image}
                    alt={game.title}
                    className="w-full h-72 object-cover "
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-bold text-white">{game.title}</h3>
                    <span className="px-4 py-3 bg-[#a1000a] text-xs font-bold text-white rounded-lg">
                      {game.genre}
                    </span>
                  </div>
                  <StarRating rating={game.rating} />
                  <p className="text-gray-400 text-sm mt-2 mb-4">{game.platform}</p>
                  <div className="flex justify-between items-center">
                    <a
                      href={game.downloadLink}
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-[#582D7D] to-[#A1000A] text-white px-6 py-2 rounded-lg  transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <span>Descargar</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default GameCarousel;