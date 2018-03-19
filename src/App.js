import React from "react";
import Table from "./components/Table";
import ToDoForm from "./components/ToDoForm";
import Filter from "./components/Filter";
import {api} from "./utils/api";
import ContextMenu from "./components/ContextMenu";
import "./App.css";
import 'semantic-ui-css/semantic.min.css';
import {Provider} from 'react-redux';
import store from './config/store';
import Start from './components/Start';
import firebase from 'firebase';

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
                <div>
                   <Start/>
                </div>			
			</Provider>
		);
	}
}

export default App;
