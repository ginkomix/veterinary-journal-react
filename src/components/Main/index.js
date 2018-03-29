import React from 'react';
import {connect} from 'react-redux';


import Table from "../Table";
import ToDoForm from "../ToDoForm";
import Filter from "../Filter";
import ContextMenu from "../ContextMenu";
import Delete from '../Delete'

import { Switch, Route } from 'react-router-dom'
import {api} from "../../utils/api";
import './index.css';
import ava from '../../images/ava.png';
import { Icon } from 'semantic-ui-react';
import { userAdd } from '../../actions/user';
import { menuChange } from '../../actions/menu';
import firebase from 'firebase';
import { withRouter } from 'react-router-dom';
import Blockout from '../Blockout'


class Main extends React.Component {



	renderUserProfile = ()=>{
		if(this.props.user) {
			let inf = JSON.parse( this.props.user.displayName);
			return (
				<div onClick={()=> this.buttonMenu('user')} className="user-profile user">
					<img src={ava}  />
					<p className='fimale'>{inf.surname}</p>
					<p className='name'>{inf.name+' '+inf.patronymic}</p>
				</div>
			)
		}
	}

	buttonMenu = (str)=>{
		this.props.menuChange(str);
	}

	renderContext = (menu) => {
		
		switch(menu) {
			case 'add': 
				document.querySelector('.add').classList.add('button-control-active');
				return (
					<div>
						<Blockout/>
						<ToDoForm/>
					</div>
				)

				case 'change': 
				document.querySelector('.change').classList.add('button-control-active');
				return (
					<div>
						<Blockout/>
						<ContextMenu/>
					</div>
				)
				case 'del': 
				document.querySelector('.del').classList.add('button-control-active');
				return (
					<div>
						<Blockout/>
						<Delete/>
					</div>
				)
				case 'user': 
				document.querySelector('.del').classList.add('button-control-active');
				return (
					<div>
						<Blockout/>
						<Delete/>
					</div>
				)
				default: return;
		}
	}

	out = ()=>{
		this.props.userAdd(null);
		firebase.auth().signOut()
			.then(()=>{
			this.props.history.push("/");
		})	
	}

	render() {	
		return(
			<div className='main'>
				<div className='headerMain'>
					<div className='headerMain-top'>
						{this.renderUserProfile()}
						<div onClick={()=> this.buttonMenu('add')} className="button-control add" >
							<Icon name='plus'  />
							<p>ДОБАВИТЬ</p>
						</div>
						<div onClick={()=>this.props.id ? this.buttonMenu('change') :null} className="button-control change">
							<Icon name='idea'  />
							<p>ИЗМЕНИТЬ</p>
						</div>
						<div  onClick={()=>this.props.id ? this.buttonMenu('del') :null}  className="button-control del">
							<Icon name='delete'  />
							<p>УДАЛИТЬ</p>
						</div>
					</div>
					<div className="footer">
						<span onClick={this.out}>ВЫЙТИ</span>
						<p>GINKOMIX 2018</p>
					</div>
				</div>
				<div className='journal'>
					<div className="journal-box">
						<Filter/>
						<Table/>
						{this.renderContext(this.props.menu)}

					</div>
				</div>
			</div>
		)
	}

}

export default withRouter(connect(state=>({
	user:state.user,
	menu:state.menu,
	id: state.contextMenu
}),{userAdd,menuChange})(Main));