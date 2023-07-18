import { ReactNode } from "react"

const MultiCol = (query: {children: ReactNode}) => {
  return (
    <div className="flex flex-row justify-between">
      {query.children}
    </div>
  )
}

export default MultiCol;