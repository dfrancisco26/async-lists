
import React from 'react';
import Ork from './Ork';
export default function orkzList({ orkz = [], }) {
  return (
    <div className='orkz-list'>
      {
        orkz.map((ork, i) => {
          return <Ork {...ork} key={ork.name + i + ork.id}/>;
        })
      }
    </div>
  );
}
