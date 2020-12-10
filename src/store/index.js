import {combineReducers,createStore,applyMiddleware} from "redux"
import auth from "./auth"
import thunk from "redux-thunk"
import logger from "redux-logger"

const reducers  = combineReducers({
    auth
})

const store = createStore(reducers,applyMiddleware(thunk,logger))


export default store