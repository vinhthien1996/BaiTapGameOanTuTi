import { combineReducers, createStore } from 'redux';

import { GameReducer } from './GameReducer';

const rootReducer = combineReducers({
    stateGame: GameReducer
});

export const store = createStore(rootReducer);