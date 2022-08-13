import React from "react";
import Quote from "./Quote";
import './style.css';

class QuoteChange extends React.Component{
      constructor(){
        super();
        this.state={
       
        }
      }
      componentDidMount(){
        // const quote=Quote.listQuotes;
        // this.setState({Author:quote[0]});
        // this.setState({Quote:quote[1]})
      }
      newQuote=()=>{
        window.location.href=window.location.href
      }

      render(){
       return(
            <>
            <div className="backWhite">
            <Quote/>
              <h1>{this.state.Author}</h1>
              <p>{this.state.Quote}</p>
              <button onClick={this.newQuote}>New Quote</button>
             </div>
            </>
        )
      }
}
export default QuoteChange;