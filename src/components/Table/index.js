import React from 'react';
import {sort} from '../../utils/sort.js'
import { Icon } from 'semantic-ui-react';
import  { connect } from 'react-redux';
import {defaultItem,changeDone} from '../../actions/item';
import {sortBy} from '../../actions/sort';
import {changeItemID} from'../../actions/contextMenu';
import {api} from '../../utils/api';
import { Loader, Image, Segment } from 'semantic-ui-react';
class Table extends React.Component {

	title = ["done", "title", "priority", "date"];

	componentWillMount() {
		api.getItems()
			.then((state)=>{

			this.props.defaultItem(state);
		});
	}

	renderTitel() {
		return(
			<tbody>
				<tr>
					{this.title.map((name,index)=>{
						return (
							<td key={index}>
								{name} 
								<Icon onClick={()=>this.props.sortBy(name)} name='caret up'/>
								<Icon  onClick={()=>this.props.sortBy('-'+name)} name='caret down'/>
							</td>
						)})}
				</tr>		
			</tbody>
		)
	}

	changeDone = (ev)=> {
		let target =ev.target.className;
		this.props.changeDone(target);
	}

	returnIdItem = (ev) => {
		if(ev.target.tagName==='INPUT') {
			return;
		}
		let id = Number(ev.target.getAttribute('class'));
		this.props.changeItemID(id);
	}

	renderPriority(priority) {
		let string ="";
		switch(priority) {
			case 0:
				string ="Lov";
				break;
			case 1:
				string ="Mid";
				break;
			case 2:
				string ="Max";
				break;
			default:
				string ="Lov";
		}
		return string;
	}

	getFilterItems() {
		let arr = [...this.props.list];
		if(!this.props.filter.completed) {
			arr = arr.filter((item)=>!item.done);
		}
		if(this.props.filter.text!=='') {

			arr = arr.filter((item)=>item.title.includes(this.props.filter.text) || item.description.includes(this.props.filter.text));
		}

		if(this.props.filter.dataMax) {

			arr = arr.filter((item)=>Date.parse(this.props.filter.dataMax)>Date.parse(item.date))
		}
		if(this.props.filter.dataMin) {
			arr = arr.filter((item)=>Date.parse(this.props.filter.dataMin)<Date.parse(item.date))
		}
		return arr ;
	}

	renderTable() {
		return(
			<tbody>
				{ sort.sortBy(this.getFilterItems(),this.props.sort).map((item)=> {
					return (<tr onClick={this.returnIdItem} className={item.id} key = {item.id}>
							<td className={item.id}><input className = {item.id} type="checkbox" checked ={item.done} onChange={this.changeDone} /></td>
							<td className={item.id}>{item.title}</td>
							<td className={item.id}>{this.renderPriority(item.priority)}</td>
							<td className={item.id}>{item.date.toString()}</td>
						</tr>
					)})}
			</tbody>
		)
	}

	renderLoad() {
		return (
			<tbody>
				<tr>
					<td>
						<Segment>
							<Loader active />
							<Image src='/assets/images/wireframe/short-paragraph.png' />
						</Segment>
					</td>
				</tr>	
			</tbody>
		)
	}

	render() {
		return(
			<table>
				{this.renderTitel()}
				{this.props.list?this.renderTable():this.renderLoad()}
			</table>
		);
	}
}


export default connect(state=>({
	list: state.item,
	sort: state.sort,
	filter: state.filter
}),{
	defaultItem,
	sortBy,
	changeDone,
	changeItemID
	})(Table);