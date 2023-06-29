import { Routes, Route } from 'react-router-dom'
import './assets/styles/App.scss'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import CV from './pages/CV/CV'
import Projects from './pages/Projects/Projects'
import Misc from './pages/Misc/Misc'
import Contact from './pages/Contact/Contact'
import MuseumX from './pages/MuseumX/MuseumX'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <div className='content-wrapper' >
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
