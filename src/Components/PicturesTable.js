import React from 'react';
// import Picture from './Picture';

function PicturesTable(props) {
  return (
    <div className="photo-container">
      <h2>Results</h2>
      <ul>
        {props.children}
      </ul>
    </div>
  )
}

export default PicturesTable;