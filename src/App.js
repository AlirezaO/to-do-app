import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/Login/login-page';
import ToDoListPage from './pages/ToDoList/to-do-list-page';
import Test from './pages/Test/App';

function App() {
  return (
    <div >


      <div style={{ display: 'flex', justifyContent: 'center' }} >   
        <Routes>
          <Route path="/login" element={<LoginPage />}/>
          <Route path="/to-do" element={<ToDoListPage />}/>
          <Route path="/test" element={<Test />}/>
        </Routes>
      </div>
    </div>
  )
}

export default App;