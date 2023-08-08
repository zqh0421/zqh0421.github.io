import { useNavigate } from 'react-router-dom';
const Card = (query: { title: string, desc: string, to: string, preview: string }) => {
  let navigate = useNavigate()
  return (
    <div className='min-w-full md:flex mb-8 bg-base-200 max-w-7xl hover:bg-base-content hover:text-base-100' onClick={() => query.to[0]==='/' ? navigate(query.to) : window.open(query.to)}>
      <img className="md:w-3/5" src={query.preview} alt={`Overview of ${query.title}`}></img>
      <div className="my-8 md:w-2/5 flex flex-col items-center justify-center break-words">
        <h4 className="h4 text-center w-3/5">{query.title}</h4>
        <p className="text-center w-3/5 my-4">{query.desc}</p>
      </div>
    </div>
  )
}

export default Card;