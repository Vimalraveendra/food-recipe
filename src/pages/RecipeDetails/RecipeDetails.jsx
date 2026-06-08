import React, { Component } from "react";
import { Link } from "react-router-dom";

class RecipeDetails extends Component {
  state = {
    recipe: [],
  };

  render() {
    const {
      img_url,

      source_url,
      title,
      ingredients,
    } = this.props.location.state;

    console.log("ing", ingredients);

    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 my-3">
            <Link
              className="btn btn-outline-secondary text-capitalize"
              style={{ textDecoration: "none" }}
              to={{
                pathname: `/`,
              }}
            >
              go home
            </Link>
            <h3 className="text-info text-center">Recipe Details</h3>
            <img className="d-block w-100" src={img_url} alt={title} />
            <h4 className="text_uppercase text-danger my-3">Title:{title}</h4>
            {ingredients.map((item, idx) => {
              return (
                <ul key={idx + img_url} className="ingredient_list">
                  <li className="ingredient_text">{item.text}</li>
                </ul>
              );
            })}

            <p>
              Website:
              <span>
                <a
                  href={source_url}
                  className=" mx-4 my-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {source_url}
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default RecipeDetails;
