import React from 'react'
import {FaPhoneAlt, FaMapMarkedAlt, FaWhatsapp, FaEnvelope, FaFacebook, FaTwitter, FaInstagram} from 'react-icons/fa'


export default function Footer() {
  return (
    <footer className='footer-wraper'>
        <div className="footer-top text-center">
            <h3 className='mb-3 text-white'>Our mission</h3>
            <p>Test My supervisor authorized me to finish the rapid distribution of hygiene kits to over 3000 refugees within two days because there was influx of refugees in the camps.</p>
        </div>
        <div className="footer-botttom d-flex justify-content-between">
            <div className="sebcribe-container">
                <h5>Subcribe</h5>
                <div className="d-flex align-items-center mt-2">
                    <input type="text" placeholder='Subcribe...' />
                    <button>Subcribe</button>
                </div>
                <p>Test My supervisor authorized me to finish the rapid distribution of hygiene kits to over 300</p>
            </div>
            <div className="footer-content">
                <h5 className='social-media-title'>Social media</h5>
                <div className="social-media">
                    <div className="footer-list d-flex align-items-center">
                        <FaFacebook className='footer-list-icon' />
                        <span className='lg-screen'>facebook.com/community</span>
                    </div>
                    <div className="footer-list d-flex align-items-center">
                        <FaTwitter className='footer-list-icon' />
                        <span className='lg-screen'>facebook.com/community</span>
                    </div>
                    <div className="footer-list d-flex align-items-center">
                        <FaInstagram className='footer-list-icon' />
                        <span className='lg-screen'>facebook.com/community</span>
                    </div>
                    <div className="footer-list d-flex align-items-center">
                        <FaInstagram className='footer-list-icon' />
                        <span className='lg-screen'>facebook.com/community</span>
                    </div>
                </div>
            </div>
            <div className="footer-content">
                <h5>Contacts & Address</h5>
                <div className="footer-list d-flex align-items-center">
                    <FaMapMarkedAlt className='footer-list-icon contact' />
                    <span>Juba, airport road</span>
                </div>
                <div className="footer-list d-flex align-items-center">
                    <FaPhoneAlt className='footer-list-icon contact' />
                    <span>+211920079070</span>
                </div>
                <div className="footer-list d-flex align-items-center">
                    <FaWhatsapp className='footer-list-icon contact' />
                    <span>+211920079070</span>
                </div>
                <div className="footer-list d-flex align-items-center">
                    <FaEnvelope className='footer-list-icon contact' />
                    <span>info@community-store.com</span>
                </div>
            </div>
        </div>
        <div className="footer-policy mt-4 d-flex align-items-center">
            <span>Plocicy</span>
            <span>|</span>
            <span>Privacy</span>
            <span>|</span>
            <span>Report</span>
            <span>|</span>
            <span>Report</span>
            <span>|</span>
            <span>Report</span>
        </div>
        <div className="text-center mt-3">
            <span>&copy; Copy right reserved for {new Date().getFullYear()}</span>
        </div>
        {/* <div className="footer-top d-flex align-items-center">
           
            <div className="media-container d-flex align-items-center">
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
        </div> */}
        {/* <div className="footer-bottom">
            <div className="sebcribe-container d-flex align-items-center">
                <input type="text" placeholder='Subcribe...' />
                <button>Subcribe</button>
            </div>
           
        </div> */}
    </footer>
  )
}
