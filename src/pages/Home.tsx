import photo from '/src/assets/64203b025157e371fc6f2d8f4760258.jpg'
import Projects from './Projects/Projects'
import DownloadCV from '../components/DownloadCV'

const Home = () => {
  return (
    <div className="max-w-[80vw] mx-auto my-0">
      <div className='preface flex min-h-fit h-[calc(100vh-96px)] items-center justify-center flex-col-reverse lg:flex-row'>
        <div className='h-min lg:text-left'>
          <h2 className="h2">Hi, there! I'm Qianhui,</h2>
            <div className='[&>p]:my-4 [&>p]:text-2xl [&>p]:leading-8'>
              <p>a front-end developer and HCI researcher currently based in <span className='text-2xl text-[#143865]'>Notre Dame, the US.</span></p>
              <p>I'm looking for full-time work opportunities during Sep 2023 - Jun 2024!</p>
              <DownloadCV />
          </div>
        </div>
        <img className="self-center w-[calc(max(30vw,280px))] p-0 shadow-lg shadow-neutral-400 rounded-br-[50%] rounded-tl-[50%] my-10 mx-0 lg:ml-5 " src={photo} />
      </div>
      <div className='mx-auto w-[80vw] h-px bg-base-200' />
      <div className='text-left'>
        <h3 className='h3 mx-0 my-12'>Projects</h3>
        <Projects />
      </div>
    </div>
  )
}

export default Home