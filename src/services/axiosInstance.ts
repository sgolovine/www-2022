import axios from "axios"

const axiosInstance = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:9090"
      : "https://sunny.gg",
})

export default axiosInstance
