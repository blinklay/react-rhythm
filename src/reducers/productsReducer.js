export const initialState = []

export const productsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_PRODUCTS":
      return payload;

    default:
      return state;
  }
}