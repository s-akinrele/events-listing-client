import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';


import HomePageController from './containers/HomePage/HomePageController';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={HomePageController} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
