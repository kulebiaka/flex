import React from 'react'
import stretching from '@/public/images/home2.jpg'
import StretchingSVG from '@/components/stretchingSVG'

const Stretching = ({children} : any) => {
  return (
    <main>
      <section style={{ backgroundImage: 'url(/images/home2.jpg)' }} className='min-h-[100vh] w-full bg-no-repeat bg-cover bg-center'>
        <div style={{background: 'linear-gradient(345deg, rgba(0, 0, 0, 0.00) 0.18%, rgba(0, 0, 0, 0.62) 53.86%, rgba(0, 0, 0, 0.00) 102.22%)'}} className='w-full min-h-[100vh]'>
          <div className='w-full pt-[100px] flex justify-center'>
            <StretchingSVG />
          </div>
          <div className='w-[900px] mx-auto mt-28 text-white '>
            <div>
              <h2 className='text-[26px] leading-[180%]'>Welcome to Flex Studio</h2>
              <p className='text-xl'>In stretching we offer five tailored stretching programs suitable for all experience levels and conditions. Whether you're a fitness enthusiast or a beginner, our certified coaches ensure you find the perfect program to enhance flexibility and joint mobility. <br />Join us in the pursuit of personalized wellness at Flex Studio.</p>
            </div>
            <h2 className='text-[26px] leading-[180%] mt-[60px]'>Benefits:</h2>
            <div className='flex space-x-[60px] mt-4 text-[16px]'>
              <div>
                <h3 className='text-[18px] font-[600]'>Injury Prevention and Recovery: </h3>
                <p>Strengthen muscles, reduce the risk of injuries, and expedite recovery with our carefully curated stretching routines.</p>
              </div>
              <div>
                <h3 className='text-[18px] font-[600]'>Improved Flexibility:</h3>
                <p>Experience enhanced range of motion and joint flexibility through targeted stretching programs at Flex Studio.</p>
              </div>
              <div>
                <h3 className='text-[18px] font-[600]'>Holistic Well-being: </h3>
                <p>Beyond physical benefits, regular stretching at Flex Studio promotes mental relaxation, stress reduction, and an overall sense of well-being.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-[#E6E3E3] min-h-[100vh]'>
        <div>

          <div>

          </div>

          <div>
          </div>

          <button className='w-[233px] h-[58px] bg-lime-300 bg-opacity-70 rounded-[60px] font-semibold text-[20px] uppercase'>BOOK NOW</button>
        </div>
        {children}
      </section>
    </main>
  )
}

export default Stretching