export default function Navbar() {
  return (
    <nav className="bg-slate-900 border-b border-slate-800 text-white sticky top-0 z-50 px-6 py-4 flex justify-between items-center shadow-lg">
      <span className="text-2xl font-black text-purple-500 tracking-wide">
        GAMEVERSE
      </span>
      <ul className="hidden md:flex space-x-8 font-medium text-slate-300">
        <li className="hover:text-white cursor-pointer transition-colors">Inicio</li>
        <li className="hover:text-white cursor-pointer transition-colors">Juegos</li>
        <li className="hover:text-white cursor-pointer transition-colors">Ofertas</li>
      </ul>
      <button className="bg-purple-600 hover:bg-purple-500 active:scale-95 text-white px-5 py-2 rounded-full font-bold shadow-md cursor-pointer transition-all">
        Carrito (0)
      </button>
    </nav>
  );
}