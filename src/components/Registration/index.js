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
            .then(()=>{
            this.props.choice('log');
            firebase.auth().currentUser.updateProfile({
                name,
                surname,
                patronymic
            })
        .then(()=>{
                this.newUser();
            })
        })
            .catch((error)=> {
            login.className ='success';
        });

    }

    newUser(login,password){

        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                // User is signed in.
                var name = user.name;
                var email = user.email;
                var surname = user.surname;
                var patronymic = user.patronymic;
                console.log(name,email,surname,patronymic);
            } 

        })
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

export default connect(undefined,{choice})(Registration);