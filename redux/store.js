import { createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers'

import createMiddleware from './middleware'

export const initStore = (initialState, isServer) => {
  if (isServer && typeof window === 'undefined') {
    return createStore(rootReducer, initialState, createMiddleware(thunkMiddleware))
  }
  if (!window.store) {
    window.store = createStore(rootReducer, initialState, createMiddleware(thunkMiddleware))
  }
  return window.store
}
