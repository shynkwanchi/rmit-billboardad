import React from 'react'
import '../Footer/style.css'

function Footer() {
  return (
    <div className='footer-container'>
      <nav className='nav-socialmedia'>
        <a href=""><i class="fa-brands fa-facebook"></i></a>
        <a href=""><i class="fa-brands fa-instagram"></i></a>
        <a href=""><i class="fa-brands fa-youtube"></i></a>
        <a href=""><i class="fa-brands fa-github"></i></a>
      </nav>
      <nav className='nav-link'>
        <a href="">About us</a>
        <a href="">FAQs</a>
        <a href="">Contact us</a>
        <a href="">Term</a>
        <a href="">Privacy Policy</a>
      </nav>
      <h6 style={{margin:"10px 10px 0px 10px"}}>RMIT - MERN Noob &copy; 2022. All right reserved.</h6>
    </div>
  )
}

export default Footer