import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Home from './home/Home'
import './App.css'

function App() {
  return (
    <Router>
      <Route path='/' exact>
        <Home />
      </Route>
      <Redirect to='/' />
    </Router>
  )
}

export default App
