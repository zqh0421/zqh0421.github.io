import { Link } from 'react-router-dom'
import './Misc.scss'
const Misc = () => {
  return (
    <div className="misc">
      <h3>Recent Plans</h3>
      <div className='block'>
        <ul className='content listIndent'>
          <li>Work harder and harder for my summer research project</li>
          <li>Work on my portfolios</li>
          <li>Check the list of programs that I am eager to apply</li>
          <li><span>(Sorry, temporarily unavailable...😢)</span><a href="#">Demo</a> | <a href="#">Portfolio</a> | <a href='#'>Code</a></li>
        </ul>
      </div>
      <h3>All about Music&Art</h3>
      <div className='block'>
        <div className='multiCol'>
          <h4>📍Beijing, China</h4>
          <h4>Jun, 2023</h4>
        </div>
        <p>Participated in outdoor graduation performance! Best memories with my friends (most of whom graduated this year...)</p>
      </div>
      <div className='block'>
        <div className='multiCol'>
          <h4>📍Qingdao&Beijing, China</h4>
          <h4>2020 - 2023</h4>
        </div>
        <p>Audio & Video Editing</p>
      </div>
      <div className='block'>
        <div className='multiCol'>
          <h4>📍Beijing, China</h4>
          <h4>2019 - 2021</h4>
        </div>
        <p>Arranged music for choir programs.</p>
      </div>
      <div className='block'>
        <div className='multiCol'>
          <h4>📍Beijing, China</h4>
          <h4>2019 - 2021</h4>
        </div>
        <p>Played the piano.</p>
      </div>

      <h3>Travel</h3>
      <div className='block'>
        <div className='multiCol'>
          <h4>📍Seoul, Korea</h4>
          <h4>Jun, 2023</h4>
        </div>
        <p>My first international trip after the pandemic!🤩</p>
      </div>
    </div>
  )
}

export default Misc