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
  MOSTRAR_ALERTA,
} from "../types"

const initialState = {
  productos: [],
  error: false,
  loading: false,
  idProductoEliminar: null,
  productoEditar: null,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case AGREGAR_PRODUCTO:
    case DESCARGAR_PRODUCTOS:
      return { ...state, loading: true, error: false, productoEditar: null }
    case AGREGAR_PRODUCTO_EXITO:
      return {
        ...state,
        productos: [...state.productos, action.payload],
        loading: false,
        error: false,
      }
    case AGREGAR_PRODUCTO_ERROR:
    case DESCARGAR_PRODUCTOS_ERROR:
      return { ...state, loading: false, error: action.payload }
    case DESCARGAR_PRODUCTOS_EXITO:
      return {
        ...state,
        productos: action.payload,
        loading: false,
        error: false,
      }
    case OBTENER_PRODUCTO_ELIMINAR:
      return {
        ...state,
        loading: true,
        error: false,
        idProductoEliminar: action.payload,
      }
    case ELIMINAR_PRODUCTO_EXITO:
      return {
        ...state,
        loading: false,
        productos: state.productos.filter(
          (producto) => producto.id != state.idProductoEliminar
        ),
        idProductoEliminar: null,
      }
    case OBTENER_PRODUCTO_EDITAR:
    case COMENZAR_EDICION_PRODUCTO:
      return {
        ...state,
        productoEditar: action.payload,
      }
    case EDITAR_PRODUCTO_EXITO:
      return {
        ...state,
        loading: false,
        error: false,
        productoEditar: action.payload,
      }
    default:
      return state
  }
}
