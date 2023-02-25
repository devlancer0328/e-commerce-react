import './App.css'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <h1>E-commerce App</h1>
      <p>Hello</p>


      <Router>
        <Routes>
          <Route path='./'/>
          <Route path='./cart'/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
