import { api } from "../config/network";

export const addRecipe = async (data) => {
  const res = await api("/api/vi/recipe/addrecipe", "post", data);
  return res;
};

export const addIngredient = async (data) => {
  const res = await api("/api/v1/ingredient", "post", data);
  return res;
};

export const getrecipeByTypeId = async (typeId) => {
  const res = await api("/api/vi/recipe/type/" + typeId, "get");
  return res;
};

export const getRecipesSortedByCreateAt = async () => {
  const res = await api("/api/vi/recipe/recently", "get");
  return res;
};
