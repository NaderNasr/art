import React from "react";
import { Container, Typography, Button, Grid, LinearProgress } from '@material-ui/core';
import { Alert, Box } from "@mui/material";
import { Link } from 'react-router-dom'
import makeStyles from './styles';
import CartItem from './CartItem/CartItem';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import { BrowserView, MobileView } from 'react-device-detect';


const Cart = ({ cart, onRemoveFromCart, onEmptyCart, onUpdateCartQuantity }) => {
  const classes = makeStyles();

  const EmptyCart = () => (
    <Typography variant="subtitle1">
      <Alert severity="error">Your shopping cart is empty </Alert>
      <div style={{ marginTop: '15px' }}>
        <Link to='/'>
          <Button variant="contained" style={{ backgroundColor: '#BB86FC', color: '#FFFFFF' }}>Browse Products</Button>
        </Link>
      </div>
    </Typography>
  );

  const FilledCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
            <CartItem item={item} onRemoveFromCart={onRemoveFromCart} onUpdateCartQuantity={onUpdateCartQuantity} />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant="h4">
          Subtotal: {cart.subtotal.formatted_with_symbol}
        </Typography>
        <div>
          <Button className={classes.emptyButton} onClick={onEmptyCart} size="large" type="button" variant="contained" color="secondary">
            Empty Cart
          </Button>
          <Button component={Link} to={"/checkout"} className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">
            Checkout
          </Button>
        </div>
      </div>
    </>
  );

  if (!cart.line_items) return (
    <Box sx={{ width: '50%', marginLeft: '25%', marginTop: '25%' }}>
      <p>Loading</p>
      <LinearProgress />
    </Box>
  )

  return (
    <Container>
      <a href="/"><ArrowBackIcon /></a>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h3" gutterBottom>Your Shopping Cart</Typography>
      {cart.line_items.length === 0 ? <EmptyCart /> : <FilledCart />}
    </Container>
  )
}

export default Cart;