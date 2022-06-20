import React from 'react'

export default function Orders({orders, AccountBackBtn}) {
  return (
    <div className="section-container account-section">
      <div className="user-account-header d-flex align-items-center">
        {AccountBackBtn}
        <h5>My Orders</h5>
      </div>
      {orders.length >= 1 ? <div className="mt-2">
        <table className="table">
          <thead>
            <tr>
              <th>Client</th>
              <th>Item</th>
              <th>Qty</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order._id}>
                <td>{order.client}</td>
                <td>{order.item}</td>
                <td>{order.qty}</td>
                <td>{order.status ? 'Done':'Pending'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> :
      <p>You dont have  Orders.</p>
      }
    </div>
  )
}
