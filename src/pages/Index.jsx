import { useEffect } from "react"
import {
  descargarProductosAction,
  eliminarProductoAction,
  obtenerProductoEditarAction,
} from "../actions/productosActions"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"

const Index = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(descargarProductosAction())
  }, [])
  const productos = useSelector((state) => {
    return state.productos.productos
  })

  const handleEliminarProd = (id) => {
    //preguntar
    Swal.fire({
      title: "Eliminar Producto",
      text: "Esta segur@? una vez eliminado no se puede recuperar",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Eliminar",
      confirmButtonColor: "#000",
    }).then((res) => {
      if (res.isConfirmed) {
        dispatch(eliminarProductoAction(id))
      }
    })
    //eliminar si es OK
    //
  }

  const handleEditarProd = (producto) => {
    dispatch(obtenerProductoEditarAction(producto))
    navigate(`/editar-producto/${producto.id}`)
  }

  return (
    <div>
      {productos.length > 0 ? (
        <table className="w-full">
          <thead className="block bg-sky-700 text-white">
            <tr className="grid grid-cols-3">
              <th className="border-r-2 border-sky-800 py-2">Nombre</th>
              <th className="border-r-2  border-sky-800 py-2">Precio</th>
              <th className=" py-2">Acciones</th>
            </tr>
          </thead>
          <tbody className="block bg-slate-100">
            {productos.length > 0 &&
              productos.map((producto) => (
                <tr
                  className="grid grid-cols-3 even:bg-slate-300 items-center"
                  key={producto.id}
                >
                  <td className="text-center border-r-2 border-slate-200 py-2 px-5 ">
                    {producto.nombre}
                  </td>
                  <td className="text-center border-r-2 border-slate-200 py-2 px-5">
                    ${producto.precio}
                  </td>
                  <td className="text-center flex flex-col gap-1 mt-1 mb-1  ">
                    <button
                      onClick={() => {
                        handleEditarProd(producto)
                      }}
                      className=" bg-sky-600 font-bold text-white w-3/4 mx-auto hover:bg-sky-700 transtion-all"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => {
                        handleEliminarProd(producto.id)
                      }}
                      className=" bg-red-600 font-bold text-white w-3/4 mx-auto hover:bg-red-700 transtion-all"
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      ) : (
        <p>No hay Productos actualmente</p>
      )}
    </div>
  )
}

export default Index
