import React from 'react';

import {
  BrowserRouter as Router, Switch, Route
} from 'react-router-dom'

import Header from './Components/Header'
import Nav from './Components/Nav'
import Gallery from './Components/Gallery'


class App extends React.Component {

  constructor(props) {
    super(props)
    this.changeState = this.changeState.bind(this)
    this.state = {refresh: null}
  }

  changeState(val, search) {
    this.setState({
      data : val,
      // search: search
    })
  }

  render() {
    return (
      <div className="container">
        <Router>
  
          <Header />
          <Nav />
  
          {/* ******************** */}
  
          <Switch>
            <Route path='/cats'> 
              <Gallery changeState={this.changeState} path='cat' refresh={this.state.data} data={this.state.data} />
            </Route>
            <Route path='/Dogs'>
              <Gallery changeState={this.changeState} path='dog' refresh={this.state.data} data={this.state.data} />
            </Route>
            <Route path='/Computers'>
              <Gallery changeState={this.changeState} path='computer' refresh={this.state.data} data={this.state.data} />
            </Route>
          </Switch>
  
        </Router> 
      </div>
    )
  }
}

export default App;
