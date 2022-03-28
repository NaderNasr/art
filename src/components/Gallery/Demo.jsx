import React from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import demo from './ardemo.gif';

const Demo = () => {

  return(
    <>
    <MobileView>
      <img src={demo} style={{ width: "200px", height: "auto" }} />
    </MobileView>

    <BrowserView>
      <img src={demo} />
    </BrowserView>
    </>
  )
}

export default Demo;