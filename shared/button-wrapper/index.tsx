import React from 'react'

type Props = {
    children:React.ReactNode
    className?:string
}

const ButtonWrapper = ({children,className}: Props) => {
  return (
    <div className={`p-1 border border-stone-400 rounded-xl ${className}`}>{children}</div>
  )
}

export default ButtonWrapper