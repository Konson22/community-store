import React from 'react'

export default function Delivered({delivered, AccountBackBtn}) {
  return (
    <div className="section-container account-section">
        <div className="user-account-header d-flex align-items-center">
            {AccountBackBtn}
            <h5>My Delivered</h5>
        </div>
        <p>No Items Delivered yet!.</p>
    </div>
  )
}
