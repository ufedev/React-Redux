//Forma Vieja de hacerlo

// import {
//   legacy_createStore as createStore,
//   applyMiddleware,
//   compose,
// } from "redux"

// import thunk from "redux-thunk"
// import reducer from "./reducers"

// const Store = createStore(
//   reducer,
//   compose(
//     applyMiddleware(thunk),
//     typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
// /      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
//       : compose
//   )
// )

//Forma Nueva con @reduxjs/toolkit

import { configureStore } from "@reduxjs/toolkit"
import productosReducer from "./reducers/productosReducer"
import alertasReducer from "./reducers/alertasReducer"
const store = configureStore({
  reducer: {
    productos: productosReducer,
    alertas: alertasReducer,
  },
})

export default store
