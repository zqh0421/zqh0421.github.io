import Card from '../../components/Card/Card'
import projectData from './projectData.json'
import './Projects.scss'
const Projects = () => {
  return (
    <div>
      <div className='cardList'>{
        projectData.map(item => <Card
          title={'title'}
          desc={'desc'}
        />)
      }</div>
    </div>
  )
}

export default Projects