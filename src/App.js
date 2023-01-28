import React, { Component } from 'react';
import Main from './components/Main'
import ReactDOM from 'react-dom';
import NavbarVer2 from './NavbarVer2';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import { BrowserRouter, Route, Switch, Routes } from 'react-router-dom';
import LoginPage from "..//src/components/LoginPage/LoginPage"
import Home from './Home';
import MyChat from './components/ChatsPage/MyChat';
import ChatPage from './components/ChatsPage/ChatPage';
// import Chat from './Chat';

import Register from './pages/Register';
import Login from './pages/Login';
import SetAvatar from './components/chatBox/SetAvatar';
import Chat from './pages/Chat';
class App extends Component {
  
  
  
  
  render() {
    return (
<div>

<BrowserRouter>
  
 <Routes>
  <Route path="/main" element={<Main />} />
  <Route path='/register' element={<Register />} />
  <Route path='/login' element={<Login />} />
  <Route path='/setAvatar' element={<SetAvatar />} />
  <Route path="/" element={<Chat />} />
 </Routes>
    </BrowserRouter>
    </div>
    );
  }
}

export default App;
