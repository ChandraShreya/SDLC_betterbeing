import axios from "axios"
// import { cookies } from "next/headers";
// import { Cookies } from "react-cookie";
export const baseURL = `http://localhost:8000/`
// let cookies= new Cookies()
export const AxiosInstance = axios.create({
     baseURL
})
export default AxiosInstance