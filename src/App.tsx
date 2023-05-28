import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import Projects from './pages/Projects/Projects'
import Misc from './pages/Misc/Misc'
import Footer from './components/Footer/Footer'
function App() {
  return (
    <div className="App">
      <Header />
      <div className='content-wrapper' >
        <Routes>
        <Route path='/' Component={Home} />
          <Route path='/projects' Component={Projects} />
          <Route path='/misc' Component={Misc} />
        </Routes>
        <Footer />
      </div>
    </div>
  )
}

export default App
