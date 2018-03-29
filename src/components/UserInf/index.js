import React from 'react';
import {connect} from 'react-redux';
import {changeItemID} from'../../actions/contextMenu';
import { menuChange } from '../../actions/menu';
import './index.css'


class UserInf extends React.Component {
	change = ()=> {
		this.cloasMenu();
	}
	
	cloasMenu = () =>{
		this.props.menuChange('');
			document.querySelector('.user').classList.remove('button-control-active');
		
	}
	
	render() {
		return (
		<div className='addTask'>
			<span>ВЫ ДЕЙСТВИТЕЛЬНО ХОТИТЕ УДАЛИТЬ?</span>	
			<div className='button-block-task'>
			<p className='buttonTask' onClick={this.del}>ДА</p>
			<p className='buttonTask' onClick={this.cloasMenu}>НЕТ</p>
			</div>
		</div>
		)
		
	}
	
}

export default connect(state=>({
	id: state.contextMenu
}),{
	menuChange
   })(UserInf);