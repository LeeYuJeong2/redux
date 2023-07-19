export const INCREASE = "COUNT/INCREASE"
export const DECREASE = "COUNT/DECREASE"

interface IncreaseAction {
  type: typeof INCREASE
}

interface DecreaseAction {
  type: typeof DECREASE
}

export type CounterActionTypes = IncreaseAction | DecreaseAction
