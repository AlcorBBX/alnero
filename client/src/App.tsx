import LoginPage from 'pages/LoginPage';
import React from 'react';
import './App.css'
import AppRouter from './components/AppRouter';
import { BrowserRouter } from "react-router-dom";
// import '@/assets/styles/_global.sass'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppRouter/>
      </BrowserRouter>
    </div>
  );
}

export default App;
