import React from 'react';
import './App.css';

import Header from './Components/Header/Header.jsx';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import Footer from './Components/Footer/footer'
import Dialogs from './Components/Dialogs/Dialogs';
import { Route} from "react-router-dom";  //BrowserRouter,
import News from './Components/News/News'
import Music from './Components/Music/Music'
import Settings from './Components/Settings/Settings'


const App = (props) => {
    console.log('AppJS props ---', props);
      return (
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path='/dialogs' render={() => <Dialogs state = {props.state.dialogsPage} />}/>
                    <Route path='/profile' render={() => <Profile
                        profilePage = {props.state.profilePage}
                        addPost = {props.addPost}
                        updateNewPostText = {props.updateNewPostText}/>
                    }/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                </div>
                <Footer/>
            </div>
    );
};

export default App;
