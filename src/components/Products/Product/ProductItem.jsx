import { Button } from "@mui/material";
import React, { useState } from "react";
import AvailableProductsAlert from "../../AvailableProductsAlert";
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
// import Poster from "../../src/1.gltf"
import '@google/model-viewer'

import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';

const ProductItem = ({ product }) => {
  const [open, setOpen] = useState(false); // Add to custom hook

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  //Remove html tags from JSON data

  // const regex = /(<([^>]+)>)/ig
  // const description = product.description
  // const descriptionStriped = description.replace(regex, "");

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <div>
      <AvailableProductsAlert product={product} />
      <img style={{ height: '10em' }} alt="product" src={product.image?.url} />
      {/* <model-viewer src={Poster} ar ar-placement="wall" ar-modes="webxr scene-viewer quick-look" camera-controls alt="A 3D model of some wall art"></model-viewer> */}
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <p style={{fontSize:'24px'}}>{product.name}</p>
        {product.is.sold_out ? <></> : <Button startIcon={<ShoppingCartCheckoutIcon />}>Add To Cart</Button>}
      </div>
      <Button onClick={handleOpen}>Learn More</Button>
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
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              {product.name}
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              {product.is.sold_out ? <></> : <Button startIcon={<ShoppingCartCheckoutIcon />}>Add To Cart</Button>}
            </Typography>
          </Box>
        </Fade>
      </Modal>
      {/* <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
        <p>{product.price.formatted_with_code}</p>
      </div> */}
    </div>
  );
};

export default ProductItem;