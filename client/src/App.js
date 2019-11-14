import React from 'react';
import axios from 'axios';
import path from 'path';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Create from './pages/Create';
import Articles from './pages/Articles'

class App extends React.Component {
    render(){
      return(
        <Router>
          <div>
            <h1>UWA Motorsports - EV Showcase</h1>
            <nav>
              <Link to='/client/'>Home</Link>
              <Link to='/client/articles'>Articles</Link>
              <Link to='/client/gallery'>Gallery</Link>
              <Link to='/client/create'>Create an Article</Link>
            </nav>
            <Switch>
              <Route exact path='/client/'><h1>Home</h1></Route>
              <Route path='/client/articles'><h1><Articles /></h1></Route>
              <Route path='/client/gallery'><h1>Gallery</h1></Route>
              <Route path='/client/create'><Create /></Route>
            </Switch>
          </div>
        </Router>
      )
    }
}

export default App;
