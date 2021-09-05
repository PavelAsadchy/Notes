import { StrictMode } from 'react';
import { render } from 'react-dom';
import './index.scss';
import App from './App';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk-recursion-detect';
import { authReducer } from './_store/reducers/auth.reducer';
import { AuthState } from './_store/types';

let composeEnhancers;
if (
  process.env.NODE_ENV !== "production" &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
) {
  composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
} else {
  composeEnhancers = compose;
}

const store = createStore<AuthState, any, any, any>(
  authReducer,
  undefined,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById('root')
);
