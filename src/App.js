import React from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Sidebar from './components/Sidebar.jsx'
import Submenu from './components/Submenu.jsx'
const App = () => {
  return (
    <>
      <Navbar/>
      <Sidebar/>
      <Hero/>
      <Submenu/>
    </>
  )
}

export default App
