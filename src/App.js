// Importing React
import React from 'react';

//Importing react-router basics
import {
  BrowserRouter as Router, Switch, Route
} from 'react-router-dom'

// Importing components used
import Header from './Components/Header'
import Nav from './Components/Nav'
import Gallery from './Components/Gallery'
import Home from './Components/Home'

// Main Component --> Class
class App extends React.Component {

  // Constructor function to:
  // 1) Bind functions used somwhere else
  // 2) Initialize state
  constructor(props) {
    super(props)
    this.changeState = this.changeState.bind(this)
    this.changeState2 = this.changeState2.bind(this)

    // Initilaizing search state so the Header component is always controlled
    this.state = {
      search: '',
    }
  }

  // Changing state when data from the Flickr API is fetched in Gallery-->fetch
  changeState(data) {
    this.setState({
      data : data
    })
  }

  // Changeing the search data when the Header-->input is updated
  changeState2(search) {
    this.setState({
      search : search
    })
  }

  // Render function used in react to put rendering logic
  render() {
    
    // Returning JSX to render
    return (
      <div className="container">
        <Router>

          <Header changeState2={this.changeState2} searchValue={this.state.search} />
          <Nav />
  
          {/* ******************** */}
  
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/:searches"> 
              <Gallery changeState={this.changeState} data={this.state.data} />
            </Route>
          </Switch>
  
        </Router> 
      </div>
    )
  }
}

export default App;
