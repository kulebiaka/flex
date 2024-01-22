import PortraitsCollection from '@/components/portraitsCollection'
import React from 'react'
import stretcher1 from '@/public/images/coaches-stretchers-1.jpg'
import stretcher2 from '@/public/images/coaches-stretchers-2.jpg'
import stretcher3 from '@/public/images/coaches-stretchers-3.jpg'
import stretcher4 from '@/public/images/coaches-stretchers-1.jpg'
import Program from '@/components/program'


const programs = [
  {tittle: 'senior flex vitality', img: 'url(images/programs-1.jpg)', focusAreas: 'Flexiility, Balance, Joint Health', sessions: 2},
  {tittle: 'flex fusion', img: 'url(images/programs-2.jpg)', focusAreas: 'Flexibility, Cardio, Strength', sessions: 3},
  {tittle: 'Stretch & Sculpt', img: 'url(images/programs-3.jpg)', focusAreas: 'Flexibility, Strength, Endurance', sessions: 4},
  {tittle: 'Strength & Stretch', img: 'url(images/programs-4.jpg)', focusAreas: 'Flexibility, Strength, Circuit Training', sessions: 3},
  {tittle: 'Mindful Movement', img: 'url(images/programs-5.jpg)', focusAreas: 'Flexibility, Relaxation, Mindfulness', sessions: 2},
  {tittle: 'Cardio Flex Express', img: 'url(images/programs-6.jpg)', focusAreas: 'Flexibility, Cardio, Energy', sessions: 5},
]

const Programs = () => {
  return (
    <main className='bg-white pb-[145px]'>
      <h1 className='text-black font-[800] text-[70px] text-center pt-[80px] pb-[56px]'>PROGRAMS</h1>
      <div className='w-[983px] mx-auto flex flex-wrap gap-[50px_20px]'>
        {programs.map(({tittle, img, sessions, focusAreas}) => (<Program tittle={tittle} img={img} sessions={sessions} focusAreas={focusAreas}/>))}
      </div>
    </main>
  )
}

export default Programs