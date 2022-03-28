import React from 'react'
import Sally from '../../assets/Sally.png'
import SallyBG from '../../assets/SallyBG.svg'
import Bob from '../../assets/Bob.svg'


import './styles.css'

const Landing = () => {
  return (
    <>
      <div className='yellowCircle'></div>
      <div className='yellowCircle_2'></div>
      <div className='yellowCircle_3'></div>


      <div className='redCircle'></div>

      <p className='title'>Find your ARt</p>
      <p className='desc'>Buy artwork directly from artists or advertise your own works to potential buyers!</p>
      <img className='sallybg' src={SallyBG} alt='Sally AR' />
      <img className='sally' src={Sally} alt='Sally AR' />

      <p className='howItWorks'>How it works</p>
      <img className='bob' src={Bob} alt='Sally AR' />

    </>
  )
}

export default Landing