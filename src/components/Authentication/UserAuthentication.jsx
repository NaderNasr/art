import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import commerce from '../../lib/commerce';

const theme = createTheme();

const UserAuthentication = () => {

  //user authentication
  const [userEmail, setUserEmail] = useState('')
  const [userToken, setUserToken] = useState('')

  const [test, setTest] = useState('')



  const auth = () => {
    commerce.customer.login(userEmail, 'http://localhost:3000/').then((loginToken) => setTest(loginToken));
  }


  let { id } = useParams();
  let jwtToken = { id }
  console.log(jwtToken)
  console.log('LOGIN', test)


  const jwt = () => {
    commerce.customer.getToken(jwtToken)
      .then((jwt) => setUserToken(jwt))
      .catch((err) => console.log('JWT ERROR: ', err))
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    // const data = new FormData(event.currentTarget);
    // setUserEmail(data.get('email'))
    auth()
  };


  // const handleLogOut = (e) => {
  //   e.preventDefault();
  //   commerce.customer.logout();
  // };

  // console.log('ID: ', id)
  useEffect(() => {
    if (jwtToken) {
      return jwt()
    }
  }, []);

  console.log('userEmail: ', userEmail);
  console.log('JWT_Token: ', userToken);
  console.log('YOUR EMAIL', userEmail);
  console.log('IS CUSTOMER LOGGED IN?', (commerce.customer.token() ? "YAAAAAAAAAS" : "NO BITCH"));

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            {/* <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            /> */}
            <input
              
              onChange={e => setUserEmail(e.target.value)}
              placeholder="email"
              type="text"
              name="email"
              required
            />
            {<br />}
            {<br />}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
        {/* <Box component="form" onSubmit={handleLogOut} sx={{ mt: 1 }}>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            logout
          </Button>
          {<br />}
        </Box> */}
      </Container>
    </ThemeProvider>
  );
}

export default UserAuthentication