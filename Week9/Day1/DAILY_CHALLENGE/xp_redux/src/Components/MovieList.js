import {connect} from 'react-redux'
import { detail } from '../action'

const MovieList=(props)=>{
    return(
        <div style={{display:'inline-block'}}>
            <h1>MovieList</h1>
            {
                props.movies.map((movie,i)=>{
                    return(
                     <div key={i}>
                        {movie.title}<button onClick={()=>props.m(movie)}>Detail</button>
                     </div>
                    )
                })
            }
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        movies:state.movies
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        m:(obj)=>dispatch(detail(obj))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(MovieList)