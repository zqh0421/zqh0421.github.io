import { Link } from 'react-router-dom'
import Block from '../components/Block'
import MultiCol from '../components/MultiCol'
const Misc = () => {
  return (
    <div className="misc max-w-[80vw] mx-auto my-20 [&>h3]:my-10 [&>*]:text-left [&>p]:my-8">
      <p>Hello, I'm Qianhui</p>
      <p>Fun facts:</p>
      <ol>
        <li>
          I've been to China, Japan, Korea, U.A.E and USA before. Aiming to expore more places! 
        </li>
        <li>
          Out of the 16 personality types, mine is an ENFP-T with boundless curiosity!
        </li>
        <li>I have a 5-year-old cat called 脸脸.</li>
        <li>I'm a big fan of music and art. And I have engaged in audio & video editing and creation work in my uni.</li>
      </ol>
    </div>
  )
}

export default Misc