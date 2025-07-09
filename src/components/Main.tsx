import ButtonLink from '../components/ButtonLink'
import { cn } from '../utils/cn';
import useMouseMove from '../hooks/useMouseMove'
import { useEffect } from 'react';

const Main = () => {
  const { pageX, pageY } = useMouseMove()
  
  useEffect(() => {
    const header = document.getElementsByTagName('header')[0]
    header.style.backgroundImage = `radial-gradient(600px at ${pageX}px ${pageY}px, rgba(29, 78, 216, 0.2), transparent 80%)`;
  }, [pageX, pageY])

  // 自定义平滑滚动函数
  const smoothScrollTo = (targetId: string, duration: number = 3000) => {
    const target = document.getElementById(targetId);
    if (!target) return;

    const targetPosition = target.offsetTop;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime: number | null = null;

    const animation = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeInOutCubic(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    // 缓动函数 - 使滚动更加平滑
    const easeInOutCubic = (t: number, b: number, c: number, d: number) => {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t * t + b;
      t -= 2;
      return c / 2 * (t * t * t + 2) + b;
    };

    requestAnimationFrame(animation);
  };

  // 自动滚动到hero部分
  useEffect(() => {
    const timer = setTimeout(() => {
      smoothScrollTo('hero', 3000); // 3秒的滚动时间
    }, 500); // 1秒后开始滚动

    return () => clearTimeout(timer);
  }, []);

  return (
    <header className={cn(
      "fixed z-[-1] top-0 left-0 pt-10 w-screen h-screen flex flex-col items-center justify-center",
      "inset-0 transition duration-300 bg-slate-900"
    )}>
    <h1 className="w-11/12 lg:w-4/5 leading-[1.25] text-5xl md:text-[4.5rem] lg:text-[7.5rem] font-bold text-center">
      Empathy,
    </h1>
    <h1 className="w-11/12 lg:w-4/5 leading-[1.25] text-5xl md:text-[4.5rem] lg:text-[7.5rem] font-bold text-center">
      Programming,
    </h1>
    <h1 className="w-11/12 leading-[1.25] text-5xl md:text-[4.5rem] lg:text-[7.5rem] font-bold text-center">
      Innovation
    </h1>
    <ButtonLink
      href="#hero"
      background="primary"
      size="large"
      className="mt-6 lg:mt-12"
      onClick={(event) => {
        event.preventDefault()
        smoothScrollTo('hero', 2000); // 点击按钮时使用2秒滚动时间
      }}
      isGhost
    >
      Learn More
    </ButtonLink>
  </header>
  )
}

export default Main