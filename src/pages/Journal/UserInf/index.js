import React from "react";
import { connect } from "react-redux";
import { menuChange } from "../../../actions/menu";
import { userAdd } from "../../../actions/user";
import { account } from "../../../utils/accountsApi";
import { inputError } from "../../../actions/inputError";
import { fileLoadSrc } from "../../../actions/fileLoadSrc";
import ReactDOM from "react-dom";
import "./index.css";

class UserInformation extends React.Component {
  change = () => {
    let name = ReactDOM.findDOMNode(this.refs.nameNew),
      surname = ReactDOM.findDOMNode(this.refs.surnameNew),
      patronymic = ReactDOM.findDOMNode(this.refs.patronymicNew),
      information = {
        name: name.value,
        surname: surname.value,
        patronymic: patronymic.value
      };
    if (name.value.length === 0 || name.value.length > 10) {
      this.props.inputError("nameNew");
      return;
    } else {
      this.props.inputError("");
    }
    if (surname.value.length === 0 || surname.value.length > 10) {
      this.props.inputError("surnameNew");
      return;
    } else {
      this.props.inputError("");
    }
    if (patronymic.value.length === 0 || patronymic.value.length > 10) {
      this.props.inputError("patronymicNew");
      return;
    } else {
      this.props.inputError("");
    }
    this.updateUserInformation(information);
	   this.props.fileLoadSrc("");
  };

  closeMenu = () => {
    this.props.menuChange("");
	  this.props.fileLoadSrc("");
  };

  updateUserInformation = information => {
    account.updateInformation(information).then(user => {
      this.props.userAdd(user);
      this.closeMenu();
    });
  };

  dropFile = (event) => {
    event.preventDefault();
    let file = event.dataTransfer.files[0];
    if (!file.type.match("image.*") || !file) {
      return;
    }

    let reader = new FileReader();
    reader.onload = (photo => {
      return e => {
		  this.props.fileLoadSrc(e.target.result);
        account.updatePhoto(photo, this.props.user);
      };
    })(file);
    reader.readAsDataURL(file);
  }
   preventDefault= (event)=> {
    event.preventDefault();
  }



	renderAvaBlock =()=>{
		return (
			<div className="file-block">
       <div className='img-block'>
        {this.props.loadFile ? <img className="newImgAva" alt='ava' title="ava" src={this.props.loadFile} /> : null } 
           </div>
            <p className="inf-file">ПЕРЕТАЩИТЕ ФАЙЛ</p>
            <div onDrop={this.dropFile} onDragOver={this.preventDefault} ref="file" className="file" />
          </div>
			)
	}

  render() {
    return (
      <div className="addTask">
        <span>РЕДАКТИРОВАНИЕ ПРОФИЛЯ</span>
        <div className="changeInfUser">
          {this.renderAvaBlock()}
          <div className="changeInfUserInput">
            <input
              className={this.props.input === "nameNew" ? "error" : ""}
              type="text"
              ref="nameNew"
              placeholder="ИМЯ"
            />
            <input
              className={this.props.input === "surnameNew" ? "error" : ""}
              type="text"
              ref="surnameNew"
              placeholder="ФАМИЛИЯ"
            />
            <input
              className={this.props.input === "patronymicNew" ? "error" : ""}
              type="text"
              ref="patronymicNew"
              placeholder="ОТЧЕСТВО"
            />
          </div>
        </div>
        <div className="button-block-task">
          <p className="buttonTask" onClick={this.change}>
            ИЗМЕНИТЬ
          </p>
          <p className="buttonTask" onClick={this.closeMenu}>
            ОТМЕНА
          </p>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    id: state.contextMenu,
    user: state.user,
    input: state.inputError,
	 loadFile : state.fileLoadSrc
  }),
  {
    menuChange,
    userAdd,
    inputError,
	  fileLoadSrc
  }
)(UserInformation);
