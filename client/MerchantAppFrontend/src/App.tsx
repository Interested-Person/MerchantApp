
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Merchant from './pages/Merchant'
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path='/merchant' element={<Merchant />}></Route>
        </Routes>
      </Router >
    </>
  )
}

export default App
