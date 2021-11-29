import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "pages/Home";
import Dashboard from "pages/Dashboard";
import { NotFound } from "navigation/NotFound";
import {
  AUTH_PAGE1,
  MAP,
  ATTRACTIONS,
  HOME,
  ABOUT_PROJECT,
  PRESS,
} from "navigation/CONSTANTS";
import { Page1 } from "pages/Page1";
import Login from "./Auth/Login";
import { AuthorizedPage1 } from "pages/AuthorizedPage1";
import PrivateRoute from "./Auth/PrivateRoute";
import { MapContainer } from "../pages/Map/MapContainer";
import { AttractinosContainer } from "pages/Attractions/AttractionsContainer";
import { AboutProjectContainer } from "pages/AboutProject/AboutProjectContainer";
import { PressContainer } from "pages/Press/PressContainer";
export const RouterConfig = () => {
  return (
    <div>
      <Switch>
        {/* List all public routes here */}
        <Route exact path={HOME} component={Home} />
        <Route exact path={MAP} component={MapContainer} />
        <Route exact path={ATTRACTIONS} component={AttractinosContainer} />
        <Route exact path={ABOUT_PROJECT} component={AboutProjectContainer} />
        <Route exact path={PRESS} component={PressContainer} />
        <Route path="/login">
          <Login />
        </Route>

        {/* List all private/auth routes here */}
        <PrivateRoute path={AUTH_PAGE1}>
          <AuthorizedPage1 />
        </PrivateRoute>
        {/* Do not hesitate to play around by moving some routes from public to private and vice-versa */}
        {/* <PrivateRoute path={DASHBOARD}>
          <Dashboard />
        </PrivateRoute> */}

        {/* List a generic 404-Not Found route here */}
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
};
