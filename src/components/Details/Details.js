import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


class Details extends Component {

    backToMovies = () => {
        this.props.history.push('/')
    }

    edit = () => {
        this.props.history.push('/edit/')
    }
    render() {
        return (
            <div>
                <h1>{this.props.reduxState.genres.map((genre) => {
                    return (genre.name)
                })} </h1><br />
                <img alt="selected movie poster" src={this.props.reduxState.description[0].poster} />
                <h3>{this.props.reduxState.description[0].description}</h3>
                <button onClick={this.backToMovies}>Back to Movies</button>
                <button onClick={this.edit}>Edit Movie Information</button>
            </div>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
});

export default withRouter(connect(putReduxStateOnProps)(Details));