import React from 'react'
import Navbar from '../../shared/Navbar'

const LandingHero = (props) => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12'>
          <div className='d-flex flex-column'>
            <Navbar />
            <div className='my-auto'>
              <h1>{props.item.name}</h1>
              <h2>{props.item.title}</h2>
              <h2>{props.item.description}</h2>
              <h6>{props.item.updated}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingHero
