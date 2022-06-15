import React, { useEffect } from 'react'
import {useItemsApi} from '../../contexts/ItemsContextProvider'
import Items from '../../components/items/Items'
import {useParams} from 'react-router-dom'
import { SearchBar } from '../../helpers/SearchBar'
import TopSellers from '../home/TopSellers'
import './css/shop.css'



export default function Shop() {
  
  const {category} = useParams()
  const {loading, error, message, filterCategories, filteredItems} = useItemsApi()

  useEffect(() => {
    if(category === 'search') return
    filterCategories(category)
    
    // eslint-disable-next-line 
  }, [category])

  let itemsContent

  if(loading && error){
    return itemsContent = 'Loading...'
  }else{
    itemsContent = filteredItems.length >= 1 ? <Items items={filteredItems} cName='g-5' /> : "No items found."
  }

  if(message){
    itemsContent = message
  }


  return (
    <div className='my-container'>
      <div className="sm-screen mb-2">
        <SearchBar />
      </div>
      <div className="app-content d-flex shop-container">
        <div className="app-content-sidebar">
          <TopSellers />
        </div>
        <div className="app-content-main">
          <div className="section-container">
            <div className="section-header">
              <span className='h5 muted'>{category} - ({filteredItems.length})</span>
            </div>
            {itemsContent}
          </div>
        </div>
      </div>
    </div>
  )
}
