import React from 'react'
import Items from '../../components/items/Items'



export default function Topitems({items, title}) {

  return (
    <div className="section-container">
      <div className="section-header">
        <h3>{title}</h3>
      </div>
      <div className="section-body px-2">
        <Items items={items} cName='g-5' />
      </div>
    </div>
  )
}
