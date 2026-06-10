import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class RecipeDetails extends Component {
  getRecipe = () => {
    //Navigation state

    const routeRecipe = this.props.location?.state;

    if (routeRecipe) {
      return routeRecipe;
    }
    //Refresh fall back
    const storedRecipe = sessionStorage.getItem("selectedRecipe");
    return storedRecipe ? JSON.parse(storedRecipe) : null;
  };
  componentWillUnmount() {
    sessionStorage.removeItem("selectedRecipe");
  }

  render() {
    const recipe = this.getRecipe();
    return (
      <div className="container">
        <div className="row">
          {recipe && (
            <div className="col-10 mx-auto col-md-6 my-3">
              <Link
                className="btn btn-outline-secondary text-capitalize mb-3"
                style={{ textDecoration: "none" }}
                to={{ pathname: `/` }}
              >
                go home
              </Link>
              <h3 className="text-info text-center">Recipe Details</h3>
              <img
                className="d-block w-100"
                src={recipe.image}
                alt={recipe.label}
              />
              <h4 className="text-uppercase text-danger my-3">
                Title:{recipe.label}
              </h4>
              {recipe &&
                recipe.ingredients.map((item, idx) => {
                  return (
                    <ul key={item.text} className="ingredient_list">
                      <li className="ingredient_text">{item.text}</li>
                    </ul>
                  );
                })}

              <p>
                Website:
                <span
                  style={{
                    overflowWrap: "break-word",
                    wordBreak: "break-word",
                  }}
                >
                  <a
                    href={recipe.url}
                    className=" mx-4 my-2"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="sourceUrl"
                  >
                    {recipe.url}
                  </a>
                </span>
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default withRouter(RecipeDetails);
