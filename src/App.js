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

class App extends React.Component {

	render() {
		return (
			<Provider store={store}>
				<div>
					<h2>Add task</h2>
					<ToDoForm />
					<h2>Filter</h2>
					<Filter/>
					<h2>ToDo</h2>
					<Table/>
					<ContextMenu/>
				</div>
			</Provider>
		);
	}
}

export default App;
