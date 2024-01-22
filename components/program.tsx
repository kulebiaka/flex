import React from 'react'

const Program = (
  {img, focusAreas, sessions, tittle}:
  {img: string, focusAreas: string, sessions: number, tittle: string}
) => {
  return (
    <div className={`w-[314.04px] h-[331.07px] rounded-[40px] text-white p-[40px_30px] shadow-[inset_10px_0px_190px_black]`} style={{backgroundImage: img}}>
      <h3 className='text-[38px] font-bold uppercase leading-[0.967] h-[74px] mb-[4px]'>{tittle}</h3>
      <h4 className='text-[26px] font-[700]'>FOCUS AREAS:</h4>
      <p className='text-[22px] font-[600]'>{focusAreas}</p>
      <h4 className='text-[26px] font-[700]'>FREQUENCY:</h4>
      <p className='text-[18px]'><span className='text-[22px] font-[600]'>{sessions} sessions</span> per week</p>
    </div>
  )
}

export default Program