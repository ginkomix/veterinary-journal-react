import React from "react";
import { connect } from "react-redux";
import Main from "../../pages/Journal";
import { withRouter } from "react-router-dom";
import { haveUser } from "../../actions/user";

class Authentication extends React.Component {
  componentWillMount() {
    this.props.haveUser().catch(() => {
      this.props.history.push("/");
    });
  }

  render() {
    return <div>{this.props.user ? <Main /> : null}</div>;
  }
}

export default withRouter(
  connect(
    state => ({
      user: state.user
    }),
    { haveUser }
  )(Authentication)
);
