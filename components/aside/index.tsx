import React from 'react'

type Props = {
    className?:string
    children: React.ReactNode
}

const Aside = ({className, children}: Props) => {
  return (
    <aside className={`${className} max-w-[15%] w-full bg-white`}>{children}</aside>
  )
}

export default Aside