import Modal from '@mui/material/Modal';
import React from 'react'
import Box from '@mui/material/Box';
import QR from './QR/QR';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  width: '130px',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ModalQR = ({ openModal, closeQR }) => {
  return (
    <div>
      <Modal
        open={openModal}
        onClose={closeQR}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>

          <QR />

          <p style={{ textAlign: 'center', marginTop: '20px', display:'flex' }}>Scan me with your device!</p>
        </Box>
      </Modal>
    </div>
  );
}

export default ModalQR