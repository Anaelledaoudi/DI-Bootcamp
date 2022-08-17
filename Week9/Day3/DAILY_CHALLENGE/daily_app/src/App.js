import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import { getUsers,search } from './action';

function App(props) {
  return (
    <div>
      <button onClick={()=>props.dispatch(getUsers())}>Get Users</button>
      <div>
        Search:
        <input type="text" onChange={(e)=>props.dispatch(search(e.target.value))}/>
      </div>
      {
        props.users.map(item=>{
          return(
            <div key={item.id}>
              {item.name}
            </div>
          )
        })
      }
    </div>
  );
}
const mapStateToProps=(state)=>{
   return{
    state:state.filter
   }
}

export default connect(mapStateToProps)(App);
