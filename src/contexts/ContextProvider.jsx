import React, { useState, useContext, createContext, useEffect, useReducer } from 'react'

const ApiProvider = createContext()

export const useApis = () => useContext(ApiProvider)

const initailState = {
  loading:false,
  error:'',
  message:'',
  user:null,
  items:[]
}


const reducers = (state, action) => {
  switch (action.type){
    case 'isLoading':{
      return {...state, loading:true}
    }
    case 'login':{
      return {...state, loading:true}
    }
  }
}


export default function ContextProvider({children}) {

  const [state, dispatch] = useReducer(initailState, reducers);

  return (
    <ApiProvider.Provider value={{state, dispatch}}>
      {children}
    </ApiProvider.Provider>
  )
}


async function Login({data}){
    try {
        const results = await axiosInstance.post('/auth/login', data, {
          widthCredentials:true, 
          withCredentials:'include'
        }).then(res => res);
        console.log(results.data)
      } catch (error) {
        if(error.response?.status === 404 || error.response?.status === 403 || error.response?.status === 500){
          console.log(error.response?.data)
        }else{
          console.log('Sorry something went wrong!.')
        }
      }
}