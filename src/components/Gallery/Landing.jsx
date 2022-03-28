import React from 'react';
import { Typography, Box, useMediaQuery } from '@mui/material';
import { useTheme } from "@mui/material/styles";
import Gallery from './Gallery';
import Demo from './Demo';
import makeStyles from './styles';

const Landing = ({ products }) => {
  const classes = makeStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <>
      <Gallery products={products} />
      {isMobile ? (
        <>
          <Typography variant="h3">
            The Future of Lorem Ipsum is Here
          </Typography>
          <Box className={classes.browser}>
            <Typography component="div">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
            <Demo />
          </Box>
        </>
      ) : (
        <>
          <Typography variant="h5">
            The Future of Lorem Ipsum is Here
          </Typography>
          <Box className={classes.mobile}>
            <Typography component="div">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
            <Demo />
          </Box>
        </>
      )}






    </>
  )
}

export default Landing;