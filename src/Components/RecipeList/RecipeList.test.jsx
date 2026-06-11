import { screen } from "@testing-library/react";
import { renderWithRouter } from "../../tests-utils";
import RecipeList from "./RecipeList";

describe("RecipeList component", () => {
  test("shows loading state", () => {
    renderWithRouter(<RecipeList loading={true} recipes={[]} error={""} />);
    const loading = screen.getByText(/loading/i);
    expect(loading).toBeInTheDocument();
  });

  test("renders recipes", () => {
    renderWithRouter(
      <RecipeList
        loading={false}
        recipes={[
          {
            recipe: {
              image: "image.jpg",
              label: "Chicken Soup",
              url: "https://recipe.com",
              ingredients: [{ text: "Chicken" }],
            },
          },
        ]}
        error={""}
      />,
    );
    expect(screen.getByText(/chicken soup/i)).toBeInTheDocument();
    // image
    expect(screen.getByRole("img")).toHaveAttribute("src", "image.jpg");

    // ingredient
    expect(screen.getByText(/chicken/i)).toBeInTheDocument();
  });

  test("displays error message", () => {
    renderWithRouter(
      <RecipeList
        loading={false}
        recipes={[]}
        error={"Please enter a valid recipe name"}
      />,
    );
    const error = screen.getByText(/please enter a valid recipe name/i);
    expect(error).toBeInTheDocument();
  });
});
