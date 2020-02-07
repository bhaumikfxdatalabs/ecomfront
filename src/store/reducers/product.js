const initialState = [];

export default function Product(state = initialState, action) {
  switch (action.type) {
    case "ADD_PRODUCT":
      return [...state, action.product];
    case "FETCH_PRODUCTS":
      return [...action.products];

    default:
      return state;
  }
}
