'use client'

import React, { useEffect, useState } from 'react'
import FlexLogo from './logo61_18'
import Link from 'next/link'
import Image from 'next/image'
import twitter from '@/public/icons/twitter.svg'
import instagram from '@/public/icons/instagram.svg'
import telegram from '@/public/icons/telegram.svg'
import { usePathname } from 'next/navigation'

const Footer = () => {
  const pathname = usePathname()
  const [theme, setTheme] = useState<'black' | 'white'>('black')

  useEffect(() => {
    if (pathname === '/about' || pathname === '/coaches') {
      setTheme('black')
    } else {
      setTheme('white')
    }
  }, [pathname])

  return (
    <footer className={`${theme === 'white' ? 'bg-[#0E0E0E] text-white' : 'bg-[white] text-[#0d0d0d]'} w-full relative bottom-0 z-50`}>
      <div className='mx-[160px] py-[60px]'>
        <div className='w-full mb-[42.13px]'>
          <Link href='/'>
            <FlexLogo width={90} height={24.86842} color={theme} />
          </Link>
        </div>

        <div className='flex space-x-[16%]'>
          <div className=''>
            <p className='text-base mb-[14px]'>
              Stay in know on the discount and <br />
              program releases, news etc.
            </p>
            <input placeholder='Enter Email to stay update' className={`pl-[19px] py-[5px] bg-inherit text-xs w-[304px] border-[1px] rounded-[10px]`} />
            <div className='mt-[62px]'>
              <span>TERMS & CONDITIONS</span>
              <span>PRIVATE POLICY</span>
            </div>
          </div>

          <div className='flex justify-between w-full min-w-[600px]'>

            <div>
              <h3 className='text-base mb-2'>Company</h3>
              <ul className='font-light'>
                <li>
                  <Link href='/about'>About Us</Link>
                </li>
                <li>
                  <Link href='/membership'>Memberships</Link>
                </li>
                <li>
                  <Link href='programs'>Programs</Link>
                </li>
                <li>
                  <Link href='coaches'>Coaches</Link>
                </li>
                <li>
                  <Link href='/'>Career</Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className='text-base mb-2'>Support</h3>
              <ul className='font-light'>
                <li>Help Center</li>
                <li>FAQs</li>
                <li>Refunds & Canceling</li>
              </ul>
            </div>

            <div>
              <h3 className='text-base mb-2'>Our contacts</h3>
              <div className='font-light w-[233px]'>
                <p>(555) 123-4567</p>
                <p>321 FlexFit Lane</p>
                <p>Brooklyn, NY 11201</p>
                <p>United States</p>
              </div>
              <h3 className='text-base my-2'>Follow us</h3>
              <div className='flex space-x-[5.81px] items-center'>
                <a href="#"><Image src={twitter} alt='twitter' /></a>
                <a href="#"><Image src={instagram} alt='instagram' /></a>
                <a href="#"><Image src={telegram} alt='telegram' /></a>
              </div>
            </div>
          </div>

        </div>
      </div>

    </footer>
  )
}

export default Footer