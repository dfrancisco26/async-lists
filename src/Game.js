import React from 'react';

export default function Game({ name, platform, genre, rating }) {
  return (
    <div className='game'>
      <p>Name: {name}</p>
      <p>Platform: {platform}</p>
      <p>Genre: {genre} </p>
      <p>Rating: {rating}/10 </p>
    </div>
  );
}

