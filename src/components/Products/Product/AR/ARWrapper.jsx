import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

// using this component for nested routes... outlet may be causing problems...

const ARWrapper = () => {
  const arCanvas = document.querySelector('.canvas');

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
      <p>Hello AR</p>
      <Outlet />
    </div>
  );
}

export default ARWrapper;