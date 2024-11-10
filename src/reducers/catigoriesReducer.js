const initialState = {
  newOnBoard: [],
  topSellers: []
}

export const catigoriesReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_NEW_ON_BOARD":
      return {
        ...state,
        newOnBoard: payload
      }

    case "SET_TOP_SELLERS":
      return {
        ...state,
        topSellers: payload
      }

    default:
      return state;
  }
}