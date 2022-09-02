import { Link } from "react-router-dom"
const Header = () => {
  return (
    <div className="py-10 bg-sky-800 flex justify-between items-center px-10">
      <Link to="/">
        <h1 className="text-4xl font-bold text-slate-200">
          React<span className="text-cyan-100 font-semibold">+Redux</span>
        </h1>
      </Link>
      <nav>
        <Link
          className="px-5 py-2 bg-cyan-300 text-slate-800 font-bold rounded hover:bg-cyan-500 transition-all shadow-xl"
          to="/nuevo-producto"
        >
          Nuevo Producto
        </Link>
      </nav>
    </div>
  )
}

export default Header
