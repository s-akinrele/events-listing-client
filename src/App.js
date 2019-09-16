import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

import HomePageController from './containers/HomePage/HomePageController';

const store = createStore(rootReducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={HomePageController} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
