//import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { increment, decrement } from "../reducers/counterSlice"
import { RootState } from "../store"

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter)
  const dispatch = useDispatch()

  return (
    <div>
      <button onClick={() => dispatch(increment())}>+</button>
      <span style={{ marginLeft: "20px", marginRight: "20px" }}>{count}</span>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  )
}

export default Counter
