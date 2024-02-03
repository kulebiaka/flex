'use client'
import FintessSVG from '@/components/fintessSVG'
import FlexLogoBig from '@/components/logo424_114'
import StretchingSVG from '@/components/stretchingSVG'
import useWindowWidth from '@/hooks/useWindowWidth'
import Membership from './membership/page'
import Image from 'next/image'
import Link from 'next/link'
import home1 from '@/public/images/home.jpg'
import home2 from '@/public/images/home2.jpg'
import home3 from '@/public/images/home3.jpg'
import mobileHome1 from '@/public/images/mobile-home1.jpg'

import { useState } from 'react'
import Programs from './programs/page'

const images = []

function Home() {

  const [currentImg, setCurrentImg] = useState<number>(0)
  const [stylesGallery0, setStylesGallery0] = useState<string>('gallery1')
  const [stylesGallery1, setStylesGallery1] = useState<string>('gallery2')
  const [stylesGallery2, setStylesGallery2] = useState<string>('gallery3')


  const [isListing, setIsListing] = useState<boolean>(false)
  const windowWidth = useWindowWidth()

  function setNextImg(e: any) {
    e.preventDefault()

    console.log('setNextImg')
    if (currentImg === 2) {
      setStylesGallery2('gallery0')
      setStylesGallery0('gallery1')
      setStylesGallery1('gallery2')
      setTimeout(() => setStylesGallery2('gallery3'), 400)
      setCurrentImg(prev => 0)
    } else if (currentImg === 0) {
      setStylesGallery0('gallery0')
      setStylesGallery1('gallery1')
      setStylesGallery2('gallery2')
      setTimeout(() => setStylesGallery0('gallery3'), 400)
      setCurrentImg(prev => 1)
    } else if (currentImg === 1) {
      setStylesGallery1('gallery0')
      setStylesGallery2('gallery1')
      setStylesGallery0('gallery2')
      setTimeout(() => setStylesGallery1('gallery3'), 400)
      setCurrentImg(prev => 2)
    }
  }

  if(windowWidth < 500){
    return(
      <main>
        <section className=''>
          <Image className=' overflow-hidden' src={mobileHome1} alt='Picture with smailing pair'/>
          <Link href='/stretching'>
            <Image className=' overflow-hidden' src={home2} alt='Picture with smailing pair'/>
          </Link>
          <Link href='/fitness'>
            <Image className=' overflow-hidden' src={home3} alt='Picture with smailing pair'/>
          </Link>
        </section>
        <section>
          <Membership />
        </section>
        <section>
          <Programs />
        </section>
      </main>
    )
  }

  return (
    <main className="bg-[#0e0e0e]">
      <section className='flex'>
        <div className='overflow-hidden max-h-[100vh]'>
          <div className='w-full'>
            <div id='home0' className={`home-gallery ${stylesGallery0}`}>
              <img src={'images/home.jpg'} alt="" />
              <div className='absolute top-[45%] leading-[100%] z-30 pl-[30px]'>
                <h2 className=' text-[#0d0d0d] text-[25.588px] mb-[13px]'>STRETCHING AND FITNESS STUDIO</h2>
                <FlexLogoBig color='#0d0d0d' />
              </div>
            </div>
            <div id='home1' className={`home-gallery ${stylesGallery1}`}>
              <img src={'images/home2.jpg'} alt="" />
              <div className='absolute top-[50%] z-30 px-[30px] w-full'>
                <StretchingSVG />
              </div>
              <div className='absolute bottom-[10%] w-full text-center'>
                <button className='w-[233px] h-[58px] bg-lime-300 bg-opacity-70 rounded-[60px] font-semibold text-[20px] uppercase'><Link href='/stretching'>More details</Link></button>
              </div>
            </div>
            <div id='home2' className={`home-gallery ${stylesGallery2}`}>
              <img src={'images/home3.jpg'} alt="" />
              <div className='absolute top-[50%] z-30 px-[30px] w-full'>
                <FintessSVG />
              </div>
              <div className='absolute bottom-[10%] w-full text-center'>
                <button className='w-[233px] h-[58px] bg-[#0D0D0D] bg-opacity-70 text-white rounded-[60px] font-semibold text-[20px] uppercase'><Link href='/fitness'>More details</Link></button>
              </div>
            </div>
            <button className='absolute h-[100%] w-[25%] top-0 right-0 z-40
            sshadow-[inset_-130px_0px_185px_black]
            bg-[linear-gradient(270deg,_#000000a1_14%,_rgba(0,_0,_0,_0)_74%)]' disabled={isListing} onClick={(e) => {
                if(isListing) return
                setIsListing(true)
                setNextImg(e)
                setTimeout(() => {setIsListing(false)},600)
              }}></button>
          </div>
          {/* <div className='relative'>
            <div className='w-[52px] h-[5px] border-[1px] border-[white] bg-white rounded-[2.5px] relative'></div>
            <div className='w-[52px] h-[5px] border-[1px] border-[white] bg-white rounded-[2.5px] relative'></div>
            <div className='w-[52px] h-[5px] border-[1px] border-[white] bg-white rounded-[2.5px] relative'></div>
          </div> */}
        </div>
      </section>
    </main>
  )
}

export default Home;