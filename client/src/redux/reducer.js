import { SET_TRANSACTION } from "./actions"

const initialState = {
  transactions: [
    {
      concept: 'ddd',
      amount: '1000',
      type: 'ingress',
      date:'12020'
    },
    {
      concept: 'ddd',
      amount: '1000',
      type: 'egress',
      date:'12020'
    },
    {
      concept: 'ddd',
      amount: '1000',
      type: 'ingress',
      date:'12020'
    }
  ]
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