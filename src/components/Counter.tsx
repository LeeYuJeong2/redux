import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { increaseCount, decreaseCount } from "../reducers/counter"
import CounterState from "src/types/state"

const Counter = () => {
  const dispatch = useDispatch()
  const count = useSelector((state: CounterState) => state.counter.count)

  const increment = () => {
    dispatch(increaseCount())
  }

  const decrement = () => {
    dispatch(decreaseCount())
  }

  return (
    <div>
      Count: {count}
      <button onClick={increment}>Increase Count</button>
      <button onClick={decrement}>Decrease Count</button>
    </div>
  )
}

export default Counter
