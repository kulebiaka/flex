import React from 'react'
import Portrait, { PortraitType } from './portrait'
import { StaticImageData } from 'next/image'



const PortraitsCollection = (
  { portraits } : { portraits: Array<PortraitType>}
  ) => {
  return (<div className='max-w-[960px] mx-[auto] '>
    <div className='flex flex-wrap gap-[40px_147px]'>
    {portraits.map((p) => (<Portrait key={p.fullname} position={p.position} fullname={p.fullname} img={p.img}/>))}
    </div>
  </div>)
}

export default PortraitsCollection