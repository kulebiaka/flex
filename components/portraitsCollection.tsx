import React from 'react'
import Portrait from './portrait'
import { StaticImageData } from 'next/image'

type portraitType = {
  img : StaticImageData,
  position: string,
  fullname: string
}

const PortraitsCollection = (
  { portraits } : { portraits: Array<portraitType>}
  ) => {
  return (<div className='max-w-[960px] mx-[auto] '>
    <div className='flex flex-wrap gap-[40px_147px]'>
    {portraits.map((p) => (<Portrait position={p.position} fullname={p.fullname} img={p.img}/>))}
    </div>
  </div>)
}

export default PortraitsCollection