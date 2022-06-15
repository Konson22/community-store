import React from 'react'

export default function Clients({clients, AccountBackBtn}) {
  return (
    <div className="section-container account-section">
        <div className="user-account-header d-flex align-items-center">
            {AccountBackBtn}
            <h5>My Clients</h5>
        </div>
        <p>You dont have clients yet!.</p>
    </div>
  )
}
