import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Movies from '../MovieList/MovieList';
import { HashRouter as Router, Route } from 'react-router-dom';
import Details from '../Details/Details'
import Edit from '../Edit/Edit'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  // Renders the entire app on the DOM



  render() {
    return (
      <Router>
        <div className="App">

          <Route exact path='/' component={Movies} />
          <Route path='/details' component={Details} />
          <Route path='/edit' component={Edit} />
        </div>
      </Router>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

export default connect(mapReduxStateToProps)(App);