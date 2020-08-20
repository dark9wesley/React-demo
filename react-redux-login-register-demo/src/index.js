import React from 'react';
import ReactDOM from 'react-dom';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducer/index';
import {Provider} from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import routers from './routers/routes';
import Navigation from './components/nav/navigation'
import { createStore,applyMiddleware } from 'redux';

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(logger,thunk)))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <Router routes={routers}>
            <Navigation />
            {routers}
        </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


