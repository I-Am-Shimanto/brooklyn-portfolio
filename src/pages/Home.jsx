import React from 'react'
import Banner from '../components/home/Banner'
import About from './About'
import Process from './Process'
import Portfolio from './Portfolio'
import ProjectIdea from '../components/home/ProjectIdea'
import Blog from './Blog'
import Services from './Services'
import Clients from '../components/home/Clients'
import Testimonial from '../components/home/Testimonial'
import Contact from './Contact'

const Home = () => {
  return (
      <>
      <Banner />
      <About />
      <Process />
      <Portfolio />
      <ProjectIdea />
      <Blog />
      <Services />
      <Clients />
      <Testimonial />
      <Contact/>
      </>
  )
}

export default Home