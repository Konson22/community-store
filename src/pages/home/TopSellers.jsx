import React from 'react'

export default function TopSellers() {
  return (
    <div className='sidebar-content'>
      <div className="sidebar-content-header">
        <h4>Top Sellers</h4>
      </div>
      <div className="sidebar-body">
        {topsellerData.map(seller => (
          <div className='seller-container d-flex align-items-center' key={seller._id}>
            <div className="seller-image">
              <img src={seller.logo} alt={seller.name} />
            </div>
            <div className="seller-text">
              <h5>{seller.name}</h5>
              <p>{seller.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}


const topsellerData = [
  {
    _id:1,
    name:'Alaxer Shop',
    logo:process.env.PUBLIC_URL+'/images/online-shopping-ge0b63afec_1280.png',
    category:'Electronics'
  },
  {
    _id:2,
    name:'Alaxer Shop',
    logo:process.env.PUBLIC_URL+'/images/online-shopping-ge0b63afec_1280.png',
    category:'Electronics'
  },
  {
    _id:3,
    name:'Alaxer Shop',
    logo:process.env.PUBLIC_URL+'/images/online-shop-gd3c9969f5_1280.png',
    category:'Electronics'
  },
  {
    _id:4,
    name:'Alaxer Shop',
    logo:process.env.PUBLIC_URL+'/images/online-shop-gd3c9969f5_1280.png',
    category:'Electronics'
  },
  {
    _id:5,
    name:'Alaxer Shop',
    logo:process.env.PUBLIC_URL+'/images/online-shop-gd3c9969f5_1280.png',
    category:'Electronics'
  },
  {
    _id:6,
    name:'Alaxer Shop',
    logo:process.env.PUBLIC_URL+'/images/online-shop-gd3c9969f5_1280.png',
    category:'Electronics'
  },
]