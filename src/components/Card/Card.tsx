import './Card.scss'
import alt from './../../assets/64203b025157e371fc6f2d8f4760258.jpg'

const Card = (query: { title: string, desc: string }) => {
  return (
    <div className='card-wrapper'>
      <img src={alt}></img>
      <div className='content'>
        <h3>{query.title}</h3>
        <p>{query.desc}</p>
      </div>
    </div>
  )
}

export default Card;