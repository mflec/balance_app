import axios from "axios";

export const SET_PAGES = "SET_PAGES"
export const SET_PAGE = "SET_PAGE"

export function getTransactions(id) {
  return (dispatch) => {
    axios.get("/" + id ).then((response) => {
      dispatch({ type: SET_PAGES, payload: response.data });
    });
  }
}