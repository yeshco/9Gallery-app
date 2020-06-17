import React from 'react';

// import {
//   useRouteMatch,
//   // useParams
// } from "react-router-dom";

import apiKey from '../config'


import PicturesTable from './PicturesTable';
import Picture from './Picture';

function Gallery(props){

  fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${props.searchTag}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => response.json())
    .then(response => response = response.photos.photo)
    .then(response => {
      let farm = []
      let server = []
      let id = []
      let secret = []
      for (let i=0; i<23; i++) {
        farm.push(response[i].farm)
        server.push(response[i].server)
        id.push(response[i].id)
        secret.push(response[i].secret)
      }
      return [farm, server, id, secret]
    }).then((response) => {
      return (
      
        <div>
          <PicturesTable>
            <Picture farm={response.farm} server={response.server} id={response.id} secret={response.secret}/>
          </PicturesTable>
        </div>
      )
    })
    .catch( error => console.log("Error fetching data:", error))

    
  }

export default Gallery;