import {connect} from 'react-redux';
import { fetch_movie } from '../action';

class Movie extends React.Component{
    constructor(){
       super();
       this.state={
 
       }
    }
    render(){
        <>  
        {this.props.dispatch(fetch_movie(this.props.searchText))}
        <Link to="/" className="btn btn-default text-light"> Go Back To Search </Link>
        </>
    }
}

 const mapStateToProps=(state)=>{
    return{
     searchText:state.text
    }
 }
export default connect(mapStateToProps)(Movie)