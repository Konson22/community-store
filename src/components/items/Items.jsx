import React from 'react'
import {Link}  from 'react-router-dom'
import { LazyImage } from '../../helpers/LazyImage'


export default function Items({items, cName}) {
  return (
    <div className={`items-wraper ${cName}`}>
        {items.map(item => (
            <div className='item-card' key={item._id}>
                <div className="item-card-image">
                    <LazyImage src={item.image} alt='' />
                </div>
                <div className="item-card-body">
                    <b className="elips-text">{item.title}</b>
                    <p className="elips-text">{item.description}</p>
                    <div className="price-wraper d-flex justify-content-between">
                        <p className="price-text active">{item.price}$</p>
                        <Link className='my-btn btn btn-sm text-white' to={`/item/${item._id}`}>Details</Link>
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}


