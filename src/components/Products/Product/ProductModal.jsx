import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { BrowserView, MobileView } from 'react-device-detect';
import AR from '../../../mobile.png'


import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';


const ProductModal = ({ handleClose, product, open }) => {

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '75%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    clear: 'both',
    overflow: 'scroll',
    height: '90%',
    display: 'block'
  };

  const styleMobile = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 200,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    clear: 'both',
    display: 'table'
  };
  //Remove html tags from JSON data

  const regex = /(<([^>]+)>)/ig
  const description = product.description
  const descriptionStriped = description.replace(regex, "");

  return (
    <>
      <BrowserView>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <Card sx={style} style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }} style={{ justifyContent: 'space-between' }}>
                  <Typography component="div" variant="h5">
                    <p>{product.name}</p>
                    <p>{product.price.formatted_with_code}</p>
                    {<br />}
                    {/* Your local IP address for now, then set domain URL to redirect to mobile view */}
                    <p>{descriptionStriped}</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      {product.is.sold_out ? <></> : <Button startIcon={<ShoppingCartCheckoutIcon />}>Add To Cart</Button>}
                      <div>
                        <Button>
                          <img src={AR} alt="AR button" style={{ width: '40px', marginRight: '10px' }} />
                          View in AR
                        </Button>
                      </div>
                    </div>
                  </Typography>
                </CardContent>
              </Box>
              <CardMedia
                component="img"
                sx={{ width: 550 }}
                image={product.image?.url}
                style={{
                  width: '40%',
                  height: '100%',
                  objectFit: 'cover'
                }}
                alt="Image"
              />
            </Card>
          </Fade>
        </Modal>
      </BrowserView>

      <MobileView>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <Card sx={styleMobile} style={{ justifyContent: 'space-between', marginTop: '20%' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }} style={{ justifyContent: 'space-between' }}>
                  <Typography component="div" variant="h5" style={{ paddingTop: '10em' }}>
                    {<br />}
                    {/* Your local IP address for now, then set domain URL to redirect to mobile view */}
                    <p>{product.name}</p>
                    <p>{product.price.formatted_with_code}</p>
                    <p>{descriptionStriped}</p>
                    {product.is.sold_out ? <></> : <Button startIcon={<ShoppingCartCheckoutIcon />}>Add To Cart</Button>}
                    <Button>
                      <img src={AR} alt="AR button" style={{ width: '40px', marginRight: '10px' }} />
                      View in AR
                    </Button>
                  </Typography>
                </CardContent>
              </Box>
              <CardMedia
                style={{
                  position: 'absolute',
                  top: '15%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)'
                }}
                component="img"
                sx={{ width: 250 }}
                image={product.image?.url}
                alt="Image"
              />
            </Card>
          </Fade>
        </Modal>
      </MobileView>
    </>
  )
}

export default ProductModal