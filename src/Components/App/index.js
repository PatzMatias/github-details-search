import * as mobx from 'mobx';
import {Provider} from 'mobx-react';
import React from 'react';
// import DevTools from 'mobx-react-devtools';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './App';
import {
  AppStore,
  UserStore
} from '../../Stores';

mobx.configure({
  enforceActions: 'observed'
});

const appStore = new AppStore();
const userStore = new UserStore();

const states = {
  appStore: appStore,
  userStore: userStore
};

export default () => (
  <div>
    <Provider {...states}>
        <Router>
            <App />
        </Router>
    </Provider>
  </div>
);