import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="header-wrapper bg-base-100 sticky top-0 left-0 w-full h-fit border-b-base-200 border-b-solid border-b-[1px] overflow-hidden z-50">
      <div className="filter"></div>
      <div className="header z-10 mx-auto my-0 flex justify-between w-[90vw] h-24 leading-[100px] text-2xl tracking-wide font-sans">
        <div className="left z-10"><Link to='/'>Qianhui Zhao</Link></div>
        <ul className="right z-10 list-none flex flex-row [&>li]:tracking-wide [&>li]:pl-10 [&>li]:text-2xl/[96px] ">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/vitae">CV</Link></li>
          <li><Link to="/misc">Misc</Link></li>
          {/* <li><Link to='/contact'>Contact</Link></li> */}
        </ul>
      </div>
    </div>
  )
}

export default Header