import { render } from "@testing-library/react";
import { Router, Route } from "react-router-dom";
import { createMemoryHistory } from "history";

export const renderWithRouter = (ui, options = {}) => {
  const { route = "/", state = null } = options;
  const history = createMemoryHistory();
  history.push(route, state);
  return render(
    <Router history={history}>
      <Route path={route}>{ui}</Route>
    </Router>,
  );
};
