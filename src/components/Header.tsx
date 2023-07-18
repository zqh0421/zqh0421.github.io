import { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [isSwapedOn, setIsSwapedOn] = useState(false);
  return (
    <div className="bg-base-100 sticky top-0 left-0 w-full h-fit border-b-base-200 border-b-solid border-b-[1px] z-50">
      <div className="overflow-hidden z-10 mx-auto my-0 flex justify-between w-[90vw] h-20 leading-[80px] text-xl tracking-wide font-sans">
        <div className="z-10"><Link to='/'>Qianhui Zhao</Link></div>
        <div className="z-10 h-full my-2 md:my-0">
          <label className="btn btn-ghost btn-circle swap swap-rotate md:hidden">
            <input type="checkbox" className="hidden" onChange={(e) => setIsSwapedOn(e.target.checked)} />
            <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
            <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>
          </label>
          <ul className={"hidden md:flex md:flex-row list-none [&>li]:tracking-wide [&>li]:pl-10 [&>li]:text-xl/[80px]"}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/vitae">CV</Link></li>
            <li><Link to="/misc">Misc</Link></li>
            {/* <li><Link to='/contact'>Contact</Link></li> */}
          </ul>
        </div>
      </div>
      <ul className={`${isSwapedOn ? "absolute right-0 dropdown-content z-50 menu p-2 shadow bg-base-100 rounded-box w-40" : "hidden"} md:hidden list-none [&>li]:tracking-wide`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/vitae">CV</Link></li>
        <li><Link to="/misc">Misc</Link></li>
      </ul>
    </div>
  )
}

export default Header