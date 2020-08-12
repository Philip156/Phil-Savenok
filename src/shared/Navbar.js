import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar navbar-fixed navbar-expand-lg'>
      <Link to='/Portfolio'>
        <span className='navbar-brand trans'>
          <h3>PS</h3>
        </span>
      </Link>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#myNavbar'
        aria-controls='myNavbar'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <i className='fas fa-bars'></i>
      </button>
      <div className='collapse navbar-collapse flex-column' id='myNavbar'>
        <div className='navbar-nav ml-auto order-2'>
          <a href='#Sunwater' className='nav-link nav-item'>
            Projects
          </a>
          <a href='#Contact' className='nav-link nav-item'>
            Contact
          </a>
          <Link to='/' className='nav-link nav-item'>
            Log In
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
