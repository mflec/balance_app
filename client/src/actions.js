import axios from "axios";

export const SET_TRANSACTION = "SET_TRANSACTION";

export function getTransactions(id) {
  return (dispatch) => {
    axios.get("/transaction?id=" + id)
    .then((response) => {
      dispatch({ type: SET_TRANSACTION, payload: response.data });
    });
  }
}