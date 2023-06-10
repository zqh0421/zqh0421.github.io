import './Header.scss'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="header">
        <div className="left"><Link to='/'>Qianhui Zhao (赵千慧)</Link></div>
        <ul className="right">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><a href="#" target='_blank'>CV</a></li>
          <li><Link to="/misc">Misc</Link></li>
          <li><Link to='contact'>Contact</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Header