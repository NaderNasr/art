import React from "react";
import { Container, Typography, Button, Grid } from '@material-ui/core'
import { ClassNames } from "@emotion/react";

const Cart = () => {
  const isEmpty = true;

  const EmptyCart  = () => (
    <Typography variant="subtitle1">Your shopping cart is empty</Typography>
  );

  const FilledCart = () => (
    <>
      <Grid container spacing={3}>
        
      </Grid>
    </>
  );

  return(
    <Container>
      <div className={ClassNames.toolbar} />
      <Typography className={classes.title} variant="h3">Your Shopping Cart</Typography>
      { isEmpty ? <EmptyCart /> : <FilledCart />}
    </Container>
  )
}