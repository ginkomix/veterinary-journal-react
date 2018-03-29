import React from 'react';
import {connect} from 'react-redux';
import {changeItemID} from'../../actions/contextMenu';
import { menuChange } from '../../actions/menu';
import './index.css'


class UserInf extends React.Component {
	change = ()=> {

		this.cloasMenu();
	}

	cloasMenu = () =>{
		this.props.menuChange('');
		document.querySelector('.user').classList.remove('button-control-active');

	}

	componentDidMount(){
		var htmlelement = document.querySelector(".file");
		htmlelement.addEventListener("dragover", function (event) {
			event.preventDefault();
			htmlelement.classList.add('hover');
		}, false);

		

		htmlelement.addEventListener("dragleave", function( event ) {
			htmlelement.classList.remove('hover');
					}, false);

		htmlelement.addEventListener("drop", function (event) {
			event.preventDefault();
			var files = event.dataTransfer.files;
			for (var i = 0; i < files.length; i++) {
				console.log("Имя файла: " + files[i].name);
				console.log("Тип файла: " + files[i].type);
				console.log("Размер файла: "+files[i].size)
			}
		}, false);
	}

render() {
	return (
		<div className='addTask'>
		<span>РЕДАКТИРОВАНИЕ ПРОФИЛЯ</span>	
		<div className='file'>

		</div>
		<div className='button-block-task'>
		<p className='buttonTask' onClick={this.change}>ИЗМЕНИТЬ</p>
		<p className='buttonTask' onClick={this.cloasMenu}>НЕТ</p>
		</div>
		</div>
	)

}

}

export default connect(state=>({
	id: state.contextMenu
}),{
	menuChange
   })(UserInf);