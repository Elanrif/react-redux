import { GET_USER } from "../actions/user.action";

const initialState = { user :"From Scratch"}

export default function userReducer(state=initialState,action){
    switch(action.type){
        case GET_USER:
            return action.payload ; 
        default : 
            return state; 
    }
}