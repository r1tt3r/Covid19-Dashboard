import { BrowserRouter as Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Layout, RoutesLayout } from "./components";
import { Routes } from "./routes";
function App() {
  const history = createBrowserHistory();
  return (
    <Router history={history}>
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
