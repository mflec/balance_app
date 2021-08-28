import axios from "axios";

export const SET_TRANSACTION = "SET_TRANSACTION";

export function getTransactions(token) {
  return (dispatch) => {
    axios.get("/transaction/get", {
      headers: { "x-access-token": token },
    })
    .then((response) => {
      dispatch({ type: SET_TRANSACTION, payload: response.data });
    });
  }
}