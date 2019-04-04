import * as constants from '../constants/action-types';
const initialState = {
    items: []
}

export const globalReducer = (state = initialState, action) => {
    switch(action.type) {
        case constants.SECOND_ACTION: {
            return {
                ...state,
                items: ['Esto', 'es', 'una', 'demo']
            }
        }
        default: return state;
    }
}