import React from "react";
import { connect } from "react-redux";
import { check, dataMax, dataMin, text } from "../../../actions/filter";
import "./index.css";
class Filter extends React.Component {
  changeForm = ev => {
    let target = ev.target;
    switch (target.type) {
      case "checkbox":
        this.props.check();
        break;
      case "text":
        this.findeText(target);
        break;
      case "date":
        this.dataFinde();
        break;
      default:
        return;
    }
  };

  dataFinde() {
    let dataMin = document.querySelector("#dataMin").value,
      dataMax = document.querySelector("#dataMax").value;
    this.props.dataMax(dataMax);
    this.props.dataMin(dataMin);
  }

  findeText(target) {
    this.props.text(target.value.toUpperCase());
  }

  render() {
    return (
      <div className="filter">
        <form onChange={this.changeForm}>
          <input id="searchText" placeholder="ПОИСК" type="text" />
          <p>ДАТА ОТ</p>
          <input id="dataMin" type="date" />
          <p>ДО</p>
          <input id="dataMax" type="date" />

          <div className="side">
            <input
              type="checkbox"
              className="checkbox"
              id="checkbox"
              checked={this.props.filter.check}
            />
            <label htmlFor="checkbox" className="ios-switch" />
          </div>

          <p>ПОКАЗАТЬ ВЫПОЛНЕННЫЕ</p>
        </form>
      </div>
    );
  }
}
export default connect(
  state => ({
    filter: state.filter
  }),
  {
    check,
    dataMax,
    dataMin,
    text
  }
)(Filter);
