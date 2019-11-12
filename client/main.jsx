import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import {
  createStore, applyMiddleware, compose,
} from 'redux';
import thunk from 'redux-thunk';
import I18n, { setTranslations } from 'redux-i18n';
import { Provider } from 'react-redux';
import App from '../imports/ui/App.jsx';
import rootReducer from '../imports/ui/reducers';

const middleware = [thunk];

/* eslint-disable no-underscore-dangle */
const composeEnhancers =
  typeof window === 'object'
  && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;
/* eslint-enable */

const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
  // other store enhancers if any
);

const store = createStore(
  rootReducer,
  enhancer,
);


Meteor.startup(() => {
  render(
    (
      <Provider store={store}>
        <I18n translations={{}} useReducer>
          <App />
        </I18n>
      </Provider>
    ),
    document.getElementById('react-target'),
  );
});
