import * as constants from '../constants/action-types';

export const secondNumber = (state, action) => {
    switch(action.type) {
        case constants.HANDLE_FIRST_NUMBER: {
            return {
                ...state,
                secondNumber: action.payload.number
            }
        }
        default: return state;
    }
}