import shortid from 'shortid';
import {ADD_MESSAGE,DELETE_MESSAGE} from '../constants'

const message  =  (state = [], action = {}) => {
    switch (action.type) {

    case ADD_MESSAGE:  
        return [...state,{
            type:action.message.type,
            text:action.message.text,
            id:shortid.generate()
        }]
        break;
    case DELETE_MESSAGE:  
        const id = action.id;
        const index = state.findIndex((item)=>item.id === id)
        if(index>=0){
            return [...state.slice(0,index),...state.slice(index+1)]
        }
        break;
    default:
        return state
    }
}
export default message;
