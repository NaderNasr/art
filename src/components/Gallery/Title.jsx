import React from 'react';
import { Html } from '@react-three/drei';
import { Typography, useMediaQuery } from '@mui/material';
import { useTheme } from "@mui/material/styles";

const Title = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.up("sm"));

  return(
  <Html fullscreen position={[0, -4, 0]} style={{ textAlign: "center", height: "auto" }}>
      {isMobile ? (<>
        <Typography variant="h3" style={{ color: '#BB86FC', background: '#202124'  }}>The Future of Lorem Ipsum</Typography>
      </>) : (<>
        <Typography variant="h5" style={{ color: '#BB86FC', background: '#202124'  }}>The Future of Lorem Ipsum</Typography>
      </>) }
  </Html>
  )
}

export default Title;