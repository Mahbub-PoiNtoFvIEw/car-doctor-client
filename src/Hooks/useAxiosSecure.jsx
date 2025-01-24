import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";
// https://car-doctor-server-omega-ten-29.vercel.app 
export const axiosSecure = axios.create({
    baseURL: 'https://car-doctor-server-omega-ten-29.vercel.app',
    withCredentials: true
})

const useAxiosSecure = () => {
    const {logOut} = useAuth();
    const navigate = useNavigate();

    useEffect(()=>{
        axiosSecure.interceptors.response.use(res=>{
            return res;
        }, error =>{
            // console.log('error tracked in the interceptor', error.response);
            if(error.response.status === 401 || error.response.status === 403){
                // console.log('log out user')
                logOut()
                .then(()=>{
                    navigate('/signin')
                })
                .catch(error=> console.error(error))
            }
        }
    )
    },[])
    return axiosSecure;
};

export default useAxiosSecure;