import React from 'react'
import Topitems from './Topitems'
import { useItemsApi } from '../../contexts/ItemsContextProvider'
import {Link} from 'react-router-dom'
import './css/home.css'
import { LazyImage } from '../../helpers/LazyImage'
import TopSellers from './TopSellers'


export default function Home() {

  const {loading, error, adverts} = useItemsApi()

  let itemsHolder

  if(loading){
    return itemsHolder = "Loading..."
  }else if(error){
    return itemsHolder = "Error Occures!"
  }

  if(adverts.length >= 1){
      // const electronicAds = adverts.filter(item => item.category === 'electronics')
      // const beautyHealthAds = adverts.filter(item => item.category === 'beauty_health')
      // const autoAds = adverts.filter(item => item.category === 'auto')

    itemsHolder = (
      <div className="items-main-content">
        <Topitems items={adverts.slice(1,10)} title='HOT DEAL' />
        <Topitems items={adverts.slice(1,10)} title='ElectronicAds' />
      </div>
    )
  }

  return (
    <div className="my-container">
      <header className='header-wraper'>
        <div className="hero-wraper" style={{backgroundImage:`linear-gradient(140deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1)), url(${categoriesList[0].image})`}}>
          header
        </div>
        <div className="header-categories">
          <Link className="catergory-card" to='/store/electronics'>
            <LazyImage src={process.env.PUBLIC_URL+'/images/car.jpg'} alt="" />
            <span>Electronics</span>
          </Link>
          <Link className="catergory-card" to='/store/furniture'>
            <LazyImage src={process.env.PUBLIC_URL+'/images/furniture.jpg'} alt="" />
            <span>Furniture</span>
          </Link>
          <Link className="catergory-card" to='/store/fashion'>
            <LazyImage src={process.env.PUBLIC_URL+'/images/fashion.jpg'} alt="" />
            <span>Fashion</span>
          </Link>
          <Link className="catergory-card" to='/store/electronics'>
            <LazyImage src={process.env.PUBLIC_URL+'/images/electronic.jpg'} alt="" />
            <span>Electronics</span>
          </Link>
          <Link className="catergory-card" to='/store/electronics'>
            <LazyImage src={process.env.PUBLIC_URL+'/images/electronic.jpg'} alt="" />
            <span>Electronics</span>
          </Link>
          <Link className="catergory-card" to='/store/electronics'>
            <LazyImage src={process.env.PUBLIC_URL+'/images/electronic.jpg'} alt="" />
            <span>Electronics</span>
          </Link>
        </div>
      </header>
      <div className="app-content d-flex">
        <div className="app-content-sidebar">
          <TopSellers />
        </div>
        <div className="app-content-main">
         {itemsHolder}
        </div>
      </div>
    </div>
  )
}



const categoriesList = [
  {
      id:1,
      text:'Discover Disgners Products at fraction prices',
      image:process.env.PUBLIC_URL+'images/furniture-g4a22d2679_1280.jpg',
      // image:process.env.PUBLIC_URL+'images/online-shop-g7158bf409_1280.png',
  },
  {
      id:2,
      text:'Furnish your home on tight budget',
      image:process.env.PUBLIC_URL+'/images/furniture.jpg',
  },
  {
      id:3,
      text:'Explore more and Engage more people',
      image:process.env.PUBLIC_URL+'/images/man-g66d030ec8_1280.jpg',
  },
  {
      id:4,
      text:'Explore more and Engage more people',
      image:process.env.PUBLIC_URL+'images/black-friday-g0b5e890ca_1280.png',
  },
]