import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/Login/login-page';

function App() {
  return (
    <div >


      <div style={{ display: 'flex', justifyContent: 'center' }} >   
        <Routes>
          <Route path="/login" element={<LoginPage />}/>
        </Routes>
      </div>
    </div>
  )
}

export default App;