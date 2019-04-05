import reduceReducers  from 'reduce-reducers';
import {globalReducer} from "./global-reducers";
import { formsReducer } from "./forms-reducers";
import { firstNumber } from "./firstNumber-reducers";
import { secondNumber } from "./secondNumber-reducers";

const initialState = {
    items: [],
    name: '',
    age: null,
    address: null,
    firstNumber: null,
    secondNumber: null
}

export const reducer = reduceReducers(
    initialState,
    globalReducer,
    formsReducer,
    firstNumber,
    secondNumber,
)