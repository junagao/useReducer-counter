import React from 'react'
import { render } from 'react-dom'

import './styles.scss'

function reducer(state, action) {
  switch (action) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'reset':
      return 0
    default:
      throw new Error()
  }
}

function Counter() {
  const [count, dispatch] = React.useReducer(reducer, 0)

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => dispatch('increment')}>+</button>
      <button onClick={() => dispatch('decrement')}>-</button>
      <button onClick={() => dispatch('reset')}>reset</button>
    </div>
  )
}

render(<Counter />, document.getElementById('root'))
