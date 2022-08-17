import { GET_USERS, SEARCH_USERS } from "../action"

const initState={users:[],filter:[]}

export const reducer=(state=initState,action={})=>{
   switch(action.type){
    case GET_USERS:
        return {...state,users:action.payload,filter:action.payload}
    case SEARCH_USERS:
        const filter=state.users.filter(item=>{
            return item.name.toLowerCase().includes(action.payload.toLowerCase())
        })
        return {...state,filter:filter}
        default:
            return {...state}
    } 
}