import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { withRouter, BrowserRouter, Route, Switch } from 'react-router-dom';
import configureStore from './store/configureStore';
import App from './components/App';
import './style.scss';

const store = configureStore();

const render = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Component} />
        </Switch>
      </BrowserRouter>
    </Provider>,
    document.getElementById('root')
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NextComponent = require('./components/App').default; // eslint-disable-line global-require
    render(NextComponent);
  });
}
