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
