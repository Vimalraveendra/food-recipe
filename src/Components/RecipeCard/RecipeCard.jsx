import React from "react";
import { useHistory } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  const { label, source, image, url } = recipe;
  const history = useHistory();
  const handleViewDetails = () => {
    sessionStorage.setItem("selectedRecipe", JSON.stringify(recipe));
    history.push("/recipe-details", recipe);
  };
  return (
    <div className="col-10 mx-auto col-md-6  col-lg-4 my-3">
      <div className="card">
        <img
          className="card-img-top recipe-img"
          src={image}
          alt={label}
          style={{ height: "15rem" }}
        />

        <div className="card-body">
          <h5 className="card-label">
            {label && label.length < 20
              ? `${label}`
              : `${label.substring(0, 25)}...`}
          </h5>
          <p className=" card-text text-warning">Publisher:{source}</p>
          <div className="btn-container">
            <button
              className="btn btn-outline-primary  text-capitalize"
              onClick={handleViewDetails}
            >
              Recipe Details
            </button>

            <a
              href={url}
              className="btn btn-outline-secondary text-capitalize "
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
              }}
            >
              Source url
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
