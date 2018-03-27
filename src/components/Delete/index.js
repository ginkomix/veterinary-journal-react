import React from 'react';
import {connect} from 'react-redux';
import {changeItemID} from'../../actions/contextMenu';
import {del,change} from '../../actions/item'

class Delete extends React.Component {
	del = ()=> {
		this.props.del(this.props.id);
		this.props.changeItemID(0);
	}
	
	cloasMenu = () =>{
		this.props.menuChange('');
			document.querySelector('.change').classList.remove('button-control-active');
		
	}
	
	render() {
		return (
		<div>
			<p>ВЫ ДЕЙСТВИТЕЛЬНО ХОТИТЕ УДАЛИТЬ?</p>	
			<button onClick={this.del}>ДА</button>
			<button>НЕТ</button>
		</div>
		)
		
	}
	
}

export default connect(state=>({
	id: state.contextMenu
}),{
	changeItemID,
	del
   })(Delete);