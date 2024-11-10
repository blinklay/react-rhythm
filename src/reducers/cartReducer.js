const initialState = []

export const cartReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_TO_CART":
      return [
        ...state,
        payload
      ]

    default:
      return state;
  }
}