import React from 'react';
import {connect} from 'react-redux';
import {changeItemID} from'../../actions/contextMenu';
import {del,change} from '../../actions/item';
import { menuChange } from '../../actions/menu';
import './index.css'


class Delete extends React.Component {
	del = ()=> {
		this.props.del(this.props.id);
		this.props.changeItemID(0);
		this.cloasMenu();
	}
	
	cloasMenu = () =>{
		this.props.menuChange('');
			document.querySelector('.del').classList.remove('button-control-active');
		
	}
	
	render() {
		return (
		<div className='del-block'>
			<p>ВЫ ДЕЙСТВИТЕЛЬНО ХОТИТЕ УДАЛИТЬ?</p>	
			<button onClick={this.del}>ДА</button>
			<button onClick={this.cloasMenu}>НЕТ</button>
		</div>
		)
		
	}
	
}

export default connect(state=>({
	id: state.contextMenu
}),{
	changeItemID,
	del,
	menuChange
   })(Delete);