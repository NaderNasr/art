import React from 'react'
import setSearch from '../../App'
import Chip from "@material-ui/core/Chip";



const Category = ({ categories, setSearch }) => {

  console.log("cats:", categories)

  return (
    <div style={{display:'flex', flexWrap:'wrap', justifyContent:'space-evenly'}}>
      {categories.map((category, id) => (
        <div style={{display:'flex', padding:'5px'}} key={id}>
          <Chip
            style={{color:'#BB86FC', backgroundColor:'#202124'}}
            key={id}
            onClick={() => setSearch(category.slug)}
            label={category.name}
          />
        </div>
      ))}
    </div>
  )
}

export default Category