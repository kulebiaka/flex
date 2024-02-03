import React from 'react'
import contctsAlice from '@/public/images/contscts-alice.jpg'
import Image from 'next/image'
import FlexLogoBig from '@/components/logo424_114'
import PageWithTitle from '@/components/pageWithTitle'


const Contacts = () => {
  return (
    <PageWithTitle title='contacts'>
      <section className='w-[900px] mx-auto flex justify-between items-center'>
        <div className='w-[468px]'>
          <div className=' flex justify-between rounded-[20px] overflow-hidden'>
            <div><Image src={contctsAlice} alt='' /></div>
            <div className='w-[324px] bg-white p-[12px_17px]'>
              <h2 className='font-[700] text-[20px] '>Hello, Im Alice</h2>
              <p>If you have a problem or question, <br /> feel free to get in touch.</p>
            </div>
          </div>
          <div>
            <div className='p-[22px_35px] bg-white mt-[16px] rounded-[20px]'>
              <form action="">
                <input type="text" placeholder='Phone number' className='bg-[#D9D9D9] w-[254px] mb-[12px] p-[6px]' />
                <input type="text" placeholder='Name' className='bg-[#D9D9D9] w-[130px] ml-[14px] p-[6px]' />
                <input type="text" placeholder='Email' className='bg-[#D9D9D9] w-full mb-[11px] p-[6px]' />
                <textarea placeholder='Please, describe your problem or questions as many detailed as you can. Confidential 100% ' className='bg-[#D9D9D9] w-full p-[6px]' />
                <button disabled={true} className='w-full mt-[12px] bg-[#D9D9D9] p-[6px]'>Send</button>
              </form>
            </div>
          </div>
        </div>

        <div className='text-[20px]'>
          <h3 className='font-semibold'>Our contacts</h3>
          <div className='flex items-center mt-[15px]'>
            <span><Image src={'/images/contacts-phone.png'} alt='' width={25} height={25} /></span>
            <span className='pl-[17px]'>(555) 123-4567</span>
          </div>
          <p className='py-[30px]'>321 FlexFit Lane <br /> Brooklyn, NY 11201 <br /> United States</p>
          <h3 className='font-semibold mb-[15px]'>Follow us</h3>
          <div className='flex space-x-[30px]'>
            <a href="#"><Image src={'/icons/contacts-instagram.png'} alt='' width={35} height={35} /></a>
            <a href="#"><Image src={'/icons/contacts-telegram.png'} alt='' width={35} height={35} /></a>
            <a href="#"><Image src={'/icons/contacts-twitter.png'} alt='' width={35} height={35} /></a>
          </div>
        </div>
      </section>

      <section className='w-full my-[40px]'>
        <div className='w-[424px] mx-auto'>
          <h2 className=' text-[#0D0D0D] text-[25.588px]'>STRETCHING AND FITNESS STUDIO</h2>
          <FlexLogoBig color='#0D0D0D' />
        </div>
      </section>

      <section className='w-full my-[30px]'>
        <Image src={'/images/contacts-map.jpg'} alt='' width={1297} height={537} className='w-full' />
      </section>
    </PageWithTitle>

  )
}

export default Contacts