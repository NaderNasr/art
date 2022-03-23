import { Typography, TextField } from '@mui/material';
import React from 'react';

const Search = ({ onChange }) => {

  return(
    <div className="search">
      <TextField id="outlined-basic" onChange={onChange} variant="outlined" label="Search" />
    </div>
  )
}

export default Search;