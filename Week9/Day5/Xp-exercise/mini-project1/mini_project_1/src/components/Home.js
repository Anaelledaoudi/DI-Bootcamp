import React from "react";
import myImg from '../assets/blog.png';
import {connect} from 'react-redux';
import '../style.css';


class Home extends React.Component{
   constructor(){
      super();
      this.state={

      }
   }
   render(props){
      return(
         <>
           <h5>Home</h5>
         {
            this.props.posts.length>0 ?(
           this.props.posts.map(item=>{
            return(
              <div key={item.id} className={'post'}>
                <a href="./Post.js">{item.title}</a>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque volutpat, tortor lobortis fringilla dapibus, arcu lacus dapibus est, imperdiet auctor est odio at arcu. Integer porttitor nunc ante, eu eleifend tellus auctor at. Quisque ligula augue, congue sit amet metus ac, feugiat cursus odio. Suspendisse rutrum ex at lorem blandit, a fringilla quam faucibus. Integer fermentum ipsum ac leo ornare, vel vulputate odio laoreet.</p>
                <img src={myImg} alt="logo"/> 
              </div>
            )
           })
           ):(
            <div>No Post to show</div>
           )
         }

         </>
      )
   }
}
const mapStateToProps=(state)=>{
   return{
      posts:state.posts
   }
}
export default connect(mapStateToProps)(Home);