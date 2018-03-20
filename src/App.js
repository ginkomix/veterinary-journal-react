import React from "react";
import "./App.css";
import 'semantic-ui-css/semantic.min.css';
import {Provider} from 'react-redux';
import store from './config/store';
import Start from './components/Start';
import Authenticatin from './components/Authenticatin';
import firebase from 'firebase';
import { Switch, Route } from 'react-router-dom'

var config = {
    apiKey: "AIzaSyBJqf0gLujy-LORi1oFG41JE040bx1F0RE",
    authDomain: "veterinary-333.firebaseapp.com",
    databaseURL: "https://veterinary-333.firebaseio.com",
    projectId: "veterinary-333",
    storageBucket: "veterinary-333.appspot.com",
    messagingSenderId: "509184734732"
};

firebase.initializeApp(config);


class App extends React.Component {

   

    render() {
        return (
            <Provider store={store}>
            <Switch>
            <Route exact path='/' component={Start}/>
            <Route path='/journal' component={Authenticatin}/>
            </Switch>    			
            </Provider>
        );
    }
}

export default App;
