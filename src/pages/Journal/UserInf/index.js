import React from "react";
import { connect } from "react-redux";
import { menuChange } from "../../../actions/menu";
import { userAdd } from "../../../actions/user";
import { account } from "../../../utils/accountsApi";
import { inputError } from "../../../actions/inputError";
import "./index.css";

class UserInformation extends React.Component {
  change = () => {
    let name = document.querySelector("#nameNew"),
      surname = document.querySelector("#surnameNew"),
      patronymic = document.querySelector("#patronymicNew"),
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
  };

  closeMenu = () => {
    this.props.menuChange("");
  };

  updateUserInformation = information => {
    account.updateInformation(information).then(user => {
      this.props.userAdd(user);
      this.closeMenu();
    });
  };

  dropFile = (event, htmlelement) => {
    event.preventDefault();
    let file = event.dataTransfer.files[0],
      block = document.querySelector(".file");
    if (!file.type.match("image.*") || !file) {
      return;
    }

    htmlelement.classList.remove("hover");
    block.innerHTML = "";

    let reader = new FileReader();
    reader.onload = (photo => {
      return e => {
        let span = document.createElement("p");
        document.querySelector(".avaUser").setAttribute("src", e.target.result);
        span.innerHTML = [
          '<img class="newImgAva" title="',
          escape(photo.name),
          '" src="',
          e.target.result,
          '" />'
        ].join("");
        block.insertBefore(span, null);
        account.updatePhoto(photo, this.props.user);
      };
    })(file);
    reader.readAsDataURL(file);
  };

  dragover = (event, htmlelement) => {
    event.preventDefault();
    htmlelement.classList.add("hover");
    document.querySelector(".inf-file").style.display = "none";
    document.querySelector(".inf-put").style.display = "block";
  };

  dragleave = (event, htmlelement) => {
    htmlelement.classList.remove("hover");
    document.querySelector(".inf-file").style.display = "block";
    document.querySelector(".inf-put").style.display = "none";
  };

  componentDidMount() {
    let htmlelement = document.querySelector(".file");
    htmlelement.addEventListener("dragover", event =>
      this.dragover(event, htmlelement)
    );
    htmlelement.addEventListener("dragleave", event =>
      this.dragleave(event, htmlelement)
    );
    htmlelement.addEventListener("drop", event =>
      this.dropFile(event, htmlelement)
    );
  }

  render() {
    return (
      <div className="addTask">
        <span>РЕДАКТИРОВАНИЕ ПРОФИЛЯ</span>
        <div className="changeInfUser">
          <div className="file-block">
            <p className="inf-file">ПЕРЕТАЩИТЕ ФАЙЛ</p>
            <p className="inf-put">ОТПУСТЕ ДЛЯ ЗАГРУЗКИ</p>
            <div className="file" />
          </div>
          <div className="changeInfUserInput">
            <input
              className={this.props.input === "nameNew" ? "error" : ""}
              type="text"
              id="nameNew"
              placeholder="ИМЯ"
            />
            <input
              className={this.props.input === "surnameNew" ? "error" : ""}
              type="text"
              id="surnameNew"
              placeholder="ФАМИЛИЯ"
            />
            <input
              className={this.props.input === "patronymicNew" ? "error" : ""}
              type="text"
              id="patronymicNew"
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
    input: state.inputError
  }),
  {
    menuChange,
    userAdd,
    inputError
  }
)(UserInformation);
