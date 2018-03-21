import React from 'react';
import {connect} from 'react-redux';


import Table from "../Table";
import ToDoForm from "../ToDoForm";
import Filter from "../Filter";


import {api} from "../../utils/api";
import ContextMenu from "../ContextMenu";
import './index.css';
import ava from '../../images/ava.png';
import { Icon } from 'semantic-ui-react';

class Main extends React.Component {

	renderUserProfile = ()=>{
		if(this.props.user) {
			
			let inf = JSON.parse( this.props.user.displayName);
			
		
				return (
					<div className="user-profile">
					<img src={ava}  />
					<p className='fimale'>{inf.surname}</p>
					<p className='name'>{inf.name+' '+inf.patronymic}</p>
					</div>
				)
			
		}
	}

	render() {	
		return(
			<div className='main'>
			<div className='headerMain'>
			<div className='headerMain-top'>
			{this.renderUserProfile()}
<div className="button-control button-control-active " >
	<Icon name='plus'  />
		<p>ДОБАВИТЬ</p>
		</div>
		<div className="button-control">
			<Icon name='idea'  />
				<p>ИЗМЕНИТЬ</p>
				</div>
				<div className="button-control">
					<Icon name='delete'  />
						<p>УДАЛИТЬ</p>
						</div>
						</div>
						<div className="footer">
							<span>ВЫЙТИ</span>
							<p>GINKOMIX 2018</p>
								</div>
								</div>
								<div className='journal'>
									<div className="journal-box">

										</div>
										</div>
										</div>
									)
}

}

export default connect(state=>({
	user:state.user
}),{})(Main);