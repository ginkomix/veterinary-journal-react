import React from 'react';
import {connect} from 'react-redux';
import Main from '../Main';
import { withRouter } from 'react-router-dom';
import firebase from 'firebase';
import {userAdd} from '../../actions/user';

class Authenticatin extends React.Component {

    componentWillMount() {
        if(!this.props.user) {
            firebase.auth().onAuthStateChanged((user)=> {
                if (user) {
					
                   this.props.userAdd(user);
                } else {
                   this.props.history.push("/");
                }
            });
        }

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