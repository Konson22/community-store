import React from 'react'

export default function Followers({followers, AccountBackBtn}) {
  return (
    <div className="section-container account-section">
      <div className="user-account-header d-flex align-items-center">
        {AccountBackBtn}
        <h5>My Followers</h5>
      </div>
      <p>You dont have followers</p>
    </div>
  )
}
