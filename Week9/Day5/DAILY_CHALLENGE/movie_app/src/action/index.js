export const SEARCH_MOVIE='SEARCH_MOVIE';
export const FETCH_MOVIES='FETCH_MOVIES';
export const FETCH_MOVIE='FETCH_MOVIE';
export const LOADING='LOADING';

export const search=(txt)=>{
    return{
        type:SEARCH_MOVIE,
        payload:txt
    }
}

export const fetch_movies=(title)=>(dispatch,store)=>{
  fetch(`https://www.omdbapi.com/?apikey=3ef08d68&t=${title}`)
}
export const fetch_movie=(txt)=>{
    return{
        type:FETCH_MOVIE,
        payload:txt
    }
}
export const loading=()=>{
    return{
        type:LOADING,
    }
}