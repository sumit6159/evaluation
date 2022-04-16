import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger'
import rootReducer from './root-reducer'
import reduxThunk from 'redux-thunk'

const middlewares = [reduxThunk]

if(process.env.NODE_ENV==='development'){
    middlewares.push(logger)
}

const store = createStore(rootReducer,applyMiddleware(...middlewares))

export default store

// import { createStore, applyMiddleware } from 'redux'
// import thunkMiddleware from 'redux-thunk'
// import createLogger from 'redux-logger'
// import rootReducer from '../reducers/reducers'
// //import Immutable from 'immutable'
// const loggerMiddleware = createLogger()
// //const initialState=0
// function store() {
//     return createStore(
//     rootReducer,
//      {postsBySubreddit:{},selectedSubreddit:'reactjs'},
//      applyMiddleware(
//      thunkMiddleware,
//     loggerMiddleware
//   )
//  )
// }
//   export default store