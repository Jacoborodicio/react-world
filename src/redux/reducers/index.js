import reduceReducers  from 'reduce-reducers';
import {globalReducer} from "./global-reducers";

export const reducer = reduceReducers(
    globalReducer
)