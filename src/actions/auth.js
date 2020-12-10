import axios from "axios"
export const addAuthActions = (body)=>{
    return (dispatch)=>{
        return axios.post("/api/user/signup",body)
    }
}
export const isAuthActions = (body)=>{
    return (dispatch)=>{
        return axios.get("/api/user/"+body)
    }
}


