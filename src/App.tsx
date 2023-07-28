import { Routes, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Header from './components/Header'
import Home from './pages/Home'
import CV from './pages/CV'
import Misc from './pages/Misc'
import Contact from './pages/Contact'
import MuseumX from './pages/MuseumX'
import Footer from './components/Footer'

function App() {
  const personSchema = {
    "@context": "http://schema.org",
    "@type": "Person",
    "name": "Qianhui",
    "jobTitle": "Front-end Developer and HCI Researcher",
    "affiliation": "Beijing University of Chemical Technology",
    "url": "https://zqh0421.github.io/",
    "sameAs": "https://github.com/zqh0421"
  };

  return (
    <div className="App min-h-screen bg-base-100 text-base-content">
      <Helmet>
        <title>Greeting from Qianhui👋</title>
        <meta name="description" content="Hi, there! I'm Qianhui, a front-end developer and HCI researcher currently based in Notre Dame, the US." />
        <meta name="keywords" content="Qianhui, Qianhui Zhao, profile, portfolio" />
        <link rel="canonical" href="https://zqh0421.github.io/" />
        <script type="application/ld+json">
            {JSON.stringify(personSchema)}
        </script>
      </Helmet>
      <Header />
      <div className='content-wrapper flex flex-col justify-between min-h-[calc(100vh-80px)] pt-15' >
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
