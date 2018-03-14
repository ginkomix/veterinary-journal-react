import React from 'react';
import {connect} from 'react-redux';
import './index.css';
import firebase from 'firebase';

class Registration extends React.Component {

	regestration() {	
	}

	verification() {
		let name = document.querySelector('#name'),
			surname = document.querySelector('#surname'),
			patronymic = document.querySelector('#patronymic'),
			login = document.querySelector('#login'),
			password = document.querySelector('#password'),
			passwordTwo = document.querySelector('#passwordTwo');
		if(name.value.length===0 || name.value.length>10) {		
			name.className ='error';
		} else {
			name.className ='success';
		}
		if(surname.value.length===0 || surname.value.length>15) {		
			surname.className ='error';
		} else {
			surname.className ='success';
		}
		if(patronymic.value.length===0 || patronymic.value.length>15) {		
			patronymic.className ='error';
		} else {
			patronymic.className ='success';
		}
		if(login.value.length===0 || login.value.length>15) {		
			login.className ='error';
		} else {
			login.className ='success';
		}
		if(password.value.length===0 || password.value.length>15) {		
			password.className ='error';
		} else {
			password.className ='success';
		}
		if(passwordTwo.value.length===0 || passwordTwo.value.length>15 || passwordTwo.value!==password.value) {
			passwordTwo.className ='error';
		} else {
			passwordTwo.className ='success';
		}
		
		firebase.database().ref().child('users').push().set({
			name:name.value
		});
		firebase.database().ref().child('users').push().set({
			name:name.value
		});
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

export default connect(undefined,{})(Registration);