import React from 'react';
import { DELETE, submit_data } from '../action';
import { Connect } from 'react-redux';
import { delete_account } from '../action';

const initState={details:[{accountNumber:''},{FSC:''},{name:''},{amount:''}]}
export const reducer=(state=initState,action={})=>{
    switch(action.type){
        case SUBMIT:
            return {...state,detail:action.payload}
        case DELETE:
            return {...state}
        default:
            return {...state}
        }
}

class TransactionForm extends React.Component{
    constructor(){
        super();
    }
    handleInputChange=(evt)=>{
      this.props.detail.evt.target.name=this.props.detail.evt.target.value
    }
    deleteDtl=()=>{

    }

    handleSubmit=()=>{
         props.details.map((detail,i)=>{
            return(
            <>
                <div key={i}>
                    {props.a(detail)}
                    <button onClick={'deleteDtl'}>DELETE</button>
                </div>
               
            </>
            )
         })
    }
    render(props){
        return(
        <>
        <form>
       AccountNumber: <input type={"text"} onChange={'handleInputChange'} name={'AccountNumber'}/>
       FSC: <input type={"text"} onChange={'handleInputChange'} name={'FSC'}/>
       Name: <input type={"text"} onChange={'handleInputChange'} name={'Name'}/>
       Amount: <input type={"text"} onChange={'handleInputChange'} name={'Amount'}/>
       <button onClick={'handleSubmit'}>Submit</button>
       </form>
        </>
        )
   }
}
const mapStateToProps=(state)=>{
    return{
      details:state.details,
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
       a:(obj)=>dispatch(submit_data(obj))
    }
}
export default connection (mapStateToProps,mapDispatchToProps)(TransactionForm);