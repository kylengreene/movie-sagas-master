import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MovieListItem from '../MovieListItem/MovieListItem'

class Movies extends Component {


    componentDidMount = () => {
        this.getMovies();
    }

    getMovies = () => {
        this.props.dispatch({
            type: 'FETCH_MOVIES'
        })
    }
    render() {
        return (
            <div>
                <h1>Movies</h1><br />
                <ul className="List">
                    {this.props.reduxState.movies.map((movie) => {
                        return (
                            <MovieListItem key={movie.id} movie={movie} />
                        );
                    })}
                </ul>
            </div>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
});

export default withRouter(connect(putReduxStateOnProps)(Movies));