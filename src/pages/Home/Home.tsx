import { Link } from 'react-router-dom'
import './Home.scss'
import photo from '/src/assets/64203b025157e371fc6f2d8f4760258.jpg'
import Card from '../../components/Card/Card'

const Home = () => {
  return (
    <div className="home">
      <div className='preface'>
        <div className='content'>
          <h2>Hi there! I'm Qianhui,</h2>
          <p>a front-end developer and HCI researcher currently based in Beijing, China.</p>
          <p><b>I'm looking for on-site work opportunities during Sep 2023 - Jun 2024! <Link to='Contact'>More...</Link></b></p>
          <p>(Updated on Jun 10 2023.)</p>
        </div>
        <img src={photo} />
      </div>
      <h3>Education</h3>
      <div className='block'>
        <div className='multiCol'>
          <h4>Beijing University of Chemical Technology</h4>
          <h4>Beijing, China</h4>
        </div>
        <div className='multiCol'>
          <h5>Computer Science and Technology (B.E.)</h5>
          <h5>Expected 2024</h5>
        </div>
        <ul className='content'>
          <li>GPA: 3.96/4.33 (AVG: 92.84/100, top 3%)</li>
          <li>Main Courses: Data Structures, Algorithms, Objective Programming, Operative Systems, Database Principles, Computer Networks, Computer Vision, Compiler Principles</li>
          <li><b>Note: Trasferred from Chemical Engineering and Technology in July 2021.</b></li>
        </ul>
      </div>
      <div className='block'>
        <div className='multiCol'>
          <h4>XuetangX: NLP Training Camp</h4>
          <h5>Dec 2021 - Oct 2022</h5>
        </div>
        <ul className='content'>
          <li>Main Courses: Machine Learning, Deep Learning, NLP. Algorithms</li>
        </ul>
      </div>
      <h3>Research Experience</h3>
      <div className='block'>
        <div className='multiCol'>
          <h4>University of Notre Dame</h4>
          <h4>Indiana, USA</h4>
        </div>
        <div className='multiCol'>
          <h5>On-Site Research Assistant</h5>
          <h5>Jul 2023 - Aug 2023 (Expected)</h5>
        </div>
        <h6><b>Machine Learning Systems for Design Assistance</b></h6>
        <ul className='content listIndent'>
          <li>This project is expected to conduct ML model utilization and improvement, protyping and user studies.</li>
        </ul>
      </div>
      <div className='block'>
        <div className='multiCol'>
          <h4>City University of Hong Kong</h4>
          <h4>Hong Kong, China</h4>
        </div>
        <div className='multiCol'>
          <h5>Romote Research Assistant</h5>
          <h5>Feb 2023 - Mar 2023</h5>
        </div>
        <h6><b>The Next Generation of Dictation Text Composition Interface</b></h6>
        <ul className='content listIndent'>
          <li>A web application that displays transcripts and corresponding summaries utilizing GPT-3.5/4 and Google Speech-to-Text APIs.</li>
          <li><a target='_blank' href="#">Demo</a> | <a target='_blank' href="#">Portfolio</a> | <a target='_blank' href='#'>Code</a></li>
        </ul>
      </div>
      <div className='block'>
        <div className='multiCol'>
          <h4>North Carolina State University</h4>
          <h4>North Carolina, USA</h4>
        </div>
        <div className='multiCol'>
          <h5>Romote Research Assistant</h5>
          <h5>Jan 2023 - Feb 2023</h5>
        </div>
        <h6><b>Applying ChatGPT/OpenAI to Suggest Code Performance Optimization</b></h6>
        <ul className='content listIndent'>
          <li>A web application that helps users optimize their code performance by interacting with GPT-3.5/4.</li>
          <li><a target='_blank' href="http://zqh0421.github.io/codegpt">Demo</a> | <a target='_blank' href="http://zqh0421.github.io/codegpt">Poster</a> | <a target='_blank' href='https://github.com/zqh0421/codegpt'>Code</a></li>
        </ul>
      </div>
      <h3>Industrial Experience</h3>
      <div className='block'>
        <div className='multiCol'>
          <h4>Bestugo Data Intelligence Co., Ltd.</h4>
          <h4>Qingdao, China</h4>
        </div>
        <div className='multiCol'>
          <h5>Frontend Developer</h5>
          <h5>Dec 2022 - Mar 2023</h5>
        </div>
      </div>
      <h3>Projects</h3>
      <p>Click <Link to='projects'>here</Link> to see my projects.</p>
      <h3>Honors & Awards</h3>
      <ul>
        <li className='multiCol'>
          <h6>China National Scholarship</h6>
          <h6>2020, 2022</h6>
        </li>
        <li className='multiCol'>
          <h6>Dean's List Award</h6>
          <h6>2019, 2020, 2022</h6>
        </li>
        <li className='multiCol'>
          <h6>1st Class of the People's Scholarship</h6>
          <h6>2022</h6>
        </li>
        <li className='multiCol'>
          <h6>1st Prize in Lanqiao Cup C/C++ Programming Competition (Beijing)</h6>
          <h6>2022</h6>
        </li>
        <li className='multiCol'>
          <h6>1st Class of the People's Scholarship</h6>
          <h6>2022</h6>
        </li>
        <li className='multiCol'>
          <h6>1st Prize in National English Compotition for College Students</h6>
          <h6>2021</h6>
        </li>
        <li className='multiCol'>
          <h6>Second Prize in China Mathematics Contest</h6>
          <h6>2020</h6>
        </li>
      </ul>
      <h3>Extracurricular Activities</h3>
      <div className='block'>
        <div className='multiCol'>
          <h4>Students Peer Center of BUCT</h4>
          <h4>Beijing, China</h4>
        </div>
        <div className='multiCol'>
          <h5>Peer Tutor</h5>
          <h5>Oct 2021 - Present</h5>
        </div>
        <ul className='content'>
        <li>Provided one-on-one or group tutoring after class for students who encounter difficultie in programming, learning English and other compulsory courses.</li>
        </ul>
      </div>
      <div className='block'>
        <div className='multiCol'>
          <h4>Student Union of Chemical Engineering College</h4>
          <h4>Beijing, China</h4>
        </div>
        <div className='multiCol'>
          <h5>Head of Arts and Sport Department</h5>
          <h5>Oct 2020 - Oct 2021</h5>
        </div>
        <ul className='content'>
          <li></li>
        </ul>
      </div>
      <div className='block'>
        <div className='multiCol'>
          <h4>Student Union of Chemical Engineering College</h4>
          <h4>Beijing, China</h4>
        </div>
        <div className='multiCol'>
          <h5>Member of Arts Department</h5>
          <h5>Oct 2019 - Oct 2020</h5>
        </div>
        <ul className='content'>
          <li></li>
        </ul>
      </div>
      <div className='block'>
        <div className='multiCol'>
          <h4>STEAM Center of Chemical Engineering College</h4>
          <h4>Beijing, China</h4>
        </div>
        <div className='multiCol'>
          <h5>Peer Tutor</h5>
          <h5>Oct 2019 - Oct 2021</h5>
        </div>
        <ul className='content'>
          <li>Provided one-on-one or group tutoring after class for students who encounter difficultie in learning Mathematics, English and Chemstry.</li>
        </ul>
      </div>
      <p><h4>More info: <Link to='misc'>Misc</Link></h4></p>
      <h3>Skills</h3>
      <ul>
        <li>Programming: C/C++, Python, Java, Aliyun, JavaScript, TypeScript, HTML, CSS, React, React Native, Node, Express</li>
        <li>Tools: Android Studio, Figma, Jetbrain Toolbox</li>
        <li>Language:
          <ul className='listIndent'>
            <li>Mandarin: Native</li>
            <li>English: Fluent</li>
            <li>Japanese & Korean: Elementary</li>
            <li>Standardized Score: TOEFL 109 (Best Score until Apr 2023), GRE V156+Q170+AW4.0</li>
          </ul>
        </li>
      </ul>
      <h3>Research Interests</h3>
      <p>Human-Computer Interaction, Front-End Development, Intelligent User Interface, User Experience, AI Application</p>
    </div>
  )
}

export default Home