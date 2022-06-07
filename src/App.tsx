import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import Options from './Components/Options/Options';
import Information from './Components/Information/Information';
import Profile from './Components/Profile/Profile';
import Notification from './Components/Notification/Notification';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route index element={<Home />} />
    <Route path="/header" element={<Header />}/>
    <Route path="/signUp" element={<SignUp />}/>
    <Route path="/login" element={<Login />}/>
    <Route path="/options" element={<Options />}/>
    <Route path="/information" element={<Information />}/>
    <Route path="/profile" element={<Profile />}/>
    <Route path="/notification" element={<Notification />}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
