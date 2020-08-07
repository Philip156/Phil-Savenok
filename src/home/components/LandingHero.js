import React from 'react'
import Navbar from '../../shared/Navbar'

const LandingHero = (props) => {
  return (
    <div className='landing h-100'>
      <div className='container h-100'>
        <div className='content h-100'>
          <div className='inner-content d-flex flex-column h-100'>
            <div className='row'>
              <div className='col-12'>
                <Navbar />
              </div>
            </div>
            <div className='row my-auto'>
              <div className='col-12'>
                <div className='my-auto'>
                  <h1>{props.item.name}</h1>
                  <p dangerouslySetInnerHTML={{ __html: props.item.description }}></p>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-12'>
                <h6 dangerouslySetInnerHTML={{ __html: props.item.updated }}></h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingHero
