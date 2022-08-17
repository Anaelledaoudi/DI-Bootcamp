import { getUsers, GET_USERS } from "../action";
import { CHANGE,changeUsers } from "../action";

const initState={robots:[],search:''};
const reducer=(state=initState,action={})=>{
    switch(action.type){
        case GET_USERS:
             return {...state,users:action.payload}
        case CHANGE:
             return {...state,search:action.payload}  
        default:
            return{...state}
     }
}
