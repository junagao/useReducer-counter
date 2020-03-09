import React from 'react'
import { render } from 'react-dom'

import './styles.scss'

function reducer(state, value) {
  return state + value
}

const initialState = 0

function Counter() {
  const [count, dispatch] = React.useReducer(reducer, initialState)

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => dispatch(1)}>+</button>
      <button onClick={() => dispatch(-1)}>-</button>
    </div>
  )
}

render(<Counter />, document.getElementById('root'))
