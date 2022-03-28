import React from 'react';
import { Typography } from '@mui/material';
import { BrowserView, MobileView } from 'react-device-detect';
import Gallery from './Gallery';
import Demo from './Demo';
import makeStyles from './styles';

const Landing = ({ products }) => {
  const classes = makeStyles();

  return (
    <>
      <Gallery products={products} />
      <MobileView>
        <Typography variant="h3">
          The Future of Lorem Ipsum is Here
        </Typography>
        <Box>
          <Typography component="div">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
          <Demo />
        </Box>
      </MobileView>
      <BrowserView>

      </BrowserView>
    </>
  )
}

export default Landing;