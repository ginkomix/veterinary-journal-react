import Ract from 'react';
import {connect} from 'react-redux';
import Table from "./components/Table";
import ToDoForm from "./components/ToDoForm";
import Filter from "./components/Filter";
import {api} from "./utils/api";
import ContextMenu from "./components/ContextMenu";

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