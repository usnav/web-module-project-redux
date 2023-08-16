import { combineReducers } from 'redux';

import movieReducer from './movieReducer';

import favoritesReducer from '../reducers/favoritesReducer';

const rootReducer = combineReducers({
    movieReducer, 
    favoritesReducer
})

export default rootReducer;