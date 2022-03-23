import React from 'react';
import { useParams, } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Alert } from '@mui/material';

const theme = createTheme();

const UserAuthentication = ({
  handleSubmit,
  emailSent,
  setUserEmail
}) => {

  let { id } = useParams();
  let jwtToken = { id }

  console.log(jwtToken)

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div>{emailSent.success ?
          <Alert severity="success">E-mail sent!</Alert>
          : ''}</div>
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
      </Container>
    </ThemeProvider>
  );
}

export default UserAuthentication