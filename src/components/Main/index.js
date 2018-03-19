import React from 'react';
import {connect} from 'react-redux';
import Table from "../Table";
import ToDoForm from "../ToDoForm";
import Filter from "../Filter";
import {api} from "../../utils/api";
import ContextMenu from "../ContextMenu";

class Main extends React.Component {
	render() {	
		return(
			<div>
				<ToDoForm/>
				<Filter/>
				<Table/>
			</div>
		)
	}
	
}

export default connect(undefined,{})(Main);