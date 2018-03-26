import React from 'react';
import {connect} from 'react-redux';
import {add} from '../../actions/item';
import './index.css';
import { menuChange } from '../../actions/menu';
class ToDoForm extends React.Component {

	addItem = ()=>{
		let item ={
			title: document.querySelector('#title').value,
			priorety: document.querySelector('#priorety').value,
			data: document.querySelector('#data').value,
			description: document.querySelector('#description').value	
		}
		document.querySelector('#title').value = '';
		document.querySelector('#priorety').value = -1;
		document.querySelector('#data').value = '';
		document.querySelector('#description').value = '';
		this.props.add(item);
		this.cloasMenu();
	}
	cloasMenu = () =>{
		this.props.menuChange('');
			document.querySelector('.add').classList.remove('button-control-active');
		
	}

	
	render() {
		return(
			<div className="addTask">
				<div>
					<input size='mini' placeholder='Title' id="title"  type="text"/>
					<select id="priorety" defaultValue="-1">
						<option value ="-1" disabled>Priority</option>
						<option  value="0">Low</option>
						<option value="1">Mid</option>
						<option value="2">Max</option>
					</select>
					<input size='mini' id="data" type="date" />
				</div>
				<div>
					<textarea placeholder='Description' id="description">

					</textarea>
				</div>
				<div>
					<button onClick={this.addItem} id="add">ДБАВИТЬ</button>
					<button onClick={this.cloasMenu} >ОТМЕНА</button>
				</div>
			</div>

		)
	}
}

export default connect(
	undefined,{
	add,menuChange
})(ToDoForm);