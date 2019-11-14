import React from 'react';
import axios from 'axios';
import path from 'path';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

class App extends React.Component {
    render(){
      return(
        <Router>
          <div>
            <h1>UWA Motorsports - EV Showcase</h1>
            <nav>
              <Link to='/'>Home</Link>
              <Link to='/articles'>Articles</Link>
              <Link to='/gallery'>Gallery</Link>
              <Link to='/create'>Create an Article</Link>
            </nav>
            <Switch>
              <Route exact path='/'><h1>Home</h1></Route>
              <Route path='/articles'><h1>Articles</h1></Route>
              <Route path='/gallery'><h1>Gallery</h1></Route>
              <Route path='/create'><h1>Create Article</h1></Route>
            </Switch>
          </div>
        </Router>
      )
    }
}

export default App;
