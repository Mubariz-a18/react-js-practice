import axiosInstance from './httpService'


const login = async(user)=>{
    return await axiosInstance.post("signin",user)
     
}

const saveUser = (user)=>{
    return    localStorage.setItem('user',JSON.stringify(user))

} 

const register = (user)=>{
      return axiosInstance.post("signup",user)
      
}


export default {login , saveUser, register}