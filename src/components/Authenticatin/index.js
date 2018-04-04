import React from 'react';
import {connect} from 'react-redux';
import Main from '../../pages/Journal';
import {withRouter} from 'react-router-dom';
import {account} from '../../utils/accountsApi';
import {userAdd} from '../../actions/user';

class Authenticatin extends React.Component {

	componentWillMount() {
		account.haveUser()
			.then((user)=>{
			this.props.userAdd(user);
		})
			.catch(()=>{
			this.props.history.push("/"); 
		})           
	}
	
	render() {
		return (
			<div>
			{this.props.user ? <Main/> : null}
			</div>
		)

	}
}

export default withRouter(connect(state=>({
	user: state.user

}),{userAdd})(Authenticatin));