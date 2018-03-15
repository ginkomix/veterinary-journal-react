import React from 'react';
import {connect} from 'react-redux';
import './index.css';
import firebase from 'firebase';
import firebaseui from 'firebaseui';
import {choice} from '../../actions/startForm';

class Registration extends React.Component {

	regestration() {	
	}

	verification = ()=> {

		var user = null;
		let name = document.querySelector('#name'),
			surname = document.querySelector('#surname'),
			patronymic = document.querySelector('#patronymic'),
			login = document.querySelector('#login'),
			password = document.querySelector('#password'),
			passwordTwo = document.querySelector('#passwordTwo');
		if(name.value.length===0 || name.value.length>10) {		
			name.className ='error';
			return;
		} else {
			name.className ='success';
		}
		if(surname.value.length===0 || surname.value.length>30) {		
			surname.className ='error';
			return;
		} else {
			surname.className ='success';
		}
		if(patronymic.value.length===0 || patronymic.value.length>30) {		
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



		firebase.auth().createUserWithEmailAndPassword(login.value, password.value)
			.then( ()=> {
			user = firebase.auth().currentUser;
			user.sendEmailVerification();
		})
			.then( ()=> {
			user.updateProfile({
				displayName: name.value,
				photoURL: name.value
			})
				.then(()=>{
				this.newUser();
			})
		})

			.catch((error)=> {
			login.className ='error';
		});

	}

	newUser(login,password){
		var user = firebase.auth().currentUser;

		if (user != null) {
			user.providerData.forEach(function (profile) {
				console.log("Sign-in provider: " + profile.providerId);
				console.log("  Provider-specific UID: " + profile.uid);
				console.log("  Name: " + profile.displayName);
				console.log("  Email: " + profile.email);
				console.log("  Photo URL: " + profile.photoURL);
			}); 
		}
	}
sigIn(){

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