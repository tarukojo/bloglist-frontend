import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import userReducer from './reducers/userReducer'
import reducer from './reducers/blogReducer'
import notificationReducer from './reducers/notificationReducer'


const finalReducer = combineReducers({
    users: userReducer,
    blogs: reducer,
    message: notificationReducer
})

const store = createStore(finalReducer, applyMiddleware(thunk))

export default store