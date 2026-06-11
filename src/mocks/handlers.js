import { rest } from "msw";

const mockResults = {
  hits: [
    {
      recipe: {
        label: "chicken",
        image: "chicken.jpg",
        source: "BBC",
        url: "http://testChicken.com",
        ingredients: [],
      },
    },
  ],
};

export const handlers = [
  rest.get(`https://api.edamam.com/api/recipes/v2`, (req, res, ctx) => {
    const query = req.url.searchParams.get("q");
    if (!query) return res(ctx.json({ hits: [] }));
    if (query === "Pasta") {
      return res(
        ctx.json({
          hits: [
            {
              recipe: {
                label: "Pasta Carbonara",
                image: "pasta.jpg",
                source: "BBA",
                url: "http://testPasta.com",
                ingredients: [],
              },
            },
          ],
        }),
      );
    }
    return res(ctx.json(mockResults));
  }),
];
