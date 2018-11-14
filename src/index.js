import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Details from './containers/details';
import Registry from './containers/registry';
import Party from './containers/wedding_party';

ReactDOM.render(
  <HashRouter>
  	<Switch>
      <Route exact path="/" component={App} />
      <Route path='/details' component={Details} />
      <Route path='/registry' component={Registry} />
      <Route path= '/weddingparty' component={Party} />
    </Switch>
  </HashRouter>
	, document.getElementById('root'));
registerServiceWorker();
