import React from 'react'
import { SectionsContainer, Section } from 'react-fullpage'
import LandingHero from './components/LandingHero'
import SectionContent from './components/SectionContent'

const Home = () => {
  const PORTFOLIOS = [
    {
      id: 'landingPage',
      name: 'Philip Savenok',
      title: 'Front-End Developer',
      description: "I design and develop experiences that make people's lives simple",
      updated: 'last update: July 2020',
    },
    {
      id: '001',
      name: 'Sunwater Capital',
      description:
        'Sunwater is a firm for entrepreneurs founded by entrepreneurs. “Sunwater” signifies the two resources critical for life to grow and flourish. We emphasized as they show their investments in real estate, proptech, healthcare, and information.',
      siteUrl: 'https://sunwatercapital.com/',
      imageUrl: require('../images/portfolio/SunwaterCapital.png'),
    },
    {
      id: '002',
      name: 'Amerra Capital',
      description:
        'Amerra Capital is a Debt and Equity firm deploying capital to upstream and midstream agribusinesses. The showcase is a database-centric animating graph showing their investments.',
      siteUrl: 'https://www.amerracapital.com/',
      imageUrl: require('../images/portfolio/AmerraCapital.png'),
    },
    {
      id: '003',
      name: 'Altus Capital Partners',
      description:
        'Altus Capital Partners is a Connecticut-based middle-market firm focused on manufacturing. We used a carousel technique to show their different investments along with an interesting case study section.',
      siteUrl: 'https://www.altuscapitalpartners.com/',
      imageUrl: require('../images/portfolio/AltusCapital.png'),
    },
  ]

  let options = {
    sectionClassName: 'section',
    anchors: ['', 'Sunwater', 'Amerra', 'Altus'],
  }

  return (
    <SectionsContainer className='home' {...options}>
      {PORTFOLIOS.map((item) => (
        <Section key={item.id}>
          {item.id === 'landingPage' ? <LandingHero item={item} /> : <SectionContent item={item} />}
        </Section>
      ))}
    </SectionsContainer>
  )
}

export default Home
