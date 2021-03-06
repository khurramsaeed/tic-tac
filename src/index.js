import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import createHistory from 'history';
import {Router} from 'react-router';
import Routes from './routes';

ReactDOM.render(
  <Router
    history={createHistory}
    routes={Routes}
  />,
  document.getElementById('root'));
registerServiceWorker();
