import { useNavigate } from 'react-router-dom';
const Card = (query: { title: string, desc: string, to: string, preview: string }) => {
  let navigate = useNavigate()
  return (
    <div className='md:flex mb-8 bg-base-200 max-w-7xl transition-all hover:bg-base-content hover:text-base-100 hover>img:opacity-70' onClick={() => query.to[0]==='/' ? navigate(query.to) : window.open(query.to)}>
      <img className="md:w-3/5" src={query.preview}></img>
      <div className="my-8 md:w-2/5 flex flex-col items-center justify-center">
        <h4 className="h4 text-center w-3/5">{query.title}</h4>
        <p className="text-center w-3/5 my-4">{query.desc}</p>
      </div>
    </div>
  )
}

export default Card;