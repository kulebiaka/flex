import Image from 'next/image'
import React from 'react'
import FlexLogoBig from '@/components/logo424_114'
import about1 from '@/public/images/about-1.png'
import about2 from '@/public/images/about-2.png'
import about3 from '@/public/images/about-3.jpg'
import freshMeals from '@/public/icons/fresh-food-1.png'
import partnersGymshark from '@/public/icons/partners-gymshark.svg'
import partnersMuscletech from '@/public/icons/partners-muscletech.svg'
import partnersPrime from '@/public/icons/partners-prime.svg'
import PortraitsCollection from '@/components/portraitsCollection'
import t1 from '@/public/images/team1.jpg'
import t2 from '@/public/images/team2.jpg'
import t3 from '@/public/images/team3.jpg'
import t4 from '@/public/images/team4.jpg'
import t5 from '@/public/images/team5.jpg'
import t6 from '@/public/images/team6.jpg'
// import confident from ''

const portraits = [
  { img: t1, fullname: 'Anna Morison', position: 'Founder/CEO' },
  { img: t2, fullname: 'Mike Morison', position: 'co-founder' },
  { img: t3, fullname: 'silvia harris', position: 'head of stretching department' },
  { img: t4, fullname: 'adam pears', position: 'head of fitness department', },
  { img: t5, fullname: 'finn laster', position: 'cooperation manager' },
  { img: t6, fullname: 'denis aspenn', position: 'lawyer' },
]

const About = () => {
  return (
    <main className='bg-[#E7E7E7]'>
      <section style={{ backgroundImage: `url(images/person-looking-futuristic-mystical-other-worldly-sky-1.png` }} className='bg-no-repeat bg-cover bg-center w-full h-[50vw] '>
        <div style={{ boxShadow: 'inset black 0px -10px 100px' }} className='flex items-center pl-[30px] h-full w-full'>
          <div>
            <h2 className='text-white text-[25.588px]'>STRETCHING AND FITNESS STUDIO</h2>
            <FlexLogoBig color='white'/>
          </div>
        </div>
      </section>

      <section className='h-[300px] bg-black text-white px-[calc((100%-968px)/2)]'>
        <div className="w-[968px] h-60 relative">
          <h1 className="w-[179px] h-[86.67px] left-0 top-0 absolute text-white text-[64px] font-extrabold font-['Open Sans'] uppercase">Bend</h1>
          <h1 className="w-[291px] h-[86.67px] left-[207px] top-[77px] absolute text-white text-[64px] font-extrabold font-['Open Sans'] uppercase">Breathe</h1>
          <h1 className="w-[448px] h-[86.67px] left-[520px] top-[153.33px] absolute text-white text-[64px] font-extrabold font-['Open Sans'] uppercase">Break Limits</h1>
        </div>
      </section>

      <section className='py-[81px] max-w-[1280px] mx-auto '>

        <div className='flex justify-between mb-[110px]'>
          <div className='max-w-[570px] pl-[160px]'>
            <h2 className='text-[36px] mb-[21px]'>FLEX PHILOSOPHY</h2>
            <p className='text-[20px]'>We breathe life into the philosophy that flexibility is not just a physical attribute;
              it's a state of mind. We believe in the power of flexibility to transform not only the body but also the spirit.
              Our philosophy centers on the idea that embracing flexibility, both in body and mind, is the key to unlocking one's true potential.</p>
          </div>
          <div><Image src={about1} alt="" /></div>
        </div>
        <div className='flex justify-between mb-[110px]'>
          <div><Image src={about2} alt="" /></div>
          <div className='max-w-[570px] pl-[160px]'>
            <h2 className='text-[36px] mb-[21px]'>OUR MISSION</h2>
            <p className='text-[20px]'>Is to inspire and guide individuals on their unique wellness journeys.
              We are dedicated to providing a diverse range of programs that seamlessly blend stretching and fitness, offering a holistic approach to health.
              Through personalized guidance and innovative classes, we aim to empower our community to discover the joy of movement, achieve their fitness goals, and lead a life filled with vitality.</p>
          </div>
        </div>
        <div className='flex justify-between'>
          <div className='max-w-[570px] pl-[160px]'>
            <h2 className='text-[36px] mb-[21px]'>FLEX DREAM</h2>
            <p className='text-[20px]'>We dream of a world where everyone experiences the liberating power of flexibility. Our vision extends beyond the studio walls, envisioning a community that embraces a lifestyle of balance, strength, and resilience. We dream of individuals discovering their inherent capacity for growth, both physically and mentally, and carrying this newfound vitality into every facet of their lives.</p>
          </div>
          <div><Image src={about3} alt="" /></div>
        </div>
      </section>

      <section style={{ backgroundImage: `url(images/confident-young-woman-elegant-clothing-standing-indoors-generated-by-artificial-intelligence-1.jpg` }} className='h-[45vw] bg-cover bg-no-repeat'>
      </section>

      <section className='py-[70px]'>
        <h2 className='text-[64px] font-[800] max-w-[960px] mx-[auto] mb-[40px]'>FLEX TEAM</h2>
        <PortraitsCollection portraits={portraits} />
      </section>

      <section className='bg-black px-[142px] h-[266px] text-[40px] font-[600] text-white'>
        <h3 className='text-center pt-11 mb-[30px]'>PARTNERS</h3>
        <div className='flex justify-between items-center'>

          <Image src={partnersGymshark} alt='Gymshark'/>

          <Image src={partnersPrime} alt='Prime'/>

          <Image src={partnersMuscletech} alt='Muscletech'/>

          <Image src={freshMeals} alt='Fresh Fit Meals'/>

        </div>
      </section>

    </main>
  )
}

export default About