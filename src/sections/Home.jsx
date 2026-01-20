"use client";
import React from 'react'
import ImageCard from '../components/ImageCard'
import Intro from '../components/Intro'

const Home = () => {
  return (
    <section id='home' className='h-full'>

      <div className=''>
        <ImageCard />
        <Intro />

      </div>
    </section>
  )
}

export default Home