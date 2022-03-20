import React from 'react'
// import Commerce from '@chec/commerce.js';
// import { useFormControl } from '@mui/material/FormControl';
import { FormControl, FormHelperText, Input, InputLabel } from '@material-ui/core';

// const commerce = new Commerce('{your_public_key}');



const UserAuthentication = ({auth, jwt}) => {
  console.log(jwt)
  return (
    <>
      <FormControl>
        <InputLabel htmlFor="my-input">Name</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" />
      </FormControl>
    {<br/>}
      <FormControl>
        <InputLabel htmlFor="my-input">Email address</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" />
        <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
      </FormControl>
    </>
  )
}

export default UserAuthentication