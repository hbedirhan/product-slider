import React from 'react'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Title from '../components/Title'
import ViewButton from '../components/ViewButton'

function Home() {
  return (
    <>
        <Navbar/>
        <Title/>
        <Slider/>
        <ViewButton/>
    </>
  )
}

export default Home