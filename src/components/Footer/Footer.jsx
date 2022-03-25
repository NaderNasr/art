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
            <Box borderBottom={1}>
              <Typography variant="h4">Contact Us</Typography>
            </Box>
          </div>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Box style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', paddingBottom: '10px' }}>
                <Typography style={{ marginBottom: '25px' }}>Armin Glavovic</Typography>
              </Box>
              <Box style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', paddingBottom: '10px' }}>
                <a href="https://github.com/glavovic" target="_blank" className={classes.icon}>
                  <GitHub className={classes.svg_icons} />
                </a>
                <a href="https://www.linkedin.com/in/glavovica/" target="_blank" className={classes.icon}>
                  <LinkedIn className={classes.svg_icons} />
                </a>
                <a href="mailto: glavovic.armin@gmail.com" className={classes.icon}>
                  <Email className={classes.svg_icons} />
                </a>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', paddingBottom: '10px' }}>
                <Typography style={{ marginBottom: '25px' }}>Nader Nasr</Typography>
              </Box>
              <Box style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', paddingBottom: '10px' }}>
                <a href="https://github.com/NaderNasr" target="_blank" className={classes.icon}>
                  <GitHub className={classes.svg_icons} />
                </a>
                <a href="https://www.linkedin.com/in/nnasr/" target="_blank" className={classes.icon}>
                  <LinkedIn className={classes.svg_icons} />
                </a>
                <a href="mailto: nadernasr7@gmail.com" className={classes.icon}>
                  <Email className={classes.svg_icons} />
                </a>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', paddingBottom: '10px' }}>
                <Typography style={{ marginBottom: '25px' }}>Gerard Compion</Typography>
              </Box>
              <Box style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', paddingBottom: '10px' }}>
                <a href="https://github.com/gerard-c" target="_blank" className={classes.icon}>
                  <GitHub className={classes.svg_icons} />
                </a>
                <a href="https://www.linkedin.com/in/gerard-compion-37567b233/" target="_blank" className={classes.icon}>
                  <LinkedIn className={classes.svg_icons} />
                </a>
                <a href="mailto: gcompion93@gmail.com" className={classes.icon}>
                  <Email className={classes.svg_icons} />
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
              Made using <a className={classes.links} href="https://commercejs.com/" target="_blank">CommerceJs</a>
              <a className={classes.links} href="https://reactjs.org/" target="_blank"> ReactJS </a>
              <a className={classes.links} href="https://nodejs.org/en/" target="_blank"> NodeJs </a>
              <a className={classes.links} href="https://v5.reactrouter.com/web/guides/quick-start" target="_blank"> React Router DOM </a>
              <a className={classes.links} href="https://mui.com/" target="_blank"> MaterialUI </a>
              <a className={classes.links} href="https://stripe.com/" target="_blank"> Stripe</a>
            </Typography>
            <Typography variant="subtitle2">
              Final Project for <a className={classes.links} href="https://lighthouselabs.ca" target="_blank"> Lighthouse Labs</a> January Cohort
            </Typography>
            <Typography variant="subtitle2">
              ARt © 2022
            </Typography>
          </div>
        </Container>
      </Box>
    </footer>
  )
}

export default Footer;
