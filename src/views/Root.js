import React from 'react';
import Settings from '../components/Settings';
import { Provider } from 'react-redux';
import configureStore from '../redux/store/configureStore';
import Questions from '../components/Questions';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const store = configureStore();

function Root() {
  return (
    <Router>
      <Provider store={store}>
        <Switch>
          <Route path="/questions">
            <Questions />
          </Route>
          <Route exact path="/">
            <Settings />
          </Route>
        </Switch>
      </Provider>
    </Router>
  );
}

export default Root;
