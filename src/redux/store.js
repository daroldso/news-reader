import { createStore, applyMiddleware, compose } from 'redux'
import { createEpicMiddleware } from 'redux-observable';
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers'
import rootEpic from './epics'

const epicMiddleware = createEpicMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function initStore(preloadedState) {
  const store = createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(
      applyMiddleware(epicMiddleware)
    )
  )

  epicMiddleware.run(rootEpic)

  return store
}
