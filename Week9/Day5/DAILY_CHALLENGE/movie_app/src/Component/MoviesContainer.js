import MovieCard from "./MovieCard";

const MoviesContainer=()=>{
    {
       MovieCard.map(item=>{
         return(
        <>
           <div>{item}</div>
        </>
    )
       }) 
    }
   
}
export default MoviesContainer