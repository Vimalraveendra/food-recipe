import React from "react";

const RecipeSearch = ({ onSearchChange, recipeName, handleSubmit }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto col-md-6 col-lg-4">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="recipeName"
              value={recipeName}
              aria-label="recipeName"
              placeholder="Search  recipes..."
              onChange={onSearchChange}
              className="input"
            />
            <button className="btn">search</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RecipeSearch;
