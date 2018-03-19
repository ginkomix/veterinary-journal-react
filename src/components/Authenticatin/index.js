import React from 'react';
import {connect} from 'react-redux';
import Main from '../Main';
import {user} from '../../reducers/user';
import { withRouter } from 'react-router-dom'

class Authenticatin extends React.Component {
    render() {
        return (
            <div>
           {this.props.user ? <Main/> :this.props.history.push("/")} 
            </div>
        )
        
    }
    
    
}

export default withRouter(connect(state=>({
    user: state.user
    
}),{})(Authenticatin));