import React from "react";

import { Route, Switch } from "react-router-dom";
import App from "../Containers/App";
import RecipeDetails from "./RecipeDetails";

const Router = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/recipedetails/:id" component={RecipeDetails} />
      </Switch>
    </React.Fragment>
  );
};

export default Router;
