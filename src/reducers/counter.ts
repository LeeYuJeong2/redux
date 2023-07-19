import { INCREASE, DECREASE, CounterActionTypes } from "src/types/actions"

export const increaseCount = (): CounterActionTypes => ({ type: INCREASE })
export const decreaseCount = (): CounterActionTypes => ({ type: DECREASE })

const initialState = {
  count: 0,
}

const counter = (state = initialState, action: CounterActionTypes) => {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        count: state.count + 1,
      }
    case DECREASE:
      return {
        ...state,
        count: state.count - 1,
      }
    default:
      return state
  }
}

export default counter
