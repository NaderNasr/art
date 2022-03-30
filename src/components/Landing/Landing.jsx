import React from 'react'
import { Typography } from '@mui/material';
import Button from '../../assets/Button/Large.svg'

import Video from './Video';
import Grid from '@mui/material/Grid';
import Gallery from '../Gallery/Gallery';
import './styles.css'

const Landing = ({ products }) => {
  return (
    <>
      <div className='landingPage'>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid>
            <div className='yellowCircle'></div>
            <div className='yellowCircle_2'></div>
            <div className='yellowCircle_3'></div>

            <div className='redCircle'></div>
            <div className='redCircle_2'></div>
            <div className='blueCircle'></div>

            <div className='blueCircle_3'></div>
            <div className='blueCircle_4'></div>


            <div>
              <p className='title'>Find your ARt</p>
              <Typography className='desc'>Shop with confidence, with AR integration</Typography>
              <a href='/'><img src={Button} className='button' alt='button' /></a>
            </div>
          </Grid>
          <Grid>
            <div className='bigBlueBlog'></div>

            <div className='bob'>
              <Video />

            </div>
          </Grid>

        </Grid>

      </div>


    </>
  )
}

export default Landing