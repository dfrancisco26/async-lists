import React from 'react';

export default function Album({ name, artist, genre, year }) {
  return (
    <div className='album'>
      <p>{name} by {artist}</p>
      <p>Genre: {genre}</p>
      <p>Year released: {year}</p>
    </div>
  );
}
