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

// const ordersData = [
//   {
//     _id:1,
//     client:'Deng Bol',
//     item:'Phones',
//     qty:20,
//     status:false
//   },
//   {
//     _id:2,
//     client:'Musa Bol',
//     item:'Laptop',
//     qty:2,
//     status:false
//   },
//   {
//     _id:3,
//     client:'Deng Bol',
//     item:'Phones',
//     qty:20,
//     status:false
//   },
//   {
//     _id:4,
//     client:'Musa Bol',
//     item:'Laptop',
//     qty:2,
//     status:false
//   },
// ]

export default function Account() {

  const {authUser} = useAuthContext()
  const {adverts} = useItemsApi()
  const [activePage, toggleActivePage] = useState('Dashboard');
  // const [ordersData, setOrdersData] = useState([]);
  const ordersData = []

  const handleTogglePage = e =>  toggleActivePage(e)

  const userItems = adverts.filter(item => item.seller._id === authUser.profile._id)
 
  function AccountBackBtn(){
    return (<FaArrowLeft className='back-btn sm-screen' onClick={() => toggleActivePage('Dashboard')} />)
  }

  function AccountNavLinks(){
    return(
      <div className="user-account-nav">
        <div className="account-links-wraper dashboard-link">
          <AiOutlineDashboard className="sidebar-nav-icon"  />
          <span className="nav-link">Dashboard</span>
        </div>
        <div className="account-links-wraper badge-wraper" onClick={() => handleTogglePage('Clients')}>
          <BsPeople className="sidebar-nav-icon"  />
          <span className="nav-link">Clients</span>
          <span className="badge-card">10</span>
        </div>
        <div className="account-links-wraper badge-wraper" onClick={() => handleTogglePage('Orders')}>
          <FaGoogleWallet className="sidebar-nav-icon"  />
          <span className="nav-link">Orders</span>
          {ordersData.length >= 1 && <span className="badge-card">{ordersData.length}</span>}
        </div>
        <div className="account-links-wraper badge-wraper" onClick={() => handleTogglePage('Adverts')}>
          <BsCardChecklist className="sidebar-nav-icon"  />
          <span className="nav-link">Adverts</span>
          {userItems.length >= 1 && <span className="badge-card">{userItems.length}</span>}
        </div>
        <div className="account-links-wraper" onClick={() => handleTogglePage('Followers')}>
          <AiOutlineUserSwitch className="sidebar-nav-icon"  />
          <span className="nav-link">Followers</span>
        </div>
        <div className="account-links-wraper" onClick={() => handleTogglePage('Delivered')}>
          <FaTruckLoading className="sidebar-nav-icon"  />
          <span className="nav-link">Delivered</span>
        </div>
        <div className="account-links-wraper" onClick={() => handleTogglePage('Setting')}>
          <FaCog className="sidebar-nav-icon"  />
          <span className="nav-link">Setting</span>
        </div>
      </div>
    )
  }
  
  function Dashboard() {
    return (
      <>
      <div className="sm-screen">
        <Profile user={authUser.profile} />
        <AccountNavLinks />
      </div>
      <div className="section-container">
        Dashboard
      </div>
      </>
    )
  }

  return (
    <div className="my-container">
      <div className="app-content d-flex">
        <div className="app-content-sidebar user-account-content lg-screen">
          <Profile user={authUser.profile} />
          <AccountNavLinks handleTogglePage={handleTogglePage} userItems={userItems} />
        </div>
        <div className="app-content-main">
          {activePage === 'Dashboard' && <Dashboard />}
          {activePage === 'Adverts' && <UseItems items={userItems} AccountBackBtn={<AccountBackBtn />} />} 
          {activePage === 'Clients' && <Clients clients={[]} AccountBackBtn={<AccountBackBtn />} />} 
          {activePage === 'Orders' && <Orders orders={ordersData} AccountBackBtn={<AccountBackBtn />} />} 
          {activePage === 'Followers' && <Followers followers={[]} AccountBackBtn={<AccountBackBtn />} />} 
          {activePage === 'Delivered' && <Delivered delivered={[]} AccountBackBtn={<AccountBackBtn />} />} 
          {activePage === 'Setting' && <Setting setting={[]} AccountBackBtn={<AccountBackBtn />} />} 
        </div>
      </div>
    </div>
  )
}


