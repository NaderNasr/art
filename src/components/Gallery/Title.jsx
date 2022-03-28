import React from 'react';
import { Html } from '@react-three/drei';
import { Typography, useMediaQuery } from '@mui/material';
import { useTheme } from "@mui/material/styles";

const Title = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Html fullscreen position={[0, -4, 0]} style={{ textAlign: "center", height: "auto" }}>
      <Typography
        variant={isMobile ? 'h3' : 'h5'}
        style={{ color: '#BB86FC', background: 'rgba(32, 33, 36, 0.5)' }}
      >The Future of Lorem Ipsum</Typography>
    </Html>
  )
}

export default Title;