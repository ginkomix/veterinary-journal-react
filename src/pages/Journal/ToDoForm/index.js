import React from 'react';
import {connect} from 'react-redux';
import {add} from '../../../actions/item';
import './index.css';
import { menuChange } from '../../../actions/menu';
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
	}
	
	render() {
		return(
			<div className="addTask">
				<div>
					<input size='mini' placeholder='ЗАГОЛОВОК' id="title"  type="text"/>
					<select id="priorety" defaultValue="-1">
						<option value ="-1" disabled>Priority</option>
						<option  value="0">Low</option>
						<option value="1">Mid</option>
						<option value="2">Max</option>
					</select>
					<input size='mini' id="data" type="date" />
				</div>
				<div>
					<textarea placeholder='ОПИСАНИЕ' id="description">

					</textarea>
				</div>
				<div className='button-block-task'>
					<p className='buttonTask' onClick={this.addItem} id="add">ДОБАВИТЬ</p>
					<p className='buttonTask' onClick={this.cloasMenu} >ОТМЕНА</p>
				</div>
			</div>

		)
	}
}

export default connect(
	undefined,{
	add,menuChange
})(ToDoForm);