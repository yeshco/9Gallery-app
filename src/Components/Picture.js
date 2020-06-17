import React from 'react';

function Picture(props) {

  let allPicturesArray = []
  console.log(props)
  for (let i=0; i<24; i++) {
    allPicturesArray.push(
      <li key={i}>
        <img src={`https://farm${props.farm ? props.farm[i] : ''}.staticflickr.com/${props.server ? props.server[i] : ''}/${props.id ? props.id[i] : ''}_${props.secret ? props.secret[i] : ''}.jpg`}alt="" />
      </li>
    )
  }

    if (props.farm === undefined) {
      return null
    } else {
      return (
        <React.Fragment>
          {allPicturesArray}     
        </React.Fragment>
      )
    }
}

    

export default Picture;