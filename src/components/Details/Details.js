import React, { Component } from 'react';
import { connect } from 'react-redux';

class Details extends Component {


    render() {
        return (
            <div>
                <h1>{this.props.reduxState.genres.map((genre) =>{
                    return(genre.name)
                })} </h1><br />
                <img src={this.props.reduxState.description[0].poster} />
                <h3>{this.props.reduxState.description[0].description}</h3>
            </div>
        )
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(Details);