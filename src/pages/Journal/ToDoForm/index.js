import React from "react";
import { connect } from "react-redux";
import { add } from "../../../actions/item";
import "./index.css";
import { menuChange } from "../../../actions/menu";
import ReactDOM from "react-dom";
class ToDoForm extends React.Component {
  addItem = () => {
    let item = {
      title: ReactDOM.findDOMNode(this.refs.title).value,
      priorety: ReactDOM.findDOMNode(this.refs.priorety).value,
      data: ReactDOM.findDOMNode(this.refs.data).value,
      description: ReactDOM.findDOMNode(this.refs.description).value
    };
    ReactDOM.findDOMNode(this.refs.title).value = "";
    ReactDOM.findDOMNode(this.refs.priorety).value = -1;
    ReactDOM.findDOMNode(this.refs.data).value = "";
    ReactDOM.findDOMNode(this.refs.description).value = "";
    this.props.add(item);
    this.closeMenu();
  };
  closeMenu = () => {
    this.props.menuChange("");
  };

  render() {
    return (
      <div className="addTask">
        <div>
          <input size="mini" placeholder="ЗАГОЛОВОК" ref="title" type="text" />
          <select ref="priorety" defaultValue="-1">
            <option value="-1" disabled>
              Priority
            </option>
            <option value="0">Low</option>
            <option value="1">Mid</option>
            <option value="2">Max</option>
          </select>
          <input size="mini" ref="data" type="date" />
        </div>
        <div>
          <textarea placeholder="ОПИСАНИЕ" ref="description" />
        </div>
        <div className="button-block-task">
          <p className="buttonTask" onClick={this.addItem} id="add">
            ДОБАВИТЬ
          </p>
          <p className="buttonTask" onClick={this.closeMenu}>
            ОТМЕНА
          </p>
        </div>
      </div>
    );
  }
}

export default connect(undefined, {
  add,
  menuChange
})(ToDoForm);
