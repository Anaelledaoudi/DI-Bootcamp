import {createStore} from 'redux';
import {reducer} from './redux/reducer'
import { increase } from '../actions';
import { decrease } from '../actions';

const initialState={count:0};
const store=createStore(reducer,initialState);

export default store;

