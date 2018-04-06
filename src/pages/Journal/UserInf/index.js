import React from "react";
import { connect } from "react-redux";
import { menuChange } from "../../../actions/menu";
import { updateInformation,updatePhoto } from "../../../actions/user";
import { inputError } from "../../../actions/inputError";
import { fileLoadSrc } from "../../../actions/fileLoadSrc";

import "./index.css";

class UserInformation extends React.Component {
  change = () => {
    let name = this.refs.nameNew.value,
      surname = this.refs.surnameNew.value,
      patronymic = this.refs.patronymicNew.value,
      information = {
        name: name,
        surname: surname,
        patronymic: patronymic
      };
    if (name.length === 0 || name.length > 10) {
      this.props.inputError("nameNew");
      return;
    } else {
      this.props.inputError("");
    }
    if (surname.length === 0 || surname.length > 10) {
      this.props.inputError("surnameNew");
      return;
    } else {
      this.props.inputError("");
    }
    if (patronymic.length === 0 || patronymic.length > 10) {
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
    this.props.updateInformation(information).then(user => {
      this.closeMenu();
    });
  };

  dropFile = event => {
    event.preventDefault();
    let file = event.dataTransfer.files[0];
    if (!file.type.match("image.*") || !file) {
      return;
    }

    let reader = new FileReader();
    reader.onload = (photo => {
      return e => {
        this.props.fileLoadSrc(e.target.result);
        this.props.updatePhoto(photo, this.props.user);
      };
    })(file);
    reader.readAsDataURL(file);
  };
  preventDefault = event => {
    event.preventDefault();
  };

  renderAvaBlock = () => {
    return (
      <div className="file-block">
        <div className="img-block">
          {this.props.loadFile ? (
            <img
              className="newImgAva"
              alt="ava"
              title="ava"
              src={this.props.loadFile}
            />
          ) : null}
        </div>
        <p className="inf-file">ПЕРЕТАЩИТЕ ФАЙЛ</p>
        <div
          onDrop={this.dropFile}
          onDragOver={this.preventDefault}
          ref="file"
          className="file"
        />
      </div>
    );
  };

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
    loadFile: state.fileLoadSrc
  }),
  {
    menuChange,
    updateInformation,
    inputError,
    fileLoadSrc,
	  updatePhoto
  }
)(UserInformation);
