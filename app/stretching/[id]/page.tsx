'use client'
import Portrait, { PortraitType } from '@/components/portrait'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

interface CoachType extends PortraitType {
  trainingDuration: number,
  equipment: boolean
}


const page = ({ params }: any) => {

  const [coach, setCoach] = useState<CoachType | null>(null)
  const [date, setDate] = useState(new Date())


  useEffect(() => {

    const getCoach = async () => {
      let res = (await fetch(`http://localhost:3000/api/coaches/stretching/${params.id - 1}`)).json()
      return res
    }

    getCoach().then(val => setCoach(val))

  }, [params.id])

  return (
    <div>
      <div className='border-r-4 border-[#0d0d0d8a]'>
        <Portrait img={coach?.img} fullname={coach?.fullname} position={coach?.position} />
        <Link href={`/stretching/${params.id == 4 ? 1 : +params.id + 1}`}>Next</Link>
        <p>Duration: 50 min</p>
        <p>Equipment: included</p>
      </div>
      
    </div>
  )
}

export default page