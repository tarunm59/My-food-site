import { DISHES } from '../components2/dishes';
import {LEADERS} from '../components2/leaders';
import {COMMENTS} from '../components2/comments';
import {PROMOTIONS} from '../components2/promotions';
import { Dishes } from '../components2/dishes2';
import {Leaders} from '../components2/Leaders2';
import {Comments} from '../components2/comments2';
import {Promotions} from '../components2/Promotions2';
import {createStore,combineReducers} from 'redux';
 const initialState = {
    dishes: DISHES,
    comments: COMMENTS,
    promotions: PROMOTIONS,
    leaders: LEADERS
};

const Reducer = (state = initialState, action) => {
    return state;
};
export const ConfigureStore1 = () => {
    const store = createStore(
        Reducer, // reducer
        initialState, // our initialState
    );

    return store;
}
export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders
        })
    );

    return store;
}