import React from 'react';
import {sort} from '../../utils/sort.js'
import { Icon } from 'semantic-ui-react';
import  { connect } from 'react-redux';
import {defaultItem,changeDone} from '../../actions/item';
import {sortBy} from '../../actions/sort';
import {changeItemID} from'../../actions/contextMenu';
import {api} from '../../utils/api';
import { Loader, Image, Segment } from 'semantic-ui-react';
import './index.css';

class Table extends React.Component {

	title = ["", "ЗАГОЛОВОК","ОПИСАНИЕ", "ПРИОРИТЕТ", "ДАТА"];
	sortBytitle = ['id','title','description','priority','date','done'];

	componentWillMount() {
		api.getItems()
			.then((state)=>{

			this.props.defaultItem(state);
		});
	}

	renderTitel() {
		return(
			<div className='title'>
				
					{this.title.map((name,index)=>{
						return (
							<div className={`inf${index+1 } `} key={index}>
								{name} 
								<Icon onClick={()=>this.props.sortBy(this.sortBytitle[index])} name='caret up'/>
								<Icon  onClick={()=>this.props.sortBy('-'+this.sortBytitle[index])} name='caret down'/>
							</div>
						)})}
					
			</div>
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
		
				<div className='main-table'>
					{ sort.sortBy(this.getFilterItems(),this.props.sort).map((item)=> {
						return (
							<div onClick={this.returnIdItem}  className={`block-table  ${item.id}`} key = {item.id}>
								<div className={`inf1 ${item.id}`}><input className = {item.id} type="checkbox" checked ={item.done} onChange={this.changeDone} /></div>
								<div className={`inf2 ${item.id}`}>{item.title}</div>
								<div className={`inf3 ${item.id}`}>{item.description}</div>
								<div className={`inf4 ${item.id}`}>{this.renderPriority(item.priority)}</div>
								<div className={`inf5 ${item.id}`}>{item.date.toString()}</div>
							</div>
						)})}
				</div>
			
		)
	}

	renderLoad() {
		return (
		<div className='loader'>
							<Loader active />
							<Image src='/assets/images/wireframe/short-paragraph.png' />
					</div>
		)
	}

	render() {
		return(
			<div>
			{this.renderTitel()}
				
					
					{this.props.list?this.renderTable():this.renderLoad()}
			</div>
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