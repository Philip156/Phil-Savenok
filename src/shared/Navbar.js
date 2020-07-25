import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg'>
      <div className='container'>
        <Link to='/'>
          <span className='navbar-brand pl-3'>
            <img src='images/CB-Logo.png' class='img-fluid' alt='PS' />
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
          <div className='navbar-nav ml-auto order-2'>1</div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
