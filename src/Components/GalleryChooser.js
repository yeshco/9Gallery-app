import React from 'react';

import Searchbar from './Searchbar';
import Nav from './Nav'

function GalleryChooser (props){

    return (
      <div>
        <Searchbar />
        <Nav setTag={props.setTag}/>
      </div>
    )
  }

export default GalleryChooser;