import React from 'react';

const {name,model}=props.data
class Car extends React.Component{
  constructor(props){
    super(props);
    this.state={
        color:"red",
        name:{name},
        model:{model}
    }
  }
  
  render(){
  <>
    <header>This car is {this.state.color} {model}</header>
  </>
}

}

export default Car