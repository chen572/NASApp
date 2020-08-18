import React from 'react';
import { Orbitals } from 'react-spinners-css';

function Loading() {
  return (
    <div
      style={{
        position: 'absolute',
        width: '100%',
        height: '80%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Orbitals />
    </div>
  );
}

export default Loading;
