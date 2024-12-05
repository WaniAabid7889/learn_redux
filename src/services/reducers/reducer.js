import { Add_To_Cart } from "../constants";

const initialState = {
  cardData: [],
};
export default function cardItem(state = initialState, action) {
  switch (action.type) {
    case Add_To_Cart:
        console.log(action)
      return {
        ...state,
        cardData: action.data
      }
      default:
        return state    
  }
}
