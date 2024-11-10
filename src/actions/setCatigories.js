export const setCatigoriesNewOnBoard = () => (dispatch) => {
  return fetch("http://localhost:3000/newOnBoard")
    .then(res => res.json())
    .then(data => {
      dispatch({
        type: "SET_NEW_ON_BOARD",
        payload: data
      })
    })
}

export const setCatigoriesTopSellers = () => (dispatch) => {
  return fetch("http://localhost:3000/topSelling")
    .then(res => res.json())
    .then(data => {
      dispatch({
        type: "SET_TOP_SELLERS",
        payload: data
      })
    })
}