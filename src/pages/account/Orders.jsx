import React from 'react'

export default function Orders({orders, AccountBackBtn}) {
  return (
    <div className="section-container">
        <div className="user-account-header d-flex align-items-center">
            {AccountBackBtn}
            <h5>My Orders</h5>
        </div>
        Orders
    </div>
  )
}
