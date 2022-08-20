import { FETCH_MOVIE, FETCH_MOVIES, LOADING, SEARCH_MOVIE } from "../action";

const initState=
{
    text: '',
    movies: [],
    loading: false,
    movie: []
}
export const reducer=(state=initState,action={})=>{
   switch(action.type){
    case SEARCH_MOVIE:
        return {...state,text:action.payload}
    case FETCH_MOVIES:
        return {...state}
    case FETCH_MOVIE:
        return {...state}
    case LOADING:
        return {...state}
    default:
        return {...state}
   }  
}