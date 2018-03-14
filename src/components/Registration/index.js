import React from 'react';
import {connect} from 'react-redux';
import './index.css';

class Registration extends React.Component {
	render () {
		return (
			<div className='registration'>
				<input placeholder='Имя' /><br/>
				<input placeholder='Фамилия' /><br/>
				<input placeholder='Отчество' /><br/>
				<input placeholder='Почта' /><br/>
				<input placeholder='Пароль' /><br/>
				<input placeholder='Пароль повторно' /><br/><br/>
				<button color='teal'>Зарегестрироваться</button>
			</div>
		)
	}
}

export default connect(undefined,{})(Registration);