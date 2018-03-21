import React from 'react';
import {connect} from 'react-redux';
import './index.css';
import firebase from 'firebase';
import {userAdd} from '../../actions/user';
import { withRouter } from 'react-router-dom';
import {choice} from '../../actions/startForm';

class Registration extends React.Component {

	regestration = (login,password,inf)=> {
	
		var user = null;
		firebase.auth().createUserWithEmailAndPassword(login.value, password.value)
			.then( ()=> {
			user = firebase.auth().currentUser;
			
			user.sendEmailVerification();
			return user;
		})
			.then((user)=> {
			user.updateProfile({
				 JSON.stringify(inf)
			})
				.then(()=>{				
				this.props.userAdd(user);
				this.props.history.push("/journal");
				
			})
		})
			.catch((error)=> {
			login.className ='error';
		});
	}

	verification = ()=> {
		let name = document.querySelector('#name'),
			surname = document.querySelector('#surname'),
			patronymic = document.querySelector('#patronymic'),
			login = document.querySelector('#login'),
			password = document.querySelector('#password'),
			passwordTwo = document.querySelector('#passwordTwo'),
			inf ={
				name:name.value,
				surname:surname.value,
				patronymic:patronymic.value				
			}
		if(name.value.length===0 || name.value.length>10) {		
			name.className ='error';
			return;
		} else {
			name.className ='success';
		}
		if(surname.value.length===0 || surname.value.length>10) {		
			surname.className ='error';
			return;
		} else {
			surname.className ='success';
		}
		if(patronymic.value.length===0 || patronymic.value.length>10) {		
			patronymic.className ='error';
			return;
		} else {
			patronymic.className ='success';
		}
		if(login.value.length===0 || login.value.length>30) {		
			login.className ='error';
			return;
		} else {
			login.className ='success';
		}
		if(password.value.length===0 || password.value.length>30 || password.value.length<8) {		
			password.className ='error';
			return;
		} else {
			password.className ='success';
		}
		if(passwordTwo.value!==password.value) {
			passwordTwo.className ='error';
			return;
		} else {
			passwordTwo.className ='success';
		}
		this.regestration(login,password,inf);
	}

	render () {
		return (
			<div className='registration'>
			<input id='name' placeholder='Имя' /><br/>
			<input id='surname' placeholder='Фамилия' /><br/>
			<input id='patronymic' placeholder='Отчество' /><br/>
			<input id='login'placeholder='Почта' /><br/>
			<input id='password'placeholder='Пароль' /><br/>
			<input id='passwordTwo'placeholder='Пароль повторно' /><br/><br/>
			<button onClick={this.verification} color='teal'>Зарегестрироваться</button>
			</div>
		)
	}
}

export default  withRouter(connect(undefined,{userAdd,choice})(Registration));