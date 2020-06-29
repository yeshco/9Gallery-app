// Importing React
import React from 'react';

// Importing withRouter super Component from react-router to be able to get location and match functionality
import {withRouter} from 'react-router-dom'

// Importing Component used
import GalleryItem from './Gallery-item'

// Importing API key
import apiKey from '../config'

// Fetch function
function fetchInfo(searchTerm, changeState) {

    console.log(searchTerm, changeState)
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${searchTerm}&per_page=24&format=json&nojsoncallback=1`)

    // Converting the JSON into JS
    .then(res => res.json())

    // Selecting only the photo metadata
    .then(res => res.photos.photo)

    // Changing the data state in the App component
    .then( res => {
            changeState(res)
        } 
    )
}
    

// The Gallery Component --> Class
class Gallery extends React.Component {
    
    // The function called when the Component is first mounted
    componentDidMount() {

        // Calling functions to Fetch
        fetchInfo(this.props.match.params.searches, this.props.changeState)
    }

    // The function called when the Component is updated
    componentDidUpdate(prevProps) {

        // Checking if the state changed value
        if (this.props.match.params.searches !== prevProps.match.params.searches) {

            // Calling functions to Fetch
            fetchInfo(this.props.match.params.searches, this.props.changeState)
        }
    }
    
    // Render function used in react to put rendering logic
    render() {

        // Setting an array that holds all the created GalleryItem Components
        let arrayOfItems = [];
        if (this.props.data) {      
            for (let i=0; i<this.props.data.length; i++) {
                arrayOfItems.push(<GalleryItem data={this.props.data[i]} alt={this.props.match.params.searches} key={i+1} />) 
            }
        }
        
        // Returning the JSX to render
        return (
            <div className="photo-container">
                <h2>{this.props.match.params.searches}</h2>
                <ul>
                    {arrayOfItems}
                </ul>
            </div> 
        )
    }

        // return (
        //     <div className="photo-container">
        //         <h2>'Click or Search for an Image'</h2>
                    /* <!-- Not Found --> */
                    /* <li className="not-found">
                        <h3>No Results Found</h3>
                        <p>You search did not return any results. Please try again.</p>
                    </li> */
            // </div>
        // )
    // }
}

export default withRouter(Gallery)