import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Navbar from './shared/Navbar'
import Footer from './shared/Footer'
import Home from './home/Home'
import './App.css'

function App() {
  return (
    <Router>
      <Navbar />
      <Route path='/' exact>
        <Home />
      </Route>
      <Redirect to='/' />
      <Footer />
    </Router>
  )
}

export default App
