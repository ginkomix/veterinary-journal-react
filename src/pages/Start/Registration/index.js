import React from "react";
import { connect } from "react-redux";
import "./index.css";
import { userAdd } from "../../../actions/user";
import { withRouter } from "react-router-dom";
import { choice } from "../../../actions/startForm";
import { account } from "../../../utils/accountsApi";
import { inputError } from "../../../actions/inputError";

class Registration extends React.Component {
  regestration = (login, password, inf) => {
    account
      .createUser(login, password, inf)
      .then(user => {
        this.props.userAdd(user);
        this.props.history.push("/journal");
      })
      .catch(error => {
        login.className = "error";
      });
  };

  verification = () => {
    let name = document.querySelector("#name"),
      surname = document.querySelector("#surname"),
      patronymic = document.querySelector("#patronymic"),
      login = document.querySelector("#login"),
      password = document.querySelector("#password"),
      passwordTwo = document.querySelector("#passwordTwo"),
      inf = {
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
    this.regestration(login, password, inf);
  };

  render() {
    return (
      <div className="registration">
        <input
          className={this.props.input === "name" ? "error" : ""}
          id="name"
          placeholder="Имя"
        />
        <br />
        <input
          className={this.props.input === "surname" ? "error" : ""}
          id="surname"
          placeholder="Фамилия"
        />
        <br />
        <input
          className={this.props.input === "patronymic" ? "error" : ""}
          id="patronymic"
          placeholder="Отчество"
        />
        <br />
        <input
          className={this.props.input === "loginRegistration" ? "error" : ""}
          id="login"
          placeholder="Почта"
        />
        <br />
        <input
          className={this.props.input === "passwordRegistration" ? "error" : ""}
          id="password"
          placeholder="Пароль"
        />
        <br />
        <input
          className={
            this.props.input === "passwordTwoRegistration" ? "error" : ""
          }
          id="passwordTwo"
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
      userAdd,
      choice,
      inputError
    }
  )(Registration)
);
