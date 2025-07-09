import { useInView, motion } from "framer-motion"
import { useRef, useEffect, useState, type ReactNode } from 'react'
import { cn } from "../utils/cn"

const ListInViewAnimation = (props: { children: ReactNode, delay?: number, className?: string }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [animate, setAnimate] = useState("hidden")

  useEffect(() => {
    if (isInView) {
      setAnimate("visible")
    }
  }, [isInView])

  return (
    <div  className={cn("text-slate-900", props.className)}>
      <div ref={ref}></div>
      <div className="h-20"></div>
      <motion.div
        initial="hidden"
        animate={animate}
        transition={{ duration: 0.8, delay: props.delay, ease: "easeOut" }}
        variants={{ visible: {opacity: 1, x: 0 }, hidden: {opacity: 0, x: -50 } }}
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
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration: 0.8, delay: props.delay, ease: "easeOut" }}
        variants={{ visible: {opacity: 1, y: 0 }, hidden: {opacity: 0, y: 30 } }}
        className={"w-full"}
      >
        {props.children}
      </motion.div>
    </div>
  );
}

export { ListInViewAnimation, ItemInViewAnimation };