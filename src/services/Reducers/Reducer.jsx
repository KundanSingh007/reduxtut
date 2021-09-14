import { ADD_TO_CART, REMOVE_TO_CART } from "../Constant";

const initialState = {
  cardData: [],
};

export default function cardItems(action, state = initialState) {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cardData: action.data,
      };
    case REMOVE_TO_CART:
      return {
        ...state,
        cardData: action.data,
      }
    default:
      return state;
  }
}
