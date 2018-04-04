import React from "react";
import { connect } from "react-redux";
import { changeItemID } from "../../../actions/contextMenu";
import { del } from "../../../actions/item";
import { menuChange } from "../../../actions/menu";
import "./index.css";

class Delete extends React.Component {
  del = () => {
    this.props.del(this.props.id);
    this.props.changeItemID(0);
    this.cloasMenu();
  };

  cloasMenu = () => {
    this.props.menuChange("");
  };

  render() {
    return (
      <div className="addTask">
        <span>ВЫ ДЕЙСТВИТЕЛЬНО ХОТИТЕ УДАЛИТЬ?</span>
        <div className="button-block-task">
          <p className="buttonTask" onClick={this.del}>
            ДА
          </p>
          <p className="buttonTask" onClick={this.cloasMenu}>
            НЕТ
          </p>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    id: state.contextMenu
  }),
  {
    changeItemID,
    del,
    menuChange
  }
)(Delete);
