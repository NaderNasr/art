import React from 'react';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import makeStyles from './styles';

const Title = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.up("sm"));
  const classes = makeStyles();

  return (
      <>
        {isMobile ? <h1 className={classes.title}>
          The Future of Lorem Ipsum
        </h1> : <h3 className={classes.title}>
          The Future of Lorem Ipsum
          </h3>}
      </>
  )
}

export default Title;