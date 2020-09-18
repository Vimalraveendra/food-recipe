import React, { Component } from "react";
import { Link } from "react-router-dom";

class RecipeDetails extends Component {
  state = {
    recipe: [],
  };

  componentDidMount = () => {
    this.setState({
      recipe: this.props.location.state,
    });
  };
  render() {
    console.log("state", this.state.recipe);
    const { img_url, publisher, source_url, title } = this.state.recipe;

    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-6 my-3">
              <h3 className="text-info">Recipe Details</h3>
              <img className="d-block w-100" src={img_url} alt={title} />

              <h4 className="text_uppercase text-danger my-3">Title:{title}</h4>
              <h5 className="text-warning">Publisher:{publisher}</h5>
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
              <button
                type="button"
                className="btn btn-outline-danger text-capitalize"
              >
                <Link
                  style={{ textDecoration: "none" }}
                  to={{
                    pathname: `/`,
                  }}
                >
                  go home
                </Link>
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default RecipeDetails;
