import axios from "axios"
export const addAuthActions = (body)=>{
    return (dispatch)=>{
        return axios.post("/api/user/signup",body)
    }
}