import Image, { StaticImageData } from 'next/image'
import React from 'react'

const membershipItem = (
  {tittle, img, benefits, price}: 
  {tittle?: string, img?: any, benefits?: Array<string>, price?: number}
  ) => {
  return (
    <div className='w-[315px] h-[488px] rounded-[30px] bg-[#f2f2f2] shadow-[3px_3px_6px_black] overflow-hidden relative text-[#0d0d0d]'>
      <div className='h-[140px] overflow-hidden'>
        <h3 className='text-white text-[32px] uppercase font-bold text-center z-10 absolute mx-auto w-full leading-[140px]'>{tittle}</h3>
        <div className='w-full'><Image src={img} alt=''/></div>
      </div>
      <div>
        <ul className='h-[210px] list-disc flex flex-col space-y-[5px] mt-[18px] pl-[52px] font-[600] text-[18px]'>
          {benefits?.map((e) => (<li className='max-w-[200px]'>{e}</li>))}
        </ul>
      </div>
      <p className='text-[16px] text-center'><span className='font-[700] text-[20px]'>{price} USD</span> per month</p>
      <div className='text-center'>
        <button className='uppercase rounded-[37.4px] bg-[#CBFF5B] p-[10px_35px] font-[600] text-[12.48px] mt-[22px] mb-[27px]'>Buy now</button>
      </div>
    </div>
  )
}

export default membershipItem