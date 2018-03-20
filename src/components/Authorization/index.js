import React from 'react';
import {connect} from 'react-redux';
import './index.css';
import {userAdd} from '../../actions/user';
import { withRouter } from 'react-router-dom';
import firebase from 'firebase';

class Authorization extends React.Component {

	verification =()=> {
		let login = document.querySelector('#loginIn'),
			password = document.querySelector('#passwordIn');
		if(login.value.length===0 || login.value.length>30) {		
			login.className ='error';
			return;
		} else {
			login.className ='success';
		}
		if(password.value.length===0 || password.value.length>30|| password.value.length<8) {	
			password.className ='error';
			return;
		} else {
			password.className ='success';
		}
		this.sigIn(login,password);
	}

	sigIn = (login,password) =>{
		
		let user = null;
		firebase.auth().signInWithEmailAndPassword(login.value, password.value)
			.then((user)=>{
			
			this.props.userAdd(user);
			this.props.history.push("/journal");
		})
			.catch(()=> {
			login.className = 'error';
			password.className = 'error';
		});

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

export default  withRouter(connect(undefined,{userAdd})(Authorization));