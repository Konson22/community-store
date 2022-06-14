import axios from 'axios'

const axiosInstance = axios.create({baseURL:process.env.REACT_APP_BACK_END_URL})
// const axiosInstance = axios.create({baseURL:'http://localhost:3001'})
export default axiosInstance

export const globalOptions = {
    widthCredentials:true, withCredentials:'include',
}

