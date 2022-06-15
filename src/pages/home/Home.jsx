import React from 'react'
import Topitems from './Topitems'
import {FaTruckMoving, FaRegThumbsUp, FaDollarSign, FaCamera} from 'react-icons/fa'
import { useItemsApi } from '../../contexts/ItemsContextProvider'
import {Link} from 'react-router-dom'
import { LazyImage } from '../../helpers/LazyImage'
import carImage from '../../assets/images/car.jpg'
import furnitureImage from '../../assets/images/furniture.jpg'
import fashionImage from '../../assets/images/fashion.jpg'
import electronicImage from '../../assets/images/electronic.jpg'
import background1 from '../../assets/images/background.png'
import decorateBackground from '../../assets/images/decorate-item.png'
import electronicBackground from '../../assets/images/675620d0d624805.jpg'
import TopSellers from './TopSellers'
import Carousel from 'react-elastic-carousel'
import './css/home.css'


const breakPoints = [
  {
    width:0,
    itemsToShow:1,
    itemsToScroll:1
  },
  {
    width:500,
    itemsToShow:1,
    itemsToScroll:1
  },
]

export default function Home() {

  const {loading, error, adverts} = useItemsApi();
   
  let itemsHolder

  if(loading){
    return itemsHolder = "Loading..."
  }else if(error){
    return itemsHolder = "Error Occures!"
  }

  if(adverts.length >= 1){
    const electronicAds = adverts.filter(item => item.category === 'electronics');
    const beautyHealthAds = adverts.filter(item => item.category === 'beauty_health');
    const autoAds = adverts.filter(item => item.category === 'auto')

    itemsHolder = (
      <div className="items-main-content">
        <Topitems items={adverts.slice(1,10)} title='Recently uploaded' />
        {electronicAds.length >= 1 && <Topitems items={electronicAds.slice(0, 10)} title='Electronic' />}
        {autoAds.length >= 1 && <Topitems items={autoAds.slice(0, 10)} title='Auto & Spare Parts' />}
        {beautyHealthAds.length >= 1 && <Topitems items={beautyHealthAds.slice(0, 10)} title='Health & Beauty' />}
      </div>
    )
  }

  return (
    <div className="my-container">
      <header className='header-wraper'>
        <div className="carousel-wraper d-flex">
          <Carousel breakPoints={breakPoints} initialFirstItem={0} initialActiveIndex={0} className=''>
            {carouselList.map(carousel => (
              <div 
                className="carousel-hero d-flex align-items-center" 
                style={{
                  backgroundImage: `linear-gradient(140deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1)), url(${carousel.image})`}
                } 
                key={carousel.id}
              >
                <div className="carousel-hero-content">
                  <h1>{carousel.text}</h1>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
        <div className="header-categories">
          <Link className="catergory-card" to='/store/electronics'>
            <img src={carImage} alt="" />
            <span>Auto & Spare parts</span>
          </Link>
          <Link className="catergory-card" to='/store/furniture'>
            <LazyImage src={furnitureImage} alt="" />
            <span>Furniture</span>
          </Link>
          <Link className="catergory-card" to='/store/fashion'>
            <LazyImage src={fashionImage} alt="" />
            <span>Fashion</span>
          </Link>
          <Link className="catergory-card" to='/store/electronics'>
            <LazyImage src={electronicImage} alt="" />
            <span>Electronics</span>
          </Link>
          <Link className="catergory-card" to='/store/electronics'>
            <LazyImage src={electronicImage} alt="" />
            <span>Health & Beauty</span>
          </Link>
          <Link className="catergory-card" to='/store/electronics'>
            <LazyImage src={electronicImage} alt="" />
            <span>Electronics</span>
          </Link>
        </div>
      </header>
      <div className="feautures-wraper d-flex align-items-center justify-content-between">
        <div className="feauture-card d-flex align-items-center">
          <div className="feauture-card-icon">
            <FaCamera />
          </div>
          <div className="text">
            <p className='h5'>Cupture it</p>
            <p className='lg-screen'>this is just for testing purpuse</p>
          </div>
        </div>
        <div className="feauture-card d-flex align-items-center">
          <div className="feauture-card-icon">
            <FaRegThumbsUp />
          </div>
          <div className="text">
            <p className='h5'>List it</p>
            <p className='lg-screen'>this is just for testing purpuse</p>
          </div>
        </div>
        <div className="feauture-card d-flex align-items-center">
          <div className="feauture-card-icon">
            <FaTruckMoving />
          </div>
          <div className="text">
            <p className='h5'>Share it</p>
            <p className='lg-screen'>this is just for testing purpuse</p>
          </div>
        </div>
        <div className="feauture-card d-flex align-items-center">
          <div className="feauture-card-icon">
            <FaDollarSign />
          </div>
          <div className="text">
            <p className='h5'>Earn Cash</p>
            <p className='lg-screen'>this is just for testing purpuse</p>
          </div>
        </div>
      </div>
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



const carouselList = [
  {
    id:1,
    text:'Your Favorite Items Made Affordable For You',
    // text:'Discover Disgners Products at fraction prices',
    image:background1,
  },
  {
  id:2,
  text:'Furnish your home on tight budget',
  image:decorateBackground,
  },
  {
    id:3,
    text:'Explore more and Engage more people',
    image:electronicBackground,
  },
  {
    id:4,
    text:'Explore more and Engage more people',
    image:background1,
  },
]