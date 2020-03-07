import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import { connect } from 'react-redux';
import Movies from '../MovieList/MovieList'

class App extends Component {
  // Renders the entire app on the DOM

  

  render() {
    return (
      <div className="App">
        <Movies/>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

export default connect(mapReduxStateToProps)(App);