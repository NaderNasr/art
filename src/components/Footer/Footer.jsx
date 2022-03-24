import { Container, Grid, Box, Typography } from "@material-ui/core";
import { GitHub, LinkedIn, Email } from "@material-ui/icons";
import { Link } from "react-router-dom";
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
                <Typography>Armin Glavovic</Typography>
                <Link to='/' className={classes.icon}>
                  <GitHub/>
                </Link>
                <Link to='/' className={classes.icon}>
                  <LinkedIn />
                </Link>
                <Link to='/' className={classes.icon}>
                  <Email />
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>
                <Typography>Nader Nasr</Typography>
                <Link to='/' className={classes.icon}>
                  <GitHub/>
                </Link>
                <Link to='/' className={classes.icon}>
                  <LinkedIn />
                </Link>
                <Link to='/' className={classes.icon}>
                  <Email />
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>
                <Typography>Gerard Compion</Typography>
                <Link to='/' className={classes.icon}>
                  <GitHub/>
                </Link>
                <Link to='/' className={classes.icon}>
                  <LinkedIn />
                </Link>
                <Link to='/' className={classes.icon}>
                  <Email />
                </Link>
              </Box>
            </Grid>
          </Grid>
          <div className={classes.footer}>
            <Typography variant="subtitle2">
            ARt © 2022
            </Typography>
            <Typography variant="subtitle2">
            Final Project for Lighthouse Labs January Cohort
            </Typography>
          </div>
        </Container>
      </Box>
    </footer>
  )
}

export default Footer;