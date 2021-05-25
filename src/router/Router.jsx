import { Route, Switch } from "react-router-dom";
import { Home } from "../components/Home";
import { Page2 } from "../components/Page2";
import { Page1Routes } from "./Page1Routes";

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route
        path="/page1"
        render={({ match: { url } }) => (
          <Switch>
            {Page1Routes.map((item) => {
              return (
                <Route
                  key={item.url}
                  exact={item.exact}
                  path={`${url}${item.url}`}
                >
                  {item.children}
                </Route>
              );
            })}
          </Switch>
        )}
      />
      <Route path="/page2">
        <Page2 />
      </Route>
    </Switch>
  );
};
