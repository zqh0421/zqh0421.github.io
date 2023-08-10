import type React from "react"

const Button = (props: { title?: React.ReactNode, onClick?: Function}) => {
  return (
    <button onClick={(e) => props && props.onClick && props.onClick(e)}>{props.title}</button>
  )
}

export default Button