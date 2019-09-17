import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

import PrivateRoute from './components/Auth/PrivateRoute'
import HomePageController from './containers/HomePage/HomePageController';
import CreateEventController from './containers/Event/CreateEventController';
import EventsPage from './containers/Event/Index';

const store = createStore(rootReducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={HomePageController} />
          <Route path="/event" extact component={EventsPage} />
          <PrivateRoute path='/create-event' component={CreateEventController} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
