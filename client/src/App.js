import React, { useContext } from 'react';
import { Router, Route } from 'react-router-dom';
import history from './history';

import { ThemeContext } from './contexts/theme';

import LogInPage from './pages/LoginPage';
import HomePage from './pages/HomePage';

const App = () => {
  const theme = useContext(ThemeContext);
  return (

    <div className={`${theme.darkThemeEnabled ? 'theme-dark' : 'theme-light'}`}>
      <Router history={history}>
        <React.Fragment>
            <Route path="/" exact component={HomePage} />
            <Route path="/login" exact component={LogInPage} />
        </React.Fragment>
      </Router>
    </div>
  );
};

export default App;
