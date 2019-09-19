import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';

import rootReducer from './reducers';

import PrivateRoute from './components/Auth/PrivateRoute'
import HomePageController from './containers/HomePage/HomePageController';
import CreateEventController from './containers/Event/CreateEventController';
import ViewEventController from './containers/Event/ViewEventController';
import EventsPage from './containers/Event/EventsPage';

const store = createStore(rootReducer, applyMiddleware(thunk, createLogger()));

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={HomePageController} />
          <PrivateRoute path='/create-event' component={CreateEventController} />
          <Route path="/events/:id" component={ViewEventController} />
          <Route path="/all-events" component={EventsPage} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
