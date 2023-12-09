import React from 'react'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Title from '../components/Title'
import ViewButton from '../components/ViewButton'
import ThemeToggle from '../components/ThemeToggle'
import Popup from '../components/Popup'

function Home() {
  return (
    <>  
        <ThemeToggle/>
        <Navbar/>
        <Title/>
        <Popup/>
        <Slider/>
        <ViewButton/>
    </>
  )
}

export default Home