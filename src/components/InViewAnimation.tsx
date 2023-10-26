import { useInView, motion } from "framer-motion"
import { useRef, useEffect, useState, type ReactNode } from 'react'
import { cn } from "../utils/cn"

const ListInViewAnimation = (props: { children: ReactNode, delay?: number, className?: string }) => {
  const ref = useRef(null)
  const isInView = useInView(ref)
  const [animate, setAnimate] = useState("visible")
  const [variants, setVariants] = useState({})

  useEffect(() => {
    console.log(isInView)
    if (isInView) {
      setAnimate("visible")
    } else {
      setAnimate("hidden")
    }
  }, [isInView])

  return (
    <div  className={cn("text-slate-900", props.className)}>
      <div ref={ref}></div>
      <div className="h-20"></div>
      <motion.div
        initial="hidden"
        animate={animate}
        transition={{ duration: 1, delay: props.delay }}
        variants={{ visible: {opacity: 1, x: 0 }, hidden: {opacity: 0, x: -100 } }}
        className={"w-full"}
      >
        {props.children}
      </motion.div>
    </div>
  );
}

const ItemInViewAnimation = (props: { children: ReactNode, delay?: number, className?: string }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div className={cn("text-slate-900", props.className)}>
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ duration: 1, delay: props.delay }}
        variants={{ visible: {opacity: 1, y: 0 }, hidden: {opacity: 0, y: 100 } }}
        className={"w-full"}
      >
        {props.children}
      </motion.div>
    </div>
  );
}

export { ListInViewAnimation, ItemInViewAnimation };