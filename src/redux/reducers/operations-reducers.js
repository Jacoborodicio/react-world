import * as constants from '../constants/action-types';

export const operationsReducer = (state, action) => {
    switch(action.type){
        case constants.SUM_FIRST_SECOND: {
            return {
                ...state,
                result: state.firstNumber + state.secondNumber
            }
        }
        default: return state;
    } 
}