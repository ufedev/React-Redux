//typos de acciones
import {
  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_ERROR,
  AGREGAR_PRODUCTO_EXITO,
  DESCARGAR_PRODUCTOS,
  DESCARGAR_PRODUCTOS_EXITO,
  DESCARGAR_PRODUCTOS_ERROR,
  OBTENER_PRODUCTO_ELIMINAR,
  ELIMINAR_PRODUCTO_EXITO,
  ELIMINAR_PRODUCTO_ERROR,
  OBTENER_PRODUCTO_EDITAR,
  COMENZAR_EDICION_PRODUCTO,
  EDITAR_PRODUCTO_EXITO,
  EDITAR_PRODUCTO_ERROR,
} from "../types"
import cliente from "../config/clienteAxios"
import Swal from "sweetalert2"

export const crearNuevoProductoAction = (producto) => {
  return async (dispatch) => {
    dispatch(agregarProducto())

    try {
      await cliente.post("/productos", producto)
      dispatch(agregarProductoExito(producto))
      Swal.fire({
        text: "Producto agregado correctamente",
        icon: "success",
        timer: "1500",
        showConfirmButton: false,
      })
    } catch (e) {
      dispatch(agregarProductoError(true))
    }
  }
}

const agregarProducto = () => ({
  type: AGREGAR_PRODUCTO,
})

const agregarProductoExito = (producto) => ({
  type: AGREGAR_PRODUCTO_EXITO,
  payload: producto,
})

const agregarProductoError = (estado) => ({
  type: AGREGAR_PRODUCTO_ERROR,
  payload: estado,
})

//Descarga de productos

export const descargarProductosAction = () => {
  return async (dispatch) => {
    dispatch(descargarProductos())

    try {
      const { data } = await cliente("/productos")

      dispatch(descargarProductosExito(data))
    } catch (e) {
      dispatch(descargarProductosError(true))
    }
  }
}

const descargarProductos = () => ({
  type: DESCARGAR_PRODUCTOS,
  payload: true,
})

const descargarProductosExito = (productos) => ({
  type: DESCARGAR_PRODUCTOS_EXITO,
  payload: productos,
})

const descargarProductosError = (estado) => ({
  type: DESCARGAR_PRODUCTOS_ERROR,
  payload: estado,
})

//Editar Productos

export const obtenerProductoEditarAction = (producto) => {
  return async (dispatch) => {
    dispatch(obtenerProductoEditar(producto))
  }
}

const obtenerProductoEditar = (producto) => ({
  type: OBTENER_PRODUCTO_EDITAR,
  payload: producto,
})

export const comenzarEditarProductoAction = (producto) => {
  return async (dispatch) => {
    dispatch(comenzarEdicionProducto(producto))

    try {
      await cliente.put(`/productos/${producto.id}`, producto)
      dispatch(editarProductoExito())
      Swal.fire({
        text: "producto Editado correctamente",
        icon: "success",
        showConfirmButton: false,
        timer: 1200,
      })
    } catch (e) {
      dispatch(editarProductoError())
    }
  }
}

const comenzarEdicionProducto = (producto) => ({
  type: COMENZAR_EDICION_PRODUCTO,
  payload: producto,
})

const editarProductoExito = () => ({
  type: EDITAR_PRODUCTO_EXITO,
  payload: null,
})
const editarProductoError = () => ({
  type: EDITAR_PRODUCTO_ERROR,
  payload: true,
})

// Eliminar

export const eliminarProductoAction = (id) => {
  return async (dispatch) => {
    dispatch(obtenerProductoEliminar(id))

    try {
      await cliente.delete(`/productos/${id}`)
      dispatch(eliminarProductoExito())
    } catch (e) {}
  }
}

const obtenerProductoEliminar = (id) => ({
  type: OBTENER_PRODUCTO_ELIMINAR,
  payload: id,
})
const eliminarProductoExito = () => ({
  type: ELIMINAR_PRODUCTO_EXITO,
})
