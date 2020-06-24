import React from 'react';

import {useLocation} from 'react-router-dom'

import GalleryItem from './Gallery-item'
import apiKey from '../config'


class Gallery extends React.Component {
    
    componentDidMount() {
        console.log('mounted')
        fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${this.props.path}&per_page=24&format=json&nojsoncallback=1`)
        .then(res => res.json())
        .then((res) => {console.log(res.photos.photo[0].title)
            return res.photos.photo;
        })
        .then( res => {
        
        this.props.changeState(res, this.props.path)
            } 
        )
    }

    componentDidUpdate(prevProps) {
        if (this.props.path !== prevProps.path) {
            console.log('refreshed')
            fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${this.props.path}&per_page=24&format=json&nojsoncallback=1`)
            .then(res => res.json())
            .then((res) => {console.log(res.photos.photo[0].title)
                return res.photos.photo;
            })
            .then( res => {
            this.props.changeState(res, this.props.path)
            } 
            )
        }
    }
    
    render() {
        return (
            <div className="photo-container">
                <h2>{this.props.path}</h2>
                <ul>
                    <GalleryItem />
                    <li>
                        <img src="https://farm5.staticflickr.com/4342/36338751244_316b6ee54b.jpg" alt="" />
                    </li>
                    <li>
                        <img src="https://farm5.staticflickr.com/4343/37175099045_0d3a249629.jpg" alt="" />
                    </li>
                    <li>
                        <img src="https://farm5.staticflickr.com/4425/36337012384_ba3365621e.jpg" alt="" />
                    </li>
                    {/* <!-- Not Found --> */}
                    <li className="not-found">
                        <h3>No Results Found</h3>
                        <p>You search did not return any results. Please try again.</p>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Gallery