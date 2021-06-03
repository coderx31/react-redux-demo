import { combineReducers } from 'redux';
import cakeReducer from './cake/cakeReducer';
import iceCreamReducer from './iceCream/iceCreamReducer';
import cheeseReducer from './cheese/CheeseReducer';
import userReducer from './user/userReducer';


const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    cheese: cheeseReducer,
    user: userReducer
});


export default rootReducer;