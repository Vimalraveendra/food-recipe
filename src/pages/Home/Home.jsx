import React, { Component } from "react";
import RecipeSearch from "../../Components/RecipeSearch/RecipeSearch";
import "./Home.css";
import RecipeList from "../../Components/RecipeList/RecipeList";
import { fetchRecipes } from "../../api/recipes";

class Home extends Component {
  _isMounted = false;
  state = {
    recipes: [],
    recipeName: "Chicken",
    loading: false,
    error: "",
  };

  onSearchChange = (e) => {
    const recipeName = e.target.value;
    this.setState({
      recipeName: recipeName,
    });
  };

  fetchRecipesData = async (query) => {
    this.setState({ loading: true, error: "" });
    try {
      const data = await fetchRecipes(query);
      if (!this._isMounted) return;
      const recipes = data ?? [];
      this.setState({ loading: false, recipes, error: "" });
    } catch (error) {
      this.setState({
        loading: false,
        recipes: [],
        error: "Please enter a valid recipe name",
        recipeName: "",
      });
    }
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { recipeName } = this.state;
    if (recipeName.length > 0) {
      this.fetchRecipesData(recipeName);
    } else {
      this.setState({
        loading: false,
        recipes: [],
        error: "Please enter a valid recipe name",
        recipeName: "",
      });
    }
  };

  componentDidMount() {
    this._isMounted = true;
    this.fetchRecipesData(this.state.recipeName);
  }
  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return (
      <div>
        <header className="header">
          <h1 className="title">Recipe Search</h1>
        </header>
        <RecipeSearch
          recipeName={this.state.recipeName}
          onSearchChange={this.onSearchChange}
          handleSubmit={this.handleSubmit}
        />
        <RecipeList
          loading={this.state.loading}
          recipes={this.state.recipes}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default Home;
