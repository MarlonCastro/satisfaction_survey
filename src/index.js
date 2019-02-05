import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, Switch } from 'react-router';
import createHistory from 'history/createBrowserHistory';

import API from './guidelines/api.instance';
import './guidelines/style.guideline.scss';

import Dashboard from './pages/Dashboard/Dashboard';


const routeHistory = createHistory();

API.defineRequestInterceptor(localStorage);
API.defineResponseInterceptor(routeHistory);

ReactDOM.render(
  <Router history={routeHistory}>
    <Switch>
      <Route path="/principal" component={Dashboard} />
      <Route path="/" component={Dashboard} />
    </Switch>
  </Router>,
  document.getElementById('root'),
);

registerServiceWorker();
