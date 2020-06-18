import React from 'react';
import ReactDOM from 'react-dom';
//redux linking 
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

//middleware
import logger from 'redux-logger';
import { takeEvery, put } from 'redux-saga/effects'
import createSagaMiddleware from 'redux-saga';
import axios from 'axios';


import App from './components/App/App';

function* rootSaga() {
    yield takeEvery('GET_SEARCH', getSearch)
  }

  function* getSearch(action){
    const searchResponse = yield axios.post(`api/search`, action.payload)
    yield put({ type: 'SET_SEARCH', payload: searchResponse.data });
  }

const sagaMiddleware = createSagaMiddleware();

const giphyState = (state = [], action) => {
    switch (action.type) {
        case 'SET_SEARCH':
            console.log(action.payload)
            return action.payload
        case 'SET_FAVORITES':
            console.log(action.payload)
            return action.payload
    default:
        console.log('default state')
            return state;
            }
    };

    const store = createStore(
        combineReducers({ giphyState }),
        applyMiddleware(sagaMiddleware, logger),
    );
    sagaMiddleware.run(rootSaga);


    ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('react-root'));