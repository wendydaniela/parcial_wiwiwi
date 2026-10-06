import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Card from './components/Card';

const games = [
  {
    id: 1,
    title: 'Cyberpunk 2077',
    category: 'Acción / RPG',
    price: '49.99',
    rating: '4.8',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 2,
    title: 'Elden Ring',
    category: 'Aventura',
    price: '59.99',
    rating: '4.9',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 3,
    title: 'Horizon Forbidden West',
    category: 'Acción',
    price: '39.99',
    rating: '4.7',
    image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=600&q=80'
  }
];

export default function App() {
  return (
    /* CAMBIA ESTA LÍNEA AQUÍ: `bg-slate-950` para fondo oscuro o el color que prefieras */
    <div className="min-h-screen bg-slate-950 text-white font-sans pb-12">
      <Navbar />
      <main className="max-w-7xl mx-auto">
        <Banner />
        
        <section className="px-6 mt-8">
          <h2 className="text-2xl font-bold mb-6 text-white border-l-4 border-purple-500 pl-3">
            Catálogo de Juegos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {games.map((game) => (
              <Card 
                key={game.id}
                title={game.title}
                category={game.category}
                price={game.price}
                rating={game.rating}
                image={game.image}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}