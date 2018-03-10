import React from 'react';
import { Button,Icon ,Input } from 'semantic-ui-react';
import {connect} from 'react-redux';
import {add} from '../../actions/item';
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
	}

	
	render() {
		return(
			<div className="addTask">
				<div>
					<Input size='mini' placeholder='Title' id="title"  type="text"/>
					<select id="priorety" defaultValue="-1">
						<option value ="-1" disabled>Priority</option>
						<option  value="0">Low</option>
						<option value="1">Mid</option>
						<option value="2">Max</option>
					</select>
					<Input size='mini' id="data" type="date" />
				</div>
				<div>
					<textarea placeholder='Description' id="description">

					</textarea>
				</div>
				<div>
					<Button  size='tiny' color='green' onClick={this.addItem} id="add" animated>
						<Button.Content  visible>Add</Button.Content>
						<Button.Content hidden> <Icon name='pencil'/></Button.Content>
					</Button>
					
				</div>
			</div>

		)
	}
}

export default connect(
	undefined,{
	add
})(ToDoForm);