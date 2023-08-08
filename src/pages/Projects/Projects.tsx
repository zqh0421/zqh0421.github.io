import Card from '../../components/Card'
import projectData from './projectData.json'
const Projects = () => {
  return (
    <div className="flex flex-wrap mx-auto my-0">{
      projectData.map(item => item.isShown ? <Card
        key={item.id}
        title={item.title}
        desc={item.desc}
        to={item.to}
        preview={item.preview}
      /> : null)
    }</div>
  )
}

export default Projects