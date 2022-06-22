import React from 'react';
import Album from './Album';

export default function AlbumList({ albums }) {
  return (
    <div className='album-list'>
      {
        albums.map((album, i) => {
          return <Album {...album} key={album.name + i + album.id} />;
        })
      }
    </div>
  );
}

