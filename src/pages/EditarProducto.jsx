import FormularioProducto from "../components/FormularioProducto"
import swal from "sweetalert2"
import { useNavigate } from "react-router-dom"
//actions Redux
import { useDispatch } from "react-redux"
import { comenzarEditarProductoAction } from "../actions/productosActions"
const EditarProducto = () => {
  const dispatch = useDispatch()

  const nav = useNavigate()
  const handleEditar = (e, producto) => {
    e.preventDefault()

    //Validamos
    if (producto.nombre === "" || producto.precio === 0) {
      swal.fire({
        text: "Todos los campos son obligatorios",
        icon: "warning",
        showConfirmButton: false,
        timer: 1500,
      })
      return
    }

    //Editamos

    dispatch(comenzarEditarProductoAction(producto))
    nav("/")
  }

  return (
    <div>
      <FormularioProducto handleSubmit={handleEditar} />
    </div>
  )
}

export default EditarProducto
