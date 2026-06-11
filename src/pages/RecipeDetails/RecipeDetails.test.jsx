import { screen } from "@testing-library/dom";
import { renderWithRouter } from "../../tests-utils";
import RecipeDetails from "./RecipeDetails";

describe("RecipeDetails page", () => {
  const mockRecipe = {
    label: "Chicken Soup",
    source: "BBC Food",
    image: "image.jpg",
    url: "https://recipe.com",
    ingredients: [{ text: "Chicken" }],
  };
  test("renders recipe from route state", () => {
    renderWithRouter(<RecipeDetails />, {
      route: "/recipe-details",
      state: mockRecipe,
    });
    expect(screen.getByText(/recipe details/i)).toBeInTheDocument();
    expect(screen.getByText("Title:Chicken Soup")).toBeInTheDocument();
    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("src", "image.jpg");
    const link = screen.getByRole("link", { name: /sourceurl/i });
    expect(link).toHaveAttribute("href", "https://recipe.com");
    const ingredients = screen.getAllByRole("listitem");
    expect(ingredients).toHaveLength(1);
    expect(screen.getByText("Chicken")).toBeInTheDocument();
  });

  test("renders recipe from session storage", () => {
    sessionStorage.setItem("selectedRecipe", JSON.stringify(mockRecipe));
    renderWithRouter(<RecipeDetails />, {
      route: "/recipe-details",
    });
    expect(screen.getByText(/recipe details/i)).toBeInTheDocument();
    expect(screen.getByText("Title:Chicken Soup")).toBeInTheDocument();
    const ingredients = screen.getAllByRole("listitem");
    expect(ingredients).toHaveLength(1);
    expect(screen.getByText("Chicken")).toBeInTheDocument();
  });
});
