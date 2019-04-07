import reduceReducers  from 'reduce-reducers';
import {globalReducer} from "./global-reducers";
import { formsReducer } from "./forms-reducers";
import { firstNumber } from "./firstNumber-reducers";
import { secondNumber } from "./secondNumber-reducers";
import { operationsReducer } from "./operations-reducers";

const initialState = {
    items: [],
    name: '',
    age: null,
    address: null,
    firstNumber: null,
    secondNumber: null,
    result: null,
    checkReducersThema: false, // Variable to control if showing or not inputs (reducerReducers testing) in Home
}

export const reducer = reduceReducers(
    initialState,
    globalReducer,
    formsReducer,
    firstNumber,
    secondNumber,
    operationsReducer
)