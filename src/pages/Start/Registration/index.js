import React from "react";
import { connect } from "react-redux";
import "./index.css";
import { createUser } from "../../../actions/user";
import { withRouter } from "react-router-dom";
import { choice } from "../../../actions/startForm";
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
    let name = this.refs.name.value,
      surname = this.refs.surname.value,
      patronymic = this.refs.patronymic.value,
      login = this.refs.login.value,
      password = this.refs.password.value,
      passwordTwo = this.refs.passwordTwo.value,
      information = {
        name: name,
        surname: surname,
        patronymic: patronymic
      };
    if (name.length === 0 || name.length > 10) {
      this.props.inputError("name");
      return;
    } else {
      this.props.inputError("");
    }
    if (surname.length === 0 || surname.length > 10) {
      this.props.inputError("surname");
      return;
    } else {
      this.props.inputError("");
    }
    if (patronymic.length === 0 || patronymic.length > 10) {
      this.props.inputError("patronymic");
      return;
    } else {
      this.props.inputError("");
    }
    if (login.length === 0 || login.length > 30) {
      this.props.inputError("loginRegistration");
      return;
    } else {
      this.props.inputError("");
    }
    if (
      password.length === 0 ||
      password.length > 30 ||
      password.length < 8
    ) {
      this.props.inputError("passwordRegistration");
      return;
    } else {
      this.props.inputError("");
    }
    if (passwordTwo !== password) {
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
