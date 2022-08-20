import React from "react";
import {connect} from 'react-redux';

class Post extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
           <>
           {
            console.log(this.props.post.id)
           }
             <h5>he standard chunk of Lorem Ipsum used since the 1500s is reproduced</h5>
             <p>Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
           </>
        )
    }
}
const mapStateToProps=(state,ownProps)=>{
    return{
       post:state.posts
    }
 }
export default connect(mapStateToProps)(Post);