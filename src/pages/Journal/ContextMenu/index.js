import React from "react";
import "./index.css";
import { changeItemID } from "../../../actions/contextMenu";
import { del, change } from "../../../actions/item";
import { connect } from "react-redux";
import { menuChange } from "../../../actions/menu";

class ContextMenu extends React.Component {
  change = () => {
    let item = {
      id: this.props.id,
      title: document.querySelector("#titleChange").value,
      priorety: document.querySelector("#prioretyChange").value,
      data: document.querySelector("#dataChange").value,
      description: document.querySelector("#descriptionChange").value
    };
    this.props.change(item);
    this.closeMenu();
  };

  cancel = () => {
    this.closeMenu();
  };

  closeMenu = () => {
    this.props.menuChange("");
  };

  renderChangeMenu = () => {
    if (this.props.id) {
      let key;
      for (key in this.props.item) {
        if (Number(this.props.item[key].id) === Number(this.props.id)) {
          break;
        }
      }

      return (
        <div>
          <div className="addTask">
            <div>
              <input
                id="titleChange"
                defaultValue={this.props.item[key].title}
                type="text"
              />
              <select
                id="prioretyChange"
                defaultValue={this.props.item[key].priority}
              >
                <option value="-1" disabled>
                  Priority
                </option>
                <option value="0">Low</option>
                <option value="1">Mid</option>
                <option value="2">Max</option>
              </select>
              <input
                id="dataChange"
                defaultValue={this.props.item[key].date}
                type="date"
              />
            </div>
            <div>
              <textarea
                defaultValue={this.props.item[key].description}
                id="descriptionChange"
              />
            </div>
            <div className="button-block-task">
              <p className="buttonTask" onClick={this.change}>
                ИЗМЕНИТЬ
              </p>

              <p className="buttonTask" onClick={this.cancel}>
                ОТМЕНИТЬ
              </p>
            </div>
          </div>
        </div>
      );
    }
  };

  render() {
    return <div>{this.renderChangeMenu()}</div>;
  }
}

export default connect(
  state => ({
    id: state.contextMenu,
    item: state.item
  }),
  {
    changeItemID,
    del,
    change,
    menuChange
  }
)(ContextMenu);
