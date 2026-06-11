import { screen } from "@testing-library/dom";
import { renderWithRouter } from "../../tests-utils";
import { server } from "../../mocks/server";
import Home from "./Home";
import { rest } from "msw";
import userEvent from "@testing-library/user-event";

describe("Home page", () => {
  test("renders the title", () => {
    renderWithRouter(<Home />);
    const title = screen.getByRole("heading", { name: /recipe search/i });
    expect(title).toBeInTheDocument();
  });

  test("displays recipes after successful fetch", async () => {
    renderWithRouter(<Home />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
    const recipes = await screen.findAllByRole("listitem");
    expect(recipes).toHaveLength(1);
    const input = screen.getByRole("textbox", { name: /recipeName/i });
    expect(input).toHaveValue("Chicken");
    expect(await screen.findByText(/chicken/i)).toBeInTheDocument();
  });

  test("renders error state after API failure", async () => {
    server.use(
      rest.get(`https://api.edamam.com/api/recipes/v2`, (req, res, ctx) => {
        return res(
          ctx.status(500),
          ctx.json({ error: "Please  enter a valid recipe name" }),
        );
      }),
    );
    renderWithRouter(<Home />);
    const error = await screen.findByText(/please enter a valid recipe name/i);
    expect(error).toBeInTheDocument();
  });

  test("fetches new recipes when user searches", async () => {
    const user = userEvent.setup();
    renderWithRouter(<Home />);
    const input = screen.getByRole("textbox", { name: /recipeName/i });
    const searchButton = screen.getByRole("button", { name: /search/i });

    await user.clear(input, "");
    await user.type(input, "Pasta");
    await user.click(searchButton);

    expect(await screen.findByText(/pasta carbonara/i)).toBeInTheDocument();
  });
});
