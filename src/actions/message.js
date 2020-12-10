import { ADD_MESSAGE,DELETE_MESSAGE } from "../constants";
export const addMessageAction = (data)=>{
   return {
       type:ADD_MESSAGE,
       message:data
   }
}
export const delMessageAction = (data)=>{
   return {
       type:DELETE_MESSAGE,
       id:data
   }
}