import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import rootReducer from '../reducers/index';
import { initialState } from '../store/initial';
import promise from 'redux-promise-middleware'

const middlewareEnhancer = applyMiddleware(promise, thunk);

export const configureStore = (preloadedState) => {
    const store = createStore(
        rootReducer,
        preloadedState ? preloadedState : initialState,
        middlewareEnhancer
    )

    return store;
}