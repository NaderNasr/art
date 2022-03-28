import React from 'react'
import Sally from '../../assets/Sally.png'
import SallyBG from '../../assets/SallyBG.svg'
import Demo from '../../assets/Demo.gif'
import titleTwo from '../../assets/title2.svg'
import Button from '../../assets/Button/Large.svg'

import './styles.css'
import Grid from '@mui/material/Grid';


const Landing = () => {
  return (
    <>

      <Grid container spacing={2}>
        <Grid item xs={8}>
          <div className='yellowCircle'></div>
          <div className='yellowCircle_2'></div>
          <div className='yellowCircle_3'></div>

          <div className='redCircle'></div>
          <div className='redCircle_2'></div>

          <div>
            <p className='title'>Find your ARt</p>
            <p className='desc'>Have confidence buying art online</p>
            <a href='/'><img src={Button} className='button' alt='button' /></a>
          </div>
        </Grid>
        <Grid item xs={4}>
          <img className='sallybg' src={SallyBG} alt='Sally AR' />
          <img className='bob' src={Demo} alt='bob AR' />
          <div className='blueCircle'></div>
        </Grid>
        {/* <p className='howItWorks'>How it works</p>

        <Grid item xs={4}>

          <img className='sally' src={Sally} alt='Sally AR' />
        </Grid>
        <Grid item xs={8}>
          <img src={titleTwo} alt='second title' className='title_2' />

        </Grid> */}
      </Grid>




    </>
  )
}

export default Landing