import Card from '../../components/Card/Card'
import projectData from './projectData.json'
import './Projects.scss'
const Projects = () => {
  return (
    <div>
      <div className='cardList'>{
        projectData.map(item => <Card
          title={item.title}
          desc={item.desc}
          to={item.to}
          preview={item.preview}
        />)
      }</div>
    </div>
  )
}

export default Projects