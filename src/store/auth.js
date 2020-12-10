import {ADD_AUTH} from '../constants'
const initialState = {

}

const auth  =  (state = initialState, action = {}) => {
    switch (action.type) {

    case ADD_AUTH:  
        
        return { ...state, }
    default:
        return state
    }
}
export default auth;
