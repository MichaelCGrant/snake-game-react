import React from 'react';

export default function Apple({ appleCoords }) {
  const style = {
    left : `${appleCoords[0]}`,
    top : `${appleCoords[1]}`
  }
 
  return (
    <div data-testid='apple' id='apple' style={style} >Apple</div>
  );
}
