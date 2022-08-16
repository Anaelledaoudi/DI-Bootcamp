import store from "../reducers";
import { increase } from "../actions";
import { decrease } from "../actions";
import { reducer } from "../../../../classExercises/first_redux_app/src/redux/reducer";

const Counter=()=>{
    return(
      <>
      <button onClick={increase}>-</button>
      <p>{store.count.getState()}</p>
      <button onClick={decrease}>+</button>
      </>
    )
}