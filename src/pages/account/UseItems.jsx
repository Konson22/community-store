import React from 'react'
import Items from '../../components/items/Items'
import {Link} from 'react-router-dom'


export default function UseItems({items, AccountBackBtn}) {
  return (
    <div className="section-container account-section">
      <div className="user-account-header d-flex align-items-center">
        {AccountBackBtn}
        <h5>My Adverts</h5>
      </div>
      <div className="">
        {items.length >= 1 ? <Items items={items} isAuthor={true} cName='g-5' /> :
        <div>
          <p>You dont have  items.</p>
          <Link className='my-btn btn' to='/upload'>Start Salling</Link>
        </div>
        }
      </div>
    </div>
  )
}
