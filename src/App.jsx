import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./layout/Layout"
import Index from "./pages/Index"
import NuevoProducto from "./pages/NuevoProducto"
import EditarProducto from "./pages/EditarProducto"

//Reduxx
import { Provider } from "react-redux"
import store from "./store"

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Index />} />
            <Route path="nuevo-producto" element={<NuevoProducto />} />
            <Route path="editar-producto/:id" element={<EditarProducto />} />
          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  )
}

export default App
