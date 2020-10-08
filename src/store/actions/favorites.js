import * as actionTypes from './actionTypes';

export const reloadFavoritesData = () => {
  const favoriteMeals = JSON.parse(localStorage.getItem('favorites'));
  return {
    type: actionTypes.RELOAD_FAVORITES_DATA,
    reloadedData: favoriteMeals,
  };
};

export const addToFavorites = (favoriteMeal) => {
  return {
    type: actionTypes.ADD_TO_FAVORITES,
    meal: favoriteMeal,
  };
};

export const increaseMealQuantity = (idMeal, value) => {
  return {
    type: actionTypes.INCREASE_MEAL_QUANTITY,
    mealId: idMeal,
    quantity: value,
  };
};

export const removeFromFavorites = (mealId) => {
  return {
    type: actionTypes.REMOVE_FROM_FAVORITES,
    mealId: mealId,
  };
};
