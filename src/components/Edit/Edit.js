import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


class Edit extends Component {
    state = {
        editInput: {
            id: this.props.reduxState.description[0].id,
            genres: 1,
            description: this.props.reduxState.description[0].description
        }
    }

    handleChangeFor = (propertyName, event) => {
        this.setState({
            editInput: {
                ...this.state.editInput,
                [propertyName]: event.target.value
            }
        })
        console.log('logging from handle change', this.state);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch({
            type: 'NEW_GENRE',
            payload: this.state.editInput
        })

        this.props.history.push('/');
    }
    handleChangeFor2 = (propertyName, event) => {
        this.setState({
            editInput: {
                ...this.state.editInput,
                [propertyName]: event.target.value
            }
        })
        console.log('logging from handle change', this.state);
    }

    handleSubmit2 = (event) => {
        event.preventDefault();
        this.props.dispatch({
            type: 'NEW_DESCRIPTION',
            payload: this.state.editInput
        })

        this.props.history.push('/');
    }

    cancel = () => {
        this.props.history.push('/details');
    }
    render() {
        return (
            <div>
                <form required onSubmit={this.handleSubmit}>
                    <p>Add Genre or Edit Description</p>
                    <select onChange={(event) => this.handleChangeFor('genres', event)}  id="genres" name= "Add Genre">
                        <option value= '1'>Adventure</option>
                        <option value='2'>Animated</option>
                        <option value='3'>Biographical</option>
                        <option value='4'>Comedy</option>
                        <option value='5'>Disaster</option>
                        <option value='6'>Drama</option>
                        <option value='7'>Epic</option>
                        <option value='8'>Fantasy</option>
                        <option value='9'>Musical</option>
                        <option value='10'>Romantic</option>
                        <option value='11'>Science Fiction</option>
                        <option value='12'>Space-Opera</option>
                        <option value='13'>Superhero</option>
                    </select>
                    <button type="submit">
                        Submit
          </button>
                </form>
                    {/* <input placeholder='Genre' value={this.state.editInput.genres}
                        onChange={(event) => this.handleChangeFor('genres', event)}></input> */}
                <form required onSubmit={this.handleSubmit2}>
                    <input placeholder='Description' value={this.state.editInput.description}
                        onChange={(event) => this.handleChangeFor2('description', event)}></input>
                    <button type="submit">
                        Submit
          </button>
                </form>
                
                <button onClick={this.cancel}>Cancel Edits</button>
            </div>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
});

export default withRouter(connect(putReduxStateOnProps)(Edit));