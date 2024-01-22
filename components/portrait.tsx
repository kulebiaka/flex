import Image, { StaticImageData } from 'next/image'
import React from 'react'

const Portrait = (
  {img, fullname, position}:
  {img: StaticImageData, fullname: string, position: string}
  ) => (<div className='text-center w-[222px]' key={fullname}>
    <div className=''><Image src={img} alt=""/></div>
    <p className='text-[18px] uppercase mt-[5px] leading-[20px]'>{position}</p>
    <h4 className='text-[22px] font-bold uppercase'>{fullname}</h4>
  </div>)


export default Portrait