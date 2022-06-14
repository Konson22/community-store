import React from 'react'
import Items from '../../components/items/Items'

export default function UseItems({items, AccountBackBtn}) {
  return (
    <div className="section-container">
      <div className="user-account-header d-flex align-items-center">
        {AccountBackBtn}
        <h5>My Adverts</h5>
      </div>
      <div className="">
        {items.length >= 1 ? <Items items={items} cName='g-5' /> : "no items"}
      </div>
    </div>
  )
}
