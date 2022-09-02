import { MOSTRAR_ALERTA, OCULTAR_ALERTA } from "../types"

export const mostrarAlertaActions = (alerta) => {
  return (dispatch) => {
    dispatch(mostrarAlerta(alerta))
  }
}

const mostrarAlerta = (alerta) => ({
  type: MOSTRAR_ALERTA,
  payload: alerta,
})

export const ocultarAlertaActions = () => {
  return (dispatch) => {
    dispatch(ocultarAlerta())
  }
}

const ocultarAlerta = () => ({
  type: OCULTAR_ALERTA,
})
