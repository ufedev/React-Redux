import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"

const FormularioProducto = ({ handleSubmit }) => {
  const [nombre, setNombre] = useState("")
  const [precio, setPrecio] = useState(0)
  const { id } = useParams()
  const nav = useNavigate()
  const productoEditar = useSelector((state) => state.productos.productoEditar)
  useEffect(() => {
    if (id) {
      if (!productoEditar?.nombre) nav("/")
      setNombre(productoEditar?.nombre)
      setPrecio(productoEditar?.precio)
    }
  }, [])

  return (
    <div>
      <fieldset className="mx-auto w-3/5 shadow rounded border border-slate-900 p-10">
        <legend className="font-bold px-2">
          {id ? "Editar Producto" : "Agregar Producto"}
        </legend>
        <form
          className="flex flex-col gap-5"
          onSubmit={(e) => handleSubmit(e, { id, nombre, precio })}
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="nombre" className="font-medium px-5">
              Nombre:
            </label>
            <input
              type="text"
              name="nombre"
              id="nombre"
              placeholder="Nombre del Producto"
              className="px-5 py-2 border rounded"
              value={nombre}
              onChange={(e) => {
                setNombre(e.target.value)
              }}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="precio" className="font-medium px-5">
              Precio:
            </label>
            <input
              type="number"
              name="precio"
              id="precio"
              placeholder="Precio del Producto"
              className="px-5 py-2 border rounded"
              value={precio}
              onChange={(e) => {
                setPrecio(Number(e.target.value))
              }}
            />
          </div>

          <input
            type="submit"
            value={id ? "Editar Producto" : "Agregar Producto"}
            className="px-5 py-2 bg-cyan-700 text-stone-100 font-bold rounded cursor-pointer shadow hover:bg-cyan-600 transition-colors"
          />
        </form>
      </fieldset>
    </div>
  )
}

export default FormularioProducto
