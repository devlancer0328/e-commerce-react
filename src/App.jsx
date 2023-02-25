import './App.css'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';

function App() {

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='./'/>
          <Route path='./cart'/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
