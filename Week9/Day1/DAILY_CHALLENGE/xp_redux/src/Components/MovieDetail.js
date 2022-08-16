import {connect} from 'react-redux';

const MovieDetail=(props)=>{
    return(
        <div style={{display:'inline-block'}}>
            <h1>MovieDetail</h1>
            <h4>{props.movie.title}</h4>
            <h4>{props.movie.releaseDate}</h4>
            <h4>{props.movie.rating}</h4>
        </div>
    )
}
const mapStateToProps=state=>{
    return{
        movie:state.movie
    }
}
export default connect(mapStateToProps)(MovieDetail)