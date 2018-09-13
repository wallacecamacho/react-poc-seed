import React, { Component } from 'react';
//import { createStore, combineReducers } from 'redux'
//import { Provider } from 'react-redux'
//import { Router, Route, browserHistory, Redirect } from 'react-router'
import { Router, Route, Switch } from 'react-router';
import createHistory from 'history/createBrowserHistory'
//import { routerMiddleware } from 'react-router-redux'

import ComponentLayout from '../stories/screens/layout/ComponentLayout';
// Create a history of your choosing (we're using a browser history in this case)

import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';

const history = createHistory();
// Build the middleware for intercepting and dispatching navigation actions
//const middleware = routerMiddleware(history)

const store = configureStore();

         

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
      <Router history={history}>
      <Switch>
        <Route exact path="/" component={ComponentLayout}/>
        <Route path="/enquete/:enqueteId" component={ComponentLayout} teste="teste"/>
      </Switch>
      </Router>
      </Provider>  
    );
  }
}

export default Root;
