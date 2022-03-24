import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { BrowserView, MobileView } from 'react-device-detect';
import AR from '../../../mobile.png'
import { Link } from 'react-router-dom'
import ReactReadMoreReadLess from "react-read-more-read-less";

import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import ModalQR from './ModalQR';
import AvailableProductsAlert from '../../AvailableProductsAlert'


const ProductModal = ({ handleClose, product, open, onAddToCart }) => {
  const [openModal, setOpenModal] = useState(false);

  const openQR = () => setOpenModal(true);
  const closeQR = () => setOpenModal(false);


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

  //Remove html tags from JSON description data
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
                    <div style={{ display: 'flex' }}>
                      <AvailableProductsAlert product={product} />
                      <h1>{product.name}</h1>
                    </div>
                    <p>${product.price.formatted_with_code}</p>
                    {<br />}
                    <img src={AR} alt="AR button" style={{ width: '40px', transform: 'rotate(90deg)', paddingLeft: '2px' }} />
                    <Button onClick={openQR}>View in AR</Button>
                    <div style={{ display: 'flex' }}>
                      {product.is.sold_out ? <></> : <Button startIcon={<ShoppingCartCheckoutIcon />} onClick={() => onAddToCart(product.id, 1)}>Add To Cart</Button>}
                      <ModalQR openModal={openModal} closeQR={closeQR} />
                      <Link to={`/AR/${product.id}`}>
                        <Button>
                          View AR in Browser
                        </Button>
                      </Link>
                    </div>
                    {<br />}
                    <div style={{ width: "65%" }}>
                      Description:
                      <p>{descriptionStriped}</p>
                    </div>
                  </Typography>
                </CardContent>
              </Box>
              <img src={product.image?.url} alt="cover" />
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
            <Card sx={style} style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Box>
                <CardContent sx={{ flex: '1 0 auto' }} style={{ justifyContent: 'space-between' }}>
                  <Typography component="div" variant="h5">
                    <div style={{ display: 'flex' }}>
                      <h1>{product.name}</h1>
                      <AvailableProductsAlert product={product} />
                    </div>
                    <p>${product.price.formatted_with_code}</p>
                    {<br />}
                    <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                      {product.is.sold_out ? <></> : <Button startIcon={<ShoppingCartCheckoutIcon />} onClick={() => onAddToCart(product.id, 1)}></Button>}
                      <Link to={`/AR/${product.id}`}>
                        <Button>
                          <img src={AR} alt="AR button" style={{ width: '40px', transform: 'rotate(90deg)', paddingLeft: '2px' }} />
                        </Button>
                      </Link>
                    </div>
                    {<br />}
                    <img style={{ width: '100%' }} src={product.image?.url} alt="cover" />
                    <div style={{ width: "100%" }}>
                      Description:
                    {<br />}
                    {<br />}

                      {/* {descriptionStriped} */}
                      <ReactReadMoreReadLess
                        charLimit={200}
                        readMoreText={` MORE 🔻`}
                        readLessText={` LESS 🔺`}
                      >
                        {descriptionStriped}

                      </ReactReadMoreReadLess>
                    </div>
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          </Fade>
        </Modal>
      </MobileView>
    </>
  )
}

export default ProductModal