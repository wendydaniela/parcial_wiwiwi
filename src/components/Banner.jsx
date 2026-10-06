export default function Banner() {
  return (
    <div className="bg-slate-900 text-white rounded-xl mx-6 my-6 p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md border border-slate-800">
      <div className="max-w-lg">
        <span className="bg-indigo-600/30 text-indigo-400 border border-indigo-500/30 text-xs px-3 py-1 rounded-full font-semibold inline-block mb-3">
          Novedades 2026
        </span>
        <h2 className="text-3xl font-extrabold mb-3 text-white">
          ¡Encuentra tus juegos favoritos!
        </h2>
        <p className="text-slate-400 text-sm mb-6 leading-relaxed">
          Explora nuestra selección especial para PC y consolas con descuentos increíbles en títulos digitales.
        </p>
        <button className="bg-indigo-600 hover:bg-indigo-500 active:scale-95 text-white font-semibold text-sm px-6 py-2.5 rounded-lg shadow-md cursor-pointer transition-all">
          Ver ofertas
        </button>
      </div>

      <div className="w-full md:w-80 h-48 rounded-lg overflow-hidden shrink-0 border border-slate-700">
        <img 
          src="https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=600&q=80" 
          alt="Banner Videojuegos" 
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}