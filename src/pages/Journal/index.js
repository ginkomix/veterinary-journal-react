import React from "react";
import { connect } from "react-redux";
import Table from "./Table";
import ToDoForm from "./ToDoForm";
import Filter from "./Filter";
import ContextMenu from "./ContextMenu";
import Delete from "./Delete";
import UserInf from "./UserInf";
import "./index.css";
import ava from "../../images/ava.png";
import { Icon } from "semantic-ui-react";
import { signOut } from "../../actions/user";
import { menuChange } from "../../actions/menu";
import { withRouter } from "react-router-dom";
import Blockout from "./Blockout";

class Journal extends React.Component {
  renderUserProfile = () => {
    if (this.props.user) {
      let inf = JSON.parse(this.props.user.displayName);
      return (
        <div
          onClick={() => this.buttonMenu("user")}
          className={`${
            this.props.menu === "user" ? "button-control-active" : ""
          } button-control`}
        >
          <div className="imgBox">
            <img
              className="avaUser"
              alt="ava"
              src={this.props.user.photoURL ? this.props.user.photoURL : ava}
            />
          </div>
          <p className="fimale">{inf.surname}</p>
          <p className="name">{inf.name + " " + inf.patronymic}</p>
        </div>
      );
    }
  };

  buttonMenu = str => {
    this.props.menuChange(str);
  };

  renderContext = menu => {
    switch (menu) {
      case "add":
        return (
          <div>
            <Blockout />
            <ToDoForm />
          </div>
        );
      case "change":
        return (
          <div>
            <Blockout />
            <ContextMenu />
          </div>
        );
      case "del":
        return (
          <div>
            <Blockout />
            <Delete />
          </div>
        );
      case "user":
        return (
          <div>
            <Blockout />
            <UserInf />
          </div>
        );
      default:
        return;
    }
  };

  out = () => {
    this.props.signOut().then(() => {
      this.props.history.push("/");
    });
  };

  render() {
    return (
      <div className="main">
        <div className="headerMain">
          <div className="headerMain-top">
            {this.renderUserProfile()}
            <div
              onClick={() => this.buttonMenu("add")}
              className={`${
                this.props.menu === "add" ? "button-control-active" : ""
              } button-control`}
            >
              <Icon name="plus" />
              <p>ДОБАВИТЬ</p>
            </div>
            <div
              onClick={() => (this.props.id ? this.buttonMenu("change") : null)}
              className={`${
                this.props.menu === "change" ? "button-control-active" : ""
              } button-control`}
            >
              <Icon name="idea" />
              <p>ИЗМЕНИТЬ</p>
            </div>
            <div
              onClick={() => (this.props.id ? this.buttonMenu("del") : null)}
              className={`${
                this.props.menu === "del" ? "button-control-active" : ""
              } button-control`}
            >
              <Icon name="delete" />
              <p>УДАЛИТЬ</p>
            </div>
          </div>
          <div className="footer">
            <span onClick={this.out}>ВЫЙТИ</span>
            <p>GINKOMIX 2018</p>
          </div>
        </div>
        <div className="journal">
          <div className="journal-box">
            <Filter />
            <Table />
            {this.renderContext(this.props.menu)}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(
  connect(
    state => ({
      user: state.user,
      menu: state.menu,
      id: state.contextMenu
    }),
    { signOut, menuChange }
  )(Journal)
);
