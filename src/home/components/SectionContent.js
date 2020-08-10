import React from 'react'
import Footer from '../../shared/Footer'

const SectionContent = (props) => {
  if (props.item.id === '004') {
    return <Footer item={props.item} />
  } else {
    return (
      <div className='home-section h-100'>
        <div className='container-fluid h-100'>
          <div className='content h-100'>
            <div className='inner-content d-flex flex-column h-100'>
              <div className='row my-auto'>
                <div className='col-md-6'>
                  <div className='img-container'>
                    <img src={props.item.imageUrl} alt={props.item.name} className='img-fluid' />
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='d-flex flex-column h-100 pl-lg-5'>
                    <div className='my-auto'>
                      <h1>{props.item.name}</h1>
                      <p>{props.item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-md-6 offset-md-6'>
                  <div className='info pl-lg-5'>
                    <ul className='list-unstyled d-flex flex-row'>
                      <li>
                        ROLE <span>{props.item.role}</span>
                      </li>
                      <li>
                        YEAR <span>{props.item.year}</span>
                      </li>
                      <li>
                        <a href={props.item.siteUrl} target='_blank' rel='noopener noreferrer' className='btn'>
                          View Site
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SectionContent
