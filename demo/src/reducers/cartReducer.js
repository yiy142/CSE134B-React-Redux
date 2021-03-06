import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function cartReducer(state = initialState.dishes, action) {
  switch (action.type) {
    case types.LOAD_CART_SUCCESS:
      return action.dishes;

    case types.ADD_DISH_SUCCESS:
      return [
        ...state,
        action.dish
      ];

    case types.UPDATE_DISH_SUCCESS:
      return [
        ...state.filter(dish => dish.name !== action.dish.name),
        Object.assign({}, action.dish)
      ];

    case types.REMOVE_DISH_SUCCESS:
      return[  
        ...state.filter(dish => dish.name !== action.dish.name)
      ];

    default:
      return state;
  }
}
