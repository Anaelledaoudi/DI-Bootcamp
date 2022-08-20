import {connect} from 'react-redux';
import { search } from '../action';

class SearchForms extends React.Component{
    constructor(){
       super();
       this.state={
 
       }
    }
    changeText=(evt)=>{
       this.props.txt(evt.target.value)
    }
    sendData=()=>{
        this.props.searchText.replace(/ /g, "+")
    }
    render(){
       <>
        <input type={'text'} onChange={'changeText'}/>
        <button onClick={'sendData'}>Submit</button>
       </>
    }
}
const mapDispatchToProps=(dispatch)=>{
   return{
     txt:(val)=>dispatch(search(val))
   }
}
const mapStateToProps=(state)=>{
   return{
    searchText:state.text
   }
}
export default connect (mapStateToProps, mapDispatchToProps)(SearchForms)