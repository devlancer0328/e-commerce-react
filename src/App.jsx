import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';

function App() {

  return (
    <div className="app-container">
      <Router>
        <Header />
        <Routes>
          <Route path='./'/>
          <Route path='./cart'/>
        </Routes>
      </Router>
      <Footer />
    </div>
  )
}

export default App
