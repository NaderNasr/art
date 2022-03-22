import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode.react';

const QR = ( product ) => {
  const [src, setSrc] = useState('');

  useEffect(() => {
    QRCode
  })

  const url = window.location.href;
  console.log(url);
  return(
    <p>QR Code</p>
  );
}

export default QR;