import {combineReducers,createStore,applyMiddleware} from "redux"
import auth from "./auth"
import message from "./message"
import thunk from "redux-thunk"
import logger from "redux-logger"
import {composeWithDevTools} from "redux-devtools-extension"

const reducers  = combineReducers({
    auth,
    message
})

const store = createStore(reducers,composeWithDevTools(applyMiddleware(thunk,logger)))

export default store