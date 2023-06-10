import './Card.scss'
import alt from './../../assets/64203b025157e371fc6f2d8f4760258.jpg'

const Card = ({ pic, title, desc, classification, goto }) => {
  return (
    <div className='card-wrapper'>
      <img src={alt}></img>
      <div className='content'>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  )
}

export default Card;