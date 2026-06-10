import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = ({
  id,
  publisher,
  title,
  img_url,
  source_url,
  ingredients,
}) => {
  return (
    <div className="col-10 mx-auto col-md-6  col-lg-4 my-3">
      <div className="card">
        <img
          className="card-img-top recipe-img"
          src={img_url}
          alt={title}
          style={{ height: "15rem" }}
        />

        <div className="card-body">
          <h5 className="card-title">
            {title.length < 20 ? `${title}` : `${title.substring(0, 25)}...`}
          </h5>
          <p className=" card-text text-warning">Publisher:{publisher}</p>
          <Link
            className="btn btn-outline-primary mx-2 text-capitalize "
            style={{ textDecoration: "none" }}
            to={{
              pathname: `/recipe-details`,
              state: {
                publisher,
                title,
                img_url,
                source_url,
                ingredients,
              },
            }}
          >
            Recipe Details
          </Link>
          <a
            href={source_url}
            className="btn btn-outline-secondary mx-2 text-capitalize my-2"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              maxWidth: "130px",
              width: "100%",
            }}
          >
            Source url
          </a>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
