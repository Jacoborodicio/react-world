import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import {reducer} from '../reducers';
// import { globalReducer } from "../reducers/global-reducers";
import rootSaga from '../sagas/saga'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// mount it on the Store
export const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)

// then run the saga
sagaMiddleware.run(rootSaga)

// render the application