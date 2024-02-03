import React from 'react'

const Burger = ({onClick} : any) => {
  return (
    <button className='h-[13px] flex flex-col items-end justify-between' onClick={onClick}>
      <BurgerLine width={'17px'}/>
      <BurgerLine width={'20px'}/>
      <BurgerLine width={'23px'}/>
    </button>
  )
}

const BurgerLine = ({width} : {width: string}) => (
  <div style={{width, height: '3px', borderRadius: '5px', background: 'white'}}></div>
)

export default Burger