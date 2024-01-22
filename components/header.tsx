'use client'

import React, { useEffect, useState } from 'react'
import FlexLogo from '@/components/logo61_18'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const pathsWhiteTheme: Array<string> = ['/', '/about', '/stretching']

const Header = () => {

  const pathname = usePathname()
  const [theme, setTheme] = useState<'white' | 'black'>('white')

  useEffect(() => {
    if (pathsWhiteTheme.includes(pathname)) {
      setTheme('white')
    } else {
      setTheme('black')
    }
  }, [pathname])

  return (
    <header className='fixed py-[20px] w-full pl-[30px] pr-[38.46px] items-center z-50'>

      <div className='items-center flex'>
        <div>
          <Link href='/'>
            <FlexLogo color={theme} />
          </Link>
        </div>

        <nav className='w-[calc(100%-130px)] transition-all'>
          <ul className={`flex justify-end space-x-3 mr-[57px] text-${theme} font-semibold`}>
            <li className={`px-3 py-2 leading-[100%] ${pathname === '/about' ? 'active-nav' : ''}`}>
              <Link href='/about'>ABOUT US</Link>
            </li>
            <li className={`px-3 py-2 leading-[100%] ${pathname === '/membership' ? 'active-nav' : ''}`}>
              <Link href='/membership'>MEMBERSHIP</Link>
            </li>
            <li className={`px-3 py-2 leading-[100%] ${pathname === '/programs' ? 'active-nav' : ''}`}>
              <Link href='/programs'>PROGRAMS</Link>
            </li>
            <li className={`px-3 py-2 leading-[100%] ${pathname === '/coaches' ? 'active-nav' : ''}`}>
              <Link href='/coaches'>COACHES</Link>
            </li>
            <li className={`px-3 py-2 leading-[100%] ${pathname === '/contacts' ? 'active-nav' : ''}`}>
              <Link href='/contacts'>CONTACTS</Link>
            </li>
          </ul>
        </nav>

        <div className="w-[71.54px] h-[34px] relative">
          <div className="w-[34px] h-[34px] left-0 top-0 absolute">
            <div className="w-[34px] h-[34px] left-0 top-0 absolute bg-stone-950 rounded-full" />
            <div className="w-[19.12px] h-[19.12px] left-[7.79px] top-[7.08px] absolute text-white text-sm font-normal uppercase">En</div>
          </div>
          <div className="w-[34px] h-[34px] left-[37.54px] top-0 absolute">
            <div className="w-[34px] h-[34px] left-0 top-0 absolute bg-white rounded-full" />
            <div className="w-[19.12px] h-[19.12px] left-[7.79px] top-[7.08px] absolute text-stone-950 text-sm font-normal uppercase">Ru</div>
          </div>
        </div>
      </div>

    </header>
  )
}

export default Header