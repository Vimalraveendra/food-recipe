import React, { Component } from "react";
import RecipeSearch from "../Components/RecipeSearch";
import "./App.css";
import RecipeList from "../Components/RecipeList";

const API_KEY = process.env.REACT_APP_API_KEY;
const APP_ID = process.env.REACT_APP_API_ID;

class App extends Component {
  state = {
    recipes: [],
    recipeName: "Chicken",
    error: "",
  };

  // componentDidMount = async () => {
  //   try {
  //     const api_call = await fetch(
  //       `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${API_KEY}&from=0&to=30`
  //     );
  //     const resp = await api_call.json();

  //     this.setState({
  //       recipes: resp.hits,
  //     });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  onSearchChange = (e) => {
    const recipeName = e.target.value;
    this.setState({
      recipeName: recipeName,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { recipeName } = this.state;
      if (recipeName.length > 0) {
        const resp = await fetch(
          `https://api.edamam.com/search?q=${recipeName}&app_id=${APP_ID}&app_key=${API_KEY}&from=0&to=30`
        );
        const data = await resp.json();
        if (data.hits.length !== 0) {
          this.setState({
            recipes: data.hits,
            recipeName: "",
            error: "",
          });
        } else {
          this.setState({
            error: "Sorry! Please enter a valid recipeName",
            recipeName: "",
          });
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  // locally storing the items
  componentDidUpdate() {
    const recipes = JSON.stringify(this.state.recipes);
    localStorage.setItem("recipes", recipes);
  }

  // grabing the stored items
  componentDidMount() {
    const item = localStorage.getItem("recipes");
    const recipes = JSON.parse(item);
    this.setState({ recipes: recipes });
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <header className="App-header">
            <h1 className="App-title ">Recipe Search</h1>
          </header>
          <RecipeSearch
            recipeName={this.state.recipeName}
            onSearchChange={this.onSearchChange}
            handleSubmit={this.handleSubmit}
          />
          <RecipeList recipes={this.state.recipes} error={this.state.error} />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
