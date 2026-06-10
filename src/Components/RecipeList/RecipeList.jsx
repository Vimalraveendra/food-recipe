import React from "react";
import RecipeCard from "../RecipeCard/RecipeCard";

const RecipeList = ({ loading, recipes, error }) => {
  return (
    <div className="container my-5" role="listitem">
      <div className="row">
        {loading ? (
          <h2 className="text-center">Loading recipes...</h2>
        ) : error ? (
          <h2 className=" text-danger text-center">{error}</h2>
        ) : (
          recipes &&
          recipes.map((item, index) => {
            return <RecipeCard key={item.recipe.url} recipe={item.recipe} />;
          })
        )}
      </div>
    </div>
  );
};

export default RecipeList;
