import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux'
import { getUsers } from './action';
import { changeUsers } from './action';

function App() {
  const getUsers=()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res=>res.json())
      .then(data=>{
        console.log(data);
        props.show(data);
      })
      .catch(e=>{
        console.log(e)
      })
  }
  saveSearch=(evt)=>{
    {search:evt.target.value}
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <input type={'text'} onChange={()=>saveSearch()}/>
        <button onClick={()=>getUsers()}>Get Users</button>
        {
          props.users.map(item=>{
            if(item.names.includes(props.search)){
            return(
              <div key={item.id}>
                 {item.name}
              </div>
            )
          }
          })
        }
      </header>
    </div>
  );
}

const mapStateToProps=(state)=>{
  return{
      users:state.users,
      search:state.search
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
      show:(arr)=>dispatch(getUsers(arr))
      
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
