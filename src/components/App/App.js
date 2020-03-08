import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Movies from '../MovieList/MovieList';
import { HashRouter as Router, Route } from 'react-router-dom';
import Details from '../Details/Details'
import createHistory from 'history/createBrowserHistory'



class App extends Component {
  // Renders the entire app on the DOM

  click = (event) => {
    const history = createHistory();
    console.log('test button', history);
    this.props.history.push({pathway: '/details'});
  }

  render() {
    return (
      <Router>
      <div className="App">

          <button onClick={(event) => this.click(event)}>Test Button</button>
          <Route exact path='/' component={Movies} />
          <Route path='/details' component={Details} />
      </div>
      </Router>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

export default connect(mapReduxStateToProps) (App);