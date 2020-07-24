import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home } from './pages'
import { Header } from './components'

const App = (props) => {
  const [searchKeyword, setSearchKeyword] = useState('')

  const handleSearchInputChange = (evt) => {
    setSearchKeyword(evt.target.value)
  }

  return (
    <Router>
      <div className="pt-24 md:pt-20 px-6 mx-auto">
        <Header onSearchInputChange={handleSearchInputChange} />
        <Switch>
          <Route exact path="/">
            <Home searchKeyword={searchKeyword} />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
