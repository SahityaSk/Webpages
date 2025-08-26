import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home';
import Dboard from './pages/Dboard';


const App = () => {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/dboard' element={<Dboard/>} />
        </Routes>
    </div>
  )
}

export default App;
