import React from "react";
import { Link } from "react-router-dom";

const Recipe = ({ id, publisher, title, img_url, source_url, ingredients }) => {
  return (
    <React.Fragment>
      <div className="col-10 mx-auto col-md-6  col-lg-4 my-3">
        <div className="card">
          <img
            className="card-img-top"
            src={img_url}
            alt={title}
            style={{ height: "15rem" }}
          />

          <div className="card-body">
            <h5 className="card-title">
              {title.length < 20 ? `${title}` : `${title.substring(0, 25)}...`}
            </h5>
            <p className=" card-text text-warning">Publisher:{publisher}</p>

            <button
              type="button"
              className="btn btn-outline-danger mx-2 text-capitalize"
            >
              <Link
                style={{ textDecoration: "none" }}
                to={{
                  pathname: `/recipedetails/${id}`,
                  state: {
                    publisher,
                    title,
                    img_url,
                    source_url,
                    ingredients,
                  },
                }}
              >
                {" "}
                Recipe Details
              </Link>
            </button>
            <a
              href={source_url}
              className="btn btn-outline-success mx-2 text-capitalize my-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Source url
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Recipe;
