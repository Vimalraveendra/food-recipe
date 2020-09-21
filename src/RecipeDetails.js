import React, { Component } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

class RecipeDetails extends Component {
  state = {
    recipe: [],
  };

  //   componentDidMount = async ()=>{

  //   const title= this.props.location.state.title
  //   const resp = await fetch(`https://api.edamam.com/search?q=${recipeName}&app_id=${APP_ID}&app_key=${API_KEY}&from=0&to=30`)
  //   const data = await resp.json()
  //   this.setState({
  //       recipe:data.recipes[0]

  //   })

  // }
  render() {
    const {
      img_url,
      source_url,
      title,
      ingredients,
    } = this.props.location.state;

    console.log("ing", ingredients);

    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-6 my-3">
              <h3 className="text-info">Recipe Details</h3>
              <img className="d-block w-100" src={img_url} alt={title} />

              <h4 className="text_uppercase text-danger my-3">Title:{title}</h4>

              {ingredients.map((item) => {
                return (
                  <ul key={uuidv4()} className="ingredient_list">
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
