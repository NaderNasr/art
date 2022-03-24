import React, { useState }from "react";
// import commerce from "../../lib/commerce";
// // import ProductItem from "../Products/Product/ProductItem";
// import { experimentalStyled as styled } from "@mui/material/styles";
// import Paper from "@mui/material/Paper";
// import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import Category from './Category'





const CategoryList = ({ categories, products, onAddToCart }) => {

  const [ category, setCategory ] = useState('')

  console.log(categories)
  console.log(category)




  return (
    <>
    
    { !category ? 
      <>
      {categories.map((cat, id) => (
        <Button key={id} onClick={() => setCategory(cat.id)}>{cat.name}</Button>
      ))}
      {categories.map((cat, id) => (
       
        <Category key={id} cat={cat} category={category} onAddToCart={onAddToCart} products={products} />
      ))}
      </>
      : 
      <>
      {categories.map((cat, id) => (
        <Button key={id} onClick={() => setCategory(cat.id)}>{cat.name}</Button>
      ))}
        <Category cat={category} onAddToCart={onAddToCart} products={products}/>
        </>
    }

      
      {/* <div>
        <Box sx={{ flexGrow: 1 }}>

          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 2, sm: 8, md: 12 }}
          >
            { products
              .filter((prod) => prod.categories[0].id === categories[0].id)
              .map((filteredcat) => (
                <>
                  <Grid item xs={2} sm={4} md={4} key={filteredcat.id}>
                    <Item>
                      <ProductItem
                        product={filteredcat}
                        onAddToCart={onAddToCart}
                      />
                    </Item>
                  </Grid>
                </>
              ))}
          </Grid>
        </Box>
      </div>
      <br />
      <Divider />   
      <br />      
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 2, sm: 8, md: 12 }}
          >
            {products
              .filter((prod) => prod.categories[0].id === categories[1].id)
              .map((filteredcat) => (
                <>
                  <Grid item xs={2} sm={4} md={4} key={filteredcat.id}>
                    <Item>
                      <ProductItem
                        product={filteredcat}
                        onAddToCart={onAddToCart}
                      />
                    </Item>
                  </Grid>
                </>
              ))}
          </Grid>
        </Box>
      </div>
    </>
  ); */}
  </>
  )
};

export default CategoryList;
