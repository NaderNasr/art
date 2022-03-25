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
    <div style={{border: "1px solid #202124", paddingLeft:'15px', borderRadius: '20px'}}>
      <InputBase id="outlined-basic" color="primary" placeholder="Search ARt" variant="outlined" label="Search" onChange={handleChange}/>
      <IconButton onClick={() => handleSearch(value)} sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </div>


  )
}

export default Search;