import { Switch, Route, Redirect } from "react-router-dom";

import { Home } from "../pages";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      {/* <Route exact path="/pokemons" component={Pokemons} />
      <Route exact path="/pokemons/:pokemon" component={Pokemons} /> */}
      <Redirect from="*" to="/" />
    </Switch>
  );
}

export { Routes };
