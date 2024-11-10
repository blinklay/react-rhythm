export const setProducts = () => (dispatch) => {
  return fetch("http://localhost:3000/products")
    .then(res => res.json())
    .then(data => {
      dispatch({
        type: "SET_PRODUCTS",
        payload: data
      })
    })
}