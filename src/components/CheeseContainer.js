import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyCheese } from '../redux';

function CheeseContainer() {
    const numOfCheese = useSelector( state => state.cheese.numOfCheese );
    const dispatch = useDispatch();
    return (
        <div>
            <h2>Number of cheese - {numOfCheese}</h2>
            <button onClick = {() => dispatch(buyCheese())}>Buy cheese</button>
        </div>
    )
}

export default CheeseContainer;
