import React from "react";
 class color extends React.Component{
    constructor(props){
       super(props);

     this.state={
        favoriteColor:red
     }  
    }
    ChangeToBlue = () => {
        this.state.favoriteColor="blue";
    }
    componentDidMount(){
        setTimeout(() => {
            this.state.favoriteColor="yellow";
        }, 5000);
    }
    render(){
        <>
        <h1>My Favorite Color is {this.state.favoriteColor}</h1>
        <button onClick={this.ChangeToBlue}>Change To Blue</button>
        </>
    }
 }