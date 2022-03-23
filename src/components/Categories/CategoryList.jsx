import React from "react";
import commerce from "../../lib/commerce";
import ProductItem from "../Products/Product/ProductItem";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Box, Divider } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
  background: "#F6F6F6",
  "&:hover": {
    boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
  },
}));

// {
//   <Box sx={{ flexGrow: 1 }}>
//     <Grid
//       container
//       spacing={{ xs: 2, md: 3 }}
//       columns={{ xs: 2, sm: 8, md: 12 }}
//     >
//       {products.map((product) => (
//         <Grid item xs={2} sm={4} md={4} key={product.id}>
//           <Item>
//             <ProductItem product={product} onAddToCart={onAddToCart} />
//           </Item>
//         </Grid>
//       ))}
//     </Grid>
//   </Box>;
// }





const Category = ({ categories, products, onAddToCart }) => {
  console.log(categories);
  console.log(products);

  return (
    <>
      <div>
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
  );
};

export default Category;
