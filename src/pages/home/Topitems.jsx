import React from 'react'
import Items from '../../components/items/Items'



export default function Topitems({items, title}) {

    let storeContent = 'Loading...'

    storeContent = items.length >= 1 ? <Items items={items} cName='g-5' /> : "No items found."

  return (
    <div className="section-container">
      <div className="section-header">
        <h3>{title}</h3>
      </div>
      <div className="section-body px-2">
        {storeContent}
      </div>
    </div>
  )
}
