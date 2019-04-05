import * as constants from '../constants/action-types';

export const formsReducer = (state, action ) => {
    console.log("action on forms-reducers: ", action)
    switch(action.type) {
        case constants.CHANGE_NAME: {
            return {
                ...state,
                name: action.payload.name
            }
        }
        default: return state;
    }
}