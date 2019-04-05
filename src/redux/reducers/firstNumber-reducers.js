import * as constants from '../constants/action-types';

export const firstNumber = (state, action) => {
    switch(action.type) {
        case constants.HANDLE_FIRST_NUMBER: {
            return {
                ...state,
                firstNumber: action.payload.number
            }
        }
        default: return state;
    }
}