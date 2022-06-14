import React from 'react'

export default function Setting({setting, AccountBackBtn}) {
  return (
    <div className="section-container">
        <div className="user-account-header d-flex align-items-center">
            {AccountBackBtn}
            <h5>My Setting</h5>
        </div>
        Setting
    </div>
  )
}
