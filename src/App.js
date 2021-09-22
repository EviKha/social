import React from 'react';
import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

import { BrowserRouter, Route } from 'react-router-dom';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div class='app-wrapper-content'>
          <Route path ='/dialogs' render={()=><Dialogs dialogData={props.dialogData} messageData ={props.messageData}/>} />
          <Route path ='/profile' render={()=> <Profile postData={props.postData}/>} />
          <Route path ='/news' component={News} />
          <Route path ='/music' component={Music} />
          <Route path ='/settings' component={Settings} />
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
