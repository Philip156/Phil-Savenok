import React from 'react'

const Footer = (props) => {
  const year = new Date().getFullYear()

  return (
    <div className='footer d-flex flex-column h-100'>
      <div className='my-auto'>
        <div className='container'>
          <h1>Want to find out more?</h1>
          <p>
            <a href='mailto:philsavenok@gmail.com'>Shoot me an email</a>
          </p>
        </div>
      </div>
      <footer>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <p className='m-0'>
                © {year} {props.item.description}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
