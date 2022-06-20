import React from 'react'
import {NavLink} from 'react-router-dom'
import {FaShoppingCart, FaRegUser, FaRandom, FaRegHeart, FaFacebook, FaTwitter, FaInstagram} from 'react-icons/fa'
import {NavDropdown} from 'react-bootstrap'
import { categoriesList } from '../../assets/data/data'
// import logo from '../../assets/images/pngaaa.com-3108680.png'
import logo from '../../assets/images/my-logo.png'
import { useAuthContext } from '../../contexts/AuthUserContextProvider'
import {BsHouse, BsCartDash, BsSearch, BsBell} from 'react-icons/bs'
import {FiPlusCircle} from 'react-icons/fi'
import { SearchBar } from '../../helpers/SearchBar'
import './css/navbar.css'


export default function Navbar() {

  const {authUser} = useAuthContext()

  const guestUserButtons = (
    <div className="buttons-container d-flex align-items-center">
      <NavLink className="nav-link nav-btn lg-screen" to='/upload'>
        Start Saling
      </NavLink>
      <NavLink className="nav-link border lg-screen" to='/login'>
        Login | Signup
      </NavLink>
      <NavLink className="nav-link sm-screen" to='/login'>
        <FaRegUser className='nav-icon' />
      </NavLink>
    </div>
  )
  
  const authUserButtons = (
    <div className="buttons-container d-flex align-items-center">
      <NavLink className="nav-link nav-btn lg-screen" to='/upload'>
        Start Saling
      </NavLink>
      <NavLink className="nav-link sm-screen" to='/upload'>
        <FaShoppingCart className="nav-icon" />
      </NavLink>
      <NavLink className="nav-link d-flex align-items-center" to='/account'>
        <FaRegUser className='nav-icon' />
        <span className='lg-screen'>{authUser.status && authUser.profile.name.split(' ')[0]}</span>
      </NavLink>
    </div>
  )


  return (
    <div className='navbar-wraper'>
      <div className="nav-top-content d-flex justify-content-between align-items-center">
        <p>Some random text for demostration and other stuffs</p>
        <div className="top-nav-wraper d-flex align-items-center">
          <div className='lang-img xl'>
            <img className='rounded-circle' src="data:image/png;base64,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" alt="Eng" /> 
          </div>
          <NavDropdown title='Eng'>
            <NavDropdown.Item className='d-flex align-items-center'>
              <img className='lang-img rounded-circle' 
                src="data:image/png;base64,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" alt="Eng"
              /> 
              <span className='mx-1'>English</span>
            </NavDropdown.Item>
            <NavDropdown.Item className='d-flex align-items-center'>
              <img className='lang-img rounded-circle' src="https://qph.cf2.quoracdn.net/main-qimg-c628f557e989248eca1467b5ee0fd070" alt="Arabic" /> 
              <span className='mx-1'>Arabic</span>
            </NavDropdown.Item>
          </NavDropdown>
          <span className="top-nav-item">
            <a href='https://facebook.com' target="_blank" rel="noreferrer" className='navbar-social-media nav-link'>
              <FaFacebook />
            </a>
          </span>
          <span className="top-nav-item">
            <a href='https://facebook.com' target="_blank" rel="noreferrer" className='navbar-social-media nav-link'>
              <FaTwitter />
            </a>
          </span>
          <span className="top-nav-item">
            <a href='https://facebook.com' target="_blank" rel="noreferrer" className='navbar-social-media nav-link'>
              <FaInstagram />
            </a>
          </span>
        </div>
      </div>
      <div className="nav-center-content d-flex justify-content-between align-items-center">
        <div className="logo-wraper d-flex align-items-center">
          <img src={logo} alt='logo' />
          <div className='logo-text-wraper'>
            <div className="logo-text">121 Business</div>
            <p>Connecting For Business</p>
          </div>
        </div>
        <div className="nav-search-wraper">
          <SearchBar />
        </div>
        <div className="cart-wraper d-flex align-items-center">
          <div className="nav-link lg-screen">
            <FaRandom className="nav-icon" />
          </div>
          <div className="nav-link lg-screen">
            <FaRegHeart className="nav-icon" />
          </div>
          <NavLink className="nav-link d-flex align-items-center" to='/my-cart'>
            <div className="cart-icon-box d-flex justify-content-between align-items-center">
              <FaShoppingCart className="nav-icon" />
            </div>
            <div className="cart-text mx-1 lg-screen">
              <p className='p-0 m-0'>My Cart</p>
            </div>
          </NavLink>
        </div>
      </div>
      <div className="nav-bottom-content d-flex justify-content-between align-items-center">
        <div className="categories-container">
          <NavDropdown title="Category">
            <NavDropdown.Item>
              <NavLink className='nav-link text-dark' to={`/items/all`}>All</NavLink>
            </NavDropdown.Item>
            {categoriesList.map((link, key) => (
              <NavDropdown.Item className="nav-item" key={key}>
                <NavLink className='nav-link text-dark' to={`/items/${link.value}`}>{link.name}</NavLink>
              </NavDropdown.Item>
            ))}
          </NavDropdown>
        </div>
        <div className="links-container">
          <ul className="nav">
            <li className="nav-item">
              <NavLink className='nav-link' to='/'>Home</NavLink>
            </li>
            {categoriesList.map((link, key) => (
              <li className="nav-item" key={key}>
                <NavLink className='nav-link' activeClassName='active-link' to={`/items/${link.value}`}>{link.name}</NavLink>
              </li>
            ))}
          </ul>
        </div>
        {authUser.status ? authUserButtons : guestUserButtons}
      </div>
    </div>
  )
}

export function MobileNav() {
  return (
    <div className="bottom-navbar">
      <NavLink className="nav-link-wraper d-flex flex-column align-items-center" to='/'>
        <div className='icon'><BsHouse /></div>
        <span className='text-muted small'>Home</span>
      </NavLink>
      <NavLink className="nav-link-wraper d-flex flex-column align-items-center" to='/items/all'>
        <div className='icon'><BsCartDash /></div>
        <span className='text-muted small'>Shopping</span>
      </NavLink>
      <NavLink className="nav-link-wraper d-flex flex-column align-items-center" to='/upload'>
        <div className='icon'><FiPlusCircle /></div>
        <span className='text-muted small'>Upload</span>
      </NavLink>
      <NavLink className="nav-link-wraper d-flex flex-column align-items-center" to='/items/all'>
        <div className='icon'><BsSearch /></div>
        <span>Search</span>
      </NavLink>
      <NavLink className="nav-link-wraper d-flex flex-column align-items-center" to='/login'>
        <div className='icon'><BsBell /></div>
        <span className='text-muted'>Notific..</span>
      </NavLink>
    </div>
  )
}
