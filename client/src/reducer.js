import { SET_TRANSACTION } from "./actions"

const initialState = {
  transactions: []
}

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case SET_TRANSACTION: return {
      ...state,
      ...payload
    }
    default: return state
  }
}