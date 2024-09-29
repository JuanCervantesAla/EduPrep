import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { LoginPage } from './LoginPage';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<p>Hello</p>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<p>Here needs to be the register page</p>} />
      </Routes>
    </Router>
  )
}

export default App
