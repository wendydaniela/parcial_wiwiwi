export default function Card({ title, category, price, rating, image }) {
  return (
    <div className="bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden shadow-xl flex flex-col justify-between">
      <div>
        <div className="relative h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover"
          />
          <span className="absolute top-3 right-3 bg-slate-950/80 text-yellow-400 text-xs font-bold px-2.5 py-1 rounded-lg border border-slate-700">
            ★ {rating}
          </span>
        </div>
        <div className="p-5">
          <span className="text-xs font-bold text-purple-400 uppercase tracking-wider">{category}</span>
          <h3 className="text-xl font-bold text-white mt-1 mb-2">{title}</h3>
        </div>
      </div>
      <div className="p-5 pt-0 flex items-center justify-between border-t border-slate-800/60 mt-2">
        <div>
          <span className="text-xs text-slate-400 block">Precio</span>
          <span className="text-2xl font-black text-white">${price}</span>
        </div>
        <button className="bg-purple-600 hover:bg-purple-500 active:scale-95 text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-md shadow-purple-900/40 cursor-pointer transition-all">
          Comprar
        </button>
      </div>
    </div>
  );
}