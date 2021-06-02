import { combineReducers } from 'redux';
import cakeReducer from './cake/cakeReducer';
import iceCreamReducer from './iceCream/iceCreamReducer';
import cheeseReducer from './cheese/CheeseReducer';


const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    cheese: cheeseReducer
});


export default rootReducer;