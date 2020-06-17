import React from 'react';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  // NavLink
} from "react-router-dom"; 

import GalleryChooser from './Components/GalleryChooser'
import Gallery from './Components/Gallery'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {};
  }


  render() {
    return (
        
        <div className="container">
          <Router>
            <GalleryChooser />
            <Switch>
              <Route path='/Cats'>
                <Gallery searchTag='Cat' />
              </Route>
              <Route path='/Dogs'>
                <Gallery searchTag='Dog' />
              </Route>
            </Switch>
          </Router>
        </div>
    );
  }
  
}

export default App;
