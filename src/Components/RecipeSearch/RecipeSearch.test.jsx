import { screen } from "@testing-library/dom";
import { renderWithRouter } from "../../tests-utils";
import RecipeSearch from "./RecipeSearch";
import userEvent from "@testing-library/user-event";

describe("RecipeSearch component", () => {
  const mockSearchChange = jest.fn();
  const mockSubmit = jest.fn((e) => e.preventDefault());
  test(" renders input value and button", () => {
    renderWithRouter(
      <RecipeSearch
        recipeName={"Chicken"}
        onSearchChange={mockSearchChange}
        handleSubmit={mockSubmit}
      />,
    );
    const input = screen.getByRole("textbox");
    const searchButton = screen.getByRole("button", { name: /search/i });
    expect(input).toHaveValue("Chicken");
    expect(searchButton).toBeInTheDocument();
  });

  test("calls onSearchChange when typing", async () => {
    const user = userEvent.setup();
    renderWithRouter(
      <RecipeSearch
        recipeName={"Chicken"}
        onSearchChange={mockSearchChange}
        handleSubmit={mockSubmit}
      />,
    );
    const input = screen.getByRole("textbox");
    await user.type(input, "Pasta");
    expect(mockSearchChange).toHaveBeenCalled();
    expect(mockSearchChange).toHaveBeenCalledTimes(5);
  });

  test("calls handle submit on form submit", async () => {
    const user = userEvent.setup();
    const mockSubmit = jest.fn((e) => e.preventDefault());
    renderWithRouter(
      <RecipeSearch
        recipeName={"Chicken"}
        onSearchChange={mockSearchChange}
        handleSubmit={mockSubmit}
      />,
    );
    const searchButton = screen.getByRole("button", { name: /search/i });
    await user.click(searchButton);
    expect(mockSubmit).toHaveBeenCalled();
    expect(mockSubmit).toHaveBeenCalledTimes(1);
  });
});
