import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Details from './containers/details';
import Registry from './containers/registry';
import Party from './containers/wedding_party';
import Story from './containers/story';
import { createBrowserHistory as createHistory } from "history";

ReactDOM.render(
  <BrowserRouter>
  	<Switch>
      <Route exact path="/" component={App} />
      <Route path={process.env.PUBLIC_URL + '/details'} component={Details} />
      <Route path={process.env.PUBLIC_URL + '/registry'} component={Registry} />
      <Route path={process.env.PUBLIC_URL + '/weddingparty'} component={Party} />
    </Switch>
  </BrowserRouter>
	, document.getElementById('root'));
registerServiceWorker();
