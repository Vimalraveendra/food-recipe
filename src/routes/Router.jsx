import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home/Home";
import RecipeDetails from "../Components/RecipeDetails";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/recipe-details" component={RecipeDetails} />
    </Switch>
  );
};

export default Router;
