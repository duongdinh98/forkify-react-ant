import * as actionTypes from './../actions/actionTypes';
import { updateObject } from './../../shared/utils/utility';

const initialState = {
  myFavorites: [],
};

const addToFavorites = (state, action) => {
  const newFavorites = state.myFavorites.concat(action.meal);

  return updateObject(state, {
    myFavorites: newFavorites,
  });
};

const removeFromFavorites = (state, action) => {
  const newFavorites = state.myFavorites.filter((fav) => {
    return fav.favId !== action.mealId;
  });

  return updateObject(state, {
    myFavorites: newFavorites,
  });
};

const increaseMealQuantity = (state, action) => {
  const newFavorites = state.myFavorites.map((fav) => {
    return fav.favId === action.mealId
      ? updateObject(fav, { quantity: action.quantity })
      : fav;
  });

  return updateObject(state, {
    myFavorites: newFavorites,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_FAVORITES:
      return addToFavorites(state, action);

    case actionTypes.REMOVE_FROM_FAVORITES:
      return removeFromFavorites(state, action);

    case actionTypes.INCREASE_MEAL_QUANTITY:
      return increaseMealQuantity(state, action);

    default:
      return state;
  }
};

export default reducer;
