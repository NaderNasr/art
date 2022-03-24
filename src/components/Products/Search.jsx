import { InputBase } from '@mui/material';
import React from 'react';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

const Search = ({ handleSearch }) => {
  let value = ''

  const handleChange = (event) => {
    value = event.target.value;
    console.log(value);
  }


  return (
    <div className="search">
      <InputBase id="outlined-basic" placeholder="Search ARt" variant="outlined" label="Search" onChange={handleChange} />
      <IconButton onClick={() => handleSearch(value)} sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </div>


  )
}

export default Search;