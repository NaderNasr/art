import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

// using this component for nested routes... outlet may be causing problems...

const ARWrapper = () => {

  useEffect(() => {
    window.scrollTo(0, 0);

    return () => {
      const button = document.querySelector('#ARButton')
      if (button) {
        document.body.remove(button)
        window.location.reload();
      }
    }
  }, [])

  return (
    <div>
      <Outlet />
    </div>
  );
}

export default ARWrapper;