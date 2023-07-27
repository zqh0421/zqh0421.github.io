import photo from '/src/assets/64203b025157e371fc6f2d8f4760258.jpg'
import Projects from './Projects/Projects'
import DownloadCV from '../components/DownloadCV'

const Home = () => {
  return (
    <div className="max-w-[80vw] mx-auto my-0">
      <div className='preface flex min-h-fit mt-8 lg:mt-0 h-screen items-center justify-center flex-col-reverse lg:flex-row'>
        <div className='h-min lg:text-left'>
          <h2 className="tracking-wide font-sans font-bold italic text-2xl lg:text-4xl/10">Hi, there! I'm Qianhui,</h2>
            <div className='[&>p]:my-3 [&>p]:text-sm lg:[&>p]:my-6 lg:[&>p]:text-2xl/[40px]'>
              <p>a front-end developer and HCI researcher currently based in Notre Dame, the US.</p>
              <p>I'm looking for full-time work opportunities during Sep 2023 - Jun 2024!</p>
              <DownloadCV className="text-sm lg:text-xl mb-[120px] lg:mb-0"/>
          </div>
        </div>
        <img className="w-[calc(max(30vw,280px))] p-0 mx-0 mb-8 lg:ml-5 lg:mb-0 shadow-lg shadow-neutral-400 rounded-br-[50%] rounded-tl-[50%]" src={photo} />
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