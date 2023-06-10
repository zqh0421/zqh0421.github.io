import Card from '../../components/Card/Card'
import projectData from './projectData.json'
import './Projects.scss'
const Projects = () => {
  return (
    <div>
      <div className='cardList'>{
        projectData.map(item => <Card
          pic={'#'}
          title={'title'}
          desc={'desc'}
          time={'time'}
          goto={'goto'}
        />)
      }</div>
    </div>
  )
}

export default Projects