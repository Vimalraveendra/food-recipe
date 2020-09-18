import React from "react";
import Recipe from "./Recipe";
import { v4 as uuidv4 } from "uuid";

const RecipeList = ({ recipes, error }) => {
  return (
    <React.Fragment>
      <div className="container my-3">
        <div className="row">
          {error ? (
            <h2 className=" text-danger text-center">{error}</h2>
          ) : (
            recipes.map((item, index) => {
              return (
                <Recipe
                  key={uuidv4()}
                  id={uuidv4()}
                  title={item.recipe.label}
                  publisher={item.recipe.source}
                  img_url={item.recipe.image}
                  source_url={item.recipe.url}
                  ingredients={item.recipe.ingredients}
                />
              );
            })
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default RecipeList;
