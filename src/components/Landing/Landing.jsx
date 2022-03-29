import React from 'react'




import Button from '../../assets/Button/Large.svg'

import './styles.css'
import Grid from '@mui/material/Grid';
import Gallery from '../Gallery/Gallery'
import { Typography } from '@mui/material'


const Landing = ({ products }) => {
  return (
    <>
      <div className='landingPage'>
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
            <div className='bigBlueBlog'></div>

            <div className='bob'>
              <Gallery products={products} />

            </div>
            <div className='blueCircle'></div>
          </Grid>

        </Grid>

      </div>


    </>
  )
}

export default Landing