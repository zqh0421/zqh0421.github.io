import ButtonLink from '../ui/ButtonLink'
import { cn } from '../../utils/cn';
import useMouseMove from '../../hooks/useMouseMove'
import { useEffect } from 'react';

const Main = () => {
  const { screenX, screenY } = useMouseMove()
  useEffect(() => {
    const header = document.getElementsByTagName('header')[0]
    header.style.backgroundImage = `radial-gradient(600px at ${screenX}px ${screenY}px, rgba(29, 78, 216, 0.2), transparent 80%)`;
  }, [screenX, screenY])
  return (
    <header className={cn(
      "fixed z-[-1] top-0 left-0 pt-10 w-screen h-screen flex flex-col items-center justify-center",
      "inset-0 transition duration-300 bg-slate-900"
    )}>
    <h1 className="w-11/12 lg:w-4/5 leading-[1.25] text-5xl md:text-[4.5rem] lg:text-[7.5rem] font-bold text-center">
      Empathy in Pixels
    </h1>
    <h1 className="w-11/12 leading-[1.25] text-5xl md:text-[4.5rem] lg:text-[7.5rem] font-bold text-center">
      Innovation in Coding
    </h1>
    <ButtonLink
      href="#hero"
      background="primary"
      size="large"
      className="mt-6 lg:mt-12"
      onClick={(event) => {
        event.preventDefault()
        const target = document.getElementById('hero');
        target && target.scrollIntoView({ behavior: 'smooth' });
      }}
      isGhost
    >
      Learn More
    </ButtonLink>
  </header>
  )
}

export default Main