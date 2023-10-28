import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import EmailList from './components/EmailList';
import Header from './components/Header';
import Mail from './components/Mail';
import Sidebar from './components/Sidebar';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <div className="App-Body">
          <Sidebar />

          <Routes>
            <Route exact path='/mail' element={<Mail />} />
            <Route exact path='/' element={<EmailList />} />
          </Routes>
        </div>

      </div>
    </Router>
  );
}

export default App;
