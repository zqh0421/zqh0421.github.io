import { useInView, motion } from "framer-motion"
import { useRef, useEffect, ReactNode } from 'react'
import { cn } from "../../utils/cn"

const ListInViewAnimation = (props: { children: ReactNode }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    console.log("Element is in view: ", isInView)
  }, [isInView])

  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }

  return (
    <div ref={ref} className="text-slate-900">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
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

  useEffect(() => {
    console.log("Element is in view: ", isInView)
  }, [isInView])

  return (
    <div ref={ref} className={cn("text-slate-900", props.className)}>
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