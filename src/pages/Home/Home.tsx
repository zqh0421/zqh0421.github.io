import './Home.css'

const Home = () => {
  return (
    <div className="home">
      <h3>About Me</h3>
      <p>
        I am currently an undergraduate student expected to graduate in June 2024. I am majoring in Computer Science and Technology in Beijing University of Chemical Technology.
        My research interests include human-computer interaction (HCI), user interface development and AI application.
      </p>
      <h3>Education</h3>
      <dl>
        <dt>Computer Science and Technology</dt>
        <dd>Bachelor Beijing University of Chemical Technology - Beijing, China (2021-2024)</dd>
        <dt>Chemical Engineering and Technology</dt>
        <dd>Bachelor (transferred to CS in July, 2021) Beijing University of Chemical Technology - Beijing, China (2019-2021)</dd>
      </dl>
      <h3>Awards</h3>
      <ul>
        <li>China National Scholarship 2020 & 2022</li>
      </ul>
      <h3>Languages</h3>
      <ul>
        <li>Chinese - native</li>
        <li>English - fluent</li>
      </ul>
    </div>
  )
}

export default Home