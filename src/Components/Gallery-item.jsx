// Importing React
import React from 'react';

// The GalleryItem Component
function GalleryItem(props) {

    // Returning the JSX to render
    // Each image has as it's src a URL with metadata fetched in the Gallery Component 
    return (
        <li>
            <img src={`https://farm${props.data.farm}.staticflickr.com/${props.data.server}/${props.data.id}_${props.data.secret}.jpg`} alt={props.alt} />
        </li>
    )

}

export default GalleryItem;