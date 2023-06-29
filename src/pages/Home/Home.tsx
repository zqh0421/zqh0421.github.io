import { Link } from 'react-router-dom'
import './Home.scss'
import photo from '/src/assets/64203b025157e371fc6f2d8f4760258.jpg'
import Card from '../../components/Card/Card'
import Projects from '../Projects/Projects'
const Home = () => {
  return (
    <div className="home">
      <div className='preface'>
        <h2>Hi there! I'm Qianhui,</h2>
        <div className='sub-preface'>
          <div className='content'>
            <p>a front-end developer and HCI researcher currently based in Beijing, China.</p>
            <p><b>I'm looking for on-site work opportunities during Sep 2023 - Jun 2024! <Link to='Contact'>More...</Link></b></p>
            <p>(Updated on Jun 29 2023.)</p>
          </div>
          <img src={photo} />
        </div>
      </div>
      <div className='divider' />
      <div className='projects'>
        <h3>Projects</h3>
        <Projects />
      </div>
    </div>
  )
}

export default Home