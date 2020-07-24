/* eslint-disable import/no-cycle */
import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { BASE_FONT_SIZE } from './config/const';
import themes from './themes';
/* Pages */
import Home from './pages/Home';
import Info from './pages/Info';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&display=swap');
  @import url("https://fonts.googleapis.com/icon?family=Material+Icons");
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #f5f6f7 !important;
    line-height: 1.5;
    font-family: "Caveat", cursive;
  }

  .App {
    text-align: center;
    margin: 2rem 0;
    padding: 1rem;
    width: 100%;
    max-width: 1100px;
    margin: auto;
  }

  main > h1 {
    text-align: center;
    color: #c0776a;
    margin-bottom: 2rem;
    font-size: 2rem;
    text-transform: uppercase;
  }
`;

const themeContext = {
  theme: themes.light,
  toogleTheme: () => {}
};

export const ThemeContext = React.createContext(themeContext);

const App = () => {
  return (
    <ThemeProvider theme={themeContext.theme}>
      <GlobalStyle fontSize={BASE_FONT_SIZE} />
      <BrowserRouter>
        <main className="App">
          <Link to="/" style={{ textDecoration: 'none' }}><h1>GitHub Users</h1></Link>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/users/:login" component={Info} />
          </Switch>
        </main>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
