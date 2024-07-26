import {createContext, useContext, useState} from 'react';
import axios from "../Api/axios"
const AuthContext = createContext({});
export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [ error, setError ] = useState({ login:[], signup:[] });
    const [ msgerror, setMsgerror ] = useState({ login:null, signup:null });
    const [ loading, setLoading ] = useState({ signup:null, login:null });
    const csrf = () =>  axios.get('/sanctum/csrf-cookie');
    const getUser = async () => {
        const token = localStorage.getItem('token')
        try{
          const response = await axios.get('api/user', {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
        setUser(response.data.auth_user);
        }
        catch{
          
        }
    } 
    const login = async (data,  navigate) => {
        setLoading((prevalue) => ({...prevalue, login:true}));
        await csrf();
        try {
            const response =  await axios.post('api/login-user', data);
            const token = response.data.token;
            localStorage.setItem('token', token);
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            getUser();  
            navigate("/");
            setLoading((prevalue) => ({...prevalue, login:false}));
        } catch (e) {
            if(e.response.status === 422){
              setError((prevalue) =>  ({...prevalue, login:e.response.data.errors}));
              setMsgerror((prevalue) =>  ({...prevalue, login:"An error occured trying to log you in"}));
              setLoading((prevalue) =>  ({...prevalue, login:false}));
            }
        }
    }
    const signup = async (data,  navigate) => {
      setLoading((prevalue) => ({...prevalue, signup:true}));
        await csrf();
        try {
            await axios.post('api/create-user', data);
              navigate("/login");
              setLoading((prevalue) => ({...prevalue, signup:false}));
            } catch (e) {
               if(e.response.status === 422){
                  setError((prevalue) => ({...prevalue, signup:e.response.data.errors }));
                  setMsgerror((prevalue) => ({...prevalue, signup:"An error occured trying to create an account" }));
                  setLoading((prevalue) => ({...prevalue, signup:false}));
               }
         }
    }
    const logout  =  async () => {
         axios.post("/logout").then(()=>{
                setUser(null);
         });
    }
    const passwordRecovery =  async (data) => {
        await csrf();
       try {
          await axios.post('/reset-password', data);
       }
       catch (e){
         if(e.response.status === 422){
            //setErrors(e.response.data.errors)
         }
       }
    }

    return <AuthContext.Provider value={{ loading,  error, msgerror, user,  login, signup, logout, getUser, passwordRecovery}}>
        {children}
    </AuthContext.Provider>
}
export default function useAuthContext(){
    return useContext(AuthContext);
}

