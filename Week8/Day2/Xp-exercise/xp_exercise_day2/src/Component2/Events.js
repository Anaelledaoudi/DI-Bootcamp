import React from "react";

class Events extends React.Component{
    constructor(){
        super();
        this.state={
            isToggleOn:true 
        }
    }
    clickMe=()=>{
       <div>
    {alert('I was clicked')}
      </div> 
    }
    switch=()=>{
        if(this.isToggleOn===false){
           this.isToggleOn=true;
        }
        else{
            this.isToggleOn=false;
        }
        
    }
    handleKeyPress=(e)=>{
     const input=document.getElementById('input')
      if(e.which===13){
        alert(`The enter key was pressed, your input is: ${input}`);
      }  
    }
    render(){
      <>
      <button onClick={this.clickMe}>Click Me</button>
      <input id={"input"}onKeyPress={this.handleKeyPress}/>
      <button onClick={this.switch}>{this.isToggleOn}</button>
      </>
    }
}