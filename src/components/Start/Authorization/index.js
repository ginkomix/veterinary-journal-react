import React from 'react';
import {connect} from 'react-redux';
import './index.css';
import {userAdd} from '../../actions/user';
import {inputError} from '../../actions/inputError';
import {withRouter} from 'react-router-dom';
import {account} from '../../utils/accountsApi';

class Authorization extends React.Component {

	verification =()=> {
		let login = document.querySelector('#loginIn'),
			password = document.querySelector('#passwordIn');
		if(login.value.length===0 || login.value.length>30) {		
			this.props.inputError('login');
			return;
		} else {
			this.props.inputError('');
		}
		if(password.value.length===0 || password.value.length>30|| password.value.length<8) {	
			this.props.inputError('password');
			return;
		} else {
			this.props.inputError('');
		}
		this.signIn(login,password);
	}

	signIn = (login,password) =>{
		account.signIn(login,password)
			.then((user)=>{	
			this.props.userAdd(user);
			this.props.history.push("/journal");
		})
			.catch(()=> {
			this.props.inputError('login');
		});

	}

	render () {
		return (
			<div>
				<input id='loginIn'className={this.props.input === 'login' ? 'error' : ''} placeholder='Логин' /><br/>
				<input type='password'className={this.props.input === 'password' ? 'error' : ''} id='passwordIn' placeholder='Пароль' /><br/><br/>
				<button onClick={this.verification} color='teal'>Вход</button>
			</div>
		)
	}
}

export default withRouter(connect(
	state=>({
	input:state.inputError	
	}),{
		userAdd,
		inputError
	})(Authorization));