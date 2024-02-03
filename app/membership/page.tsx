import React from 'react'
import MembershipItem from '@/components/membershipItem'
import membershipFlexibility from '@/public/images/membership-flexibility.jpg'
import membershipAllinone from '@/public/images/membership-allinone.jpg'
import membershipFitnesspro from '@/public/images/membership-fitnesspro.jpg'
import PageWithTitle from '@/components/pageWithTitle'

const Membership = () => {
  return (
    <PageWithTitle title='membership' bgColor='white'>
      <section className='mx-auto max-w-[990px] flex justify-between'>
        <MembershipItem img={membershipFlexibility} tittle='flexibility' benefits={['Unlimited access to specialized stretching ', 'Tailored exercises for flexibility & mobility', '12 sessions']} price={215} />
        <div className='relative top-[-48px]'>
          <MembershipItem img={membershipAllinone} tittle='all in one' benefits={['Unlimited access to stretching programs', 'Dynamic workouts & mindful exercises', 'Holistic approach to strength and flexibility', '16 sessions']} price={215} />
        </div>
        <MembershipItem img={membershipFitnesspro} tittle='fitess pro' benefits={['Cutting-edge  programs', 'Strength training & cardio workouts', 'Sculpt & tone your body for peak fitness', '20 sessions']} price={185} />
      </section>
      <p className='p-[54px_0px_66px] text-center text-[16px]'>Note *Collect your phisical membership card in the reception zone*</p>
    </PageWithTitle>
  )
}

export default Membership