import React from 'react'

const PageWithTitle = ({ children, title, bgColor, isMobile }: any) => {
  return (
    <div style={{ backgroundColor: bgColor }}>
      <h1 className='text-black font-[800] text-[70px] text-center pt-[100px] pb-[56px] uppercase'>{title}</h1>
      {children}
    </div>
  )
}

export default PageWithTitle