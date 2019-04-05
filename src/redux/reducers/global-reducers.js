import * as constants from '../constants/action-types';

export const globalReducer = (state, action) => {
    switch(action.type) {
        case constants.SECOND_ACTION: {
            let name = '';
            if(!state.name) {
                name = 'Jacobo'
            }
            return {
                ...state,
                items: ['Esto', 'es', 'una', 'demo'],
                name: name
            }
        }
        default: return state;
    }
}