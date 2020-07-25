import React from 'react'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className='mt-auto'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <p className='m-0'>© {year} Phil Savenok. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
