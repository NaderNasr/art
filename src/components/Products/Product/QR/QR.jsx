import React, { useEffect, useState } from 'react';
import QRCode from 'qrcode.react'

const QR = () => {
const [src, setSrc] = useState('');
const href = window.location.href;

useEffect(() => {
  setSrc(href);
},[href])

return <QRCode value={src} />
}

export default QR;
