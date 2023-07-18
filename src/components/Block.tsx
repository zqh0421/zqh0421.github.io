import { ReactNode } from "react";

const Block = (query: {children: ReactNode}) => {
  return (
    <div className="mt-5">
      {query.children}
    </div>
  )
}

export default Block;