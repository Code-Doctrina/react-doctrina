import {put} from 'redux-saga/effects';
import * as actions from '../actions';
import axios from '../../axios-orders';

export function* initIgredientsSaga(action){
    try{
        const response = yield axios.get( 'https://react-my-burger-73d46-default-rtdb.firebaseio.com/ingredients.json')
        yield put(actions.setIngredients(response.data))
    }catch (error){
        yield put(actions.fetchIngredientsFailed());
    }
}