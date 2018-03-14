import React from 'react';
import {connect} from 'react-redux';
import './index.css';

class Authorization extends React.Component {

	verification() {
		let loginIn = document.querySelector('#loginIn'),
			passwordIn = document.querySelector('#passwordIn');
		if(loginIn.value.length===0 || loginIn.value.length>10) {		
			loginIn.className ='error';
		} else {
			loginIn.className ='success';
		}
		if(passwordIn.value.length===0 || passwordIn.value.length>15) {		
			passwordIn.className ='error';
		} else {
			passwordIn.className ='success';
		}
		
	}

	render () {
		return (
			<div>
				<input id='loginIn' placeholder='Логин' /><br/>
				<input type='password' id='passwordIn' placeholder='Пароль' /><br/><br/>
				<button onClick={this.verification} color='teal'>Вход</button>
			</div>
		)
	}
}

export default connect(undefined,{})(Authorization);