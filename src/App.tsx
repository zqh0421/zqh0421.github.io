import { Routes, Route } from 'react-router-dom'
// import './assets/styles/App.scss'
import Header from './components/Header'
import Home from './pages/Home'
import CV from './pages/CV'
import Misc from './pages/Misc'
import Contact from './pages/Contact'
import MuseumX from './pages/MuseumX'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App min-h-screen bg-primary-color text-secondary-color">
      <Header />
      <div className='content-wrapper flex flex-col justify-between min-h-[calc(100vh-141px)] pt-15' >
        <Routes>
        <Route path='/' Component={Home} />
          <Route path='/misc' Component={Misc} />
          <Route path='contact' Component={Contact} />
          <Route path='vitae' Component={CV} />
          <Route path='/museumx' Component={MuseumX} />
        </Routes>
        <Footer />
      </div>
    </div>
  )
}

export default App
