import {
  createStore as createReduxStore,
  applyMiddleware,
  combineReducers,
  compose,
} from 'redux';
import reduxThunk from 'redux-thunk';
import home from 'views/home/reducer';

function createStore(preloadedState = {}) {
  // enhancers
  let composeEnhancers = compose;

  if (typeof window !== 'undefined') {
    // eslint-disable-next-line no-underscore-dangle
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  }

  const middlewares = [reduxThunk];
  const store = createReduxStore(
    combineReducers({
      home,
    }),
    preloadedState,
    composeEnhancers(applyMiddleware(...middlewares)),
  );

  return store;
}

export default createStore;
