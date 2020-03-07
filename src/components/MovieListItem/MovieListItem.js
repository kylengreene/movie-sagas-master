import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieListItem extends Component {
goToDetails =(id)=>{
console.log('you clicked me with id', id );

}
    render() {
        return (
            
            <div>
                <li onClick= {()=> this.goToDetails(this.props.movie.id)} className = "listItem">
                    <img className= "image" src= {this.props.movie.poster} />
                    <span>{this.props.movie.title}</span>
                    <span>{this.props.movie.description}</span>
                    
                </li>
            </div>
        );
    }

}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(MovieListItem);