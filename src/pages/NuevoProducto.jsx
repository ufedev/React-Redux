import FormularioProducto from "../components/FormularioProducto"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import swal from "sweetalert2"
//Actions

import { crearNuevoProductoAction } from "../actions/productosActions"
import {
  mostrarAlertaActions,
  ocultarAlertaActions,
} from "../actions/alertaActions"

const NuevoProducto = () => {
  const dispatch = useDispatch() //ejecuta las acciones (Funciones)
  const error = useSelector((state) => state.productos.error) //recoge los states de los reducers del store. en este caso solo tenemos el reducer de productos, si tuvieramos mas podriamos acceder state.{otro reducer}.{valores}
  const loading = useSelector((state) => state.productos.loading)
  const alerta = useSelector((state) => state.alertas.alerta)

  const navi = useNavigate()
  // swal.fire({
  //   text: "Registro cargado con exito",
  //   icon: "success",
  //   confirmButtonText: "Ok",
  // })
  const crearProducto = (producto) =>
    dispatch(crearNuevoProductoAction(producto))

  if (alerta) {
    swal.fire(alerta)
  }

  const handleSubmit = (e, producto) => {
    e.preventDefault()

    //validar campos

    if (producto.nombre === "" || producto.precio === 0) {
      dispatch(
        mostrarAlertaActions({
          text: "Todos los campos son obligatorios",
          icon: "warning",
          timer: 1500,
          showConfirmButton: false,
        })
      )
      setTimeout(() => {
        dispatch(ocultarAlertaActions())
      }, 2000)
      return
    }
    //Cargar Producto
    dispatch(ocultarAlertaActions())
    crearProducto(producto)
    navi("/")
  }

  return (
    <div>
      {loading ? (
        <p>Cargando</p>
      ) : (
        <>
          <FormularioProducto handleSubmit={handleSubmit} />
          {error && (
            <p className="mt-5 px-5 py-2 bg-red-600 text-white font-bold text-center w-3/5 mx-auto rounded">
              Hubo un error
            </p>
          )}
        </>
      )}
    </div>
  )
}

export default NuevoProducto
