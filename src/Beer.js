import React from 'react';

export default function Beer({ name, brewery, type, abv }) {
  return (
    <div className='beer'>
      <p>Name: {name}</p>
      <p>Brewery: {brewery}</p>
      <p>Type: {type}</p>
      <p>ABV: {abv}</p>
    </div>

  );
}

