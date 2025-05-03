import React from 'react'
import Banner from '../components/home/Banner'
import About from './About'
import Process from './Process'
import Portfolio from './Portfolio'
import ProjectIdea from '../components/home/ProjectIdea'
import Blog from './Blog'

const Home = () => {
  return (
      <>
      <Banner />
      <About />
      <Process />
      <Portfolio />
      <ProjectIdea />
      <Blog/>
      </>
  )
}

export default Home