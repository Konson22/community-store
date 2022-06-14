import React, { useState, useContext, createContext, useEffect } from 'react'
import axiosInstance from '../helpers/axiosInstance'


const apiContext = createContext()


export const useAuthContext = () => useContext(apiContext)


export default function AuthUserContextProvider({children}) {


  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [authUser, setAuth] = useState([])

  useEffect(() => {
    const controller = new AbortController();

    async function verifyAuthUser(){
      setLoading(true)
      try{
        const results = await axiosInstance.post('/auth/verify-token', {}, {
          widthCredentials:true, 
          withCredentials:'include',
        }).then(res => res)
        setAuth(results?.data)
      }catch(error){
        if(error.status === 404 || error.status === 403 || error.status === 500){
          return setMessage(error?.response?.data)
        }
        setMessage('Error Occures!')
      }finally{
        setLoading(false)
      }
    }
    verifyAuthUser();
    return () => controller.abort()
  }, [])

  return (
    <apiContext.Provider value={{loading, message, authUser, setAuth}}>
      {children}
    </apiContext.Provider>
  )
}
