import React from 'react'
import Header from './Header'
import Hero from './Hero'
import Footer from './Footer'
import ExampleComponent from './ExampleComponent'
import Testimonial from './Testimonial'

const Home = () => {
  return (
    <div className=''>
      <Hero/>
      <ExampleComponent/>    
      <Testimonial/>
      <Footer/>
    </div>

  )
}

export default Home
