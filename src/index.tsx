import 'ress'

import React from 'react'
import { render } from 'react-dom'

const App = () => {
  return (
    <h1>
      {console.log(process.env.INU)}
      {process.env.INU}
      Hello React!!!
      {process.env.NODE_ENV}
    </h1>
  )
}

render(<App />, document.getElementById('root'))
