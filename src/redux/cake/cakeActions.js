import { BUY_CAKE } from './cakeTypes'; // this is how we import the variable from a another js


export const buyCake = (number = 1) => {
    return {
        type: BUY_CAKE,
        payload: number // sending additional informations to the user
    }
}