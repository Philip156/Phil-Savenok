import React from 'react'

const SectionContent = (props) => {
  return (
    <div className='container-fluid'>
      <div className='content'>
        <div className='inner-content d-flex flex-column'>
          <div className='my-auto'>
            <div className='row'>
              <div className='col-md-6'>
                <h1>{props.item.name}</h1>
                <h2>{props.item.description}</h2>
              </div>
              <div className='col-md-6'>
                <div className='img-container'>
                  <img src={props.item.imageUrl} alt={props.item.name} className='img-fluid' />
                </div>
              </div>
            </div>
            <div className='col-12'>
              <a href={props.item.siteUrl} target='_blank' rel='noopener noreferrer' className='btn'>
                View Site
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionContent
