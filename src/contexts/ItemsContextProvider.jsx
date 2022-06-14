import React, { useState, useContext, createContext, useEffect } from 'react'
import axiosInstance from '../helpers/axiosInstance'


const apiContext = createContext()


export const useItemsApi = () => useContext(apiContext)


export default function ItemsContextProvider({children}) {

  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [adverts, setAdverts] = useState([])
  const [filteredItems, setFilteredItems] = useState([])
    
  useEffect(() => {
    const controller = new AbortController();

    async function fetchItems(){
        setLoading(true)
        try{
            const results = await axiosInstance.get('/items').then(res => res)
            setAdverts(results?.data)
        }catch(error){
            if(error.status === 404 || error.status === 403 || error.status === 500){
                return setError(error?.response?.data)
            }
            setError('Error Occures!')
        }finally{
            setLoading(false)
        }
    }
    fetchItems()

    return () => controller.abort()
  }, [])

  useEffect(() => setFilteredItems(adverts), [adverts])

  // SEARCH ITEM BY NAME
  function handleSearch(val){
    const results = adverts && adverts.length >= 1 ? adverts.filter(item => {
      const value = val.toLowerCase()
      const target = item.title.toLowerCase()
      return target.includes(value)
    }) : []

    if(results.length === 0){
      setMessage(`${val} is not availale currently!.`);
      setFilteredItems([])
    }else{
      setFilteredItems(results)
      setMessage('')
    }
  }


  // FILTER CATEGORIES
  function filterCategories(category){
    if(category === 'all'){
      setFilteredItems(adverts)
      setMessage('')
      return
    }

    const results = adverts && adverts.length >= 1 ? adverts.filter(item => item.category === category) : []
    
    if(results.length === 0){
      setMessage(`it is not availale currently!.`);
      setFilteredItems([])
    }else{
      setFilteredItems(results)
      setMessage('')
    }
  }
  

  const values = {
    loading,
    error,
    message,
    adverts,
    setAdverts,
    filteredItems,
    handleSearch,
    filterCategories,
  }

  return (
    <apiContext.Provider value={values}>
      {children}
    </apiContext.Provider>
  )
}
