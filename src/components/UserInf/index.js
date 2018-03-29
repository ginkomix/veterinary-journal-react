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

	dropFile = (event,htmlelement) => {
		event.preventDefault();
		let file = event.dataTransfer.files[0],
			block = document.querySelector('.file');
		if (!file.type.match('image.*')|| !file) {
			return;
		}
		htmlelement.classList.remove('hover');
		block.innerHTML='';
		
		var reader = new FileReader();
		reader.onload = ((theFile)=> {
			return function(e) {
				var span = document.createElement('p');
				span.innerHTML = ['<img class="newImgAva" title="', escape(theFile.name), '" src="', e.target.result, '" />'].join('');
				block.insertBefore(span, null);
			};
		})(file);
		reader.readAsDataURL(file);
	}

	dragover =(event,htmlelement)=> {
		event.preventDefault();
		htmlelement.classList.add('hover');
	}

	dragleave = (event,htmlelement) => {
		htmlelement.classList.remove('hover');
	}

	componentDidMount(){
		let htmlelement = document.querySelector(".file");
		htmlelement.addEventListener("dragover", (event)=>this.dragover(event,htmlelement));
		htmlelement.addEventListener("dragleave",( event )=>this.dragleave(event,htmlelement));
		htmlelement.addEventListener("drop",(event)=>this.dropFile(event,htmlelement));
	}

render() {
	return (
		<div className='addTask'>
			<span>РЕДАКТИРОВАНИЕ ПРОФИЛЯ</span>	
			<div className='file'>
				<span className=''>Перетащите файл</span>
				<span className=''></span>
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