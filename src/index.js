import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';


const sagaMiddleware = createSagaMiddleware();

// Create the rootSaga generator function
function* sagaFBIAgent() {
    yield takeEvery('FETCH_MOVIES', fetchMovies);
    yield takeEvery('FIRE_GENRE', genreMachine);
    yield takeEvery('FIRE_DESCRIPTION', descriptionMachine)
}


function* fetchMovies() {

    let movieArray = [];
    yield axios({
        method: 'GET',
        url: '/movies'
    }).then((response) => {
        movieArray = response.data
        console.log('in fetchMovies logging response.data', movieArray);
    }).catch((error) => {
        alert("unable to get movies in fetchMovies", error);
    })
    yield put({
        type: 'SET_MOVIES',
        payload: movieArray
    })
}

function* genreMachine(action) {
    console.log(action.payload.id);
    let genreArray = [];
    yield axios({
        method: 'GET',
        url: `/details/${action.payload.id}`
    }).then((response) => {
        genreArray = response.data
    }).catch((error) => {
        alert("unable to get details in genreMachine", error);
    })
    yield put({
        type: 'SET_GENRES',
        payload: genreArray
    })
}

function* descriptionMachine(action) {
    let description = [
        {
            description: action.payload.description,
            poster: action.payload.url
        }
    ]
    yield put({
        type: 'SET_DESCRIPTION',
        payload: description
    })
}
// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return state = action.payload;
        default:
            return state;
    }
}

const description = (state = [], action) => {
    switch (action.type) {
        case 'SET_DESCRIPTION':
            return state = action.payload;
        default:
            return state;
    }
}
// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        description
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(sagaFBIAgent);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>,
    document.getElementById('root'));
