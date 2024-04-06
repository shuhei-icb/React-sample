import { useState } from "react"

type CounterProps = {
  initialValue: number
}

const Counter = (props: CounterProps) => {
  //const initialValue = props.initialValue
  //propsの分割代入↑↓同じ意味
  const {initialValue} = props
  const [count, setCount] = useState(initialValue)

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={()=> setCount(count - 1)}>-</button>
      <button onClick={()=> setCount((prevCount) => prevCount + 1)}>+</button>
    </div>
  )
}

export default Counter

