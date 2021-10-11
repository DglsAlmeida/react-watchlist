import { Switch, Route } from "react-router";
import { AddMovie } from "../pages/AddMovie";
import { Watched } from "../pages/Watched";
import { Watchlist } from "../pages/Watchlist";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Watchlist} />
      <Route path="/watched" component={Watched} />
      <Route path="/add" component={AddMovie} />
    </Switch>
  );
};
