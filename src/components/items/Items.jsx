import React from 'react'
import {Link}  from 'react-router-dom'
import { LazyImage } from '../../helpers/LazyImage'


export default function Items({items, cName, isAuthor = false}) {
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
                    <p className="price-text">{item.price}$</p>
                    <div className="price-wraper d-flex justify-content-between mt-2">
                        <Link className='my-btn btn btn-sm text-white' to={`/item/${item._id}`}>Details</Link>
                        {/* {isAuthor && <Link className='btn btn-success btn-sm text-white' to={`/item/${item._id}`}>Edit</Link>} */}
                        {isAuthor && <Link className='btn btn-danger btn-sm text-white' to={`/item/${item._id}`}>Delete</Link>}
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}


