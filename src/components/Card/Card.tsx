import './Card.scss'
import alt from './../../assets/64203b025157e371fc6f2d8f4760258.jpg'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
const Card = (query: { title: string, desc: string, to: string, preview: string }) => {
  let navigate = useNavigate()
  return (
    <div className='card-wrapper'>
      <img src={query.preview}></img>
      <div className='content'>
        <h3>{query.title}</h3>
        <p>{query.desc}</p>
        <button onClick={() => navigate(query.to)}>Learn More</button>
      </div>
    </div>
  )
}

export default Card;