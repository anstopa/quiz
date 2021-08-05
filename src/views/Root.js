import React from 'react';
import Settings from '../components/Settings';
import { Provider } from 'react-redux';
import configureStore from '../redux/store/configureStore';
import Questions from '../components/Questions';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import EndGame from '../components/EndGame';
import Rank from '../components/Rank';
import StartGame from '../components/StartGame';

const store = configureStore();

function Root() {
  return (
    <Router>
      <Provider store={store}>
        <Switch>
          <Route exact path="/">
            <StartGame />
          </Route>
          <Route path="/rank">
            <Rank />
          </Route>
          <Route path="/endgame">
            <EndGame />
          </Route>
          <Route path="/questions">
            <Questions />
          </Route>
          <Route exact path="/settings">
            <Settings />
          </Route>
        </Switch>
      </Provider>
    </Router>
  );
}

export default Root;
