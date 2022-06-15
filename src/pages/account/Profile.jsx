import React from 'react'

export default function Profile({user}) {
  return (
    <div className="user-account-profile d-flex align-items-center">
        <div className="profile-image">
            <img src={process.env.REACT_APP_BACK_END_URL+user.avatar} alt='' />
        </div>
        <div className="profile-text">
            <h4>{user.name}</h4>
        </div>
    </div>
  )
}
