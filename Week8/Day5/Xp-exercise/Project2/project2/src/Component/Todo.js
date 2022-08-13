import React from "react";
import './Todo.css'

class Todo extends React.Component{
   constructor(){
       super();
       
    this.state={
     task:["Buy some Milk","Do my homework"]
    }
   }
//    componentDidUpdate(){
//      if(this.state.task.length){
//         console.log(this.state.task.length)
//         return(
//             <p>No task today!</p>
//         )
//      }
//    }

   handleText=(evt)=>{
    this.setState({newTask:evt.target.value})
   }
   addTask=()=>{
    this.setState({task:this.state.task.concat(this.state.newTask)})
   }
   deleteTask=(evt)=>{
    evt.target.remove();
   }

   render(){
      return(
        <>
          <h1>Todo's</h1>
          <div>{
            <ul>
                {this.state.task.map(item=>(
                    <li key={item} className="item" onClick={this.deleteTask}>{item}</li>
                ))}
            </ul>
            
            }</div>
          Add a new todo: <input type={"text"} onChange={this.handleText}></input> 
          <button onClick={this.addTask}>Add</button>
        </>
      )
   }
}
export default Todo;