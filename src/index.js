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
    yield takeEvery('GET_ALL_FAVORITES', getAllFavorites)
    yield takeEvery('GET_FAVORITE', getCatagoryFavorite)
    yield takeEvery('ADD_FAVORITE', addToFavorite)
    yield takeEvery('REMOVE_FAVORITE', removeFavorite)
    yield takeEvery('DELETE_GIPHY', deleteFavorite)
  }

  function* getSearch(action){
    let searchTerm = action.payload;
    const searchResponse = yield axios.get(`api/search/${searchTerm}`)
    yield put({ type: 'SET_SEARCH', payload: searchResponse.data });
  }
  function* getAllFavorites(){
    const favoriteResponse = yield axios.get(`api/favorite`)
    yield put({ type: 'SET_FAVORITES', payload: favoriteResponse.data });
  }
  function* getCatagoryFavorite(action){
    const favoriteResponse = yield axios.post(`api/favorite/${action.payload}`)
    yield put({ type: 'SET_FAVORITES', payload: favoriteResponse.data });
  }
  function* addToFavorite(action){
    yield axios.post(`/api/favorite`, action.payload)
    put({ type: 'SET_FAVORITES'})
  }
  function* removeFavorite(action){
    yield axios.put(`/api/favorite/${action.payload}`)
    put({ type: 'SET_FAVORITES'})
  }
  function* deleteFavorite(action){
    yield axios.delete(`/api/favorite/${action.payload}`)
    put({ type: 'SET_FAVORITES'})
  }

const sagaMiddleware = createSagaMiddleware();

const giphySearch = (state = [], action) => {
    switch (action.type) {
        case 'SET_SEARCH':
            console.log(action.payload)
            return action.payload
     
    default:
        console.log('default state')
            return state;
            }
    };

    const giphyFavorites = (state = [], action) => {
        switch (action.type) {
            case 'SET_FAVORITES':
                console.log(action.payload)
                return action.payload
        default:
            console.log('default state')
                return state;
                }
        };

    const store = createStore(
        combineReducers({ giphySearch,giphyFavorites}),
        applyMiddleware(sagaMiddleware, logger),
    );
    sagaMiddleware.run(rootSaga);


    ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('react-root'));