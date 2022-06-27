import axios from 'axios'


const host = 'http://localhost:9002';
const axiosInstance = axios.create({baseURL: host})


export default axiosInstance
