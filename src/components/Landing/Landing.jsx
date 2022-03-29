import React from 'react'

import SallyBG from '../../assets/SallyBG.svg'
import Demo from '../../assets/ARDemo.mp4'

import Button from '../../assets/Button/Large.svg'

import './styles.css'
import Grid from '@mui/material/Grid';
import Gallery from '../Gallery/Gallery'
import { Typography } from '@mui/material'


const Landing = ({ products }) => {
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
            <Typography className='desc'>Shop with confidence, with AR integration</Typography>
            <a href='/'><img src={Button} className='button' alt='button' /></a>
          </div>
        </Grid>
        <Grid item xs={4}>
          <img className='sallybg' src={SallyBG} alt='Sally AR' />
          <div className='bob'>
          <Gallery products={products} />
          
          </div>
          <div className='blueCircle'></div>
        </Grid>

      </Grid>




    </>
  )
}

export default Landing