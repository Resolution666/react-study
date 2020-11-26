
const initialState = {
    data:1
}

const reducer =  (state = initialState, { type }) => {
    switch (type) {
        case "INCREMENT":
            return {...state,data:state.data+1}
        case "DECREMENT":
            return {...state,data:state.data-1}
        default :
         return state;
    }
}

export default reducer;