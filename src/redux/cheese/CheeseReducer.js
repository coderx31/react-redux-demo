import { BUY_CHEESE } from '../cheese/CheeseTypes';

const initialState = {
    numOfCheese: 100
};

const cheeseReducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_CHEESE: return {
            ...state,
            numOfCheese: state.numOfCheese - 1
        }

        default: return state
    }

    
}

export default cheeseReducer;