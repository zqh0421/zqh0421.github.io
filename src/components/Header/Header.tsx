import './Header.scss'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="filter"></div>
      <div className="header">
        <div className="left"><Link to='/'>Qianhui Zhao</Link></div>
        <ul className="right all">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/vitae">CV</Link></li>
          <li><Link to="/misc">Misc</Link></li>
          {/* <li><Link to='/contact'>Contact</Link></li> */}
        </ul>
        <label className="right collapsed">...</label>
        <input type="checkbox" id="isCollapsed"/>
        <ul className="collapsedList">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/vitae">CV</Link></li>
          <li><Link to="/misc">Misc</Link></li>
          {/* <li><Link to='contact'>Contact</Link></li> */}
        </ul>
      </div>
    </div>
  )
}

export default Header