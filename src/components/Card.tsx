import { useNavigate } from 'react-router-dom';
const Card = (query: { title: string, desc: string, to: string, preview: string }) => {
  let navigate = useNavigate()
  return (
    <div className='card-wrapper flex mb-8 bg-[#f2f2f2] max-w-7xl transition-all hover:bg-zinc-900 hover:text-white hover>img:opacity-70' onClick={() => query.to[0]==='/' ? navigate(query.to) : window.open(query.to)}>
      <img className="w-3/5" src={query.preview}></img>
      <div className="w-2/5 flex flex-col items-center justify-center">
        <h4 className="h4 text-center w-3/5">{query.title}</h4>
        <p className="text-center w-3/5 my-4">{query.desc}</p>
      </div>
    </div>
  )
}

export default Card;