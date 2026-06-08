const API_KEY = process.env.REACT_APP_API_KEY;
const APP_ID = process.env.REACT_APP_API_ID;

export const fetchRecipes = async (query) => {
  const resp = await fetch(
    `https://api.edamam.com/api/recipes/v2?q=${query}&app_id=${APP_ID}&app_key=${API_KEY}&type=public`,
  );

  if (!resp.ok) {
    throw new Error("Failed to fetch recipes");
  }
  const data = await resp.json();
  return data.hits;
};
