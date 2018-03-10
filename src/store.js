import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import reducer from './reducers/blogReducer'
import notificationReducer from './reducers/notificationReducer'

const finalReducer = combineReducers({
    blogs: reducer,
    message: notificationReducer
})

const store = createStore(finalReducer, applyMiddleware(thunk))

export default store