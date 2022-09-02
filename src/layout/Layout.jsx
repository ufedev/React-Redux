import { Outlet } from "react-router-dom"
import Header from "../components/Header"
const Layout = () => {
  return (
    <div>
      <Header />
      <div className="container mx-auto my-10">
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
