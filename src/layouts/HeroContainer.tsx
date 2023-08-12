import { useState, useEffect, ReactNode } from 'react'
import { cn } from '../utils/cn';

const HeroContainer = (props: { children: ReactNode }) => {
  const [position, setPosition] = useState('fixed')

  useEffect(() => {
    setTimeout(() => {
      setPosition('absolute')
    }, 1000)
  }, []);

  return (
    <div id="hero" className={cn('bg-neutral-50 min-h-min h-min top-full left-0 w-screen flex flex-col justify-center scroll-smooth', position)}>
      {props.children}
    </div>
  )
}

export default HeroContainer