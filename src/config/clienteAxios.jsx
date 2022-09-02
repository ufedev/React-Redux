import axios from "axios"

const clienteAxios = axios.create({
  baseURL: "https://my-json-server.typicode.com/ufedev/React-Redux",
})

export default clienteAxios
