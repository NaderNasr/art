import React from "react";
import { Container, Typography, Button, Grid } from '@material-ui/core'

const Cart = ({ cart }) => {

  const EmptyCart = () => (
    <Typography variant="subtitle1">Your shopping cart is empty</Typography>
  );

  const FilledCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
            <div>{item.name}</div>
          </Grid>
        ))}
      </Grid>
      <div className={'placeholder-cardDetails'}>
        <Typography variant="h4">
          Subtotal: {cart.subtotal.formatted_with_symbol}
        </Typography>
        <div>
          <Button className={'placeholder-emptyButton'} size="large" type="button" variant="contained" color="secondary">
            Empty Cart
          </Button>
        </div>
      </div>
    </>
  );

  return (
    <Container>
      <div className={'placeholder-toolbar'} />
      <Typography className={'placeholder-title'} variant="h3">Your Shopping Cart</Typography>
      {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
    </Container>
  )
}

export default Cart;