import React from "react";
import { connect } from "react-redux";
import Authorization from "./Authorization";
import Registration from "./Registration";
import { Icon } from "semantic-ui-react";
import { choice } from "../../actions/startForm";
import { createUser, haveUser } from "../../actions/user";
import "./index.css";

class Start extends React.Component {
  componentWillMount() {
    this.props
      .haveUser()
      .then(() => {
        this.props.history.push("/journal");
      })
      .catch(() => {
        return;
      });
  }

  renderForm = () => {
    switch (this.props.button) {
      case "log":
        return <Authorization />;
      case "reg":
        return <Registration />;
      default:
        return <Authorization />;
    }
  };

  clickButton = ev => {
    let target = ev.target;
    if (target.classList.contains("log")) {
      this.props.choice("log");
    }
    if (target.classList.contains("reg")) {
      this.props.choice("reg");
    }
  };

  render() {
    return (
      <div className="startMain">
        <div className="centerStart">
          <div className="header">
            <div className="logo">
              GINKO<span>MIX</span>
            </div>
            <div>
              <Icon name="github square" size="big" />
              <Icon name="instagram" size="big" />
              <Icon name="vk" size="big" />
            </div>
          </div>
          <div className="row">
            <div className="left">
              <h1>Get the Best Solution to Grow </h1>
              <div className="list">
                <div className="iconBlock">
                  {" "}
                  <Icon name="check" size="large" />
                </div>
                <div>
                  {" "}
                  <p>
                    Lorem lean startup ipsum product market fit customer
                    development acquihire tech cofounder. User engagement A/B
                    testing.
                  </p>
                </div>
              </div>
              <div className="list">
                <div className="iconBlock">
                  {" "}
                  <Icon name="check" size="large" />
                </div>
                <div>
                  <p>
                    Lorem lean startup ipsum product market fit customer
                    development acquihire tech cofounder. User engagement A/B
                    testing.
                  </p>
                </div>
              </div>
              <div className="list">
                <div className="iconBlock">
                  {" "}
                  <Icon name="check" size="large" />
                </div>
                <div>
                  {" "}
                  <p>
                    Lorem lean startup ipsum product market fit customer
                    development acquihire tech cofounder. User engagement A/B
                    testing.
                  </p>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="startForm">
                <div className="buttonAutoriz" onClick={this.clickButton}>
                  <span
                    className={`${
                      this.props.button === "log" ? "activeForm" : ""
                    } log`}
                    attached="left"
                  >
                    Вход
                  </span>
                  <span
                    className={`${
                      this.props.button === "reg" ? "activeForm" : ""
                    } reg`}
                    attached="right"
                  >
                    Регистрация
                  </span>
                </div>
                {this.renderForm()}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    button: state.startForm
  }),
  {
    choice,
    createUser,
    haveUser
  }
)(Start);
