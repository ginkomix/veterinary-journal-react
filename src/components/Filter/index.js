import React from 'react';
import {connect} from 'react-redux';
import {check,dataMax,dataMin,text} from '../../actions/filter';

class Filter extends React.Component {

	changeForm = (ev)=> {

		let target =  ev.target;
		switch(target.type) {
			case 'checkbox':
				this.props.check();
				break;
			case 'text':	
				this.findeText(target);
				break;
			case 'date':	
				this.dataFinde();
				break;
			default: return;
		}
	}

	dataFinde() {
		let dataMin = document.querySelector('#dataMin').value,
			dataMax = document.querySelector('#dataMax').value;
		this.props.dataMax(dataMax);
		this.props.dataMin(dataMin);
	}

	findeText(target) {
		this.props.text(target.value);
	}

	render() {
		
		return(
			<form onChange={this.changeForm}>
				<input type="checkbox" checked={this.props.filter.check}/>
				<input id="searchText"  type="text"/>
				<input id="searchDataMin" id="dataMin" type="date" />
				<input id="searchDataMax" id="dataMax" type="date" />
			</form>	
		)
	}
}
export default connect(state=>({
	filter: state.filter
}),{
	check,
	dataMax,
	dataMin,
	text
})(Filter);