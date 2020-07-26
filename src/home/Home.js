import React from 'react'
import { SectionsContainer, Section } from 'react-fullpage'
import Navbar from '../shared/Navbar'
import Footer from '../shared/Footer'

const Home = () => {
  let options = {
    sectionClassName: 'section',
    anchors: ['', 'projects', 'contact'],
    scrollBar: false,
    navigation: true,
  }

  return (
    <SectionsContainer className='home' {...options}>
      <Section className='s1'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className='d-flex flex-column'>
                <Navbar />
                <div className='content my-auto'>
                  <h1>Philip Savenok</h1>
                  <h2>Front-End Developer</h2>
                  <h6>last update: July 2020</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Section className='s2'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className='d-flex flex-column'>
                <div className='content my-auto'>
                  <h1>Section 2</h1>
                  <h2>I design and develop experiences that make people's lives simple</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Section className='s3'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className='d-flex flex-column'>
                <div className='content my-auto'>
                  <h1>Section 3</h1>
                </div>
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </Section>
    </SectionsContainer>
  )
}

export default Home
