import { Metadata } from 'next'; // Opcional: Para SEO
import Image from 'next/image'; // Mantengo el import si lo necesitas en el futuro

// Interface y datos (igual que antes)
interface Offer {
  title: string;
  description: string;
  price: string;
  author: string;
  rating: number;
  category: string;
  categoryColor: string;
}

const offers: Offer[] = [
  {
    title: 'Reparación de grifo',
    description: 'Servicio de reparación y mantenimiento de grifos y llaves de agua',
    price: '$150',
    author: 'Juan Pérez',
    rating: 4.8,
    category: 'Fontanería',
    categoryColor: '#00FFFF', // Cyan (usamos inline para color dinámico)
  },
  {
    title: 'Instalación eléctrica',
    description: 'Instalación y reparación de sistemas eléctricos residenciales',
    price: '$300',
    author: 'María García',
    rating: 4.9,
    category: 'Electricidad',
    categoryColor: '#00BFFF', // Azul claro
  },
];

// Metadata (título y descripción de la página)
export const metadata: Metadata = {
  title: 'Mis Ofertas - Servineo',
  description: 'Plataforma de servicios de reparación y mantenimiento',
};

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-white">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full max-w-4xl">
        {/* Barra de navegación */}
        <nav className="flex justify-center w-full mb-5 gap-2">
          <button className="px-4 py-2 text-sm bg-gray-200 rounded-md hover:bg-gray-300 transition-colors">
            Registro
          </button>
          <button className="px-4 py-2 text-sm bg-gray-200 rounded-md hover:bg-gray-300 transition-colors">
            Nueva Oferta
          </button>
          <button className="px-4 py-2 text-sm bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
            Mis Ofertas
          </button>
          <button className="px-4 py-2 text-sm bg-gray-200 rounded-md hover:bg-gray-300 transition-colors">
            Mapa
          </button>
          <button className="px-4 py-2 text-sm bg-gray-200 rounded-md hover:bg-gray-300 transition-colors">
            Video Inspection
          </button>
        </nav>

        {/* Barra de búsqueda */}
        <div className="relative w-full mb-5">
          <input
            type="text"
            placeholder="Buscar servicios..."
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white border-gray-300 text-black"
          />
          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">🎤</span>
        </div>

        {/* Filtros */}
        <div className="flex justify-between w-full gap-4 mb-5">
          <select className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white border-gray-300 text-black">
            <option>Categoria</option>
          </select>
          <select className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white border-gray-300 text-black">
            <option>Precio</option>
          </select>
          <select className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white border-gray-300 text-black">
            <option>Ubicacion</option>
          </select>
          <select className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white border-gray-300 text-black">
            <option>Rating</option>
          </select>
        </div>

        {/* Lista de ofertas */}
        <div className="w-full flex flex-col gap-6">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="p-6 border border-gray-200 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-gray-900">
                  {offer.title}
                </h3>
                <span className="text-purple-600 font-bold text-lg">
                  {offer.price}
                </span>
              </div>
              <p className="text-black mb-4"> {/* Cambio: de text-gray-600 a text-black */}
                {offer.description}
              </p>
              <div className="flex justify-between items-center mb-4">
                <span className="text-black"> {/* Cambio: de text-gray-700 a text-black */}
                  Por {offer.author} <span className="text-yellow-500">⭐</span> {offer.rating}
                </span>
                <span
                  className="px-3 py-1 rounded-full text-white text-sm font-medium"
                  style={{ backgroundColor: offer.categoryColor }}
                >
                  {offer.category}
                </span>
              </div>
              <div className="flex justify-end gap-3">
                <button className="px-4 py-2 border border-gray-300 rounded-md text-sm hover:bg-gray-50 transition-colors text-black"> {/* Agregado text-black */}
                  ✏️ Editar
                </button>
                <button className="px-4 py-2 bg-red-500 text-white rounded-md text-sm hover:bg-red-600 transition-colors">
                  🗑️ Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer (mantengo el original por si lo quieres, o bórralo) */}
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center text-sm text-black"> {/* Cambio: de text-gray-500 a text-black */}
        <a href="https://nextjs.org/learn" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline text-black"> {/* Agregado text-black */}
          <Image aria-hidden src="/file.svg" alt="File icon" width={16} height={16} />
          Learn
        </a>
        <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline text-black"> {/* Agregado text-black */}
          <Image aria-hidden src="/globe.svg" alt="Globe icon" width={16} height={16} />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}