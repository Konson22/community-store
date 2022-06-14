import React, { useEffect } from 'react'
import {useItemsApi} from '../../contexts/ItemsContextProvider'
import Items from '../../components/items/Items'
import {useParams, Link} from 'react-router-dom'
import {NavDropdown} from 'react-bootstrap'
import { categoriesList } from '../../assets/data/data'
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
      <div className="sm-screen">
        <SearchBar />
      </div>
      <div className="app-content d-flex">
        <div className="app-content-sidebar">
          <TopSellers />
        </div>
        <div className="app-content-main">
          <div className="section-header d-flex align-items-center">
            <NavDropdown title={category} className='lg-screen'>
              <NavDropdown.Item>
                <Link className='nav-link text-dark' to={`/items/all`}>All</Link>
              </NavDropdown.Item>
              {categoriesList.map((link, key) => (
                <NavDropdown.Item className="nav-item" key={key}>
                  <Link className='nav-link text-dark' to={`/items/${link.value}`}>{link.name}</Link>
                </NavDropdown.Item>
              ))}
            </NavDropdown>
              <span className='h5 muted'>{category} - ({filteredItems.length})</span>
          </div>
          {itemsContent}
        </div>
      </div>
    </div>
  )
}
