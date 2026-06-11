import { screen } from "@testing-library/dom";
import { renderWithRouter } from "../../tests-utils";
import RecipeCard from "./RecipeCard";
import userEvent from "@testing-library/user-event";

describe("RecipeCard component", () => {
  const mockRecipe = {
    image: "image.jpg",
    label: "Chicken Soup",
    url: "https://recipe.com",
    source: "BBC Food",
  };
  test("renders recipe data correctly", () => {
    renderWithRouter(<RecipeCard recipe={mockRecipe} />);
    expect(screen.getByText(/chicken soup/i)).toBeInTheDocument();
    expect(screen.getByText(/bbc food/i)).toBeInTheDocument();
    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("src", "image.jpg");
    expect(image).toHaveAttribute("alt", "Chicken Soup");
    const link = screen.getByRole("link", { name: /source url/i });
    expect(link).toHaveAttribute("href", "https://recipe.com");
  });

  test("stores recipe in session storage on click", async () => {
    const user = userEvent.setup();
    const setItemMock = jest
      .spyOn(Storage.prototype, "setItem")
      .mockImplementation(() => {});
    renderWithRouter(<RecipeCard recipe={mockRecipe} />);
    const button = screen.getByRole("button", { name: /recipe details/i });
    await user.click(button);
    expect(setItemMock).toHaveBeenCalledWith(
      "selectedRecipe",
      JSON.stringify(mockRecipe),
    );

    setItemMock.mockRestore();
  });
});
