import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import Details from '../Details/Details'

class MovieListItem extends Component {
    
    goToDetails = (event, movie) => {
        let movieToSend = {
            id: this.props.movie.id,
            title: this.props.movie.title,
            description: this.props.movie.description,
            url: this.props.movie.poster
        }
        this.props.dispatch({
            type: 'FIRE_GENRE',
            payload: movieToSend
        });
        this.props.dispatch({
            type: 'FIRE_DESCRIPTION',
            payload: movieToSend
        })
        this.props.history.push('/details')
    }

    render() {
        return (
            <div>
                <Router>
                    <li key={this.props.movie.movie_id} className="listItem">
                        <button onClick={(event) => this.goToDetails(event)}><img alt='movie poster' className="image" src={this.props.movie.poster} /></button>
                        <span>{this.props.movie.title}</span>
                        <span>{this.props.movie.description}</span>
                        <span>{this.props.movie.genre}</span>
                    </li>
                    <Route path='/Details' Component={Details} />
                </Router>
            </div>
        );
    }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
});

export default withRouter(connect(putReduxStateOnProps)(MovieListItem));