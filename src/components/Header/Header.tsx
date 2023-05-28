import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="header">
        <div className="left">Qianhui Zhao</div>
        <ul className="right">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><a href="#" target='_blank'>CV</a></li>
          <li><Link to="/misc">Misc</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Header