import React from 'react'
import { Button } from '@mui/material'
import setSearch from '../../App'

const Category = ({ categories, setSearch }) => {


   console.log("cats:", categories)


  return (
    <>
    {categories.map((category, id) => (
      <Button key={id} onClick={() => setSearch(category.slug)}>{category.name}</Button>
    ))}
    
    </>
  )
}

export default Category