import React from "react";
import superheroes from "./superheroes.json"
import './Heroes.css'

class HeroesMemo extends React.Component{
   constructor(){
    super();
    this.state={
        arrHeroes:[],
        Superheroes:superheroes.superheroes,
        Score:0,
        TopScore:0,
        ClickHeroes:[]

        // arrHeroes:[{
        // id: '',
        // clicked: false,
        // name: '',
        // image: '',
        // occupation: '' 
        // }],
      
    }
   }
   componentDidUpdate(){
    this.state.Superheroes.map(item=>{
        return(
        <div className="card" onClick={this.saveCard} id={item.id}>
        <img key={item} id={item.id} className="item" src={item.image}/>     
        <p id={item.id}>{item.name}</p>
        </div>
        )
     })
   }
   saveCard=(evt)=>{
    this.state.Score++;
    this.setState({Score:this.state.Score});
    this.setState({ClickHeroes:this.state.ClickHeroes.concat(evt.target.id)})
    console.log(this.state.ClickHeroes);
    console.log(evt.target.id);
    if(this.state.ClickHeroes.includes(evt.target.id)){
        if(this.state.TopScore<this.state.Score){
              this.setState({TopScore:this.state.Score-1});
        }
      this.setState({ClickHeroes:[]})
      this.setState({Score:0});
    }
   }
  
   render(){
    return(
    <>
    <div className="nav">
        <h3>Superheroes Memory Game</h3>
        <div>
           <p>Score: {this.state.Score}</p>
           <p>Top Score: {this.state.TopScore}</p> 
        </div>
        
    </div>
    <div className="grid">
    {
        //   for (let i = array.length - 1; i > 0; i--) {}
        this.state.Superheroes.map((item,elm)=>{
            return(
            <div className="card" onClick={this.saveCard} id={item.id}>
            <img key={item} id={item.id} className="item" src={item.image}/>     
            <p id={item.id}>{item.name}</p>
            </div>
            )
         })
    }
    </div>
    </>
    )
   }
}

export default HeroesMemo