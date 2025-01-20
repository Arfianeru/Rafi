import Title from './Title';
import React from 'react'

const HomeBanner = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
    <Title className="text-lg">
      Future Clothing Collection
    </Title>
    <p className="text-sm text-slate-600 font-medium text-center md:max-w-[480px]
      max-w-[300px] tracking-wide md:font-medium">
      Embrace the future of fashion with style, comfort, and innovation
    </p>
    </div>
  )
}

export default HomeBanner