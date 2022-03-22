import React from 'react'
import Banner from './Banner'
import { BrowserView, MobileView } from 'react-device-detect';
import Intro from './Intro';


const LandingPage = () => {
  return (
    <>
      <BrowserView>
        <div id='toot' style={{display: 'flex', height: '100vh' }}>
          <Banner />
        </div>
          <Intro />
      </BrowserView>
      <MobileView>
        <div style={{ height: '700px' }}>
          <Banner />
        </div>
      </MobileView>
    </>
  )
}

export default LandingPage