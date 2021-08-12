import React from 'react';
import Settings from '../components/Settings';
import { Provider } from 'react-redux';
import configureStore from '../redux/store/configureStore';
import Questions from '../components/Questions';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import EndGame from '../components/EndGame';
import Rank from '../components/Rank';
import StartGame from '../components/StartGame';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../assets/styles/GlobalStyles';
import { theme } from '../assets/styles/theme';
import MainTemplate from '../components/templates/MainTemplate';
const store = configureStore();

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.viridianGreen};
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100%;
  height: 100vh;
`;

function Root() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MainTemplate>
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
      </MainTemplate>
    </ThemeProvider>
  );
}

export default Root;
