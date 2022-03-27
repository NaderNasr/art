import React from 'react';
import { Typography } from '@mui/material';
import makeStyles from './styles'

const Instructions = () => {

  const classes = makeStyles();

  return (
    <div>
      <div className={classes.title}>
        <Typography variant='h4'>
          How to use AR
        </Typography>
      </div>
      <ol>
        <li>
          Hit the <span className={classes.highlight}>"START AR"</span> button
        </li>
        <li>
          Point your camera at the ground and move it around slowly
        </li>
        <li>
          When you see the grey ring appear, aim it at your wall
        </li>
        <li>
          Touch the ring to place the chosen artwork
        </li>
        <li>
          Touch the artwork if you want to place it somewhere else
        </li>
      </ol>
    </div>
  )
}

export default Instructions;