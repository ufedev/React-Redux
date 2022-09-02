import { combineReducers } from "redux"
import productosReducer from "./productosReducer"
export default combineReducers({
  productos: productosReducer,
})

//Este index unicamente se utiliza en la forma vieja de implementar Redux

// con @reduxjs/toolkit ahora es menos codigo y mas facil de configurar por Redux Developer Tools
