import React from "react";
import { connect } from "react-redux";
import "./index.css";
import ReactDOM from "react-dom";
import { createUser } from "../../../actions/user";
import { withRouter } from "react-router-dom";
import { choice } from "../../../actions/startForm";
import { account } from "../../../utils/accountsApi";
import { inputError } from "../../../actions/inputError";

class Registration extends React.Component {
  regestration = (login, password, information) => {
    this.props
      .createUser(login, password, information)
      .then(user => {
        this.props.history.push("/journal");
      })
      .catch(error => {
        login.className = "error";
      });
  };

  verification = () => {
    let name = ReactDOM.findDOMNode(this.refs.name),
      surname = ReactDOM.findDOMNode(this.refs.surname),
      patronymic = ReactDOM.findDOMNode(this.refs.patronymic),
      login = ReactDOM.findDOMNode(this.refs.login),
      password = ReactDOM.findDOMNode(this.refs.password),
      passwordTwo = ReactDOM.findDOMNode(this.refs.passwordTwo),
      information = {
        name: name.value,
        surname: surname.value,
        patronymic: patronymic.value
      };
    if (name.value.length === 0 || name.value.length > 10) {
      this.props.inputError("name");
      return;
    } else {
      this.props.inputError("");
    }
    if (surname.value.length === 0 || surname.value.length > 10) {
      this.props.inputError("surname");
      return;
    } else {
      this.props.inputError("");
    }
    if (patronymic.value.length === 0 || patronymic.value.length > 10) {
      this.props.inputError("patronymic");
      return;
    } else {
      this.props.inputError("");
    }
    if (login.value.length === 0 || login.value.length > 30) {
      this.props.inputError("loginRegistration");
      return;
    } else {
      this.props.inputError("");
    }
    if (
      password.value.length === 0 ||
      password.value.length > 30 ||
      password.value.length < 8
    ) {
      this.props.inputError("passwordRegistration");
      return;
    } else {
      this.props.inputError("");
    }
    if (passwordTwo.value !== password.value) {
      this.props.inputError("passwordTwoRegistration");
      return;
    } else {
      this.props.inputError("");
    }
    this.regestration(login, password, information);
  };

  render() {
    return (
      <div className="registration">
        <input
          className={this.props.input === "name" ? "error" : ""}
          ref="name"
          placeholder="Имя"
        />
        <br />
        <input
          className={this.props.input === "surname" ? "error" : ""}
          ref="surname"
          placeholder="Фамилия"
        />
        <br />
        <input
          className={this.props.input === "patronymic" ? "error" : ""}
          ref="patronymic"
          placeholder="Отчество"
        />
        <br />
        <input
          className={this.props.input === "loginRegistration" ? "error" : ""}
          ref="login"
          placeholder="Почта"
        />
        <br />
        <input
          className={this.props.input === "passwordRegistration" ? "error" : ""}
          ref="password"
          placeholder="Пароль"
        />
        <br />
        <input
          className={
            this.props.input === "passwordTwoRegistration" ? "error" : ""
          }
          ref="passwordTwo"
          placeholder="Пароль повторно"
        />
        <br />
        <br />
        <button onClick={this.verification} color="teal">
          Зарегестрироваться
        </button>
      </div>
    );
  }
}

export default withRouter(
  connect(
    state => ({
      input: state.inputError
    }),
    {
      createUser,
      choice,
      inputError
    }
  )(Registration)
);
