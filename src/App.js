import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Layout, RoutesLayout } from './components';
import { Routes } from './routes';
import GlobalStyle from './theme/GlobalStyles';

function App() {
  const history = createBrowserHistory();
  return (
    <Router history={history}>
      <GlobalStyle />
      <Layout>
        {/* <Header /> */}
        <RoutesLayout>
          <Routes />
        </RoutesLayout>
      </Layout>
    </Router>
  );
}

export default App;
