import React from 'react'
import {cn} from '@/lib/utils'
interface Props {
  children:React.ReactNode;
  className?:string;
}

const Title = ({children, className}: Props) => {
  return (
    <h1 className={cn('text-xl md:text-3xl text-center font-semibold uppercase font-title tracking-wider', className)}>
      {children}
    </h1>
  )
}

export default Title;