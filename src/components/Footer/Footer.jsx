import { Container, Grid, Box, Typography } from "@material-ui/core";
import { GitHub, LinkedIn, Email } from "@material-ui/icons";
import makeStyles from './styles';

const Footer = () => {
  const classes = makeStyles();

  return (
    <footer className={classes.siteFooter}>
      <Box>
        <Container maxWidth="lg">
          <div className={classes.header}>
            <Typography variant="h6">Contact Us</Typography>
          </div>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>
                <Typography >Armin Glavovic</Typography>
                <a href="https://github.com/glavovic" target="_blank" className={classes.icon}>
                  <GitHub />
                </a>
                <a href="" target="_blank" className={classes.icon}>
                  <LinkedIn />
                </a>
                <a href="mailto: glavovic.armin@gmail.com" className={classes.icon}>
                  <Email />
                </a>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>
                <Typography>Nader Nasr</Typography>
                <a href="https://github.com/NaderNasr" target="_blank" className={classes.icon}>
                  <GitHub />
                </a>
                <a href="https://www.linkedin.com/in/nnasr/" target="_blank" className={classes.icon}>
                  <LinkedIn />
                </a>
                <a href="mailto: " className={classes.icon}>
                  <Email />
                </a>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>
                <Typography>Gerard Compion</Typography>
                <a href="https://github.com/gerard-c" target="_blank" className={classes.icon}>
                  <GitHub />
                </a>
                <a href="https://www.linkedin.com/in/gerard-compion-37567b233/" target="_blank" className={classes.icon}>
                  <LinkedIn />
                </a>
                <a href="mailto: gcompion93@gmail.com" className={classes.icon}>
                  <Email />
                </a>
              </Box>
            </Grid>
          </Grid>
          <div className={classes.disclaimer}>
            <Typography variant="subtitle2">
              This site was made as a final assignment for a full-stack web development course. All art used is intended to demonstrate how products would be displayed on a real e-commerce site/application. We do not claim ownership of anything displayed on this site (with the exception of the Mona Lisa NFT) and have no intention of attempting to profit off of the work of others.
            </Typography>
          </div>
          <div className={classes.footer}>
            <Typography variant="subtitle2">
              ARt © 2022
            </Typography>
            <Typography variant="subtitle2">
              Final Project for Lighthouse Labs January Cohort
            </Typography>
            <Typography variant="subtitle2">
              Made using <a href="https://commercejs.com/" target="_blank">Commerce.js</a>
            </Typography>
          </div>
        </Container>
      </Box>
    </footer>
  )
}

export default Footer;