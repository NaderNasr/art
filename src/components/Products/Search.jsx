import { Typography, TextField, Button } from '@mui/material';
import React from 'react';

const Search = ({ handleSearch }) => {
  let value = ''

  const handleChange = (event) => {
    value = event.target.value;
    console.log(value);
  }


  return(
    <div className="search">
      <TextField id="outlined-basic" variant="outlined" label="Search" onChange={handleChange} />
      <Button variant="contained" onClick={() => handleSearch(value)}>Submit</Button>
    </div>
  )
}

export default Search;