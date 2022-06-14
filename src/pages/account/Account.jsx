import React, {useState} from 'react'
import { useAuthContext } from '../../contexts/AuthUserContextProvider'
import { useItemsApi } from '../../contexts/ItemsContextProvider'
import {FaCog, FaGoogleWallet, FaTruckLoading, FaArrowLeft} from 'react-icons/fa'
import {AiOutlineDashboard, AiOutlineUserSwitch} from 'react-icons/ai'
import {BsPeople, BsCardChecklist} from 'react-icons/bs'
import Profile from './Profile';
import UseItems from './UseItems'
import Clients from './Clients'
import Orders from './Orders'
import Setting from './Setting'
import Followers from './Followers'
import Delivered from './Delivered'
import './css/account.css';


const accountLinks = [
    {text:'Clients', icon:<BsPeople className="sidebar-nav-icon"  />},
    {text:'Orders', icon:<FaGoogleWallet className="sidebar-nav-icon"  />},
    {text:'Adverts', icon:<BsCardChecklist className="sidebar-nav-icon"  />},
    {text:'Followers', icon:<AiOutlineUserSwitch className="sidebar-nav-icon"  />},
    {text:'Delivered', icon:<FaTruckLoading className="sidebar-nav-icon"  />},
    {text:'Setting', icon:<FaCog className="sidebar-nav-icon"  />},
]

export default function Account() {

  const {authUser} = useAuthContext()
  const {adverts} = useItemsApi()
  const [activePage, toggleActivePage] = useState('Dashboard');

  const handleTogglePage = e => {
    toggleActivePage(e)
    // window.scrollTo(0, 0);
  }


  const userItems = adverts.filter(item => item.seller._id === authUser.profile._id)
 
  function AccountBackBtn(){
    return (<FaArrowLeft className='back-btn sm-screen' onClick={() => toggleActivePage('Dashboard')} />)
  }


  return (
    <div className="my-container">
      <div className="app-content d-flex">
        <div className="app-content-sidebar user-account-content lg-screen">
          <Profile user={authUser.profile} />
          <AccountNavLinks handleTogglePage={handleTogglePage} />
        </div>
        <div className="app-content-main">
          {activePage === 'Dashboard' && <Dashboard user={authUser.profile} handleTogglePage={handleTogglePage} />}
          {activePage === 'Adverts' && <UseItems items={userItems} AccountBackBtn={<AccountBackBtn />} />} 
          {activePage === 'Clients' && <Clients clients={[]} AccountBackBtn={<AccountBackBtn />} />} 
          {activePage === 'Orders' && <Orders orders={[]} AccountBackBtn={<AccountBackBtn />} />} 
          {activePage === 'Followers' && <Followers followers={[]} AccountBackBtn={<AccountBackBtn />} />} 
          {activePage === 'Delivered' && <Delivered delivered={[]} AccountBackBtn={<AccountBackBtn />} />} 
          {activePage === 'Setting' && <Setting setting={[]} AccountBackBtn={<AccountBackBtn />} />} 
        </div>
      </div>
    </div>
  )
}


function AccountNavLinks({handleTogglePage}){
  return(
    <div className="user-account-nav">
      <div className="account-links-wraper dashboard-link">
        <AiOutlineDashboard className="sidebar-nav-icon"  />
        <span className="nav-link">Dashboard</span>
      </div>
      {accountLinks.map((link, key) => (
        <div className="account-links-wraper" key={key} onClick={() => handleTogglePage(link.text)}>
          {link.icon}
          <span className="nav-link">
            {link.text}
          </span>
        </div>
      ))}
      {/* <ul>
        <li onClick={() => handleTogglePage('Dashboard')}>
          <AiOutlineDashboard className="sidebar-nav-icon"  />
          <span className="nav-link">Dashboard</span>
        </li>
        {accountLinks.map((link, key) => (
          <li key={key} onClick={() => handleTogglePage(link.text)}>
            {link.icon}
            <span className="nav-link">
                {link.text}
            </span>
          </li>
        ))}
      </ul> */}
    </div>
  )
}

function Dashboard({user, handleTogglePage}) {
  return (
    <>
    <div className="sm-screen">
      <Profile user={user} />
      <AccountNavLinks handleTogglePage={handleTogglePage} />
    </div>
    <div className="section-container">
      Dashboard
    </div>
    </>
  )
}