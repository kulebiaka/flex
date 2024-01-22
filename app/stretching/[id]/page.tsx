'use client'
import React, { useEffect, useState } from 'react'

const page = ({params} : any) => {

  const [coach, setCoach] = useState<any>(null)

  const getCoach = async () => {
    let res = (await fetch(`http://localhost:3000/api/coaches`)).json()
    return res
  }
  
  useEffect(() => {
    getCoach().then(val => setCoach(val))
  }, [params.id])

  return (
    <div>{coach?.tittle + coach?.id}</div>
  )
}

export default page