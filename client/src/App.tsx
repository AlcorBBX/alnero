import LoginPage from 'pages/LoginPage';
import React from 'react';
import './App.css'
import LayoutMain from './components/layout/LayoutChat';
// import '@/assets/styles/_global.sass'

function App() {
  return (
    <div className="App">
      {/* <LayoutMain/> */}
      <LoginPage/>
    </div>
  );
}

export default App;
