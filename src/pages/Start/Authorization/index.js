import React from "react";
import { connect } from "react-redux";
import "./index.css";
import { signIn } from "../../../actions/user";
import { inputError } from "../../../actions/inputError";
import { withRouter } from "react-router-dom";

class Authorization extends React.Component {
  verification = () => {
    let login = this.refs.loginIn.value;
    let password = this.refs.passwordIn.value;
    if (login.length === 0 || login.length > 30) {
      this.props.inputError("login");
      return;
    } else {
      this.props.inputError("");
    }
    if (password.length === 0 || password.length > 30 || password.length < 8) {
      this.props.inputError("password");
      return;
    } else {
      this.props.inputError("");
    }
    this.signIn(login, password);
  };

  signIn = (login, password) => {
    this.props
      .signIn(login, password)
      .then(user => {
        this.props.history.push("/journal");
      })
      .catch(error => {
        this.props.inputError("login");
      });
  };

  render() {
    return (
      <div>
        <input
          ref="loginIn"
          className={this.props.input === "login" ? "error" : ""}
          placeholder="Логин"
        />
        <br />
        <input
          type="password"
          className={this.props.input === "password" ? "error" : ""}
          ref="passwordIn"
          placeholder="Пароль"
        />
        <br />
        <br />
        <button onClick={this.verification} color="teal">
          Вход
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
      signIn,
      inputError
    }
  )(Authorization)
);
