import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


class Edit extends Component {
    state = {
        editInput: {
            genres: '',
            desciption: ''
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
            type: 'NEW_DESCRIPTION',
            payload: this.state.editInput
        })
        // this.props.history.push('/checkout');
    }

    cancel = () => {
        this.props.history.push('/details');
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input placeholder='Genre' value={this.state.editInput.genres}
                        onChange={(event) => this.handleChangeFor('genres', event)}></input>
                    <input placeholder='Description' value={this.state.editInput.description}
                        onChange={(event) => this.handleChangeFor('desciption', event)}></input>
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