import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import initStore from './redux/store'

import './styles/global.css'
import './styles/colors.css'
import App from './App'

const store = initStore()

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(<Root />, document.getElementById('root'))
